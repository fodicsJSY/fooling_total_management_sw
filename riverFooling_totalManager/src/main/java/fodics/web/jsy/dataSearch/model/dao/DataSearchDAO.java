package fodics.web.jsy.dataSearch.model.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fodics.web.jsy.dataSearch.model.dto.Date_flooding;
import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.dto.Min_flooding;
import fodics.web.jsy.equimentControl.model.dto.EquimentControl;

@Repository
public class DataSearchDAO {
	
	@Autowired
	@Resource(name="sqlSessionTemplate1")
	private SqlSessionTemplate sql;

	
	public List<Flooding> areaList() {
		return sql.selectList("databaseMapper.areaList");
	}
	
	
	public List<Flooding> day_floodingList(String occuDay) {
		return sql.selectList("databaseMapper.day_floodingList", occuDay);
	}

	public List<Flooding> month_floodingList(String occuMonth) {
		return sql.selectList("databaseMapper.month_floodingList", occuMonth);
	}

	public List<Flooding> year_floodingList(String occuYear) {
		return sql.selectList("databaseMapper.year_floodingList", occuYear);
	}

	public List<Flooding> date_floodingList01(Date_flooding date_flooding) {
		return sql.selectList("databaseMapper.date_floodingList01", date_flooding);
	}

	public List<Flooding> date_floodingList02(Date_flooding date_flooding) {
		return sql.selectList("databaseMapper.date_floodingList02", date_flooding);
	}

	public List<Flooding> min_floodingList(Min_flooding min_flooding) {
		return sql.selectList("databaseMapper.min_floodingList", min_flooding);
	}


	public List<Flooding> month_floodingSaveList(String occuMonth) {
		return sql.selectList("databaseMapper.month_floodingList", occuMonth);
	}






	

}
