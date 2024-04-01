var zoneSelect = document.getElementById("zoneSelect");
var areaSelect = document.getElementById("areaSelect");

//1단계
var stepOne = document.getElementById("stepOne");

// 1단계침수
var stepOne_5cm = document.getElementById("stepOne_5cm");
var stepOne_13cm = document.getElementById("stepOne_13cm");
var stepOne_21cm = document.getElementById("stepOne_21cm");

// 1단계특보
var stepOne_heavyRainAdvisory = document.getElementById("stepOne_heavyRainAdvisory");
var stepOne_heavyRainWarning = document.getElementById("stepOne_heavyRainWarning");
var stepOne_typhoonAdvisory = document.getElementById("stepOne_typhoonAdvisory");
var stepOne_typhoonWarning = document.getElementById("stepOne_typhoonWarning");

// 1단계강우량
var stepOne_todayCheck = document.getElementById("stepOne_todayCheck");
var stepOne_todayInput = document.getElementById("stepOne_todayInput");

var stepOne_timeCheck = document.getElementById("stepOne_timeCheck");
var stepOne_timeInput = document.getElementById("stepOne_timeInput");

var stepOne_move15 = document.getElementById("stepOne_move15");
var stepOne_move15numInput = document.getElementById("stepOne_move15numInput");
var stepOne_move60 = document.getElementById("stepOne_move60");
var stepOne_move60numInput = document.getElementById("stepOne_move60numInput");
var stepOne_move24h = document.getElementById("stepOne_move24h");
var stepOne_move24hNumInput = document.getElementById("stepOne_move24hNumInput");

// 1단계동작장비
var stepOne_circuitBreaker = document.getElementById("stepOne_circuitBreaker");
var stepOne_broadcasting = document.getElementById("stepOne_broadcasting");
var stepOne_scriptBoard = document.getElementById("stepOne_scriptBoard");
var stepOne_userAPPalarm = document.getElementById("stepOne_userAPPalarm");
var stepOne_managerAPPalarm = document.getElementById("stepOne_managerAPPalarm");





//2단계
var stepTwo = document.getElementById("stepTwo");

// 2단계침수
var stepTwo_5cm = document.getElementById("stepTwo_5cm");
var stepTwo_13cm = document.getElementById("stepTwo_13cm");
var stepTwo_21cm = document.getElementById("stepTwo_21cm");

// 2단계특보
var stepTwo_heavyRainAdvisory = document.getElementById("stepTwo_heavyRainAdvisory");
var stepTwo_heavyRainWarning = document.getElementById("stepTwo_heavyRainWarning");
var stepTwo_typhoonAdvisory = document.getElementById("stepTwo_typhoonAdvisory");
var stepTwo_typhoonWarning = document.getElementById("stepTwo_typhoonWarning");

// 2단계강우량
var stepTwo_todayCheck = document.getElementById("stepTwo_todayCheck");
var stepTwo_todayInput = document.getElementById("stepTwo_todayInput");

var stepTwo_timeCheck = document.getElementById("stepTwo_timeCheck");
var stepTwo_timeInput = document.getElementById("stepTwo_timeInput");

var stepTwo_move15 = document.getElementById("stepTwo_move15");
var stepTwo_move15numInput = document.getElementById("stepTwo_move15numInput");
var stepTwo_move60 = document.getElementById("stepTwo_move60");
var stepTwo_move60numInput = document.getElementById("stepTwo_move60numInput");
var stepTwo_move24h = document.getElementById("stepTwo_move24h");
var stepTwo_move24hNumInput = document.getElementById("stepTwo_move24hNumInput");

// 2단계동작장비
var stepTwo_circuitBreaker = document.getElementById("stepTwo_circuitBreaker");
var stepTwo_broadcasting = document.getElementById("stepTwo_broadcasting");
var stepTwo_scriptBoard = document.getElementById("stepTwo_scriptBoard");
var stepTwo_userAPPalarm = document.getElementById("stepTwo_userAPPalarm");
var stepTwo_managerAPPalarm = document.getElementById("stepTwo_managerAPPalarm");



//3단계
var stepThree = document.getElementById("stepThree");

// 3단계침수
var stepThree_5cm = document.getElementById("stepThree_5cm");
var stepThree_13cm = document.getElementById("stepThree_13cm");
var stepThree_21cm = document.getElementById("stepThree_21cm");


// 3단계특보
var stepThree_heavyRainAdvisory = document.getElementById("stepThree_heavyRainAdvisory");
var stepThree_heavyRainWarning = document.getElementById("stepThree_heavyRainWarning");
var stepThree_typhoonAdvisory = document.getElementById("stepThree_typhoonAdvisory");
var stepThree_typhoonWarning = document.getElementById("stepThree_typhoonWarning");


// 3단계강우량
var stepThree_todayCheck = document.getElementById("stepThree_todayCheck");
var stepThree_todayInput = document.getElementById("stepThree_todayInput");

var stepThree_timeCheck = document.getElementById("stepThree_timeCheck");
var stepThree_timeInput = document.getElementById("stepThree_timeInput");

var stepThree_move15 = document.getElementById("stepThree_move15");
var stepThree_move15numInput = document.getElementById("stepThree_move15numInput");
var stepThree_move60 = document.getElementById("stepThree_move60");
var stepThree_move60numInput = document.getElementById("stepThree_move60numInput");
var stepThree_move24h = document.getElementById("stepThree_move24h");
var stepThree_move24hNumInput = document.getElementById("stepThree_move24hNumInput");

// 3단계동작장비
var stepThree_circuitBreaker = document.getElementById("stepThree_circuitBreaker");
var stepThree_broadcasting = document.getElementById("stepThree_broadcasting");
var stepThree_scriptBoard = document.getElementById("stepThree_scriptBoard");
var stepThree_userAPPalarm = document.getElementById("stepThree_userAPPalarm");
var stepThree_managerAPPalarm = document.getElementById("stepThree_managerAPPalarm");



//저장버튼
document.getElementById("saveBtn").addEventListener("click", ()=>{
    console.log("클릭");

    // 지구선택
    let zoneSelectValue = zoneSelect.value;
    console.log("zoneSelectValue : ", zoneSelectValue);
    
    // 강우 센서
    let areaSelectValue = areaSelect.value;
    console.log("areaSelectValue : ", areaSelectValue);


    
    // 단계 선택
    console.log("stepOne checkBox :", stepOne.value);
    console.log("stepTwo checkBox:", stepTwo.value);
    console.log("stepThree checkBox:", stepThree.value);
    
    // 침수
    // 선택된 라디오 버튼 요소 가져오기
    var stepOne_selectedRadio = document.querySelector('input[name="stepOneFlooding"]:checked');
    var stepTwo_selectedRadio = document.querySelector('input[name="stepTwoFlooding"]:checked');
    var stepThree_selectedRadio = document.querySelector('input[name="stepThreeFlooding"]:checked');
    console.log("stepOne선택된 라디오 버튼 값:", stepOne_selectedRadio.value);
    console.log("stepTwo선택된 라디오 버튼 값:", stepTwo_selectedRadio.value);
    console.log("stepThree선택된 라디오 버튼 값:", stepThree_selectedRadio.value);

    //특보
    var stepOne_alert;
    var stepTwo_alert;
    var stepThree_alert;

    // 1단계
    if (stepOne_heavyRainAdvisory.checked) {
        console.log("stepOne_heavyRainAdvisory :", stepOne_heavyRainAdvisory.checked);
        stepOne_alert = 0;
    }
    if (stepOne_heavyRainWarning.checked) {
        console.log("stepOne_heavyRainWarning :", stepOne_heavyRainWarning.checked);
        stepOne_alert = 1;
    } 
    if (stepOne_typhoonAdvisory.checked) {
        console.log("stepOne_typhoonAdvisory :", stepOne_typhoonAdvisory.checked);
        stepOne_alert = 2;
    } 
    if (stepOne_typhoonWarning.checked) {
        console.log("stepOne_typhoonWarning :", stepOne_typhoonWarning.checked);
        stepOne_alert = 3;
    }
    

    // 2단계
    if (stepTwo_heavyRainAdvisory.checked === true) {
        console.log("stepTwo_heavyRainAdvisory :", stepTwo_heavyRainAdvisory.checked);
        stepTwo_alert = 0;
    } 
    if (stepTwo_heavyRainWarning.checked  === true) {
        stepTwo_alert = 1;
        console.log("stepTwo_heavyRainWarning :", stepTwo_heavyRainWarning.checked);
    } 
    if (stepTwo_typhoonAdvisory.checked  === true) {
        stepTwo_alert = 2;
        console.log("stepTwo_typhoonAdvisory :", stepTwo_typhoonAdvisory.checked);
    } 
    if (stepTwo_typhoonWarning.checked  === true) {
        stepTwo_alert = 3;
        console.log("stepTwo_typhoonWarning :", stepTwo_typhoonWarning.checked);
    }
    
    // 3단계
    if (stepThree_heavyRainAdvisory.checked  === true) {
        stepThree_alert = 0;
        console.log("stepThree_heavyRainAdvisory :", stepThree_heavyRainAdvisory.checked);
    } 
    if (stepThree_heavyRainWarning.checked === true) {
        stepThree_alert = 1;
        console.log("stepThree_heavyRainWarning :", stepThree_heavyRainWarning.checked);
    } 
    if (stepThree_typhoonAdvisory.checked === true) {
        stepThree_alert = 2;
        console.log("stepThree_typhoonAdvisory :", stepThree_typhoonAdvisory.checked);
    } 
    if (stepThree_typhoonWarning.checked === true) {
        stepThree_alert = 3;
        console.log("stepThree_typhoonWarning :", stepThree_typhoonWarning.checked);
    }



    // 1. 강우량 - 금일
    if (stepOne_todayCheck.checked === true) {
        console.log("stepOne_todayInput :", stepOne_todayInput.value);
    }
    // 2. 강우량 - 금일
    if (stepTwo_todayCheck.checked === true) {
        console.log("stepTwo_todayInput :", stepTwo_todayInput.value);
    }
    // 3. 강우량 - 금일
    if (stepThree_todayCheck.checked === true) {
        console.log("stepThree_todayInput :", stepThree_todayInput.value);
    }

    // 1. 강우량 -시간
    if (stepOne_timeCheck.checked === true) {
        console.log("stepOne_todayInput :", stepOne_timeInput.value);
    }
    // 2. 강우량 -시간
    if (stepTwo_timeCheck.checked === true) {
        console.log("stepTwo_todayInput :", stepTwo_timeInput.value);
    }
    // 3. 강우량 -시간
    if (stepThree_timeCheck.checked === true) {
        console.log("stepThree_todayInput :", stepThree_timeInput.value);
    }


    // 1. 강우량 -이동15분
    if (stepOne_move15.checked === true) {
        console.log("stepOne_move15numInput :", stepOne_move15numInput.value);
    }
    // 2. 강우량 -이동15분
    if (stepTwo_move15.checked === true) {
        console.log("stepTwo_move15numInput :", stepTwo_move15numInput.value);
    }
    // 3. 강우량 -이동15분
    if (stepThree_move15.checked === true) {
        console.log("stepThree_move15numInput :", stepThree_move15numInput.value);
    }


    // 1. 강우량 -이동60분
    if (stepOne_move60.checked === true) {
        console.log("stepOne_move60numInput :", stepOne_move60numInput.value);
    }
    // 2. 강우량 -이동60분
    if (stepTwo_move60.checked === true) {
        console.log("stepTwo_move60numInput :", stepTwo_move60numInput.value);
    }
    // 3. 강우량 -이동60분
    if (stepThree_move60.checked === true) {
        console.log("stepThree_move60numInput :", stepThree_move60numInput.value);
    }


    // 1. 강우량 -이동24시
    if (stepOne_move24h.checked === true) {
        console.log("stepOne_move24hNumInput :", stepOne_move24hNumInput.value);
    }
    // 2. 강우량 -이동24시
    if (stepTwo_move24h.checked === true) {
        console.log("stepTwo_move24hNumInput :", stepTwo_move24hNumInput.value);
    }
    // 3. 강우량 -이동24시
    if (stepThree_move24h.checked === true) {
        console.log("stepThree_move24hNumInput :", stepThree_move24hNumInput.value);
    }



    var stepOne_equipment;
    var stepTwo_equipment;
    var stepThree_equipment;

    //1단계 동작장비
    if (stepOne_circuitBreaker.checked  === true) {
        stepOne_equipment = 0;
        console.log("stepOne_circuitBreaker :", stepOne_circuitBreaker.checked);
    } 
    if (stepOne_broadcasting.checked  === true) {
        stepOne_equipment = 1;
        console.log("stepOne_broadcasting :", stepOne_broadcasting.checked);
    } 
    if (stepOne_scriptBoard.checked  === true) {
        stepOne_equipment = 2;
        console.log("stepOne_scriptBoard :", stepOne_scriptBoard.checked);
    } 
    if (stepOne_userAPPalarm.checked  === true) {
        stepOne_equipment = 3;
        console.log("stepOne_userAPPalarm :", stepOne_userAPPalarm.checked);
    } 
    if (stepOne_managerAPPalarm.checked  === true) {
        stepOne_equipment = 4;
        console.log("stepOne_managerAPPalarm :", stepOne_managerAPPalarm.checked);
    } 
    
    
    //2단계 동작장비
    if (stepTwo_circuitBreaker.checked  === true) {
        stepTwo_equipment = 0;
        console.log("stepTwo_circuitBreaker :", stepTwo_circuitBreaker.checked);
    } 
    if (stepTwo_broadcasting.checked  === true) {
        stepTwo_equipment = 1;
        console.log("stepTwo_broadcasting :", stepTwo_broadcasting.checked);
    } 
    if (stepTwo_scriptBoard.checked  === true) {
        stepTwo_equipment = 2;
        console.log("stepTwo_scriptBoard :", stepTwo_scriptBoard.checked);
    } 
    if (stepTwo_userAPPalarm.checked  === true) {
        stepTwo_equipment = 3;
        console.log("stepTwo_userAPPalarm :", stepTwo_userAPPalarm.checked);
    } 
    if (stepOne_managerAPPalarm.checked  === true) {
        stepTwo_equipment = 4;
        console.log("stepTwo_managerAPPalarm :", stepTwo_managerAPPalarm.checked);
    } 
    

    //3단계 동작장비
    if (stepThree_circuitBreaker.checked  === true) {
        stepThree_equipment = 0;
        console.log("stepThree_circuitBreaker :", stepThree_circuitBreaker.checked);
    } 
    if (stepThree_broadcasting.checked  === true) {
        stepThree_equipment = 1;
        console.log("stepThree_broadcasting :", stepThree_broadcasting.checked);
    } 
    if (stepThree_scriptBoard.checked  === true) {
        stepThree_equipment = 2;
        console.log("stepThree_scriptBoard :", stepThree_scriptBoard.checked);
    } 
    if (stepThree_userAPPalarm.checked  === true) {
        stepThree_equipment = 3;
        console.log("stepThree_userAPPalarm :", stepThree_userAPPalarm.checked);
    } 
    if (stepThree_managerAPPalarm.checked  === true) {
        stepThree_equipment = 4;
        console.log("stepThree_managerAPPalarm :", stepThree_managerAPPalarm.checked);
    }


});