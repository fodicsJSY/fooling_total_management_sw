var saveBtn25_3 = document.getElementById("saveBtn25_3");
var saveBtn331_1 = document.getElementById("saveBtn331_1");
var saveBtn426_20 = document.getElementById("saveBtn426_20");
var saveBtn998_7 = document.getElementById("saveBtn998_7");

let gate25_3 = document.getElementById("gate25_3");
let light25_3 = document.getElementById("light25_3");
let sound25_3 = document.getElementById("sound25_3");

let gate331_1 = document.getElementById("gate331_1");
let light331_1 = document.getElementById("light331_1");
let sound331_1 = document.getElementById("sound331_1");

let gate426_20 = document.getElementById("gate426_20");
let light426_20 = document.getElementById("light426_20");
let sound426_20 = document.getElementById("sound426_20");

let gate998_7 = document.getElementById("gate998_7");
let light998_7 = document.getElementById("light998_7");
let sound998_7 = document.getElementById("sound998_7");


let savedIP;
//차단기 수동제어 로드시
document.addEventListener("DOMContentLoaded", function() {
    savedIP = getIPFromLocalStorage().breakerIP;
    console.log("savedIP : ", savedIP);
    selectBreaker(savedIP);
    // forwardBreaker(savedIP);

});


function selectBreaker(savedIP){
    console.log("savedIP", savedIP);
    //"172.16.20.101"
    fetch("/cameraCode", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        credentials: "include",
        body : JSON.stringify( {
                                "serverip" : savedIP,
                                // "query" : "SELECT camera_code, gate_cmd FROM TB_CIRCUIT_BREAKER_LOG",
                                "query" : "SELECT camera_code, status, camera_name FROM TB_CIRCUIT_BREAKER_CONFIG",
        } )
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );

        var data = result.result
        console.log("data", data);
        // forwardBreaker(data)
        breakerMakeTable(data);
        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}


// // 값 하드코딩해서 전달한 것은 성공~!
// function forwardBreakerEx(data){
//     console.log("forwardBreaker data", data);
//     //"172.16.20.101"
//     fetch("/breakerStatus", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         credentials: "include",
//         body : JSON.stringify( {
//                                 // "data": data
//                                 "camera_code": "CDF183F9920240508_000000",
//                                 "command": 0
//         } ) 
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         console.log("result", result );

//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성
// }



function forwardBreaker(data){
    console.log("forwardBreaker data", data);
    //"172.16.20.101"
    fetch("/breakerStatus", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        credentials: "include",
        body : JSON.stringify( {
                                "data": data
        } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );


    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}




// //후탄리 25-3
// saveBtn25_3.addEventListener("click", ()=>{

//     let gate25_3Value = gate25_3.value;
//     let light25_3Value = light25_3.value;
//     let sound25_3Value = sound25_3.value;

//     // console.log("클릭");
//     console.log("gate25_3Value : ", gate25_3Value);
//     console.log("light25_3Value : ", light25_3Value);
//     console.log("sound25_3Value : ", sound25_3Value);


//     let gate25_3change;
//     let light25_3change;
//     let sound25_3change;

//     if(gate25_3Value =="open"){
//         gate25_3change = 1;
//     }else{
//         gate25_3change = 0;
//     }

//     if(light25_3Value =="Turn_on"){
//         light25_3change = 1;
//     }else{
//         light25_3change = 0;
//     }

//     if(sound25_3Value =="Turn_on"){
//         sound25_3change =1;
//     }else{
//         sound25_3change =0;
//     }


//     fetch("/send25_3", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         body : JSON.stringify( {"gate25_3change":gate25_3change, "light25_3change":light25_3change, "sound25_3change":sound25_3change} ) 
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         // console.log("result", result );

//         data = result;

//         // 차트호출
//         // lineChart(data);

        
//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성
// });




// //후탄리 331-1
// saveBtn331_1.addEventListener("click", ()=>{

//     let gate331_1Value = gate331_1.value;
//     let light331_1Value = light331_1.value;
//     let sound331_1Value = sound331_1.value;

//     let gate331_1change;
//     let light331_1change;
//     let sound331_1change;

//     if(gate331_1Value =="open"){
//         gate331_1change = 1;
//     }else{
//         gate331_1change = 0;
//     }

//     if(light331_1Value =="Turn_on"){
//         light331_1change = 1;
//     }else{
//         light331_1change = 0;
//     }

//     if(sound331_1Value =="Turn_on"){
//         sound331_1change =1;
//     }else{
//         sound331_1change =0;
//     }

//     // console.log("클릭");
//     // console.log("gate331_1Value : ", gate331_1Value);
//     // console.log("light331_1Value : ", light331_1Value);
//     // console.log("sound331_1Value : ", sound331_1Value);

//     fetch("/send331_1", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         body : JSON.stringify( {"gate331_1change":gate331_1change, "light331_1change":light331_1change, "sound331_1change":sound331_1change} ) 
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         // console.log("result", result );

//         data = result;

//         // 차트호출
//         // lineChart(data);


        
//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성
    
// });




// //판운리 426-20
// saveBtn426_20.addEventListener("click", ()=>{

//     let gate426_20Value = gate426_20.value;
//     let light426_20Value = light426_20.value;
//     let sound426_20Value = sound426_20.value;

//     let gate426_20change;
//     let light426_20change;
//     let sound426_20change;

//     if(gate426_20Value =="open"){
//         gate426_20change = 1;
//     }else{
//         gate426_20change = 0;
//     }

//     if(light426_20Value =="Turn_on"){
//         light426_20change = 1;
//     }else{
//         light426_20change = 0;
//     }

//     if(sound426_20Value =="Turn_on"){
//         sound426_20change =1;
//     }else{
//         sound426_20change =0;
//     }


//     // console.log("클릭");
//     // console.log("gate426_20Value : ", gate426_20Value);
//     // console.log("light426_20Value : ", light426_20Value);
//     // console.log("sound426_20Value : ", sound426_20Value);

//     fetch("/send426_20", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         body : JSON.stringify( {"gate426_20change":gate426_20change, "light426_20change":light426_20change, "sound426_20change":sound426_20change} ) 
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         // console.log("result", result );

//         data = result;

//         // 차트호출
//         // lineChart(data);


        
//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성
// });




// //광전리 998-7
// saveBtn998_7.addEventListener("click", ()=>{

//     let gate998_7Value = gate998_7.value;
//     let light998_7Value = light998_7.value;
//     let sound998_7Value = sound998_7.value;

//     let gate998_7change;
//     let light998_7change;
//     let sound998_7change;

//     if(gate998_7Value =="open"){
//         gate998_7change = 1;
//     }else{
//         gate998_7change = 0;
//     }

//     if(light998_7Value =="Turn_on"){
//         light998_7change = 1;
//     }else{
//         light998_7change = 0;
//     }

//     if(sound998_7Value =="Turn_on"){
//         sound998_7change =1;
//     }else{
//         sound998_7change =0;
//     }



//     // console.log("클릭");
//     // console.log("gate998_7Value : ", gate998_7Value);
//     // console.log("light998_7Value : ", light998_7Value);
//     // console.log("sound998_7Value : ", sound998_7Value);

//     fetch("/send998_7", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         body : JSON.stringify( {"gate998_7Value":gate998_7Value, "light998_7Value":light998_7Value, "sound998_7Value":sound998_7Value} ) 
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         // console.log("result", result );

//         data = result;

//         // 차트호출
//         // lineChart(data);


        
//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성
// });