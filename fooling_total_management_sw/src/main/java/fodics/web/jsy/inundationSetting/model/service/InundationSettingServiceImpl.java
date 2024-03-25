package fodics.web.jsy.inundationSetting.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.inundationSetting.model.dao.InundationSettingDAO;

@Service
public class InundationSettingServiceImpl implements InundationSettingService{
	
	@Autowired
	private InundationSettingDAO dao;

}
