var zoneSelect = document.getElementById("zoneSelect");
var areaSelect = document.getElementById("areaSelect");

//1단계

var stepOne = document.getElementById("stepOne");

var stepOne_5cm = document.getElementById("stepOne_5cm");
var stepOne_13cm = document.getElementById("stepOne_13cm");
var stepOne_21cm = document.getElementById("stepOne_21cm");

var stepOne_heavyRainAdvisory = document.getElementById("stepOne_heavyRainAdvisory");
var stepOne_heavyRainWarning = document.getElementById("stepOne_heavyRainWarning");
var stepOne_typhoonAdvisory = document.getElementById("stepOne_typhoonAdvisory");
var stepOne_typhoonWarning = document.getElementById("stepOne_typhoonWarning");

var stepOne_todayCheck = document.getElementById("stepOne_todayCheck");
var stepOne_todayInput = document.getElementById("stepOne_todayInput");

var stepOne_move15 = document.getElementById("stepOne_move15");
var stepOne_move15numInput = document.getElementById("stepOne_move15numInput");
var stepOne_move60 = document.getElementById("stepOne_move60");
var stepOne_move60numInput = document.getElementById("stepOne_move60numInput");
var stepOne_move24h = document.getElementById("stepOne_move24h");
var stepOne_move24hNumInput = document.getElementById("stepOne_move24hNumInput");

var stepOne_circuitBreaker = document.getElementById("stepOne_circuitBreaker");
var stepOne_broadcasting = document.getElementById("stepOne_broadcasting");
var stepOne_scriptBoard = document.getElementById("stepOne_scriptBoard");
var stepOne_userAPPalarm = document.getElementById("stepOne_userAPPalarm");
var stepOne_managerAPPalarm = document.getElementById("stepOne_managerAPPalarm");





//2단계

var stepTwo = document.getElementById("stepTwo");

var stepTwo_5cm = document.getElementById("stepTwo_5cm");
var stepTwo_13cm = document.getElementById("stepTwo_13cm");
var stepTwo_21cm = document.getElementById("stepTwo_21cm");

var stepTwo_heavyRainAdvisory = document.getElementById("stepTwo_heavyRainAdvisory");
var stepTwo_heavyRainWarning = document.getElementById("stepTwo_heavyRainWarning");
var stepTwo_typhoonAdvisory = document.getElementById("stepTwo_typhoonAdvisory");
var stepTwo_typhoonWarning = document.getElementById("stepTwo_typhoonWarning");

var stepTwo_todayCheck = document.getElementById("stepTwo_todayCheck");
var stepTwo_todayInput = document.getElementById("stepTwo_todayInput");

var stepTwo_move15 = document.getElementById("stepTwo_move15");
var stepTwo_move15numInput = document.getElementById("stepTwo_move15numInput");
var stepTwo_move60 = document.getElementById("stepTwo_move60");
var stepTwo_move60numInput = document.getElementById("stepTwo_move60numInput");
var stepTwo_move24h = document.getElementById("stepTwo_move24h");
var stepTwo_move24hNumInput = document.getElementById("stepTwo_move24hNumInput");

var stepTwo_circuitBreaker = document.getElementById("stepTwo_circuitBreaker");
var stepTwo_broadcasting = document.getElementById("stepTwo_broadcasting");
var stepTwo_scriptBoard = document.getElementById("stepTwo_scriptBoard");
var stepTwo_userAPPalarm = document.getElementById("stepTwo_userAPPalarm");
var stepTwo_managerAPPalarm = document.getElementById("stepTwo_managerAPPalarm");



//3단계

var stepThree = document.getElementById("stepThree");

var stepThree_5cm = document.getElementById("stepThree_5cm");
var stepThree_13cm = document.getElementById("stepThree_13cm");
var stepThree_21cm = document.getElementById("stepThree_21cm");


var stepThree_heavyRainAdvisory = document.getElementById("stepThree_heavyRainAdvisory");
var stepThree_heavyRainWarning = document.getElementById("stepThree_heavyRainWarning");
var stepThree_typhoonAdvisory = document.getElementById("stepThree_typhoonAdvisory");
var stepThree_typhoonWarning = document.getElementById("stepThree_typhoonWarning");

var stepThree_todayCheck = document.getElementById("stepThree_todayCheck");
var stepThree_todayInput = document.getElementById("stepThree_todayInput");

var stepThree_move15 = document.getElementById("stepThree_move15");
var stepThree_move15numInput = document.getElementById("stepThree_move15numInput");
var stepThree_move60 = document.getElementById("stepThree_move60");
var stepThree_move60numInput = document.getElementById("stepThree_move60numInput");
var stepThree_move24h = document.getElementById("stepThree_move24h");
var stepThree_move24hNumInput = document.getElementById("stepThree_move24hNumInput");

var stepThree_circuitBreaker = document.getElementById("stepThree_circuitBreaker");
var stepThree_broadcasting = document.getElementById("stepThree_broadcasting");
var stepThree_scriptBoard = document.getElementById("stepThree_scriptBoard");
var stepThree_userAPPalarm = document.getElementById("stepThree_userAPPalarm");
var stepThree_managerAPPalarm = document.getElementById("stepThree_managerAPPalarm");



//저장버튼
document.getElementById("saveBtn").addEventListener("click", ()=>{
    console.log("클릭");




    // 선택된 라디오 버튼 요소 가져오기
    var stepOne_selectedRadio = document.querySelector('input[name="stepOneRadio"]:checked');
    var stepTwo_selectedRadio = document.querySelector('input[name="stepTwoRadio"]:checked');
    var stepThree_selectedRadio = document.querySelector('input[name="stepThreeRadio"]:checked');





        console.log("stepOne checkBox :", stepOne.value);
        console.log("stepTwo checkBox:", stepTwo.value);
        console.log("stepThree checkBox:", stepThree.value);

        console.log("stepOne선택된 라디오 버튼 값:", stepOne_selectedRadio.value);
        console.log("stepTwo선택된 라디오 버튼 값:", stepTwo_selectedRadio.value);
        console.log("stepThree선택된 라디오 버튼 값:", stepThree_selectedRadio.value);

    let zoneSelectValue = zoneSelect.value;
    let areaSelectValue = areaSelect.value;

    console.log("zoneSelectValue : ", zoneSelectValue);
    console.log("areaSelectValue : ", areaSelectValue);
});