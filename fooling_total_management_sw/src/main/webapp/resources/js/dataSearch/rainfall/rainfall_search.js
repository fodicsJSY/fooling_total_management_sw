function searchData(){
    // console.log("클릭");

    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let selectMonthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectDayValue = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;

    if(selectDayValue){ //연월일
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        // console.log("selectDayValue : ", selectDayValue);
        let occuDay = selectYearValue + "0" +selectMonthValue + "0" +selectDayValue;
        console.log("occuDay : ", occuDay);



        fetch("/sendDay_rainfall", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            body : JSON.stringify( {"occuDay":occuDay} ) 
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




    }else if(selectMonthValue){ //연월
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        let occuMonth = selectYearValue + "0"  + selectMonthValue;
        console.log("occuMonth : ", occuMonth);

        fetch("/sendMonth_rainfall", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            body : JSON.stringify( {"occuMonth":occuMonth} ) 
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
    


    }else if(selectYearValue){ //연
        // console.log("selectYearValue : ", selectYearValue);
        let occuYear = selectYearValue;
        console.log("occuYear : ", occuYear);

        fetch("/sendYear_rainfall", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            body : JSON.stringify( {"occuYear":occuYear} ) 
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
    
    }else{ //시작연월일~종료연월일
        startYearValue = document.getElementById("startYear").value;
        startMonthValue = document.getElementById("startMonth").value;
        startDayValue = document.getElementById("startDay").value;
    
        endYearValue = document.getElementById("endYear").value;
        endMonthValue = document.getElementById("endMonth").value;
        endDayValue = document.getElementById("endDay").value;
        
        // console.log("startYearValue : ", startYearValue);
        // console.log("startMonthValue : ", startMonthValue);
        // console.log("startDayValue : ", startDayValue);
        
        // console.log("endYearValue : ", endYearValue);
        // console.log("endMonthValue : ", endMonthValue);
        // console.log("endDayValue : ", endDayValue);

        let areaValue = document.getElementById("area").value;
        console.log("areaValue : ", areaValue);

        let startOccuDate = startYearValue + "0" +startMonthValue + "0" +startDayValue;
        let endOccuDate = endYearValue + "0" +endMonthValue + "0" +endDayValue;
        console.log("startOccuDate : ", startOccuDate);
        console.log("endOccuDate : ", endOccuDate);


        fetch("/sendDate_rainfall", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            body : JSON.stringify( {"startOccuDate": startOccuDate, "endOccuDate":endOccuDate, "areaValue": areaValue} ) 
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
    
    }
    








}