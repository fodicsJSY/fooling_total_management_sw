

var loginFrm = document.getElementById("loginFrm"); //로그인 폼

loginFrm.addEventListener("submit", ()=>{
    event.preventDefault(); // 폼이 실제로 제출되는 것을 막음
    
    var user_id = document.querySelector("#loginFrm input[name='user_id']").value;
    var user_pw = document.querySelector("#loginFrm input[name='user_pw']").value;


    console.log("클릭");
    // console.log("loginFrm : ", loginFrm);
    // console.log("user_id : ", user_id);
    // console.log("user_pw : ", user_pw);



    // JSON 데이터를 서버에 전송
    sendJsonData(user_id, user_pw);

});


function sendJsonData(user_id, user_pw) {
    // var xhr = new XMLHttpRequest();
    // var url = "/userLogin"; // 해당 URL에 JSON 데이터를 전송
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         // 서버로부터의 응답 처리
    //         console.log("서버 응답:");
    //         console.log(xhr.responseText);
    //     }
    // };

    // var jsonDataString = JSON.stringify(jsonData);
    // xhr.send(jsonDataString);



    fetch("/userLogin", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        credentials: "include",
        body : JSON.stringify( {
                                "user_id": user_id,
                                "user_pw": user_pw,
                                "serverip" : "172.16.0.93",
                                "query": "UPDATE TB_GATE_CONTROL_GIS_FVRT_INFO SET HOME_FLAG = CASE WHEN FVRT_CODE = 'FVRT_CODE' THEN 1 ELSE 0 END WHERE 1 = 1"
                                } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );

        // data = result;
        // console.log("data : ", data);
        
        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}