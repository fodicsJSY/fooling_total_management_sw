package fodics.web.jsy.equipmentControl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import fodics.web.jsy.equipmentControl.model.service.EquipmentControlService;

@Controller
public class EquipmentControlController {
	
	
	@Autowired
	private EquipmentControlService service;

}
