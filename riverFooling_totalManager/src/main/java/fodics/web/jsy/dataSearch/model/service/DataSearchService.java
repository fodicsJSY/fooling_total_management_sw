package fodics.web.jsy.dataSearch.model.service;

import java.util.List;
import java.util.Map;

import fodics.web.jsy.dataSearch.model.dto.Date_flooding;
import fodics.web.jsy.dataSearch.model.dto.Flooding;
import fodics.web.jsy.dataSearch.model.dto.Min_flooding;

public interface DataSearchService {
	
	List<Flooding> areaList();

	List<Flooding> day_floodingList(String occuDay);

	List<Flooding> month_floodingList(String occuMonth);

	List<Flooding> year_floodingList(String occuYear);

	List<Flooding> date_floodingList01(Date_flooding date_flooding);

	List<Flooding> date_floodingList02(Date_flooding date_flooding);

	List<Flooding> min_floodingList(Min_flooding min_flooding);

	List<Flooding> month_floodingSaveList(String occuMonth);






}
