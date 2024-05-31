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
let savePORT;
//차단기 수동제어 로드시
document.addEventListener("DOMContentLoaded", function() {
    savedIP = getIP_FromLocalStorage().saveIP;
    console.log("savedIP : ", savedIP);
    savePORT = getPORT_FromLocalStorage().savePORT;
    console.log("savePORT : ", savePORT);
    selectBreaker();
    // forwardBreaker(savedIP);

});


function selectBreaker(){
    //"172.16.20.101"
    fetch("/equipmentControl/cameraCode", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        credentials: "include",
        body : JSON.stringify( {
                                "serverip" : savedIP,
                                "port" : savePORT,
                                "user_id" : loginId,
                                "user_pw" : loginPw,
                                "query" : "SELECT camera_code, status, camera_name, gate_code FROM TB_CIRCUIT_BREAKER_CONFIG",
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
    fetch("/equipmentControl/breakerStatus", { 
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




