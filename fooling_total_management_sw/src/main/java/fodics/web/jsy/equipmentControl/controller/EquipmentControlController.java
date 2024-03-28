package fodics.web.jsy.equipmentControl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import fodics.web.jsy.equipmentControl.model.service.EquipmentControlService;

@Controller
public class EquipmentControlController {
	
	
	@Autowired
	private EquipmentControlService service;
	
	
	//전광판 페이지 
	@GetMapping("/전광판관리")
	public String controlPageForword1(
			Model model
			){
		return "/equipmentControl/전광판관리";
	}
	
	//차단기 페이지 
	@GetMapping("/차단기수동제어")
	public String controlPageForword2(
			Model model
			){
		return "/equipmentControl/차단기수동제어";
	}
	
	
	//시나리오 페이지 1
	@GetMapping("/후탄리25-3")
	public String scenarioPageForword1(
			Model model
			){
		return "/equipmentControl/scenario/후탄리25-3";
	}
	
	//시나리오 페이지 
	@GetMapping("/후탄리331-1")
	public String scenarioPageForword2(
			Model model
			){
		return "/equipmentControl/scenario/후탄리331-1";
	}
	
	
	// add 페이지
	@GetMapping("/add")
	public String addPageForword(
			Model model
			){
		return "/equipmentControl/scenario/add/add";
	}
	

}
