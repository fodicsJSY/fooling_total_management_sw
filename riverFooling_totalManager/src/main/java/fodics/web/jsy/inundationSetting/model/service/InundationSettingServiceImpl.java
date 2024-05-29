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
	
	
	@Override
	public List<ThresholdSetting> settingDataList(ThresholdSetting thresholdSetting) {
		return dao.settingDataList(thresholdSetting);
	}
	
    /*침수조건 시작*/
	@Override
	public int updateStep1(Map<String, Object> step1_params) {
		return dao.updateStep1(step1_params);
	}
	
	@Override
	public int updateStep2(Map<String, Object> step2_params) {
		return dao.updateStep2(step2_params);
	}
	
	
	@Override
	public int updateStep3(Map<String, Object> step3_params) {
		return dao.updateStep3(step3_params);
	}
	
	@Override
	public int updateStep4(Map<String, Object> step4_params) {
		return dao.updateStep4(step4_params);
	}
	
	@Override
	public int updateStep5(Map<String, Object> step5_params) {
		return dao.updateStep5(step5_params);
	}
    /*침수조건 끝*/
	
	
	
    /*해제조건 시작*/
	@Override
	public int updateAlarmOff(Map<String, Object> alarmOff_params) {
		return dao.updateAlarmOff(alarmOff_params);
	}
	/*해제조건 끝*/
	
	
	
	
}
