function searchData(){
    // console.log("searchData");

    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let monthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthValue < 10 ? "0" + monthValue : monthValue.toString();
    let dayValue = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;
    let selectDayValue = dayValue < 10 ? "0" + dayValue : dayValue.toString();

    // if(selectDayValue){ //연월일
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        // console.log("selectDayValue : ", selectDayValue);
        let occuDay = selectYearValue + selectMonthValue + selectDayValue;
        // console.log("occuDay : ", occuDay);


        fetch("/dataSearch/getData", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            credentials: "include",
            body : JSON.stringify( {
                                    "baseDate": occuDay
                                    } ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            console.log("result", result );
    
            if(result == "0"){
                Swal.fire("데이터가 없습니다.");
            }else{
    
                let data = result.results;
                console.log("data", data);
        
                r_dayMakeTable(data);
            }
    
    
            
        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            console.log("err : ", err);
        }); // 예외 발생 시 처리할 내용을 작성




    // }else if(selectMonthValue){ //연월
    //     // console.log("selectYearValue : ", selectYearValue);
    //     // console.log("selectMonthValue : ", selectMonthValue);
    //     let occuMonth = selectYearValue + "0"  + selectMonthValue;
    //     console.log("occuMonth : ", occuMonth);

    //     fetch("/sendMonth_rainfall", { 
    //         method : "POST", 
    //         headers: {"Content-Type": "application/json;"}, 
    //         body : JSON.stringify( {"occuMonth":occuMonth} ) 
    //     })
    //     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    //     .then((result) => {
    //         // console.log("result", result );
    
    //         data = result;
    
    //         // 차트호출
    //         // lineChart(data);
    //         // makeTable(data);
    //         // liveInfomation(data);
    //         // openDounutChart(data);
    //         // closeDounutChart(data);
    
            
    //     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    //     .catch( err => {
    //         // console.log("err : ", err);
    //     }); // 예외 발생 시 처리할 내용을 작성
    


    // }else if(selectYearValue){ //연
    //     // console.log("selectYearValue : ", selectYearValue);
    //     let occuYear = selectYearValue;
    //     console.log("occuYear : ", occuYear);

    //     fetch("/sendYear_rainfall", { 
    //         method : "POST", 
    //         headers: {"Content-Type": "application/json;"}, 
    //         body : JSON.stringify( {"occuYear":occuYear} ) 
    //     })
    //     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    //     .then((result) => {
    //         // console.log("result", result );
    
    //         data = result;
    
    //         // 차트호출
    //         // lineChart(data);
    //         // makeTable(data);
    //         // liveInfomation(data);
    //         // openDounutChart(data);
    //         // closeDounutChart(data);
    
            
    //     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    //     .catch( err => {
    //         // console.log("err : ", err);
    //     }); // 예외 발생 시 처리할 내용을 작성
    
    // }else{ //시작연월일~종료연월일
    //     startYearValue = document.getElementById("startYear").value;
    //     startMonthValue = document.getElementById("startMonth").value;
    //     startDayValue = document.getElementById("startDay").value;
    
    //     endYearValue = document.getElementById("endYear").value;
    //     endMonthValue = document.getElementById("endMonth").value;
    //     endDayValue = document.getElementById("endDay").value;
        
    //     // console.log("startYearValue : ", startYearValue);
    //     // console.log("startMonthValue : ", startMonthValue);
    //     // console.log("startDayValue : ", startDayValue);
        
    //     // console.log("endYearValue : ", endYearValue);
    //     // console.log("endMonthValue : ", endMonthValue);
    //     // console.log("endDayValue : ", endDayValue);

    //     let areaValue = document.getElementById("area").value;
    //     console.log("areaValue : ", areaValue);

    //     let startOccuDate = startYearValue + "0" +startMonthValue + "0" +startDayValue;
    //     let endOccuDate = endYearValue + "0" +endMonthValue + "0" +endDayValue;
    //     console.log("startOccuDate : ", startOccuDate);
    //     console.log("endOccuDate : ", endOccuDate);


    //     fetch("/sendDate_rainfall", { 
    //         method : "POST", 
    //         headers: {"Content-Type": "application/json;"}, 
    //         body : JSON.stringify( {"startOccuDate": startOccuDate, "endOccuDate":endOccuDate, "areaValue": areaValue} ) 
    //     })
    //     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    //     .then((result) => {
    //         // console.log("result", result );
    
    //         data = result;
    
    //         // 차트호출
    //         // lineChart(data);
    //         // makeTable(data);
    //         // liveInfomation(data);
    //         // openDounutChart(data);
    //         // closeDounutChart(data);
    
            
    //     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    //     .catch( err => {
    //         // console.log("err : ", err);
    //     }); // 예외 발생 시 처리할 내용을 작성
    
    // }
    








}