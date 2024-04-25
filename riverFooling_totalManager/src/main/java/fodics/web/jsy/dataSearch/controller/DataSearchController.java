package fodics.web.jsy.dataSearch.controller;


import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
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
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.service.DataSearchService;


@SessionAttributes({"loginUser"}) 
@Controller
public class DataSearchController {
	
	@Autowired
	private DataSearchService service;
	
	
	 private RestTemplate restTemplate;

    @Autowired
    public DataSearchController(RestTemplate restTemplate) {
       this.restTemplate = restTemplate;
    }

	
	
	
	//로그인 페이지 임시
	@GetMapping("/")
	public String login(
			Model model
			){
		return "/login";
	}
	
	
	
	@PostMapping("/userLogin")
	public String userLogin(
								@RequestBody String req
							) {
		
		System.out.println("req : " + req );

		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

		
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
		
	    String user_id = jsonObject.getString("user_id");
	    String user_pw = jsonObject.getString("user_pw");
	    String serverip = jsonObject.getString("serverip");
	    String query = jsonObject.getString("query");
	    System.out.println("user_id : "+ user_id);
	    System.out.println("user_pw : "+ user_pw);
	    System.out.println("serverip : "+ serverip);
	    System.out.println("query : "+ query);
		
	    
	    
//	    String url = "http://172.16.103.34:8988/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//		
//		
//	    //서버로 전송할 객체 생성
//       Map<String, String> requestBody = new LinkedHashMap<>();
//       requestBody.put("user_id", user_id);
//       requestBody.put("user_pw", user_pw);
//       requestBody.put("serverip", serverip);
//       requestBody.put("query", query);
//       System.out.println("requestBody : "+ requestBody);
//
//       // 요청 헤더 설정
//       HttpHeaders headers = new HttpHeaders();
//       headers.setContentType(MediaType.APPLICATION_JSON);
//
//       // HttpEntity 생성
//       HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
//
//       // post 요청 보내기
//       String response = restTemplate.postForObject(url, requestEntity, String.class);
//       
//       
//       System.out.print("response"+ response);

       // 응답 데이터를 클라이언트에 반환
       
	    
	    
	    
	    
	    
	    
	    
		return "/dataSearch/rainfall";
	}
	
	
	
	
	//강우데이터 페이지 
	@GetMapping("/rainfall")
	public String dataSearchForword(
			Model model
			){
		return "/dataSearch/rainfall";
	}
	
	
	

	@PostMapping("/getDataFromAPI")
	@ResponseBody
	public String getDataFromAPI(@RequestBody String req) {
		
		System.out.println("req"+ req);
		

		// MappingJackson2HttpMessageConverter 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

		
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String serverip = jsonObject.getString("serverip");
	    String query = jsonObject.getString("query");
	    System.out.println("serverip : "+ serverip);
	    System.out.println("query : "+ query);
		
//      String url = "http://172.16.103.34:8988/fnvr/request/query/select"; // 외부 RESTful API의 URL select
      String url = "http://172.16.103.34:8988/fnvr/request/query/execute"; // 외부 RESTful API의 URL insert, update
	       
       
       //서버로 전송할 객체 생성
       Map<String, String> requestBody = new LinkedHashMap<>();
       requestBody.put("serverip", serverip);
       requestBody.put("query", query);
       System.out.println("requestBody : "+ requestBody);

       // 요청 헤더 설정
       HttpHeaders headers = new HttpHeaders();
       headers.setContentType(MediaType.APPLICATION_JSON);

       // HttpEntity 생성
       HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);

       // post 요청 보내기
       String response = restTemplate.postForObject(url, requestEntity, String.class);
       
       
       System.out.print("response"+ response);

       // 응답 데이터를 클라이언트에 반환
       return response;
   }

	
	
	
	
	
	
	
	
	//home 페이지 
	@GetMapping("/home")
	public String home(
			Model model
			){
		return "/home";
	}
	
	// 강우데이터 일간강우
	@PostMapping("/sendDay_rainfall")
	@ResponseBody
	public String rainfallDayDataForword(
			@RequestBody String occuDay
			) {
		System.out.println("occuDay"+occuDay);
		return null;
	}
	
	// 강우데이터 월간강우
	@PostMapping("/sendMonth_rainfall")
	@ResponseBody
	public String rainfallMonthDataForword(
			@RequestBody String occuMonth
			) {
		System.out.println("occuMonth"+occuMonth);
		return null;
	}
	
	// 강우데이터 연간강우
	@PostMapping("/sendYear_rainfall")
	@ResponseBody
	public String rainfallYearDataForword(
			@RequestBody String occuYear
			) {
		System.out.println("occuYear"+occuYear);
		return null;
	}
	
	// 강우데이터 기간별강우
	@PostMapping("/sendDate_rainfall")
	@ResponseBody
	public String rainfallDateDataForword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String startOccuDate = jsonObject.getString("startOccuDate");
	    String endOccuDate = jsonObject.getString("endOccuDate");
	    String areaValue = jsonObject.getString("areaValue");
	    
	    // 각 변수 값 출력
	    System.out.println("startOccuDate: " + startOccuDate);
	    System.out.println("endOccuDate: " + endOccuDate);
	    System.out.println("areaValue: " + areaValue);
	    return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//침수데이터 페이지 
	@GetMapping("/flooding")
	public String inundationDataForword(
			Model model
			){
		return "/dataSearch/flooding";
	}
	
	
	
	// 침수데이터 시간강우
	@PostMapping("/send10min_flooding")
	@ResponseBody
	public String floodingMinDataForword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		return null;
	}
	
	
	
	
	
	// 침수데이터 일간강우 
//	@PostMapping("/sendDay_waterLevelGauge")
//	@ResponseBody
//	public String WLGDayDataForword(
//			@RequestBody String req
//			) {
//		System.out.println("WLGDayDataForword req" + req);
//		
//		// JSON 문자열을 파싱하여 필요한 변수에 할당
//	    JSONObject jsonObject = new JSONObject(req);
////	    String occuDay = jsonObject.getString("occuDay");
//	    String serverip = jsonObject.getString("serverip");
//	    String query = jsonObject.getString("query");
//	    String id = jsonObject.getString("id");
//	    String pw = jsonObject.getString("pw");
//	    
//	    // 각 변수 값 출력
////	    System.out.println("occuDay: " + occuDay);
//	    System.out.println("serverip: " + serverip);
//	    System.out.println("query: " + query);
//	    System.out.println("id: " + id);
//	    System.out.println("pw: " + pw);
//	    
//	    
////	    String url = "http://172.16.103.34:8988/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//	    String url = "http://172.16.20.101:10443/fnvr/request/query/select"; // 외부 RESTful API의 URL select
//		
//	    //서버로 전송할 객체 생성
//	   Map<String, String> requestBody = new LinkedHashMap<>();
//	   requestBody.put("serverip", serverip);
//	   requestBody.put("query", query);
//	   System.out.println("requestBody : "+ requestBody);
//	
//	   // 요청 헤더 설정
//	   HttpHeaders headers = new HttpHeaders();
//	   headers.setContentType(MediaType.APPLICATION_JSON);
//	
//	   // HttpEntity 생성
//	   HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
//	
//	   // post 요청 보내기
//	   String response = restTemplate.postForObject(url, requestEntity, String.class);
//	   
//	   
//	   System.out.print("response"+ response);
//		
//		
//		return response;
//	}
	
	
	// 침수데이터 일간강우
	@PostMapping("/sendDay_flooding")
	@ResponseBody
	public Map<String, Object> floodingDayDataForword(
			@RequestBody String occuDay
			) {
	 	Map<String, Object> map = new HashMap<>();
		
		System.out.println("occuDay : " + occuDay);
		

		
		
		List<Flooding> localationList = service.localationList();
		System.out.println("localationList : " + localationList);
		
		map.put("localationList", localationList);
		System.out.println("map : " + map);
		
		
		return map;
	}
	
	
	
	
	
	
	// 침수데이터 월간강우
	@PostMapping("/sendMonth_flooding")
	@ResponseBody
	public String floodingMonthDataForword(
			@RequestBody String occuMonth
			) {
		System.out.println("occuMonth"+occuMonth);
		return null;
	}
	
	
	
	
	// 침수데이터 월간강우 데이터xml저장
	@PostMapping("/sendMonth_floodingSave")
	@ResponseBody
	public String floodingMonthDataSaveForword(
			@RequestBody String occuMonth
			) {
		System.out.println("occuMonth"+occuMonth);
		return null;
	}
	
	
	// 침수데이터 연간강우
	@PostMapping("/sendYear_flooding")
	@ResponseBody
	public String floodingYearDataForword(
			@RequestBody String occuYear
			) {
		System.out.println("occuYear"+occuYear);
		return null;
	}

	
	
	// 침수데이터 기간별강우
	@PostMapping("/sendDate_flooding")
	@ResponseBody
	public String floodingDateDataForword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
	
	    
	    
	    
	    return null;
	}
	
	
	
	
	
	
	
	
	
	//입출차정보 페이지 
	@GetMapping("/incomingAndOutgoing")
	public String entryAndExitForword(
			Model model
			){
		return "/dataSearch/incomingAndOutgoing";
	}
	
	
	

	
	
	
	// 입출차정보 일간강우
	@PostMapping("/sendDay_IAO")
	@ResponseBody
	public String IAODayDataForword(
			@RequestBody String occuDay
			) {
		System.out.println("occuDay"+occuDay);
		return null;
	}
	
	
	
	// 입출차정보 월간강우
	@PostMapping("/sendMonth_IAO")
	@ResponseBody
	public String IAOMonthDataForword(
			@RequestBody String occuMonth
			) {
		System.out.println("occuMonth"+occuMonth);
		return null;
	}
	
	
	
	
	// 입출차정보 월간강우
	@PostMapping("/sendYear_IAO")
	@ResponseBody
	public String IAOYearDataForword(
			@RequestBody String occuYear
			) {
		System.out.println("occuYear"+occuYear);
		return null;
	}
	
	

	
	// 입출차정보 기간별강우
	@PostMapping("/sendDate_IAO")
	@ResponseBody
	public String IAODateDataForword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String startOccuDate = jsonObject.getString("startOccuDate");
	    String endOccuDate = jsonObject.getString("endOccuDate");
	    String areaValue = jsonObject.getString("areaValue");
	    String kindValue = jsonObject.getString("kindValue");
	    
	    // 각 변수 값 출력
	    System.out.println("startOccuDate: " + startOccuDate);
	    System.out.println("endOccuDate: " + endOccuDate);
	    System.out.println("areaValue: " + areaValue);
	    System.out.println("kindValue: " + kindValue);
	    return null;
	}
	
	
	
	

}
