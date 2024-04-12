package fodics.web.jsy.equimentControl.controller;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EquimentControlController {
	
	

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
