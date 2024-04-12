package fodics.web.jsy.outputReport;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OutputReportController {


	
	//보고서출력 내역 페이지 
	@GetMapping("/보고서출력")
	public String reportPageForword(
			Model model
			){
		return "/outputReport/보고서출력";
	}

	
	
}
