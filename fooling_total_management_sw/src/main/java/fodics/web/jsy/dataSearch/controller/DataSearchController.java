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
	
	
	
	//침수데이터 페이지 
	@GetMapping("/침수데이터")
	public String inundationDataForword(
			Model model
			){
		return "/dataSearch/침수데이터";
	}
	
	
	//입출차정보 페이지 
	@GetMapping("/입출차정보")
	public String entryAndExitForword(
			Model model
			){
		return "/dataSearch/입출차정보";
	}
	
	
	
	
}
