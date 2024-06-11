package fodics.web.jsy.dataSearch.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.dataSearch.model.dao.DataSearchDAO;
import fodics.web.jsy.dataSearch.model.dto.Date_flooding;
import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.dto.Min_flooding;
import fodics.web.jsy.dataSearch.model.dto.OpenAndClose;

@Service
public class DataSearchServiceImpl implements DataSearchService{
	
	@Autowired
	private DataSearchDAO dao;
	
	
	@Override
	public List<Flooding> areaList() {
		return dao.areaList();
	}
	
	
	@Override
	public List<Flooding> day_floodingList(String occuDay) {
		return dao.day_floodingList(occuDay);
	}
	
	@Override
	public List<Flooding> month_floodingList(String occuMonth) {
		return dao.month_floodingList(occuMonth);
	}
	
	@Override
	public List<Flooding> month_floodingSaveList(String occuMonth) {
		return dao.month_floodingSaveList(occuMonth);
	}
	
	
	@Override
	public List<Flooding> year_floodingList(String occuYear) {
		return dao.year_floodingList(occuYear);
	}
	
	@Override
	public List<Flooding> date_floodingList01(Date_flooding date_flooding) {
		return dao.date_floodingList01(date_flooding);
	}
	
	
	@Override
	public List<Flooding> date_floodingList02(Date_flooding date_flooding) {
		return dao.date_floodingList02(date_flooding);
	}
	
	
	@Override
	public List<Flooding> min_floodingList(Min_flooding min_flooding) {
		return dao.min_floodingList(min_flooding);
	}
	
}
