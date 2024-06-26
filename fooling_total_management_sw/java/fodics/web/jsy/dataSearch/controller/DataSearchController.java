package fodics.web.jsy.dataSearch.controller;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import fodics.web.jsy.dataSearch.model.service.DataSearchService;

//@RequestMapping("/dataSearch")
@Controller
public class DataSearchController {

//	@Autowired
	private DataSearchService service;
	
	
	 private final RestTemplate restTemplate;

    @Autowired
    public DataSearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

	
	
	
	//강우데이터 페이지 임시
	@GetMapping("/")
	public String dataSearchForword1(
			Model model
			){
		return "/dataSearch/rainfall";
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
	@GetMapping("flooding")
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
	@PostMapping("/sendDay_flooding")
	@ResponseBody
	public String floodingDayDataForword(
			@RequestBody String occuDay
			) {
		System.out.println("occuDay"+occuDay);
		return null;
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
	
	
	
	
	
	
	
	
	
	//입출차정보 페이지 
	@GetMapping("incomingAndOutgoing")
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
	
	
	
	@PostMapping("/getDataFromAPI")
    @ResponseBody
    public String getDataFromAPI(@RequestBody String req) {
		
		System.out.println("req"+ req);
		

		// RestTemplate에 JSON 메시지 컨버터 추가
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

		
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String serverip = jsonObject.getString("serverip");
	    String query = jsonObject.getString("query");
		
        String url = "http://172.16.103.34:8988/fnvr/request/query/select"; // 외부 RESTful API의 URL
        
        
     // 서버로 전송할 객체 생성
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("serverip", serverip);
        requestBody.add("query", query);

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // HttpEntity 생성
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);

        // post 요청 보내기
        String response = restTemplate.postForObject(url, requestEntity, String.class);
        
        
        System.out.print("response"+ response);

        // 응답 데이터를 클라이언트에 반환
        return null;
    }

	
	
	
	
}
