package fodics.web.jsy.equimentControl.controller;

import java.io.InputStream;
import java.util.Scanner;
import java.util.LinkedHashMap;
import java.util.Map;

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
import org.springframework.web.client.RestTemplate;

import fodics.web.jsy.dataSearch.model.service.DataSearchService;
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
		return "/equipmentControl/차단기수동제어";
	}
	
	
	//차단기 상태 연습
	@PostMapping("/breakerStatus")
	@ResponseBody
	public String breaker(
			@RequestBody String req
			) {
		
	    System.out.println("req : " + req);
	    
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
//	    String camera_code = jsonObject.getString("camera_code");
//	    String command = jsonObject.getString("command");
	    
	    System.out.println("serverip : " + serverip);
	    System.out.println("query : " + query);
//	    System.out.println("camera_code : " + camera_code);
//	    System.out.println("command : " + command);
	    
	    
	    String breakerUrl = "http://"+ipAddress+":"+port+"/fnvr/request/gate_control/gate_control"; // 외부 RESTful API의 URL select
		
	    //서버로 전송할 객체 생성
	   Map<String, String> requestBody = new LinkedHashMap<>();
	   requestBody.put("serverip", serverip);
	   requestBody.put("query", query);
//	   requestBody.put("camera_code", camera_code);
//	   requestBody.put("command", command);
	   System.out.println("requestBody : "+ requestBody);
	
	   // 요청 헤더 설정
	   HttpHeaders headers = new HttpHeaders();
	   headers.setContentType(MediaType.APPLICATION_JSON);
	
	   // HttpEntity 생성
	   HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
	
	   // post 요청 보내기
	   String response = restTemplate.postForObject(breakerUrl, requestEntity, String.class);
	   
	   
	   System.out.print("response"+ response);

	    
		
		return response;
		
        
        
        
    } catch (Exception e) {
       //  //  System.out.println("Read Query Error");
        e.printStackTrace();
        return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
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
	    String gate25_3Value = jsonObject.getString("gate25_3Value");
	    String light25_3Value = jsonObject.getString("light25_3Value");
	    String sound25_3Value = jsonObject.getString("sound25_3Value");
	    
	    // 각 변수 값 출력
	    System.out.println("gate25_3Value: " + gate25_3Value);
	    System.out.println("light25_3Value: " + light25_3Value);
	    System.out.println("sound25_3Value: " + sound25_3Value);
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
		String gate331_1Value = jsonObject.getString("gate331_1Value");
		String light331_1Value = jsonObject.getString("light331_1Value");
		String sound331_1Value = jsonObject.getString("sound331_1Value");
		
		// 각 변수 값 출력
		System.out.println("gate331_1Value: " + gate331_1Value);
		System.out.println("light331_1Value: " + light331_1Value);
		System.out.println("sound331_1Value: " + sound331_1Value);
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
		String gate426_20Value = jsonObject.getString("gate426_20Value");
		String light426_20Value = jsonObject.getString("light426_20Value");
		String sound426_20Value = jsonObject.getString("sound426_20Value");
		
		// 각 변수 값 출력
		System.out.println("gate426_20Value: " + gate426_20Value);
		System.out.println("light426_20Value: " + light426_20Value);
		System.out.println("sound426_20Value: " + sound426_20Value);
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
		String gate998_7Value = jsonObject.getString("gate998_7Value");
		String light998_7Value = jsonObject.getString("light998_7Value");
		String sound998_7Value = jsonObject.getString("sound998_7Value");
		
		// 각 변수 값 출력
		System.out.println("gate998_7Value: " + gate998_7Value);
		System.out.println("light998_7Value: " + light998_7Value);
		System.out.println("sound998_7Value: " + sound998_7Value);
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
