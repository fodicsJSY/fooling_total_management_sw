package fodics.web.jsy.dataSearch.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DataSearchDAO {
	
	@Autowired
	private SqlSessionTemplate sql;

}
