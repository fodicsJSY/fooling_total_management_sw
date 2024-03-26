package fodics.web.jsy.inundationSetting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import fodics.web.jsy.inundationSetting.model.service.InundationSettingService;

@Controller
public class InundationSettingController {
	
	@Autowired
	private InundationSettingService service;
	
	
	//임계값관리 페이지 
	@GetMapping("/임계값설정")
	public String settingPageForword1(
			Model model
			){
		return "/inundationSetting/임계값설정";
	}
	
	//경보상황 제어 페이지 
	@GetMapping("/경보상황제어")
	public String settingPageForword2(
			Model model
			){
		return "/inundationSetting/경보상황제어";
	}
	
	//경보발생 내역 페이지 
	@GetMapping("/경보발생내역")
	public String settingPageForword3(
			Model model
			){
		return "/inundationSetting/경보발생내역";
	}
		

}
