package fodics.web.jsy.dataSearch.controller;


import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import fodics.web.jsy.dataSearch.model.dto.Date_flooding;
import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.dto.Min_flooding;
import fodics.web.jsy.dataSearch.model.service.DataSearchService;
import fodics.web.jsy.user.model.dto.User;


@Controller
@RequestMapping("/dataSearch")
public class DataSearchController {
	
	@Autowired
	private DataSearchService service;
	
	
	 private RestTemplate restTemplate;

    @Autowired
    public DataSearchController(RestTemplate restTemplate) {
       this.restTemplate = restTemplate;
    }

	
	
	//임시 메인 페이지 
//	@GetMapping("/")
//	public String mainForword(
//			Model model
//			){
//		return "/dataSearch/rainfall";
//	}
	
	
	
	
	//강우데이터 페이지 
	@GetMapping("/rainfall")
	public String dataSearchForword(
			Model model
			){
		return "/dataSearch/rainfall";
	}
	
	
	

	// 강우데이터 일간강우
	//강우데이터 test
	@PostMapping(value="/getData", produces="text/plain; charset=UTF-8")
	@ResponseBody
	public String getDataFromAPI(
								@RequestBody String req
								, RedirectAttributes ra
								) {
//		System.out.println("req: " + req);
		
		
	    String apiKey;
		
		 try {
		        InputStream is = getClass().getResourceAsStream("/rainfall_key.ini");
		        Scanner s = new Scanner(is);
		        apiKey = s.nextLine();
//				System.out.println("apiKey : "+ apiKey);
		        s.close();
		        is.close();

		
		
		String url = "https://www.vixbolt.co.kr/api/v100/rain/comp_export";
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
		JSONObject jsonObject = new JSONObject(req);

		String baseDate = jsonObject.getString("baseDate");
//		System.out.println("baseDate: " + baseDate);
		
		// 서버로 전송할 객체 생성
		Map<String, String> requestBody = new LinkedHashMap<>();
		requestBody.put("key", apiKey);
		requestBody.put("baseDate", baseDate);
//		System.out.println("requestBody: " + requestBody);
		
		// 요청 헤더 설정
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		// HttpEntity 생성
		HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
		
		// post 요청 보내기
		String response = restTemplate.postForObject(url, requestEntity, String.class);
		
//		System.out.println("response: " + response);
		
		// 응답 데이터를 클라이언트에 반환
		return response;
		
	 } catch (Exception e) {
            ra.addFlashAttribute("message", "선택한 날짜의 데이터가 없습니다.");
            return "0"; // 에러 발생 시 null 반환하거나 적절히 처리
        }
	}

	
//	// 강우데이터 일간강우
//	@PostMapping("/sendDay_rainfall")
//	@ResponseBody
//	public String rainfallDayDataForword(
//			@RequestBody String occuDay
//			) {
//		System.out.println("occuDay"+occuDay);
//		return null;
//	}
//	
//	// 강우데이터 월간강우
//	@PostMapping("/sendMonth_rainfall")
//	@ResponseBody
//	public String rainfallMonthDataForword(
//			@RequestBody String occuMonth
//			) {
//		System.out.println("occuMonth"+occuMonth);
//		return null;
//	}
//	
//	// 강우데이터 연간강우
//	@PostMapping("/sendYear_rainfall")
//	@ResponseBody
//	public String rainfallYearDataForword(
//			@RequestBody String occuYear
//			) {
//		System.out.println("occuYear"+occuYear);
//		return null;
//	}
//	
//	// 강우데이터 기간별강우
//	@PostMapping("/sendDate_rainfall")
//	@ResponseBody
//	public String rainfallDateDataForword(
//			@RequestBody String req
//			) {
//		System.out.println("req"+req);
//		
//		// JSON 문자열을 파싱하여 필요한 변수에 할당
//	    JSONObject jsonObject = new JSONObject(req);
//	    String startOccuDate = jsonObject.getString("startOccuDate");
//	    String endOccuDate = jsonObject.getString("endOccuDate");
//	    String areaValue = jsonObject.getString("areaValue");
//	    
//	    // 각 변수 값 출력
//	    System.out.println("startOccuDate: " + startOccuDate);
//	    System.out.println("endOccuDate: " + endOccuDate);
//	    System.out.println("areaValue: " + areaValue);
//	    return null;
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//침수데이터 페이지 
	@GetMapping("/flooding")
	public String inundationDataForword(
			Model model
			){
		
		 List<Flooding> areaList = service.areaList();
		String areaListJson = new Gson().toJson(areaList);
		model.addAttribute("areaListJson", areaListJson);
//		System.out.println("areaListJson : "+areaListJson);
		
		return "/dataSearch/flooding";
	}
	
	
	
	// 침수데이터 시간강우
	@PostMapping("/send10min_flooding")
	@ResponseBody
	public Map<String, Object> floodingMinDataForword(
					@RequestBody Min_flooding min_flooding
					) {
				Map<String, Object> map = new HashMap<>();
				
//				System.out.println("min_flooding"+min_flooding);
				
                List<Flooding> min_floodingList = service.min_floodingList(min_flooding);
//                System.out.println("min_floodingList : " + min_floodingList);
                map.put("min_floodingList", min_floodingList);
//                System.out.println("map : " + map);
                
                return map;
		                
	}
	
	
	

	
	// 침수데이터 일간강우
	@PostMapping("/sendDay_flooding")
	@ResponseBody
	public Map<String, Object> floodingDayDataForword(
			@RequestBody String req
			) {
	 	Map<String, Object> map = new HashMap<>();
	 	
//	 	System.out.println("req" + req);


        // ObjectMapper 생성
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // JSON 문자열 파싱
            JsonNode jsonNode = objectMapper.readTree(req);

            // "occuDay" 키에 해당하는 값을 추출
            String occuDay = jsonNode.get("occuDay").asText();

//            System.out.println("occuDay : " + occuDay);
            
            List<Flooding> day_floodingList = service.day_floodingList(occuDay);
//    		System.out.println("day_floodingList : " + day_floodingList);
    		

			map.put("day_floodingList", day_floodingList);
			
//    		System.out.println("map : " + map);
            return map;
    			
    		
    		

        } catch (Exception e) {
            e.printStackTrace();
            return null; // 에러 발생 시 null 반환하거나 적절히 처리
        }
		
		

		
		

	}
	
	
	
	
	
	
	// 침수데이터 월간강우
	@PostMapping("/sendMonth_flooding")
	@ResponseBody
	public Map<String, Object> floodingMonthDataForword(
			@RequestBody String req
			) {
		
		Map<String, Object> map = new HashMap<>();
		
//		System.out.println("req"+req);
		

        // ObjectMapper 생성
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // JSON 문자열 파싱
            JsonNode jsonNode = objectMapper.readTree(req);

            // "occuMonth" 키에 해당하는 값을 추출
            String occuMonth = jsonNode.get("occuMonth").asText();

//            System.out.println("occuMonth : " + occuMonth);
            
            List<Flooding> month_floodingList = service.month_floodingList(occuMonth);
//    		System.out.println("month_floodingList : " + month_floodingList);
    		
    		map.put("month_floodingList", month_floodingList);
//    		System.out.println("map : " + map);
    		
            
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null; // 에러 발생 시 null 반환하거나 적절히 처리
        }
		
	}
	
	
	
	
	// 침수데이터 월간강우 파일명 받아오기
	@PostMapping("/fnameUrl")
	@ResponseBody
	public String fnameUrlForword(
			@RequestBody String fnameUrl
			) {
//		System.out.println("fnameUrl"+fnameUrl);
		return fnameUrl;
	}
	
	
	// 침수데이터 월간강우 데이터xml저장
	@PostMapping("/sendMonth_floodingSave")
	@ResponseBody
	public Map<String, Object> floodingMonthDataSaveForword(
			@RequestBody Map<String, Object> paramMap
			) {
	 	Map<String, Object> map = new HashMap<>();
	 	
//		System.out.println("paramMap"+paramMap);
		
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(paramMap);
	    
	    String occuMonth = jsonObject.getString("occuMonth");
//		 System.out.println("occuMonth"+occuMonth);
		 String fname = jsonObject.getString("fname");
//		 System.out.println("fname"+fname);
		 map.put("fname", fname);
		
         List<Flooding> month_floodingSaveList = service.month_floodingSaveList(occuMonth);
		 map.put("month_floodingSaveList", month_floodingSaveList);
		
//		 System.out.println("map"+map);
		
		
		return map;
	}
	
	
	// 침수데이터 연간강우
	@PostMapping("/sendYear_flooding")
	@ResponseBody
	public Map<String, Object> floodingYearDataForword(
			@RequestBody String req
			) {
	Map<String, Object> map = new HashMap<>();
		
//		System.out.println("req"+req);
		

        // ObjectMapper 생성
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // JSON 문자열 파싱
            JsonNode jsonNode = objectMapper.readTree(req);

            // "occuYear" 키에 해당하는 값을 추출
            String occuYear = jsonNode.get("occuYear").asText();

//            System.out.println("occuYear : " + occuYear);
            
            List<Flooding> year_floodingList = service.year_floodingList(occuYear);
//    		System.out.println("year_floodingList : " + year_floodingList);
    		
    		map.put("year_floodingList", year_floodingList);
//    		System.out.println("map : " + map);
            
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null; // 에러 발생 시 null 반환하거나 적절히 처리
        }
		

	}

	
	
	// 침수데이터 기간별강우
	@PostMapping("/sendDate_flooding")
	@ResponseBody
	public Map<String, Object> floodingDateDataForword(
			@RequestBody Date_flooding date_flooding
			) {
		Map<String, Object> map = new HashMap<>();
		
//		System.out.println("date_flooding"+date_flooding);
		



            if("flooding".equals(date_flooding.getKindValue())) {
                List<Flooding> date_floodingList01 = service.date_floodingList01(date_flooding);
//                System.out.println("date_floodingList01 : " + date_floodingList01);
                map.put("date_floodingList01", date_floodingList01);
//                System.out.println("map : " + map);
                
                return map;
                
            }else {
            	List<Flooding> date_floodingList02 = service.date_floodingList02(date_flooding);
//            	System.out.println("date_floodingList02 : " + date_floodingList02);
            	map.put("date_floodingList02", date_floodingList02);
//            	System.out.println("map : " + map);
            	
            	return map;
            }
            
            

	    
	}
	
	
	
	
	
	
	
	
	
	//게이트 개폐정보 페이지 
	@GetMapping("/openAndclose")
	public String entryAndExitForword(
			Model model
			){
		return "/dataSearch/openAndclose";
	}
	
	
	

	
	
	
	// 일일 개폐정보
	@PostMapping("/sendDay_OAC")
	@ResponseBody
	public String IAODayDataForword(
			@RequestBody String req
			) {
//		System.out.println("cameraCode req : " + req);
		
		String ipAddress;
		String urlport;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			urlport = s.nextLine();
//					        System.out.println("openGate ipAddress : "+ ipAddress);
//					        System.out.println("openGate port : "+ urlport);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			int port = jsonObject.getInt("port");
			String user_id = jsonObject.getString("user_id");
			String user_pw = jsonObject.getString("user_pw");
			String query = jsonObject.getString("query");
			
//			System.out.println("serverip : " + serverip);
//			System.out.println("port : " + port);
//			System.out.println("query : " + query);
//			System.out.println("user_id : " + user_id);
//			System.out.println("user_pw : " + user_pw);
			
			String select_url = "http://"+ipAddress+":"+urlport+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("port", port);
			requestBody.put("user_id", user_id);
			requestBody.put("user_pw", user_pw);
			requestBody.put("query", query);
//			System.out.println("cameraCode requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
//			System.out.println("cameraCode response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	
	
	
	
	
	// 월별 개폐정보
	@PostMapping("/sendMonth_OAC")
	@ResponseBody
	public String IAOMonthDataForword(
			@RequestBody String req
			) {
//		System.out.println("IAOMonthDataForword req : " + req);
		
		String ipAddress;
		String urlport;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			urlport = s.nextLine();
//					        System.out.println("openGate ipAddress : "+ ipAddress);
//					        System.out.println("openGate port : "+ urlport);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			int port = jsonObject.getInt("port");
			String user_id = jsonObject.getString("user_id");
			String user_pw = jsonObject.getString("user_pw");
			String query = jsonObject.getString("query");
			
//			System.out.println("serverip : " + serverip);
//			System.out.println("port : " + port);
//			System.out.println("query : " + query);
//			System.out.println("user_id : " + user_id);
//			System.out.println("user_pw : " + user_pw);
			
			String select_url = "http://"+ipAddress+":"+urlport+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("port", port);
			requestBody.put("user_id", user_id);
			requestBody.put("user_pw", user_pw);
			requestBody.put("query", query);
//			System.out.println("cameraCode requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
//			System.out.println("cameraCode response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	
	
	
	// 연별 개폐정보
	@PostMapping("/sendYear_OAC")
	@ResponseBody
	public String IAOYearDataForword(
			@RequestBody String req
			) {
//		System.out.println("IAOMonthDataForword req : " + req);
		
		String ipAddress;
		String urlport;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			urlport = s.nextLine();
//					        System.out.println("openGate ipAddress : "+ ipAddress);
//					        System.out.println("openGate port : "+ urlport);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			int port = jsonObject.getInt("port");
			String user_id = jsonObject.getString("user_id");
			String user_pw = jsonObject.getString("user_pw");
			String query = jsonObject.getString("query");
			
//			System.out.println("serverip : " + serverip);
//			System.out.println("port : " + port);
//			System.out.println("query : " + query);
//			System.out.println("user_id : " + user_id);
//			System.out.println("user_pw : " + user_pw);
			
			String select_url = "http://"+ipAddress+":"+urlport+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("port", port);
			requestBody.put("user_id", user_id);
			requestBody.put("user_pw", user_pw);
			requestBody.put("query", query);
//			System.out.println("cameraCode requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
//			System.out.println("cameraCode response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	
	
	
	// 	기간별 카메라 목록
	@PostMapping("/date_camera")
	@ResponseBody
	public String date_cameraForword(
			@RequestBody String req
			) {
//		System.out.println("date_cameraForword req : " + req);
		
		String ipAddress;
		String urlport;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			urlport = s.nextLine();
//			System.out.println("openGate ipAddress : "+ ipAddress);
//			System.out.println("openGate port : "+ urlport);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			int port = jsonObject.getInt("port");
			String user_id = jsonObject.getString("user_id");
			String user_pw = jsonObject.getString("user_pw");
			String query = jsonObject.getString("query");
			
//			System.out.println("serverip : " + serverip);
//			System.out.println("port : " + port);
//			System.out.println("query : " + query);
//			System.out.println("user_id : " + user_id);
//			System.out.println("user_pw : " + user_pw);
			
			String select_url = "http://"+ipAddress+":"+urlport+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("port", port);
			requestBody.put("user_id", user_id);
			requestBody.put("user_pw", user_pw);
			requestBody.put("query", query);
//			System.out.println("cameraCode requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
//			System.out.println("cameraCode response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	

	
	// 기간별 개폐정보
	@PostMapping("/sendDate_OAC")
	@ResponseBody
	public String IAODateDataForword(
			@RequestBody String req
			) {
//		System.out.println("IAODateDataForword req : " + req);
		
		String ipAddress;
		String urlport;
		
		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		try {
			InputStream is = getClass().getResourceAsStream("/server_info.ini");
			Scanner s = new Scanner(is);
			ipAddress = s.nextLine();
			urlport = s.nextLine();
//			System.out.println("openGate ipAddress : "+ ipAddress);
//			System.out.println("openGate port : "+ urlport);
			s.close();
			is.close();
			
			
			
			// JSON 문자열을 파싱하여 필요한 변수에 할당
			JSONObject jsonObject = new JSONObject(req);
			String serverip = jsonObject.getString("serverip");
			int port = jsonObject.getInt("port");
			String user_id = jsonObject.getString("user_id");
			String user_pw = jsonObject.getString("user_pw");
			String query = jsonObject.getString("query");
			
//			System.out.println("serverip : " + serverip);
//			System.out.println("port : " + port);
//			System.out.println("query : " + query);
//			System.out.println("user_id : " + user_id);
//			System.out.println("user_pw : " + user_pw);
			
			String select_url = "http://"+ipAddress+":"+urlport+"/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//			System.out.println("select_url : "+ select_url);
			
			
			//서버로 전송할 객체 생성
			Map<String, Object> requestBody = new LinkedHashMap<>();
			requestBody.put("serverip", serverip);
			requestBody.put("port", port);
			requestBody.put("user_id", user_id);
			requestBody.put("user_pw", user_pw);
			requestBody.put("query", query);
//			System.out.println("IAODateDataForword requestBody : "+ requestBody);
			
			// 요청 헤더 설정
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			
			// HttpEntity 생성
			HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
			
			// post 요청 보내기
			String response = restTemplate.postForObject(select_url, requestEntity, String.class);
			
//			System.out.println("IAODateDataForword response"+ response);
			
			return response;
			
			
		} catch (Exception e) {
			//  //  System.out.println("Read Query Error");
			e.printStackTrace();
			return ""; // 예외가 발생하면 빈 문자열을 반환하도록 수정
		}
	}
	
	
	
	

}
