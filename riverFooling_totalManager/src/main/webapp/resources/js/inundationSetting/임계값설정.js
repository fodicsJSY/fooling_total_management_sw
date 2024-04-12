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
const stepOne_rainfallCheck = document.querySelectorAll('.stepOne_rainfallCheck');
const stepOne_numInput = document.querySelectorAll('.stepOne_numInput');


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
const stepTwo_rainfallCheck = document.querySelectorAll('.stepTwo_rainfallCheck');
const stepTwo_numInput = document.querySelectorAll('.stepTwo_numInput');


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
const stepThree_rainfallCheck = document.querySelectorAll('.stepThree_rainfallCheck');
const stepThree_numInput = document.querySelectorAll('.stepThree_numInput');



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
    let stepOne_selectedRadio = document.querySelector('input[name="stepOneFlooding"]:checked');
    let stepTwo_selectedRadio = document.querySelector('input[name="stepTwoFlooding"]:checked');
    let stepThree_selectedRadio = document.querySelector('input[name="stepThreeFlooding"]:checked');
    console.log("stepOne선택된 라디오 버튼 값:", stepOne_selectedRadio.value);
    console.log("stepTwo선택된 라디오 버튼 값:", stepTwo_selectedRadio.value);
    console.log("stepThree선택된 라디오 버튼 값:", stepThree_selectedRadio.value);

    let stepOne_selectedRadio_value = stepOne_selectedRadio.value;
    let stepTwo_selectedRadio_value = stepTwo_selectedRadio.value;
    let stepThree_selectedRadio_value = stepThree_selectedRadio.value;




    //특보


    // 1단계
    // 선택된 체크박스 요소들을 선택합니다.
    var step1ww = document.querySelectorAll('input[name="stepOneWeatherWarning"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step1wwValues  = [];
    step1ww .forEach(function(checkbox) {
        step1wwValues.push(checkbox.value);
    });
    


    // 2단계

    // 선택된 체크박스 요소들을 선택합니다.
    var step2ww = document.querySelectorAll('input[name="stepTwoWeatherWarning"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step2wwValues  = [];
    step2ww .forEach(function(checkbox) {
        step2wwValues.push(checkbox.value);
    });
    


    
    // 3단계
    // 선택된 체크박스 요소들을 선택합니다.
    var step3ww = document.querySelectorAll('input[name="stepThreeWeatherWarning"]:checked');

    // 선택된 체크박스의 값을 수집하여 배열로 저장합니다.
    var step3wwValues  = [];
    step3ww .forEach(function(checkbox) {
        step3wwValues.push(checkbox.value);
    });




    // 강우량

    // 1단계
    // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
    const stepOneRF_checkedValues = [];

    // 각 체크박스에 대해
    stepOne_rainfallCheck.forEach((checkbox, index) => {
        // 만약 체크되어 있다면
        if (checkbox.checked) {
            // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
            const inputId = checkbox.dataset.inputId;
            const inputValue = document.getElementById(inputId).value;
            stepOneRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
        }
    });


    // 2단계
    // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
    const stepTwoRF_checkedValues = [];

    // 각 체크박스에 대해
    stepTwo_rainfallCheck.forEach((checkbox, index) => {
        // 만약 체크되어 있다면
        if (checkbox.checked) {
            // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
            const inputId = checkbox.dataset.inputId;
            const inputValue = document.getElementById(inputId).value;
            stepTwoRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
        }
    });


    // 3단계
    // 체크된 상태인 체크박스들의 값을 수집하여 저장할 객체
    const stepThreeRF_checkedValues = [];

    // 각 체크박스에 대해
    stepThree_rainfallCheck.forEach((checkbox, index) => {
        // 만약 체크되어 있다면
        if (checkbox.checked) {
            // 해당 체크박스에 대응하는 입력(input)의 값을 수집하여 저장
            const inputId = checkbox.dataset.inputId;
            const inputValue = document.getElementById(inputId).value;
            stepThreeRF_checkedValues.push({ checkboxValue: checkbox.value, inputValue: inputValue });
        }
    });




    //1단계 동작장비
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



    
    fetch("/sendSettingValue", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"zoneSelectValue":zoneSelectValue
                                , "areaSelectValue":areaSelectValue
                                , "stepOne_selectedRadio_value":stepOne_selectedRadio_value
                                , "stepTwo_selectedRadio_value":stepTwo_selectedRadio_value
                                , "stepThree_selectedRadio_value":stepThree_selectedRadio_value


                                , "step1wwValues":step1wwValues
                                , "step2wwValues":step2wwValues
                                , "step3wwValues":step3wwValues

                                , "stepOneRF_checkedValues":stepOneRF_checkedValues
                                , "stepTwoRF_checkedValues":stepTwoRF_checkedValues
                                , "stepThreeRF_checkedValues":stepThreeRF_checkedValues
                                
                                , "step1_equipments":step1_equipments
                                , "step2_equipments":step2_equipments
                                , "step3_equipments":step3_equipments
                            } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        data = result;

        // 차트호출
        // lineChart(data);
        // makeTable(data);
        // liveInfomation(data);
        // openDounutChart(data);
        // closeDounutChart(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
});