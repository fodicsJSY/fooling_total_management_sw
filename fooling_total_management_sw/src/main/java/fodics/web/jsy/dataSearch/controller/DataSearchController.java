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
	
	//강우데이터 페이지 임시
	@GetMapping("/")
	public String dataSearchForword1(
			Model model
			){
		return "/dataSearch/rainfall";
	}
	//강우데이터 페이지 
	@GetMapping("/rainfall")
	public String dataSearchForword(
			Model model
			){
		return "/dataSearch/rainfall";
	}
	
	
	
	//침수데이터 페이지 
	@GetMapping("flooding")
	public String inundationDataForword(
			Model model
			){
		return "/dataSearch/flooding";
	}
	
	
	//입출차정보 페이지 
	@GetMapping("incomingAndOutgoing")
	public String entryAndExitForword(
			Model model
			){
		return "/dataSearch/incomingAndOutgoing";
	}
	
	
	
	
}
