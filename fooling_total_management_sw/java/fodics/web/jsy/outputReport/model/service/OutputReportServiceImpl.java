package fodics.web.jsy.outputReport.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.outputReport.model.dao.OutputReportDAO;

@Service
public class OutputReportServiceImpl implements OutputReportService{
	
	@Autowired
	private OutputReportDAO dao;
	

}
