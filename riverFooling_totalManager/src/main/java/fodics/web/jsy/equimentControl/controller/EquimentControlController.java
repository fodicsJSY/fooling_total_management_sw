package fodics.web.jsy.equimentControl.controller;

import java.io.InputStream;
import java.util.Scanner;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import fodics.web.jsy.dataSearch.model.service.DataSearchService;
import fodics.web.jsy.equimentControl.model.dto.BreakerRequest;
import fodics.web.jsy.equimentControl.model.dto.EquimentControl;
import fodics.web.jsy.equimentControl.model.service.EquimentControlService;


@Controller
public class EquimentControlController {
	
	@Autowired
	private EquimentControlService service;
	
	 private RestTemplate restTemplate;

	    @Autowired
	    public EquimentControlController(RestTemplate restTemplate) {
	        this.restTemplate = restTemplate;
	    }

		
	
	

	//전광판 페이지 
	@GetMapping("/displayManagement")
	public String controlPageForword1(
			Model model
			){
		return "/equipmentControl/displayManagement";
	}
	
	
	
	//차단기 페이지 
	@GetMapping("/차단기수동제어")
	public String controlPageForword2(
			Model model
			){
		
//		List<EquimentControl> gateCodeList = service.gateCodeList();
//		model.addAttribute("gateCodeList", gateCodeList);
		
		
		return "/equipmentControl/차단기수동제어";
	}
	
	
	//차단기 cameraCode가져오기
	@PostMapping("/cameraCode")
	@ResponseBody
	public String cameraCode(
			@RequestBody String req
			) {
		
		System.out.println("cameraCode req : " + req);
		
		String ipAddress;
		String port;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			port = s.nextLine();
			//		        System.out.println("openGate ipAddress : "+ ipAddress);
			//		        System.out.println("openGate port : "+ port);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			String query = jsonObject.getString("query");
			
			System.out.println("serverip : " + serverip);
			System.out.println("query : " + query);
			
			String select_url = "http://"+ipAddress+":"+port+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, String> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("query", query);
			System.out.println("cameraCode requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
			System.out.println("cameraCode response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	
	
	
	


	
	
	
	@PostMapping("/breakerStatus")
	@ResponseBody
	public Map<String, Object> breaker(@RequestBody Map<String, Object> req) {
	    System.out.println("breaker req : " + req);

	    String ipAddress;
	    String port;

	    // MappingJackson2HttpMessageConverter 추가
	    restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

	    Map<String, Object> responseMap = new HashMap<>();

	    try {
	        InputStream is = getClass().getResourceAsStream("/breakerServer_info.ini");
	        Scanner s = new Scanner(is);
	        ipAddress = s.nextLine();
	        port = s.nextLine();
	        s.close();
	        is.close();

	        List<List<String>> dataList = (List<List<String>>) req.get("data");

	        for (List<String> data : dataList) {
	            String camera_code = data.get(0);
	            int command = Integer.parseInt(data.get(1));

	            System.out.println("camera_code : " + camera_code);
	            System.out.println("command : " + command);

	            String breakerUrl = "http://" + ipAddress + ":" + port + "/fnvr/request/gate_control/gate_control";
	            System.out.println("breakerUrl : " + breakerUrl);

	            // 서버로 전송할 객체 생성
	            Map<String, Object> requestBody = new LinkedHashMap<>();
	            requestBody.put("camera_code", camera_code);
	            requestBody.put("command", command);

	            System.out.println("breaker requestBody : " + requestBody);

	            // 요청 헤더 설정
	            HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_JSON);

	            // HttpEntity 생성
	            HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

	            try {
	                // post 요청 보내기
	                String response = restTemplate.postForObject(breakerUrl, requestEntity, String.class);
	                System.out.println("breaker response: " + response);

	                // 응답을 Map에 저장
	                responseMap.put(camera_code, response);
	            } catch (ResourceAccessException e) {
	                // 서버 응답에 문제가 있는 경우
	                System.out.println("Error connecting to the server: " + e.getMessage());
	                e.printStackTrace();
	                // 실패 응답을 Map에 저장
	                responseMap.put(camera_code, "Error: " + e.getMessage());
	            }
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    // 처리 결과 반환
	    return responseMap;
	}

	
	
	


//  하드코딩해서 값 받아온 것은 성공	
//	@PostMapping("/breakerStatus")
//	@ResponseBody
//	public Map<String, String> breaker(@RequestBody String req) {
//		System.out.println("breaker req : " + req);
//		
//		String ipAddress;
//		String port;
//		
//		// MappingJackson2HttpMessageConverter 추가
//		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
//		
//		Map<String, String> responseMap = new HashMap<>();
//		
//		try {
//			InputStream is = getClass().getResourceAsStream("/breakerServer_info.ini");
//			Scanner s = new Scanner(is);
//			ipAddress = s.nextLine();
//			port = s.nextLine();
//			s.close();
//			is.close();
//			
//			// JSON 문자열을 파싱하여 필요한 변수에 할당
//			JSONObject jsonObject = new JSONObject(req);
//			// String serverip = jsonObject.getString("serverip");
//			String camera_code = jsonObject.getString("camera_code");
//			int command = jsonObject.getInt("command");
//			
//			// System.out.println("serverip : " + serverip);
//			System.out.println("camera_code : " + camera_code);
//			System.out.println("command : " + command);
//			
//			String breakerUrl = "http://" + ipAddress + ":" + port + "/fnvr/request/gate_control/gate_control";
////	        String breakerUrl = "http://172.16.20.71:10443/fnvr/request/gate_control/gate_control";
//			System.out.println("breakerUrl : " + breakerUrl);
//			
//			// 서버로 전송할 객체 생성
//			Map<String, Object> requestBody = new LinkedHashMap<>();
//			// requestBody.put("serverip", serverip);
//			requestBody.put("camera_code", camera_code);
//			requestBody.put("command", command);
//			
//			System.out.println("breaker requestBody : " + requestBody);
//			
//			// 요청 헤더 설정
//			HttpHeaders headers = new HttpHeaders();
//			headers.setContentType(MediaType.APPLICATION_JSON);
//			
//			// HttpEntity 생성
//			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
////	        System.out.println("breaker requestEntity: " + requestEntity);
//			
//			try {
//				// post 요청 보내기
//				String response = restTemplate.postForObject(breakerUrl, requestEntity, String.class);
//				System.out.println("breaker response: " + response);
//				
//				// 응답을 Map에 저장
//				responseMap.put(camera_code, response);
//			} catch (ResourceAccessException e) {
//				// 서버 응답에 문제가 있는 경우
//				System.out.println("Error connecting to the server: " + e.getMessage());
//				e.printStackTrace();
//				// 실패 응답을 Map에 저장
//			}
//			
//			// 처리 결과 반환
//			return responseMap;
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null; // 예외가 발생하면 빈 Map을 반환하도록 수정
//		}
//	}
//	
	
	
	
	
	
	// 차단기 상태 저장
	@PostMapping("/breakerSave")
	@ResponseBody
	public Map<String, String> updatebreaker(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		
		String ipAddress;
		String port;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		Map<String, String> responseMap = new HashMap<>();
		
		try {
			InputStream is = getClass().getResourceAsStream("/breakerServer_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			port = s.nextLine();
			s.close();
			is.close();
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			// String serverip = jsonObject.getString("serverip");
			String camera_code = jsonObject.getString("camera_code");
			int command = jsonObject.getInt("command");
			
			// System.out.println("serverip : " + serverip);
			System.out.println("camera_code : " + camera_code);
			System.out.println("command : " + command);
			
			String breakerUrl = "http://" + ipAddress + ":" + port + "/fnvr/request/gate_control/gate_control";
//	        String breakerUrl = "http://172.16.20.71:10443/fnvr/request/gate_control/gate_control";
			System.out.println("breakerUrl : " + breakerUrl);
			
			// 서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			// requestBody.put("serverip", serverip);
			requestBody.put("camera_code", camera_code);
			requestBody.put("command", command);
			
			System.out.println("breaker requestBody : " + requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
//	        System.out.println("breaker requestEntity: " + requestEntity);
			
			try {
				// post 요청 보내기
				String response = restTemplate.postForObject(breakerUrl, requestEntity, String.class);
				System.out.println("breaker response: " + response);
				
				// 응답을 Map에 저장
				responseMap.put("result", response);
			} catch (ResourceAccessException e) {
				// 서버 응답에 문제가 있는 경우
				System.out.println("Error connecting to the server: " + e.getMessage());
				e.printStackTrace();
				// 실패 응답을 Map에 저장
			}
			
			// 처리 결과 반환
			return responseMap;
			
		} catch (Exception e) {
			e.printStackTrace();
			return null; // 예외가 발생하면 빈 Map을 반환하도록 수정
		}
	}
	
	
	
	
	// 후탄리 25-3
	@PostMapping("/send25_3")
	@ResponseBody
	public String control25_3Forword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    int gate25_3change = jsonObject.getInt("gate25_3change");
	    int light25_3change = jsonObject.getInt("light25_3change");
	    int sound25_3change = jsonObject.getInt("sound25_3change");
	    
	    // 각 변수 값 출력
	    System.out.println("gate25_3change: " + gate25_3change);
	    System.out.println("light25_3change: " + light25_3change);
	    System.out.println("sound25_3change: " + sound25_3change);
	    return null;
	}
	
	
	
	
	// 후탄리 331_1
	@PostMapping("/send331_1")
	@ResponseBody
	public String control331_1Forword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
		JSONObject jsonObject = new JSONObject(req);
		String gate331_1change = jsonObject.getString("gate331_1change");
		String light331_1change = jsonObject.getString("light331_1change");
		String sound331_1change = jsonObject.getString("sound331_1change");
		
		// 각 변수 값 출력
		System.out.println("gate331_1change: " + gate331_1change);
		System.out.println("light331_1change: " + light331_1change);
		System.out.println("sound331_1change: " + sound331_1change);
		return null;
	}
	
	

	
	
	// 판운리 426_20
	@PostMapping("/send426_20")
	@ResponseBody
	public String control426_20Forword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
		JSONObject jsonObject = new JSONObject(req);
		String gate426_20change = jsonObject.getString("gate426_20change");
		String light426_20change = jsonObject.getString("light426_20change");
		String sound426_20change = jsonObject.getString("sound426_20change");
		
		// 각 변수 값 출력
		System.out.println("gate426_20change: " + gate426_20change);
		System.out.println("light426_20change: " + light426_20change);
		System.out.println("sound426_20change: " + sound426_20change);
		return null;
	}
	
	
	
	
	// 광전리 998_7
	@PostMapping("/send998_7")
	@ResponseBody
	public String control998_7Forword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
		JSONObject jsonObject = new JSONObject(req);
		String gate998_7change = jsonObject.getString("gate998_7change");
		String light998_7change = jsonObject.getString("light998_7change");
		String sound998_7change = jsonObject.getString("sound998_7change");
		
		// 각 변수 값 출력
		System.out.println("gate998_7change: " + gate998_7change);
		System.out.println("light998_7change: " + light998_7change);
		System.out.println("sound998_7change: " + sound998_7change);
		return null;
	}
	
	
	
	
	
	
	
	
	
	// 25_3시나리오 페이지 1
	@GetMapping("/equipmentControl/scenario/hutanri25_3")
	public String scenarioPageForword1(
			Model model
			){
		return "/equipmentControl/scenario/hutanri25_3";
	}
	
	//시나리오331_1 페이지 
	@GetMapping("/equipmentControl/scenario/hutanri331_1")
	public String scenarioPageForword2(
			Model model
			){
		return "/equipmentControl/scenario/hutanri331_1";
	}
	
	
	// add25_3 페이지
	@GetMapping("/equipmentControl/scenario/add/add25_3")
	public String addPage25_3Forword(
			Model model
			){
		return "/equipmentControl/scenario/add/add25_3";
	}
	
	
	
	@PostMapping("sendData25_3")
	@ResponseBody
	public String addScenarioData25_3(
										@RequestBody String req
										) {
		System.out.println("req"+req);
		
		return null;
	}
	
	
	// add331_1 페이지
	@GetMapping("/equipmentControl/scenario/add/add331_1")
	public String addPage331_1Forword(
			Model model
			){
		return "/equipmentControl/scenario/add/add331_1";
	}
	
	
	@PostMapping("sendData331_1")
	@ResponseBody
	public String addScenarioData331_1(
										@RequestBody String req
										) {
		System.out.println("req"+req);
		
		return null;
	}

}
