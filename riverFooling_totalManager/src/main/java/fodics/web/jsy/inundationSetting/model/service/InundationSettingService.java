package fodics.web.jsy.inundationSetting.model.service;

import java.util.List;
import java.util.Map;

import fodics.web.jsy.inundationSetting.model.dto.ThresholdSetting;

public interface InundationSettingService {

	List<ThresholdSetting> sensorList();

	List<ThresholdSetting> settingDataList(ThresholdSetting thresholdSetting);

	
    /*침수조건 시작*/
	int updateStep1(Map<String, Object> step1_params);

	int updateStep2(Map<String, Object> step2_params);

	int updateStep3(Map<String, Object> step3_params);

	int updateStep4(Map<String, Object> step4_params);

	int updateStep5(Map<String, Object> step5_params);
    /*침수조건 끝*/
	
    /*해제조건 시작*/
	int updateAlarmOff(Map<String, Object> alarmOff_params);
    /*해제조건 끝*/
	
}
