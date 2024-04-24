package fodics.web.jsy.equimentControl.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.dataSearch.model.dao.DataSearchDAO;

@Service
public class EquimentControlServiceImpl implements EquimentControlService{
	
	@Autowired
	private DataSearchDAO dao;

}
