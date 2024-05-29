package fodics.web.jsy.inundationSetting.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.gson.Gson;

import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.service.DataSearchService;
import fodics.web.jsy.inundationSetting.model.dto.ThresholdSetting;
import fodics.web.jsy.inundationSetting.model.service.InundationSettingService;
@Controller
@RequestMapping("/inundationSetting")
public class InundationSettingController {
	
	@Autowired
	private InundationSettingService service;
	
	@Autowired
	private DataSearchService service1;
	

	//임계값관리 페이지 
	@GetMapping("/임계값설정")
	public String settingPageForword1(
			Model model
			){
		List<Flooding> areaList = service1.areaList();
		model.addAttribute("areaList", areaList);
		List<ThresholdSetting> sensorList = service.sensorList();
//		System.out.println("sensorList" + sensorList);
		model.addAttribute("sensorList", sensorList);
		
		
		return "/inundationSetting/임계값설정";
	}
	
	
	
	// 임계값 불러오기
	@PostMapping("/Settingdata")
	@ResponseBody
	public Map<String, Object> settingDataForword(
			@RequestBody ThresholdSetting thresholdSetting
			) {
//		System.out.println("thresholdSetting"+thresholdSetting);
		
		Map<String, Object> settingDataMap = new HashMap<>();
		
		
	    List<ThresholdSetting> sensorList = service.sensorList();
//		System.out.println("sensorList" + sensorList);

		settingDataMap.put("sensorList", sensorList);
		
		List<ThresholdSetting> settingDataList = service.settingDataList(thresholdSetting);
//		System.out.println("settingDataList" + settingDataList);
		
		settingDataMap.put("settingDataList", settingDataList);
		
		return settingDataMap;
	}

	
	
	
	

	
	// 임계값저장
	@PostMapping("/sendSettingValue")
	@ResponseBody
	public int settingDataUpate(
			@RequestBody String req
//			@RequestBody ThresholdSetting thresholdSetting
			) {
		
		
//		System.out.println("thresholdSetting"+thresholdSetting);
		System.out.println("req"+req);
		
		// JSON 문자열을 파싱하여 필요한 변수에 할당
	    JSONObject jsonObject = new JSONObject(req);
	    String zoneSelectValue = jsonObject.getString("zoneSelectValue");
	    String areaSelectValue = jsonObject.getString("areaSelectValue");


	    JSONObject sendData = jsonObject.getJSONObject("sendData");
	    
	    int stepOneChecked = sendData.getInt("stepOneChecked");
	    int stepTwoChecked = sendData.getInt("stepTwoChecked");
	    int stepThreeChecked = sendData.getInt("stepThreeChecked");
	    int stepFourChecked = sendData.getInt("stepFourChecked");
	    int stepFiveChecked = sendData.getInt("stepFiveChecked");
	    
	    double stepOne_InputValue = sendData.getDouble("stepOne_InputValue");
	    double stepTwo_InputValue = sendData.getDouble("stepTwo_InputValue");
	    double stepThree_InputValue = sendData.getDouble("stepThree_InputValue");
	    double stepFour_InputValue = sendData.getDouble("stepFour_InputValue");
	    double stepFive_InputValue = sendData.getDouble("stepFive_InputValue");
	    
	    int selectedRadio_value = sendData.getInt("selectedRadio_value");
	   
	    int inputTime_value = sendData.getInt("inputTime_value");
	    
        int alarmOff = 0;
        
	    if(selectedRadio_value == -1) {
	    	alarmOff =-1;
	    }
	    if(selectedRadio_value == 0) {
	    	alarmOff =0;
	    }
	    if(selectedRadio_value == 1) {
	    	alarmOff = inputTime_value;
	    }
//        System.out.println("alarmOff : " + alarmOff);
	    
//	    JSONArray step1wwValues = jsonObject.getJSONArray("step1wwValues");
//	    JSONArray step2wwValues = jsonObject.getJSONArray("step2wwValues");
//	    JSONArray step3wwValues = jsonObject.getJSONArray("step3wwValues");
//	    
//	    JSONArray stepOneRF_checkedValues = jsonObject.getJSONArray("stepOneRF_checkedValues");
//	    JSONArray stepTwoRF_checkedValues = jsonObject.getJSONArray("stepTwoRF_checkedValues");
//	    JSONArray stepThreeRF_checkedValues = jsonObject.getJSONArray("stepThreeRF_checkedValues");
	    
	    JSONArray step1_equipments = sendData.getJSONArray("step1_equipments");
	    JSONArray step2_equipments = sendData.getJSONArray("step2_equipments");
	    JSONArray step3_equipments = sendData.getJSONArray("step3_equipments");
	    JSONArray step4_equipments = sendData.getJSONArray("step4_equipments");
	    JSONArray step5_equipments = sendData.getJSONArray("step5_equipments");
	    
	    
	    
	    // step1_equipments에 popup 또는 sms가 있는지 확인
        boolean step1_hasPopup = false;
        boolean step1_hasSms = false;
        int step1_alarm = 0;
        for (int i = 0; i < step1_equipments.length(); i++) {
            String value = step1_equipments.getString(i);
            if ("popup".equals(value)) {
            	step1_hasPopup = true;
            } else if ("sms".equals(value)) {
            	step1_hasSms = true;
            }
        }

        // 조건에 따라 처리
        if (step1_hasPopup == true && step1_hasSms == false) {
        	step1_alarm = 0;
        }
        
        if (step1_hasPopup == false && step1_hasSms == true) {
        	step1_alarm = 1;
        }
        
        if (step1_hasPopup == true && step1_hasSms == true) {
        	step1_alarm = 10; // 임시로 넣어둠
        }
//        System.out.println("step1_alarm : " + step1_alarm);
        
        
        // step2_equipments에 popup 또는 sms가 있는지 확인
        boolean step2_hasPopup = false;
        boolean step2_hasSms = false;
        int step2_alarm = 0;
        for (int i = 0; i < step2_equipments.length(); i++) {
        	String value = step2_equipments.getString(i);
        	if ("popup".equals(value)) {
        		step2_hasPopup = true;
        	} else if ("sms".equals(value)) {
        		step2_hasSms = true;
        	}
        }
        
        // 조건에 따라 처리
        if (step2_hasPopup == true && step2_hasSms == false) {
        	step2_alarm = 0;
        }
        
        if (step2_hasPopup == false && step2_hasSms == true) {
        	step2_alarm = 1;
        }
        
        if (step2_hasPopup == true && step2_hasSms == true) {
        	step2_alarm = 10; // 임시로 넣어둠
        }
//        System.out.println("step2_alarm : " + step2_alarm);
        
        
        // step3_equipments에 popup 또는 sms가 있는지 확인
        boolean step3_hasPopup = false;
        boolean step3_hasSms = false;
        int step3_alarm = 0;
        for (int i = 0; i < step3_equipments.length(); i++) {
        	String value = step3_equipments.getString(i);
        	if ("popup".equals(value)) {
        		step3_hasPopup = true;
        	} else if ("sms".equals(value)) {
        		step3_hasSms = true;
        	}
        }
        
        // 조건에 따라 처리
        if (step3_hasPopup == true && step3_hasSms == false) {
        	step3_alarm = 0;
        }
        
        if (step3_hasPopup == false && step3_hasSms == true) {
        	step3_alarm = 1;
        }
        
        if (step3_hasPopup == true && step3_hasSms == true) {
        	step3_alarm = 10; // 임시로 넣어둠
        }
//        System.out.println("step3_alarm : " + step3_alarm);
        
        
        // step4_equipments에 popup 또는 sms가 있는지 확인
        boolean step4_hasPopup = false;
        boolean step4_hasSms = false;
        int step4_alarm = 0;
        for (int i = 0; i < step4_equipments.length(); i++) {
        	String value = step4_equipments.getString(i);
        	if ("popup".equals(value)) {
        		step4_hasPopup = true;
        	} else if ("sms".equals(value)) {
        		step4_hasSms = true;
        	}
        }
        
        // 조건에 따라 처리
        if (step4_hasPopup == true && step4_hasSms == false) {
        	step4_alarm = 0;
        }
        
        if (step4_hasPopup == false && step4_hasSms == true) {
        	step4_alarm = 1;
        }
        
        if (step4_hasPopup == true && step4_hasSms == true) {
        	step4_alarm = 10; // 임시로 넣어둠
        }
        
        
//        System.out.println("step4_alarm : " + step4_alarm);
        
        
        
        
        
        // step5_equipments에 popup 또는 sms가 있는지 확인
        boolean step5_hasPopup = false;
        boolean step5_hasSms = false;
        int step5_alarm = 0;
        for (int i = 0; i < step5_equipments.length(); i++) {
        	String value = step5_equipments.getString(i);
        	if ("popup".equals(value)) {
        		step5_hasPopup = true;
        	} else if ("sms".equals(value)) {
        		step5_hasSms = true;
        	}
        }
        
        // 조건에 따라 처리
        if (step5_hasPopup == true && step5_hasSms == false) {
        	step5_alarm = 0;
        }
        
        if (step5_hasPopup == false && step5_hasSms == true) {
        	step5_alarm = 1;
        }
        
        if (step5_hasPopup == true && step5_hasSms == true) {
        	step5_alarm = 10; // 임시로 넣어둠
        }
        
        
//        System.out.println("step5_alarm : " + step5_alarm);
        

        
        
	    // 각 변수 값 출력
//	    System.out.println("zoneSelectValue: " + zoneSelectValue);
//	    System.out.println("areaSelectValue: " + areaSelectValue);
//	    System.out.println("stepOneChecked: " + stepOneChecked);
//	    System.out.println("stepTwoChecked: " + stepTwoChecked);
//	    System.out.println("stepThreeChecked: " + stepThreeChecked);
//	    System.out.println("stepFourChecked: " + stepFourChecked);
//	    System.out.println("stepFiveChecked: " + stepFiveChecked);
//	    System.out.println("stepOne_InputValue: " + stepOne_InputValue);
//	    System.out.println("stepTwo_InputValue: " + stepTwo_InputValue);
//	    System.out.println("stepThree_InputValue: " + stepThree_InputValue);
//	    System.out.println("stepFour_InputValue: " + stepFour_InputValue);
//	    System.out.println("stepFive_InputValue: " + stepFive_InputValue);
//	    System.out.println("selectedRadio_value: " + selectedRadio_value);
//	    System.out.println("inputTime_value: " + inputTime_value);
//	    System.out.println("step1_equipments: " + step1_equipments);
//	    System.out.println("step2_equipments: " + step2_equipments);
//	    System.out.println("step3_equipments: " + step3_equipments);
//	    System.out.println("step4_equipments: " + step4_equipments);
//	    System.out.println("step5_equipments: " + step5_equipments);
	    
	    
	    /*침수조건 시작*/

        Map<String, Object> step1_params = new HashMap<>();
        step1_params.put("stepOneChecked", stepOneChecked);
        step1_params.put("stepOne_InputValue", stepOne_InputValue);
        step1_params.put("step1_alarm", step1_alarm);
        step1_params.put("areaSelectValue", areaSelectValue);
	    
	    int updateStep1 = service.updateStep1(step1_params);

	    Map<String, Object> step2_params = new HashMap<>();
	    step2_params.put("stepTwoChecked", stepTwoChecked);
	    step2_params.put("stepTwo_InputValue", stepTwo_InputValue);
	    step2_params.put("step2_alarm", step2_alarm);
	    step2_params.put("areaSelectValue", areaSelectValue);
	    
	    int updateStep2 = service.updateStep2(step2_params);

	    Map<String, Object> step3_params = new HashMap<>();
	    step3_params.put("stepThreeChecked", stepThreeChecked);
	    step3_params.put("stepThree_InputValue", stepThree_InputValue);
	    step3_params.put("step3_alarm", step3_alarm);
	    step3_params.put("areaSelectValue", areaSelectValue);
	    
	    int updateStep3 = service.updateStep3(step3_params);
	    
	    
	    Map<String, Object> step4_params = new HashMap<>();
	    step4_params.put("stepFourChecked", stepFourChecked);
	    step4_params.put("stepFour_InputValue", stepFour_InputValue);
	    step4_params.put("step4_alarm", step4_alarm);
	    step4_params.put("areaSelectValue", areaSelectValue);
	    
	    int updateStep4 = service.updateStep4(step4_params);
	    
	    
	    
	    Map<String, Object> step5_params = new HashMap<>();
	    step5_params.put("stepFiveChecked", stepFiveChecked);
	    step5_params.put("stepFive_InputValue", stepFive_InputValue);
	    step5_params.put("step5_alarm", step5_alarm);
	    step5_params.put("areaSelectValue", areaSelectValue);
	    
	    int updateStep5 = service.updateStep5(step5_params);
	    /*침수조건 끝*/
	    
	    /*해제조건 시작*/
	    Map<String, Object> alarmOff_params = new HashMap<>();
	    alarmOff_params.put("alarmOff", alarmOff);
	    alarmOff_params.put("areaSelectValue", areaSelectValue);
	    alarmOff_params.put("zoneSelectValue", zoneSelectValue);
	    
	    int updateAlarmOff = service.updateAlarmOff(alarmOff_params);
	    /*해제조건 끝*/
	    

//	    System.out.println("updateStep1 : "+updateStep1);
//	    System.out.println("updateStep2 : "+updateStep2);
//	    System.out.println("updateStep3 : "+updateStep3);
//	    System.out.println("updateStep4 : "+updateStep4);
//	    System.out.println("updateStep5 : "+updateStep5);
//	    System.out.println("updateAlarmOff : "+updateAlarmOff);
	    
	    int result;
	    
	    if(updateStep1 == 1 
	    	&& updateStep2 == 1 
	    	&& updateStep3 == 1 
	    	&& updateStep4 == 1 
	    	&& updateStep5 == 1 
	    	&& updateAlarmOff == 1 
	    ) {
	    	result = 1;
	    }else {
	    	result = 0;
	    }
	    

	    return result;
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
