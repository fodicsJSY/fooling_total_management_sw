package fodics.web.jsy.inundationSetting.model.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.web.jsy.inundationSetting.model.dto.ThresholdSetting;

@Repository
public class InundationSettingDAO {


	
	@Autowired
	@Resource(name="sqlSessionTemplate1")
	private SqlSessionTemplate sql;

	public List<ThresholdSetting> sensorList() {
		return sql.selectList("inundatoinSettingMapper.sensorList");
	}

	public List<ThresholdSetting> settingDataList(ThresholdSetting thresholdSetting) {
		return sql.selectList("inundatoinSettingMapper.settingDataList", thresholdSetting);
	}

	
    /*침수조건 시작*/
	public int updateStep1(Map<String, Object> step1_params) {
		return sql.update("inundatoinSettingMapper.updateStep1", step1_params);
	}

	public int updateStep2(Map<String, Object> step2_params) {
		return sql.update("inundatoinSettingMapper.updateStep2", step2_params);
	}

	public int updateStep3(Map<String, Object> step3_params) {
		return sql.update("inundatoinSettingMapper.updateStep3", step3_params);
	}

	public int updateStep4(Map<String, Object> step4_params) {
		return sql.update("inundatoinSettingMapper.updateStep4", step4_params);
	}

	public int updateStep5(Map<String, Object> step5_params) {
		return sql.update("inundatoinSettingMapper.updateStep5", step5_params);
	}
    /*침수조건 끝*/
    
	
    /*해제조건 시작*/	
	public int updateAlarmOff(Map<String, Object> alarmOff_params) {
		return sql.update("inundatoinSettingMapper.updateAlarmOff", alarmOff_params);
	}
    /*해제조건 끝*/
	
}
