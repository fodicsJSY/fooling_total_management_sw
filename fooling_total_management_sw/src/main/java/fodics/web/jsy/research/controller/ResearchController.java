package fodics.web.jsy.research.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import fodics.web.jsy.research.model.service.ResearchService;

@Controller
public class ResearchController {

	
	@Autowired
	private ResearchService service;
}
