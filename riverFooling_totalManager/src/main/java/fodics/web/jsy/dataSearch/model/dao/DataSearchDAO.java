package fodics.web.jsy.dataSearch.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.web.jsy.dataSearch.model.dto.Flooding;

@Repository
public class DataSearchDAO {
	
	@Autowired
	private SqlSessionTemplate sql;

	public List<Flooding> localationList() {
		return sql.selectList("databaseMapper.locationList");
	}
	
	
	

}
