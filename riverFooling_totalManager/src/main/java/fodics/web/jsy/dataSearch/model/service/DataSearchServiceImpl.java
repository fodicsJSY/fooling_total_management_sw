package fodics.web.jsy.dataSearch.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import fodics.web.jsy.dataSearch.model.dao.DataSearchDAO;
import fodics.web.jsy.dataSearch.model.dto.Flooding;

import org.springframework.stereotype.Service;

@Service
public class DataSearchServiceImpl implements DataSearchService{
	
	
	@Autowired
	private DataSearchDAO dao;
	
	
	@Override
	public List<Flooding> localationList() {

		return dao.localationList();
	}

}
