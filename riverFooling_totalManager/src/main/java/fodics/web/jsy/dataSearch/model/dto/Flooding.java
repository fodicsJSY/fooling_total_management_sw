package fodics.web.jsy.dataSearch.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Flooding {
	
	private String hour;
	private String day;
	private String month;
	private String waterLevel;
	private String sensorLocation;
	private String alarmWaterLevel;


	
	

}
