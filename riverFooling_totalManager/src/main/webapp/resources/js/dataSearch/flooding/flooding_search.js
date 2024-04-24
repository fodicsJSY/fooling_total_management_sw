async function searchData() {

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
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        // console.log("selectDayValue : ", selectDayValue);
        let occuDay = selectYearValue + selectMonthValue + selectDayValue;
        console.log("occuDay : ", occuDay);
        let areaValue = document.getElementById("area") ? document.getElementById("area").value : null;
        // console.log("areaValue : ", areaValue);

        if (selectDayValue && areaValue) { // 시간
            // 10분
            fetch("/send10min_flooding", {
                method: "POST",
                headers: { "Content-Type": "application/json;" },
                body: JSON.stringify({ "occuDay": occuDay, "areaValue": areaValue })
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
                .catch(err => {
                    // console.log("err : ", err);
                }); // 예외 발생 시 처리할 내용을 작성
        } else {
            // 일간
            // fetch("/sendDay_flooding", { 
            //     method : "POST", 
            //     headers: {"Content-Type": "application/json;"}, 
            //     body : JSON.stringify( {"occuDay":occuDay} ) 
            // })
            // .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
            // .then((result) => {
            //     // console.log("result", result );

            //     data = result;

            //     // 차트호출
            //     // lineChart(data);
            //     // makeTable(data);
            //     // liveInfomation(data);
            //     // openDounutChart(data);
            //     // closeDounutChart(data);


            // }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
            // .catch( err => {
            //     // console.log("err : ", err);
            // }); // 예외 발생 시 처리할 내용을 작성



            try {
                const sendDay_WLG_Resp = await fetch("/sendDay_waterLevelGauge", {
                    method: "POST",
                    headers: { "Content-Type": "application/json;" },
                    body: JSON.stringify({
                        // "occuDay":occuDay,
                        "serverip": "172.16.20.101",
                        "query": "SELECT EVENT_NO, DEVICE_ID, DATE_TIME, WATER_LEVEL FROM tb_water_level_hist",
                        "id": "",
                        "pw": ""
                    })
                }).then(resp => resp.json());

                const sendDay_floodingResp = await fetch("/sendDay_flooding", {
                    method: "POST",
                    headers: { "Content-Type": "application/json;" },
                    body: JSON.stringify({
                        // "occuDay":occuDay,
                        "serverip": "172.16.20.101",
                        "query": "SELECT SENSOR_NO, SENSOR_ID, SENSOR_LOCATION, ALARM_WATER_LEVEL, CONTROL_BOARD_TYPE, CONTROL_BOARD_IP, CONTROL_BOARD_PORT, ALARM_OFF_CONDITION, MACHING_CODE, USESMS FROM tb_water_level_sensor_info",
                        "id": "",
                        "pw": ""
                    })
                }).then(resp => resp.json());

                console.log("sendDay_WLG_Resp", sendDay_WLG_Resp);
                console.log("sendDay_floodingResp", sendDay_floodingResp);


                // fetchData 함수를 호출하고 결과를 처리하는 예제
                // dayMakeTable(sendDay_WLG_Resp, sendDay_floodingResp);

            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }






        }



    } else if (selectMonthValue) { //연월
        // console.log("selectYearValue : ", selectYearValue);
        // console.log("selectMonthValue : ", selectMonthValue);
        let occuMonth = selectYearValue + "0" + selectMonthValue;
        console.log("occuMonth : ", occuMonth);

        fetch("/sendMonth_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "occuMonth": occuMonth })
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
            .catch(err => {
                // console.log("err : ", err);
            }); // 예외 발생 시 처리할 내용을 작성




    } else if (selectYearValue) { //연
        // console.log("selectYearValue : ", selectYearValue);

        let occuYear = selectYearValue;
        console.log("occuYear : ", occuYear);

        fetch("/sendYear_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "occuYear": occuYear })
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
            .catch(err => {
                // console.log("err : ", err);
            }); // 예외 발생 시 처리할 내용을 작성




    } else { //시작연월일~종료연월일
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

        let startOccuDate = startYearValue + "0" + startMonthValue + "0" + startDayValue;
        let endOccuDate = endYearValue + "0" + endMonthValue + "0" + endDayValue;

        let areaValue = document.getElementById("area").value;
        // console.log("areaValue : ", areaValue);

        let kindValue = document.getElementById("kind").value;
        // console.log("kindValue : ", kindValue);

        fetch("/sendDate_flooding", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify({ "startOccuDate": startOccuDate, "endOccuDate": endOccuDate, "areaValue": areaValue, "kindValue": kindValue })
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
            .catch(err => {
                // console.log("err : ", err);
            }); // 예외 발생 시 처리할 내용을 작성

    }

}