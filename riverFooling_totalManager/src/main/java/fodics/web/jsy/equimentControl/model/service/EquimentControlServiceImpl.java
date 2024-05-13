package fodics.web.jsy.equimentControl.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.equimentControl.model.dao.EquimentControlDAO;
import fodics.web.jsy.equimentControl.model.dto.EquimentControl;

@Service
public class EquimentControlServiceImpl implements EquimentControlService{
	
	@Autowired
	private EquimentControlDAO dao;

//	@Override
//	public List<EquimentControl> gateCodeList() {
//		return dao.gateCodeList();
//	}
//	
	
	
}
