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

}
