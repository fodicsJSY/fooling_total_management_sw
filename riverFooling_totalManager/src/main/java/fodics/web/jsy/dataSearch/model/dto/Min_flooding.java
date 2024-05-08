package fodics.web.jsy.dataSearch.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Min_flooding {
	

	private String occuDay;
	private String hour;
	private String min;
	private String areaValue;
	private String waterLevel;
	private String alarmWaterLevel;

	

}
