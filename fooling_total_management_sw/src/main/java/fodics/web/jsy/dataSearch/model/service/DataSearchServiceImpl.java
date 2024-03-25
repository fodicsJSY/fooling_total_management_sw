package fodics.web.jsy.dataSearch.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.dataSearch.model.dao.DataSearchDAO;

@Service
public class DataSearchServiceImpl implements DataSearchService{
	
	@Autowired
	private DataSearchDAO dao;
	
	

}
