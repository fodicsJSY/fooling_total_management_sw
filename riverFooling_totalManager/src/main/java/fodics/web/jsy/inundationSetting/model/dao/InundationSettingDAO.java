package fodics.web.jsy.inundationSetting.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class InundationSettingDAO {
	
	@Autowired
	private SqlSessionTemplate sql;

}
