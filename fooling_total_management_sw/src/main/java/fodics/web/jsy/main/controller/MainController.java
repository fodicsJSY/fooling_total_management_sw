package fodics.web.jsy.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import fodics.web.jsy.main.model.service.MainService;

@Controller
public class MainController {

	
	@Autowired
	private MainService service;
	
	
	//메인 페이지 임시
	@GetMapping("/")
	public String mainForword(
			Model model
			){
		return "/main";
	}
}
