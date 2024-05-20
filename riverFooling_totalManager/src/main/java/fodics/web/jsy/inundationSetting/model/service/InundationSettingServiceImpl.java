package fodics.web.jsy.inundationSetting.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.inundationSetting.model.dao.InundationSettingDAO;
import fodics.web.jsy.inundationSetting.model.dto.ThresholdSetting;


@Service
public class InundationSettingServiceImpl implements InundationSettingService{

	
	@Autowired
	private InundationSettingDAO dao;
	
	
	@Override
	public List<ThresholdSetting> sensorList() {
		return dao.sensorList();
	}
	
	
	
	
}
