package fodics.web.jsy.outputReport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import fodics.web.jsy.dataSearch.model.service.DataSearchService;
import fodics.web.jsy.outputReport.model.service.OutputReportService;


@Controller
public class OutputReportController {
	
	@Autowired
	private OutputReportService service;
	
		
	//보고서출력 내역 페이지 
	@GetMapping("/보고서출력")
	public String reportPageForword(
			Model model
			){
		return "/outputReport/보고서출력";
	}

		
		

}
