package fodics.web.jsy.dataSearch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import fodics.web.jsy.dataSearch.model.service.DataSearchService;

//@RequestMapping("/dataSearch")
@Controller
public class DataSearchController {

//	@Autowired
	private DataSearchService service;
	
	//강우데이터 페이지 
	@GetMapping("/")
	public String dataSearchForword(
			Model model
			){
		
		
		return "/dataSearch/강우데이터";
	}
	
	
}
