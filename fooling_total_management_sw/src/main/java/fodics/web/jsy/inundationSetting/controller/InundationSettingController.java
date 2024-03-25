package fodics.web.jsy.inundationSetting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import fodics.web.jsy.inundationSetting.model.service.InundationSettingService;

@Controller
public class InundationSettingController {
	
	@Autowired
	private InundationSettingService service;

}
