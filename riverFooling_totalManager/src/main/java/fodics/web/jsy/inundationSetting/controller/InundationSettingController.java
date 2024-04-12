package fodics.web.jsy.inundationSetting.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class InundationSettingController {
	
	

	//임계값관리 페이지 
	@GetMapping("/임계값설정")
	public String settingPageForword1(
			Model model
			){
		return "/inundationSetting/임계값설정";
	}
	
	

	
	// 임계값설정
	@PostMapping("/sendSettingValue")
	@ResponseBody
	public String settingDataForword(
			@RequestBody String req
			) {
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String zoneSelectValue = jsonObject.getString("zoneSelectValue");
	    String areaSelectValue = jsonObject.getString("areaSelectValue");
	    String stepOne_selectedRadio_value = jsonObject.getString("stepOne_selectedRadio_value");
	    String stepTwo_selectedRadio_value = jsonObject.getString("stepTwo_selectedRadio_value");
	    String stepThree_selectedRadio_value = jsonObject.getString("stepThree_selectedRadio_value");
	    
	    JSONArray step1wwValues = jsonObject.getJSONArray("step1wwValues");
	    JSONArray step2wwValues = jsonObject.getJSONArray("step2wwValues");
	    JSONArray step3wwValues = jsonObject.getJSONArray("step3wwValues");
	    
	    JSONArray stepOneRF_checkedValues = jsonObject.getJSONArray("stepOneRF_checkedValues");
	    JSONArray stepTwoRF_checkedValues = jsonObject.getJSONArray("stepTwoRF_checkedValues");
	    JSONArray stepThreeRF_checkedValues = jsonObject.getJSONArray("stepThreeRF_checkedValues");
	    
	    JSONArray step1_equipments = jsonObject.getJSONArray("step1_equipments");
	    JSONArray step2_equipments = jsonObject.getJSONArray("step2_equipments");
	    JSONArray step3_equipments = jsonObject.getJSONArray("step3_equipments");
	    
	    // 각 변수 값 출력
	    System.out.println("zoneSelectValue: " + zoneSelectValue);
	    System.out.println("areaSelectValue: " + areaSelectValue);
	    System.out.println("stepOne_selectedRadio_value: " + stepOne_selectedRadio_value);
	    System.out.println("stepTwo_selectedRadio_value: " + stepTwo_selectedRadio_value);
	    System.out.println("stepThree_selectedRadio_value: " + stepThree_selectedRadio_value);
	    System.out.println("step1wwValues: " + step1wwValues);
	    System.out.println("step2wwValues: " + step2wwValues);
	    System.out.println("step3wwValues: " + step3wwValues);
	    System.out.println("stepOneRF_checkedValues: " + stepOneRF_checkedValues);
	    System.out.println("stepTwoRF_checkedValues: " + stepTwoRF_checkedValues);
	    System.out.println("stepThreeRF_checkedValues: " + stepThreeRF_checkedValues);
	    System.out.println("step1_equipments: " + step1_equipments);
	    System.out.println("step2_equipments: " + step2_equipments);
	    System.out.println("step3_equipments: " + step3_equipments);

	    return null;
	}
	
	
	
	
	
	
	//경보상황 제어 페이지 
	@GetMapping("/경보상황제어")
	public String settingPageForword2(
			Model model
			){
		return "/inundationSetting/경보상황제어";
	}
	
	// 경보상황발생
	@PostMapping("/sendWarning")
	@ResponseBody
	public String warningDataForword(
			@RequestBody String warningValue
			) {
		System.out.println("warningValue"+warningValue);
		return null;
	}

	
	
	
	
	
	//경보발생 내역 페이지 
	@GetMapping("/경보발생내역")
	public String settingPageForword3(
			Model model
			){
		return "/inundationSetting/경보발생내역";
	}
		

}
