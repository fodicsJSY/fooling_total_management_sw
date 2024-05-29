
async function minFlooding_searchData() {
    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let monthString = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthString < 10 ? "0" + monthString : monthString.toString();

    let dayString = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;
    let selectDayValue = dayString < 10 ? "0" + dayString : dayString.toString();



    let occuDay = selectYearValue + selectMonthValue + selectDayValue;
    console.log("occuDay : " + occuDay);
    
    let areaValue = document.getElementById("area") ? document.getElementById("area").value : null;
    console.log("areaValue : " + areaValue);

    fetch("/dataSearch/send10min_flooding", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"occuDay":occuDay, "areaValue":areaValue} ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("min_flooding result", result );

        data = result.min_floodingList;
        console.log("data : ", data );
        console.log("data.length : ", data.length );

        if(data.length == 0){
            console.log("야호");
            var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = "데이터 없음"; // Clear previous data
        }{
            // fetchData 함수를 호출하고 결과를 처리하는 예제
            var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = ""; // Clear previous data

            minMakeTable(data);
        }

    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성

}




async function dayFlooding_searchData() {
    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let monthString = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthString < 10 ? "0" + monthString : monthString.toString();

    let dayString = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;
    let selectDayValue = dayString < 10 ? "0" + dayString : dayString.toString();



    let occuDay = selectYearValue + selectMonthValue + selectDayValue;
    console.log("occuDay : " + occuDay);

    fetch("/dataSearch/sendDay_flooding", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"occuDay":occuDay} ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("sendDay_flooding result", result );

        data = result.day_floodingList;
        console.log("data : ", data );
        
        
        console.log("data.length : ", data.length );

        if(data.length == 0){
            console.log("야호");
            var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = "데이터 없음"; // Clear previous data
        }{
            // fetchData 함수를 호출하고 결과를 처리하는 예제
        var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = ""; // Clear previous data

        dayMakeTable(data);
        }

    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성

}


async function monthFlooding_searchData() {
    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let monthString = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthString < 10 ? "0" + monthString : monthString.toString();

    let occuMonth = selectYearValue + selectMonthValue;
    console.log("occuMonth : " + occuMonth);


    fetch("/dataSearch/sendMonth_flooding", {
        method: "POST",
        headers: { "Content-Type": "application/json;" },
        body: JSON.stringify({ "occuMonth": occuMonth })
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("sendMonth_flooding result", result );

        data = result.month_floodingList;
        console.log("data : ", data );
        
        // var tableContainer = document.querySelector(".tableContainer");
        
        console.log("data.length : ", data.length );
        if(data.length == 0){
            console.log("야호");
            var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = "데이터 없음"; // Clear previous data
        }{
            // fetchData 함수를 호출하고 결과를 처리하는 예제
            monthMakeTable(data);
        }


    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch(err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}




async function yearFlooding_searchData() {
    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let occuYear = selectYearValue;
    console.log("occuYear : " + occuYear);


    fetch("/dataSearch/sendYear_flooding", {
        method: "POST",
        headers: { "Content-Type": "application/json;" },
        body: JSON.stringify({ "occuYear": occuYear })
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("sendYear_flooding result", result );

        data = result.year_floodingList;
        console.log("data : ", data );
        
        // var tableContainer = document.querySelector(".tableContainer");
        
        console.log("data.length : ", data.length );
        if(data.length == 0){
            console.log("야호");
            var tableContainer = document.querySelector(".tableContainer");
            tableContainer.innerHTML = ""; // Clear previous data
        }{
            // fetchData 함수를 호출하고 결과를 처리하는 예제
            yearMakeTable(data);
        }


    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch(err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}






async function dateFlooding_searchData() {
    let startYearValue = document.getElementById("startYear").value;
    let startMonthValue = document.getElementById("startMonth").value;
    let startDayValue = document.getElementById("startDay").value;

    let endYearValue = document.getElementById("endYear").value;
    let endMonthValue = document.getElementById("endMonth").value;
    let endDayValue = document.getElementById("endDay").value;

    let startOccuDate = startYearValue + "0" + startMonthValue + "0" + startDayValue;
    let endOccuDate = endYearValue + "0" + endMonthValue + "0" + endDayValue;    
    let areaValue = document.getElementById("area").value;
    let kindValue = document.getElementById("kind").value;
    console.log("startOccuDate : " + startOccuDate);
    console.log("endOccuDate : " + endOccuDate);
    console.log("areaValue : " + areaValue);
    console.log("kindValue : " + kindValue);


    fetch("/dataSearch/sendDate_flooding", {
        method: "POST",
        headers: { "Content-Type": "application/json;" },
        body: JSON.stringify({ "startOccuDate": startOccuDate, "endOccuDate": endOccuDate, "areaValue": areaValue, "kindValue": kindValue })
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("sendDate_flooding result", result );

        console.log("kindValue 여기 : ", kindValue);

        if(kindValue == "flooding"){
            data = result.date_floodingList01;
            console.log("data : ", data );
            console.log("data.length : ", data.length );
            if(data.length == 0){
                console.log("야호");
                var tableContainer = document.querySelector(".tableContainer");
                tableContainer.innerHTML = ""; // Clear previous data
            }{
                // fetchData 함수를 호출하고 결과를 처리하는 예제
                dateMakeFloodingTable(data);
            }
        }else{
            data = result.date_floodingList02;
            console.log("data : ", data );
            if(data.length == 0){
                console.log("야호");
                var tableContainer = document.querySelector(".tableContainer");
                tableContainer.innerHTML = ""; // Clear previous data
            }{
                // fetchData 함수를 호출하고 결과를 처리하는 예제
                dateMakeWaterLevelTable(data);
            }
        }


    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch(err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}






async function searchData1() {

    savedIP = getIPFromLocalStorage().dataIP;
    console.log("savedIP : ", savedIP);

    console.log("클릭");
    // yearSelect 요소의 값을 가져와서 콘솔에 출력합니다.


    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;

    let monthString = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectMonthValue = monthString < 10 ? "0" + monthString : monthString.toString();

    let dayString = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;
    let selectDayValue = dayString < 10 ? "0" + dayString : dayString.toString();

    let startYearValue;
    let startMonthValue;
    let startDayValue;

    let endYearValue;
    let endMonthValue;
    let endDayValue;




    if (selectDayValue) { //연월일
        console.log("selectYearValue : ", selectYearValue);
        console.log("selectMonthValue : ", selectMonthValue);
        console.log("selectDayValue : ", selectDayValue);

        let occuDay = selectYearValue + selectMonthValue + selectDayValue;
        console.log("occuDay : ", occuDay);
        let areaValue = document.getElementById("area") ? document.getElementById("area").value : null;
        // console.log("areaValue : ", areaValue);

        if (selectDayValue && areaValue) { // 시간
            // 10분
            fetch("/dataSearch/send10min_flooding", {
                method: "POST",
                headers: { "Content-Type": "application/json;" },
                body: JSON.stringify({ "occuDay": occuDay, "areaValue": areaValue })
            })
            .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
            .then((result) => {
                // console.log("result", result );

                data = result;



            }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
            .catch(err => {
                // console.log("err : ", err);
            }); // 예외 발생 시 처리할 내용을 작성
        } else {
            // // 일간
            // fetch("/sendDay_flooding", { 
            //     method : "POST", 
            //     headers: {"Content-Type": "application/json;"}, 
            //     body : JSON.stringify( {"occuDay":occuDay} ) 
            // })
            // .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
            // .then((result) => {
            //     console.log("sendDay_flooding result", result );

            //     data = result.day_floodingList;
            //     console.log("data : ", data );
                
            //     // var tableContainer = document.querySelector(".tableContainer");
                
            //     console.log("data.length : ", data.length );
            //     if(data.length == 0){
            //         console.log("야호");
            //         var tableContainer = document.querySelector(".tableContainer");
            //         tableContainer.innerHTML = ""; // Clear previous data
            //     }{
            //         // fetchData 함수를 호출하고 결과를 처리하는 예제
            //         dayMakeTable(data);
            //     }

            // }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
            // .catch( err => {
            //     // console.log("err : ", err);
            // }); // 예외 발생 시 처리할 내용을 작성
        }



    } else if (selectMonthValue) { //연월
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        let occuMonth = selectYearValue + "0" + selectMonthValue;
        console.log("occuMonth : ", occuMonth);

        fetch("/dataSearch/sendMonth_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "occuMonth": occuMonth })
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            console.log("sendMonth_flooding result", result );

            data = result;



        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch(err => {
            // console.log("err : ", err);
        }); // 예외 발생 시 처리할 내용을 작성




    } else if (selectYearValue) { //연
        // console.log("selectYearValue : ", selectYearValue);

        let occuYear = selectYearValue;
        console.log("occuYear : ", occuYear);

        fetch("/dataSearch/sendYear_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "occuYear": occuYear })
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result", result );

            data = result;



        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch(err => {
            // console.log("err : ", err);
        }); // 예외 발생 시 처리할 내용을 작성




    } else { //시작연월일~종료연월일
        startYearValue = document.getElementById("startYear").value;
        startMonthValue = addLeadingZero(document.getElementById("startMonth").value);
        startDayValue = addLeadingZero(document.getElementById("startDay").value);

        endYearValue = document.getElementById("endYear").value;
        endMonthValue = addLeadingZero(document.getElementById("endMonth").value);
        endDayValue = addLeadingZero(document.getElementById("endDay").value);

        console.log("startYearValue : ", startYearValue);
        console.log("startMonthValue : ", startMonthValue);
        console.log("startDayValue : ", startDayValue);

        console.log("endYearValue : ", endYearValue);
        console.log("endMonthValue : ", endMonthValue);
        console.log("endDayValue : ", endDayValue);

        let startOccuDate = startYearValue + startMonthValue + startDayValue;
        let endOccuDate = endYearValue + endMonthValue + endDayValue;

        let areaValue = document.getElementById("area").value;
        console.log("areaValue : ", areaValue);

        let kindValue = document.getElementById("kind").value;
        console.log("kindValue : ", kindValue);

        fetch("/dataSearch/sendDate_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "startOccuDate": startOccuDate, "endOccuDate": endOccuDate, "areaValue": areaValue, "kindValue": kindValue })
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            // console.log("result", result );

            data = result;




        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch(err => {
            // console.log("err : ", err);
        }); // 예외 발생 시 처리할 내용을 작성

    }

}


function addLeadingZero(value) {
    return value.length == 1 ? '0' + value : value;
}