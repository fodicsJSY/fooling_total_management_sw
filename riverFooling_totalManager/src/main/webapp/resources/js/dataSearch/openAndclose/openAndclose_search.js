
function dayOAC_searchData(){
    console.log("클릭");
    // yearSelect 요소의 값을 가져와서 콘솔에 출력합니다.

    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let monthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthValue < 10 ? "0" + monthValue : monthValue.toString();
    let dayValue = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;
    let selectDayValue = dayValue < 10 ? "0" + dayValue : dayValue.toString();

    let occuDay = selectYearValue + '-' + selectMonthValue + '-' + selectDayValue;
            console.log("occuDay : ", occuDay);
            
            console.log("savedIP : ", savedIP);
            console.log("savePORT : ", savePORT);
            console.log("loginId : ", loginId);
            console.log("loginPw : ", loginPw);

    fetch("/dataSearch/sendDay_OAC", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {
                            "serverip" : savedIP,
                            "port" : savePORT,
                            "user_id" : loginId,
                            "user_pw" : loginPw,
                            "query" : "SELECT  BCONF.camera_name, DATEPART(HOUR, BLOG.log_time) AS 시간, BLOG.gate_cmd FROM TB_CIRCUIT_BREAKER_LOG BLOG LEFT OUTER JOIN dbo.TB_CIRCUIT_BREAKER_CONFIG BCONF ON BLOG.camera_code = BCONF.camera_code WHERE log_date = '"+occuDay+"' ORDER BY BCONF.camera_name, BLOG.log_time",
        } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );
        // console.log("result.result", result.result );

        var data = result.result
        dayMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}


// 월별 개폐정보
function monthOAC_searchData(){

    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let monthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthValue < 10 ? "0" + monthValue : monthValue.toString();

    let occuMonth = selectYearValue + '-' + selectMonthValue ;
    // console.log("occuMonth : ", occuMonth);
    
    // console.log("savedIP : ", savedIP);
    // console.log("savePORT : ", savePORT);
    // console.log("loginId : ", loginId);
    // console.log("loginPw : ", loginPw);


    fetch("/dataSearch/sendMonth_OAC", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {
            "serverip" : savedIP,
            "port" : savePORT,
            "user_id" : loginId,
            "user_pw" : loginPw,
            "query" : "SELECT  BCONF.camera_name, SUBSTRING(CONVERT(VARCHAR(10), log_date, 120), 9, 2), BLOG.gate_cmd FROM TB_CIRCUIT_BREAKER_LOG BLOG LEFT OUTER JOIN dbo.TB_CIRCUIT_BREAKER_CONFIG BCONF ON BLOG.camera_code = BCONF.camera_code WHERE LEFT(CONVERT(VARCHAR(7), log_date, 23), 7) = '"+occuMonth+"' ORDER BY BCONF.camera_name, BLOG.log_time"

        } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );

        var data = result.result;

        // 차트호출
        monthMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}


// 연도별 개폐정보
function yearOAC_searchData(){
    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let occuYear = selectYearValue ;
    // console.log("occuYear : ", occuYear);
    
    // console.log("savedIP : ", savedIP);
    // console.log("savePORT : ", savePORT);
    // console.log("loginId : ", loginId);
    // console.log("loginPw : ", loginPw);


    fetch("/dataSearch/sendYear_OAC", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {
            "serverip" : savedIP,
            "port" : savePORT,
            "user_id" : loginId,
            "user_pw" : loginPw,
            "query" : "SELECT  BCONF.camera_name, SUBSTRING(CONVERT(VARCHAR(10), log_date, 120), 6, 2), BLOG.gate_cmd FROM TB_CIRCUIT_BREAKER_LOG BLOG LEFT OUTER JOIN dbo.TB_CIRCUIT_BREAKER_CONFIG BCONF ON BLOG.camera_code = BCONF.camera_code WHERE LEFT(CONVERT(VARCHAR(7), log_date, 23), 4) = '"+occuYear+"' ORDER BY BCONF.camera_name, BLOG.log_time"

        } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        data = result.result;

        // 차트호출
        yearMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성

}








// 기간별 개폐정보
function dateOAC_searchData(){
        console.log("요기요기");
        // console.log("selectedKind: ", selectedKind);
        // console.log("selectedArea: ", selectedArea);

        let startYearValue = document.getElementById("startYear") ? document.getElementById("startYear").value : null;
        let startMonth = document.getElementById("startMonth") ? document.getElementById("startMonth").value : null;
        let startMonthValue = startMonth < 10 ? "0" + startMonth : startMonth.toString();
        let startDay = document.getElementById("startDay") ? document.getElementById("startDay").value : null;
        let startDayValue = startDay < 10 ? "0" + startDay : startDay.toString();


        let endYearValue = document.getElementById("endYear") ? document.getElementById("endYear").value : null;
        let endMonth = document.getElementById("endMonth") ? document.getElementById("endMonth").value : null;
        let endMonthValue = endMonth < 10 ? "0" + endMonth : endMonth.toString();
        let endDay = document.getElementById("endDay") ? document.getElementById("endDay").value : null;
        let endDayValue = endDay < 10 ? "0" + endDay : endDay.toString();


        
        // console.log("startYearValue : ", startYearValue);
        // console.log("startMonthValue : ", startMonthValue);
        // console.log("startDayValue : ", startDayValue);
        
        // console.log("endYearValue : ", endYearValue);
        // console.log("endMonthValue : ", endMonthValue);
        // console.log("endDayValue : ", endDayValue);


        let startOccuDate = startYearValue + startMonthValue + startDayValue;
        let endOccuDate = endYearValue + endMonthValue + endDayValue;
        // console.log("startOccuDate : ", startOccuDate);
        // console.log("endOccuDate : ", endOccuDate);

        let kindValue = document.getElementById("kind").value;
        // console.log("kindValue : ", kindValue);

        let cmd_num = 0;
        if(kindValue == 'open'){
            cmd_num = 1;
        }
        // console.log("cmd_num : ", cmd_num);


        let areaValue = document.getElementById("area").value;
        // console.log("areaValue : ", areaValue);



        fetch("/dataSearch/sendDate_OAC", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            body : JSON.stringify( {
                "serverip" : savedIP,
                "port" : savePORT,
                "user_id" : loginId,
                "user_pw" : loginPw,
                // "query" : "SELECT  log_date, SUBSTRING(CONVERT(VARCHAR(10), log_time, 120), 1, 2), BLOG.gate_cmd FROM TB_CIRCUIT_BREAKER_LOG BLOG LEFT OUTER JOIN dbo.TB_CIRCUIT_BREAKER_CONFIG BCONF ON BLOG.camera_code = BCONF.camera_code WHERE log_date BETWEEN '2024-06-10' AND '2024-06-11' AND BLOG.gate_cmd = 1 AND BCONF.camera_name = 'test1' ORDER BY BCONF.camera_name, BLOG.log_time"
                "query" : "SELECT  log_date, SUBSTRING(CONVERT(VARCHAR(10), log_time, 120), 1, 2), BLOG.gate_cmd FROM TB_CIRCUIT_BREAKER_LOG BLOG LEFT OUTER JOIN dbo.TB_CIRCUIT_BREAKER_CONFIG BCONF ON BLOG.camera_code = BCONF.camera_code WHERE log_date BETWEEN '"+startOccuDate+"' AND '"+endOccuDate+"' AND BLOG.gate_cmd = "+cmd_num+" AND BCONF.camera_name = '"+areaValue+"'"
            
            } ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            console.log("result", result );
            
            var data = result.result;
            var datalength = data.length;
            // console.log("datalength", datalength );


            // console.log("cmd_num reult: ", cmd_num);
            if(cmd_num == 1){
                dateMakeOpenTable(data, datalength);
            }


            if(cmd_num == 0){
                dateMakeCloseTable(data, datalength);
            }
    
        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
        }); // 예외 발생 시 처리할 내용을 작성

}

