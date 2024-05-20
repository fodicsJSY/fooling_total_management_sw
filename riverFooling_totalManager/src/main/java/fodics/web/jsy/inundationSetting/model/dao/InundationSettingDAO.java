package fodics.web.jsy.inundationSetting.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.web.jsy.inundationSetting.model.dto.ThresholdSetting;

@Repository
public class InundationSettingDAO {


	
	@Autowired
	private SqlSessionTemplate sql;

	public List<ThresholdSetting> sensorList() {
		return sql.selectList("inundatoinSettingMapper.sensorList");
	}
	
	
}
