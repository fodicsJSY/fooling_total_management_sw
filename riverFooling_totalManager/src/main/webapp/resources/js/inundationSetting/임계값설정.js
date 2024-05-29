
//임계값설정 페이지 로드시
document.addEventListener("DOMContentLoaded", function() {
    console.log("야호fhem");
    settingDataForword();
});



var zoneSelect = document.getElementById("zoneSelect");
var areaSelect = document.getElementById("areaSelect");


// 해제조건 라디오
var manual = document.getElementById("manual");
var autoWaterlevel = document.getElementById("autoWaterlevel");
var autoTime = document.getElementById("autoTime");
// 해제조건 input
var inputTime = document.getElementById("inputTime");





//1단계
var stepOne = document.getElementById("stepOne");

// 1단계침수
var stepOne_Input = document.getElementById("stepOne_Input");
// var stepOne_5cm = document.getElementById("stepOne_5cm");
// var stepOne_13cm = document.getElementById("stepOne_13cm");
// var stepOne_21cm = document.getElementById("stepOne_21cm");

// 1단계특보
// var stepOne_heavyRainAdvisory = document.getElementById("stepOne_heavyRainAdvisory");
// var stepOne_heavyRainWarning = document.getElementById("stepOne_heavyRainWarning");
// var stepOne_typhoonAdvisory = document.getElementById("stepOne_typhoonAdvisory");
// var stepOne_typhoonWarning = document.getElementById("stepOne_typhoonWarning");

// 1단계강우량
// const stepOne_rainfallCheck = document.querySelectorAll('.stepOne_rainfallCheck');
// const stepOne_numInput = document.querySelectorAll('.stepOne_numInput');

// 1단계동작장비
var stepOne_popup = document.getElementById("stepOne_popup");
var stepOne_sms = document.getElementById("stepOne_sms");
// var stepOne_circuitBreaker = document.getElementById("stepOne_circuitBreaker");
// var stepOne_broadcasting = document.getElementById("stepOne_broadcasting");
// var stepOne_scriptBoard = document.getElementById("stepOne_scriptBoard");
// var stepOne_userAPPalarm = document.getElementById("stepOne_userAPPalarm");
// var stepOne_managerAPPalarm = document.getElementById("stepOne_managerAPPalarm");





//2단계
var stepTwo = document.getElementById("stepTwo");

// 2단계침수
var stepTwo_Input = document.getElementById("stepTwo_Input");
// var stepTwo_5cm = document.getElementById("stepTwo_5cm");
// var stepTwo_13cm = document.getElementById("stepTwo_13cm");
// var stepTwo_21cm = document.getElementById("stepTwo_21cm");

// 2단계특보
// var stepTwo_heavyRainAdvisory = document.getElementById("stepTwo_heavyRainAdvisory");
// var stepTwo_heavyRainWarning = document.getElementById("stepTwo_heavyRainWarning");
// var stepTwo_typhoonAdvisory = document.getElementById("stepTwo_typhoonAdvisory");
// var stepTwo_typhoonWarning = document.getElementById("stepTwo_typhoonWarning");

// 2단계강우량
// const stepTwo_rainfallCheck = document.querySelectorAll('.stepTwo_rainfallCheck');
// const stepTwo_numInput = document.querySelectorAll('.stepTwo_numInput');

// 2단계동작장비
var stepTwo_popup = document.getElementById("stepTwo_popup");
var stepTwo_sms = document.getElementById("stepTwo_sms");
// var stepTwo_circuitBreaker = document.getElementById("stepTwo_circuitBreaker");
// var stepTwo_broadcasting = document.getElementById("stepTwo_broadcasting");
// var stepTwo_scriptBoard = document.getElementById("stepTwo_scriptBoard");
// var stepTwo_userAPPalarm = document.getElementById("stepTwo_userAPPalarm");
// var stepTwo_managerAPPalarm = document.getElementById("stepTwo_managerAPPalarm");





//3단계
var stepThree = document.getElementById("stepThree");

// 3단계침수
var stepThree_Input = document.getElementById("stepThree_Input");
// var stepThree_5cm = document.getElementById("stepThree_5cm");
// var stepThree_13cm = document.getElementById("stepThree_13cm");
// var stepThree_21cm = document.getElementById("stepThree_21cm");

// 3단계특보
// var stepThree_heavyRainAdvisory = document.getElementById("stepThree_heavyRainAdvisory");
// var stepThree_heavyRainWarning = document.getElementById("stepThree_heavyRainWarning");
// var stepThree_typhoonAdvisory = document.getElementById("stepThree_typhoonAdvisory");
// var stepThree_typhoonWarning = document.getElementById("stepThree_typhoonWarning");

// 3단계강우량
// const stepThree_rainfallCheck = document.querySelectorAll('.stepThree_rainfallCheck');
// const stepThree_numInput = document.querySelectorAll('.stepThree_numInput');

// 3단계동작장비
var stepThree_popup = document.getElementById("stepThree_popup");
var stepThree_sms = document.getElementById("stepThree_sms");
// var stepThree_circuitBreaker = document.getElementById("stepThree_circuitBreaker");
// var stepThree_broadcasting = document.getElementById("stepThree_broadcasting");
// var stepThree_scriptBoard = document.getElementById("stepThree_scriptBoard");
// var stepThree_userAPPalarm = document.getElementById("stepThree_userAPPalarm");
// var stepThree_managerAPPalarm = document.getElementById("stepThree_managerAPPalarm");





//4단계
var stepFour = document.getElementById("stepFour");

// 4단계침수
var stepFour_Input = document.getElementById("stepFour_Input");

// 4단계동작장비
var stepFour_popup = document.getElementById("stepFour_popup");
var stepFour_sms = document.getElementById("stepFour_sms");




//5단계
var stepFive = document.getElementById("stepFive");

// 5단계 침수
var stepFive_Input = document.getElementById("stepFive_Input");

// 5단계 동작장비
var stepFive_popup = document.getElementById("stepFive_popup");
var stepFive_sms = document.getElementById("stepFive_sms");






// 지구선택
let zoneSelectValue = zoneSelect.value;
console.log("zoneSelectValue : ", zoneSelectValue);

// 강우 센서
let areaSelectValue = areaSelect.value;
console.log("areaSelectValue : ", areaSelectValue);

// 단계 선택
var stepOneValue = stepOne.checked
var stepTwoValue = stepTwo.checked
var stepThreeValue = stepThree.checked
var stepFourValue = stepFour.checked
var stepFiveValue = stepFive.checked

// console.log("stepOne checkBox :", stepOne.value);
// console.log("stepTwo checkBox:", stepTwo.value);
// console.log("stepThree checkBox:", stepThree.value);
// console.log("stepFour checkBox:", stepFour.value);
// console.log("stepFive checkBox:", stepFive.value);






// //특보


// // 1단계
// // 선택된 체크박스 요소들을 선택합니다.
// var step1ww = document.querySelectorAll('input[name="stepOneWeatherWarning"]:checked');

// // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
// var step1wwValues  = [];
// step1ww .forEach(function(checkbox) {
//     step1wwValues.push(checkbox.value);
// });



// // 2단계

// // 선택된 체크박스 요소들을 선택합니다.
// var step2ww = document.querySelectorAll('input[name="stepTwoWeatherWarning"]:checked');

// // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
// var step2wwValues  = [];
// step2ww .forEach(function(checkbox) {
//     step2wwValues.push(checkbox.value);
// });




// // 3단계
// // 선택된 체크박스 요소들을 선택합니다.
// var step3ww = document.querySelectorAll('input[name="stepThreeWeatherWarning"]:checked');

// // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
// var step3wwValues  = [];
// step3ww .forEach(function(checkbox) {
//     step3wwValues.push(checkbox.value);
// });




// // 강우량

// // 1단계
// // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
// const stepOneRF_checkedValues = [];

// // 각 체크박스에 대해
// stepOne_rainfallCheck.forEach((checkbox, index) => {
//     // 만약 체크되어 있다면
//     if (checkbox.checked) {
//         // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
//         const inputId = checkbox.dataset.inputId;
//         const inputValue = document.getElementById(inputId).value;
//         stepOneRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
//     }
// });


// // 2단계
// // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
// const stepTwoRF_checkedValues = [];

// // 각 체크박스에 대해
// stepTwo_rainfallCheck.forEach((checkbox, index) => {
//     // 만약 체크되어 있다면
//     if (checkbox.checked) {
//         // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
//         const inputId = checkbox.dataset.inputId;
//         const inputValue = document.getElementById(inputId).value;
//         stepTwoRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
//     }
// });


// // 3단계
// // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
// const stepThreeRF_checkedValues = [];

// // 각 체크박스에 대해
// stepThree_rainfallCheck.forEach((checkbox, index) => {
//     // 만약 체크되어 있다면
//     if (checkbox.checked) {
//         // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
//         const inputId = checkbox.dataset.inputId;
//         const inputValue = document.getElementById(inputId).value;
//         stepThreeRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
//     }
// });






/********************* 저장버튼 클릭 시 시작 ****************************/
document.getElementById("saveBtn").addEventListener("click", ()=>{
    console.log("클릭");



    // 침수
    var stepOne_InputValue = stepOne_Input.value
    var stepTwo_InputValue = stepTwo_Input.value
    var stepThree_InputValue = stepThree_Input.value
    var stepFour_InputValue = stepFour_Input.value
    var stepFive_InputValue = stepFive_Input.value


    // console.log("stepOne_InputValue : ", stepOne_InputValue)
    // console.log("stepTwo_InputValue : ", stepTwo_InputValue)
    // console.log("stepThree_InputValue : ", stepThree_InputValue)
    // console.log("stepFour_InputValue : ", stepFour_InputValue)
    // console.log("stepFive_InputValue : ", stepFive_InputValue)



    
    // 해제조건 라디오
    // 선택된 라디오 버튼 요소 가져오기
    let selectedRadio = document.querySelector('input[name="alarmOff"]:checked');
    
    let selectedRadio_value = selectedRadio.value;
    console.log("stepOne선택된 라디오 버튼 값:", selectedRadio_value);

    // 해제조건 시간 input
    let inputTime_value = inputTime.value;




    // 1단계 동작장비
    // 선택된 체크박스 요소들을 선택합니다.
    var step1_equipment= document.querySelectorAll('input[name="stepOne_equipment"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step1_equipments  = [];
    step1_equipment .forEach(function(checkbox) {
        step1_equipments.push(checkbox.value);
    });



    //2단계 동작장비
    var step2_equipment= document.querySelectorAll('input[name="stepTwo_equipment"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step2_equipments  = [];
    step2_equipment .forEach(function(checkbox) {
        step2_equipments.push(checkbox.value);
    });


    //3단계 동작장비
    var step3_equipment= document.querySelectorAll('input[name="stepThree_equipment"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step3_equipments  = [];
    step3_equipment .forEach(function(checkbox) {
        step3_equipments.push(checkbox.value);
    });



    //4단계 동작장비
    var step4_equipment= document.querySelectorAll('input[name="stepFour_equipment"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step4_equipments  = [];
    step4_equipment .forEach(function(checkbox) {
        step4_equipments.push(checkbox.value);
    });



    //5단계 동작장비
    var step5_equipment= document.querySelectorAll('input[name="stepFive_equipment"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step5_equipments  = [];
    step5_equipment .forEach(function(checkbox) {
        step5_equipments.push(checkbox.value);
    });




    let stepOneChecked; 
    if(stepOne.checked == false){
        stepOneChecked = 0;
    }else{
        stepOneChecked = 1;
    }

    let stepTwoChecked;
    if(stepTwo.checked == false){
        stepTwoChecked = 0;
    }else{
        stepTwoChecked = 1;
    }

    let stepThreeChecked;
    if(stepThree.checked == false){
        stepThreeChecked = 0;
    }else{
        stepThreeChecked = 1;
    }
    
    
    let stepFourChecked;
    if(stepFour.checked == false){
        stepFourChecked = 0;
    }else{
        stepFourChecked = 1;
    }
    
    
    let stepFiveChecked; 
    if(stepFive.checked == false){
        stepFiveChecked = 0;
    }else{
        stepFiveChecked = 1;
    }

        
    var sendData={
        "stepFiveChecked":stepFiveChecked
        ,"stepFive_InputValue":stepFive_InputValue
        ,"step5_equipments":step5_equipments


        ,"stepFourChecked":stepFourChecked
        ,"stepFour_InputValue":stepFour_InputValue
        ,"step4_equipments":step4_equipments

        ,"stepThreeChecked":stepThreeChecked
        ,"stepThree_InputValue":stepThree_InputValue
        ,"step3_equipments":step3_equipments

        ,"stepTwoChecked":stepTwoChecked
        ,"stepTwo_InputValue":stepTwo_InputValue
        ,"step2_equipments":step2_equipments

        ,"stepOneChecked":stepOneChecked
        ,"stepOne_InputValue":stepOne_InputValue
        ,"step1_equipments":step1_equipments

        ,"selectedRadio_value":selectedRadio_value
        ,"inputTime_value":inputTime_value
    };



    // if(stepFiveChecked){
    //     console.log("zz");
    //     sendData["stepFiveChecked"] = stepFiveChecked;
    //     sendData["stepFive_selectedRadio_value"] = stepFive_selectedRadio_value;
    //     sendData["stepFive_InputTime_value"] = stepFive_InputTime_value;
    //     sendData["step5_equipments"] = step5_equipments;
    //     console.log("sendData : ", sendData);
    // }
    // if(stepFourChecked){
    //     sendData["stepFourChecked"] = stepFourChecked;
    //     sendData["stepFour_selectedRadio_value"] = stepFour_selectedRadio_value;
    //     sendData["stepFour_InputTime_value"] = stepFour_InputTime_value;
    //     sendData["step4_equipments"] = step4_equipments;
    //     console.log("sendData : ", sendData);
    // }
    // if(stepThreeChecked){
    //     console.log("zz");
    //     sendData["stepThreeChecked"] = stepThreeChecked;
    //     sendData["stepThree_selectedRadio_value"] = stepThree_selectedRadio_value;
    //     sendData["stepThree_InputTime_value"] = stepThree_InputTime_value;
    //     sendData["step3_equipments"] = step3_equipments;
    //     console.log("sendData : ", sendData);
    // }
    // if(stepTwoChecked){
    //     sendData["stepTwoChecked"] = stepTwoChecked;
    //     sendData["stepTwo_selectedRadio_value"] = stepTwo_selectedRadio_value;
    //     sendData["stepTwo_InputTime_value"] = stepTwo_InputTime_value;
    //     sendData["step2_equipments"] = step2_equipments;
    //     console.log("sendData : ", sendData);
    // }
    // if(stepOneChecked){
    //     console.log("zz");
    //     sendData["stepOneChecked"] = stepOneChecked;
    //     sendData["stepOne_selectedRadio_value"] = stepOne_selectedRadio_value;
    //     sendData["stepOne_InputTime_value"] = stepOne_InputTime_value;
    //     sendData["step1_equipments"] = step1_equipments;
    //     console.log("sendData : ", sendData);
    // }



    fetch("/inundationSetting/sendSettingValue", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {
                                "zoneSelectValue":zoneSelectValue
                                , "areaSelectValue":areaSelectValue
                                
                                , "sendData":sendData
                            } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );

        if(result == 1){
            Swal.fire("저장이 완료되었습니다!").then(() => {
                location.reload(); // 페이지 새로고침
            });
        }
        if(result == 0){
            Swal.fire("저장에 실패했습니다.");
        }

    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
});
/********************* 저장버튼 클릭 시 끝 ****************************/



/*********************페이지로드 시 설정정보 가져오기 시작**********************/

function settingDataForword(){
    console.log("함수");

    fetch("/inundationSetting/Settingdata", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {
                                "zoneSelectValue":zoneSelectValue
                                ,"areaSelectValue":areaSelectValue
                            } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );
        
        var settingDataList = result.settingDataList;
        console.log("settingDataList", settingDataList );
        console.log("settingDataList.length", settingDataList.length );

        for(let x = 0; x < settingDataList.length; x++){
            let alarmLevel = settingDataList[x].alarmLevel;
             // 동작장비
            let alarmAction = settingDataList[x].alarmAction;
            
            // 동작여부
            let alarmCondition = settingDataList[x].alarmCondition;
            
            // 해제조건
            let alarmOffCondition = settingDataList[x].alarmOffCondition;
            if(alarmOffCondition == 0){
                autoWaterlevel.checked = true;
            }
            if(alarmOffCondition == -1){
                manual.checked = true;
            }
            if(alarmOffCondition >= 1){
                autoTime.checked = true;
                inputTime.value = alarmOffCondition;
            }
            console.log("alarmOffCondition", alarmOffCondition);

            // 1단계
            // console.log("alarmLevel", alarmLevel);
            if(alarmLevel == 1 ){
                if(alarmCondition == 1){
                    // 단계
                    stepOne.checked = true;
                }
                if(alarmCondition == 0){
                    // 단계
                    stepOne.checked = false;
                }

                // 침수
                stepOne_Input.value = settingDataList[x].alarmValue;
                // console.log("stepOne_Input.value", stepOne_Input.value);

                // 동작장비
                if(alarmAction == 0){
                    stepOne_popup.checked = false;
                    stepOne_sms.checked = false;
                }else if(alarmAction == 1){
                    stepOne_popup.checked = true;
                    stepOne_sms.checked = false;
                }else{
                    stepOne_popup.checked = true;
                    stepOne_sms.checked = true;
                }
            }

            // 2단계
            if(alarmLevel == 2 ){
                if(alarmCondition == 1){
                    // 단계
                    stepTwo.checked = true;
                }
                if(alarmCondition == 0){
                    // 단계
                    stepTwo.checked = false;
                }

                // 침수
                stepTwo_Input.value = settingDataList[x].alarmValue;
                // console.log("stepThree_Input.value", stepThree_Input.value);

                // 동작장비
                if(alarmAction == 0){
                    stepTwo_popup.checked = false;
                    stepTwo_sms.checked = false;
                }else if(alarmAction == 1){
                    stepTwo_popup.checked = true;
                    stepTwo_sms.checked = false;
                }else{
                    stepTwo_popup.checked = true;
                    stepTwo_sms.checked = true;
                }
            }

            // 3단계
            if(alarmLevel == 3 ){
                if(alarmCondition == 1){
                    // 단계
                    stepThree.checked = true;
                }
                if(alarmCondition == 0){
                    // 단계
                    stepThree.checked = false;
                }

                // 침수
                stepThree_Input.value = settingDataList[x].alarmValue;
                // console.log("stepThree_Input.value", stepThree_Input.value);

                // 동작장비
                if(alarmAction == 0){
                    stepThree_popup.checked = false;
                    stepThree_sms.checked = false;
                }else if(alarmAction == 1){
                    stepThree_popup.checked = true;
                    stepThree_sms.checked = false;
                }else{
                    stepThree_popup.checked = true;
                    stepThree_sms.checked = true;
                }
            }

            // 4단계
            if(alarmLevel == 4 ){
                if(alarmCondition == 1){
                    // 단계
                    stepFour.checked = true;
                }
                if(alarmCondition == 0){
                    // 단계
                    stepFour.checked = false;
                }

                // 침수
                stepFour_Input.value = settingDataList[x].alarmValue;
                // console.log("stepFour_Input.value", stepFour_Input.value);

                // 동작장비
                if(alarmAction == 0){
                    stepFour_popup.checked = false;
                    stepFour_sms.checked = false;
                }else if(alarmAction == 1){
                    stepFour_popup.checked = true;
                    stepFour_sms.checked = false;
                }else{
                    stepFour_popup.checked = true;
                    stepFour_sms.checked = true;
                }
            }

            // 5단계
            if(alarmLevel == 5 ){
                if(alarmCondition == 1){
                    // 단계
                    stepFive.checked = true;
                }
                if(alarmCondition == 0){
                    // 단계
                    stepFive.checked = false;
                }

                // 침수
                stepFive_Input.value = settingDataList[x].alarmValue;
                // console.log("stepFive_Input.value", stepFive_Input.value);

                // 동작장비
                if(alarmAction == 0){
                    stepFive_popup.checked = false;
                    stepFive_sms.checked = false;
                }else if(alarmAction == 1){
                    stepFive_popup.checked = true;
                    stepFive_sms.checked = false;
                }else{
                    stepFive_popup.checked = true;
                    stepFive_sms.checked = true;
                }
            }

        }

    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}


/*********************페이지로드 시 설정정보 가져오기 끝**********************/