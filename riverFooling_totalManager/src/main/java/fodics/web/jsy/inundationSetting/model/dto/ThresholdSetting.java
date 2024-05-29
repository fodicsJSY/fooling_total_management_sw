package fodics.web.jsy.inundationSetting.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ThresholdSetting {
	
	
	private String zoneSelectValue;
	private String areaSelectValue;
	
	private int stepOneChecked;
	private int stepTwoChecked;
	private int stepThreeChecked;
	private int stepFourChecked;
	private int stepFiveChecked;
	
	private int stepOne_InputValue;
	private int stepTwo_InputValue;
	private int stepThree_InputValue;
	private int stepFour_InputValue;
	private int stepFive_InputValue;

	private int step1_off;
	private int step2_off;
	private int step3_off;
	private int step4_off;
	private int step5_off;
	
	
	private int step1_alarm;
	private int step2_alarm;
	private int step3_alarm;
	private int step4_alarm;
	private int step5_alarm;
	
	
	

	private String sensorNo;
	private String sensorId;
	private String alarmLevel;
	private String alarmValue;
	private String alarmCondition;
	private String alarmAction;
	private String sensorLocation;
	private String alarmOffCondition;
	

}
