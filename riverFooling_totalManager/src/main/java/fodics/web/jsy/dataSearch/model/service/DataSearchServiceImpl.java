package fodics.web.jsy.dataSearch.model.service;

import org.springframework.beans.factory.annotation.Autowired;

import fodics.web.jsy.dataSearch.model.dao.DataSearchDAO;
import org.springframework.stereotype.Service;

@Service
public class DataSearchServiceImpl implements DataSearchService{
	
	
	@Autowired
	private DataSearchDAO dao;

}
