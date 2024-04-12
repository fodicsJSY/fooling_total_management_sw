

today();
// 오늘 날짜 문자열 생성
function today(){
    var base_date_today = year + month + day;
    
    console.log("base_date_today : ", base_date_today);

    // 최종 시간 문자열 생성
    var base_time = hours + minutes;
    var fcstTime = hours +'00';
    console.log("base_time : ", base_time);
    todayAreaXY(base_date_today, base_time, fcstTime);

}






/* nx값과 ny값 구하기 시작 */
function todayAreaXY(date, time, fcstTime){
    console.log("date : ", date);
    console.log("time : ", time);
    var areaNames = document.querySelectorAll('.areaName');

    areaNames.forEach(function(area) {
        var areaNameText = area.textContent;
        // console.log(areaNameText);

        switch(areaNameText){
            case "영월군":
                // console.log("영월군");
                getRainfall(date, time, "86", "119");
                getTodayRainfall(date, fcstTime, "86", "119");
                break;
            case "영월읍":
                // console.log("영월읍");
                getRainfall(date, time, "86", "119");
                getTodayRainfall(date, fcstTime, "86", "119");
                break;
            case "상동읍":
                // console.log("상동읍");
                getRainfall(date, time, "92", "118");
                getTodayRainfall(date, fcstTime, "92", "118");
                break;
            case "산솔면":
                // console.log("산솔면");
                getRainfall(date, time, "89", "118");
                getTodayRainfall(date, fcstTime, "89", "118");
                break;
            case "김삿갓면":
                // console.log("김삿갓면");
                getRainfall(date, time, "88", "118");
                getTodayRainfall(date, fcstTime, "88", "118");
                break;
            case "북면":
                // console.log("북면");
                getRainfall(date, time, "85", "120");
                getTodayRainfall(date, fcstTime, "85", "120");
                break;
            case "남면":
                // console.log("남면");
                getRainfall(date, time, "85", "119");
                getTodayRainfall(date, fcstTime, "85", "119");
                break;
            case "한반도면":
                // console.log("한반도면");
                getRainfall(date, time, "83", "120");
                getTodayRainfall(date, fcstTime, "83", "120");
                break;
            case "주천면":
                // console.log("주천면");
                getRainfall(date, time, "82", "121");
                getTodayRainfall(date, fcstTime, "82", "121");
                break;
            case "무릉도원면":
                // console.log("무릉도원면");
                getRainfall(date, time, "82", "121");
                getTodayRainfall(date, fcstTime, "82", "121");
                break;
        }
    });
}
/* nx값과 ny값 구하기 끝(구현중)*/


//초단기실황조회(현재)
function getRainfall(date, time, nx, ny){
    console.log("date, time, nx, ny : ", date, time, nx, ny);

    const rainServiceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
    const rainPageNo = "1";
    const rainNumOfRows = "1000";
    const rainDataType = "JSON";

    let getRainUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey="+rainServiceKey+"&pageNo="+rainPageNo+"&numOfRows="+rainNumOfRows+"&dataType="+rainDataType+"&base_date="+date+"&base_time="+time+"&nx="+nx+"&ny="+ny+"";

    fetch(getRainUrl,{
            method:"GET",
            headers: {Accept: "application/json"},
        }
    )
    .then((response) => {return response.json();})
    .then((data) => {
        console.log("getRain", data);
        // 여기에서 wfSv 내용을 출력합니다.
        const rainContent = data.response.body.items.item[2];
        const nx = data.response.body.items.item[2].nx;
        const ny = data.response.body.items.item[2].ny;
        const category = data.response.body.items.item[2].category;
        const obsrValue = data.response.body.items.item[2].obsrValue;

        // console.log("rain Content:", rainContent);
        // 영월군
        if(nx == 86 && ny == 119 ){
            document.getElementById("YG-CureentTime").innerText = obsrValue;
        }

        // 영월읍
        if(nx == 86 && ny == 119 ){
            document.getElementById("YE-CureentTime").innerText = obsrValue;
        }

        // 상동읍
        if(nx == 92 && ny == 118 ){
            document.getElementById("SE-CureentTime").innerText = obsrValue;
        }

        // 산솔면
        if(nx == 89 && ny == 118 ){
            document.getElementById("SM-CureentTime").innerText = obsrValue;
        }

        // 김삿갓면
        if(nx == 88 && ny == 118 ){
            document.getElementById("GM-CureentTime").innerText = obsrValue;
        }

        // 북면
        if(nx == 85 && ny == 120 ){
            document.getElementById("BM-CureentTime").innerText = obsrValue;
        }

        // 남면
        if(nx == 85 && ny == 119 ){
            document.getElementById("NM-CureentTime").innerText = obsrValue;
        }

        // 한반도면
        if(nx == 83 && ny == 120 ){
            document.getElementById("HM-CureentTime").innerText = obsrValue;
        }

        // 주천면
        if(nx == 82 && ny == 121 ){
            document.getElementById("JM-CureentTime").innerText = obsrValue;
        }

        // 무릉도원면
        if(nx == 82 && ny == 121 ){
            document.getElementById("MM-CureentTime").innerText = obsrValue;
        }

    })
    .catch(error => console.error('Error:', error));
}



//단기예보조회(오늘)
function getTodayRainfall(date, time, nx, ny){
    console.log("date, time, nx, ny : ", date, time, nx, ny);

    const rainServiceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
    const rainPageNo = "1";
    const rainNumOfRows = "1000";
    const rainDataType = "JSON";

    // let getYesterdayRainUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey="+rainServiceKey+"&numOfRows="+rainNumOfRows+"&pageNo="+rainPageNo+"&base_date="+date+"&base_time="+time+"&nx="+nx+"&ny="+ny+"";
    let getTodayRainUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey="+rainServiceKey+"&numOfRows="+rainNumOfRows+"&pageNo="+rainNumOfRows+"&dataType="+rainDataType+"&base_date="+date+"&base_time=0500&nx="+nx+"&ny="+ny+"";

    fetch(getTodayRainUrl,{
            method:"GET",
            headers: {Accept: "application/json"},
        }
    )
    .then((response) => {return response.json();})
    .then((data) => {
        // console.log("getYesterdayRain", data);
        // 여기에서 wfSv 내용을 출력합니다.
        const todayRainContent = data.response.body.items.item;
        console.log("todayRainContent", todayRainContent);
        // console.log("rainContent.length", rainContent.length);

        todayRainContent.forEach(function (item) {
            // console.log("todayitem", item);/
            if(item.fcstDate == date){
                if(item.category == 'PCP'){
                    // console.log("todayitem.category", item.category);
                    // console.log("todayitem.fcstTime", item.fcstTime);
                    if(item.fcstTime == time){
                        // console.log("todayitem.fcstTime", item.fcstTime);
                        // 영월군
                        if(item.nx == 86 && item.ny == 119 ){
                            // console.log("todayitem.baseDate", item.baseDate);
                            document.getElementById("YGtoday").innerText = item.fcstValue;
                        }

                        // 영월읍
                        if(item.nx == 86 && item.ny == 119 ){
                            document.getElementById("YEtoday").innerText = item.fcstValue;
                        }

                        // 상동읍
                        if(item.nx == 92 && item.ny == 118 ){
                            document.getElementById("SEtoday").innerText = item.fcstValue;
                        }

                        // 산솔면
                        if(item.nx == 89 && item.ny == 118 ){
                            document.getElementById("SMtoday").innerText = item.fcstValue;
                        }

                        // 김삿갓면
                        if(item.nx == 88 && item.ny == 118 ){
                            document.getElementById("GMtoday").innerText = item.fcstValue;
                        }

                        // 북면
                        if(item.nx == 85 && item.ny == 120 ){
                            document.getElementById("BMtoday").innerText = item.fcstValue;
                        }

                        // 남면
                        if(item.nx == 85 && item.ny == 119 ){
                            document.getElementById("NMtoday").innerText = item.fcstValue;
                        }

                        // 한반도면
                        if(item.nx == 83 && item.ny == 120 ){
                            document.getElementById("HMtoday").innerText = item.fcstValue;
                        }

                        // 주천면
                        if(item.nx == 82 && item.ny == 121 ){
                            document.getElementById("JMtoday").innerText = item.fcstValue;
                        }

                        // 무릉도원면
                        if(item.nx == 82 && item.ny == 121 ){
                            document.getElementById("MMtoday").innerText = item.fcstValue;
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error:', error));
}




yesterday();

var base_date_yesterday
// 어제 날짜 계산
function yesterday(){
    let yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);
    
    year = yesterday.getFullYear();
    month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
    day = yesterday.getDate().toString().padStart(2, "0");
    
    base_date_yesterday = year + month + day;
    // console.log("base_date_yesterday : ", base_date_yesterday);


    // 최종 시간 문자열 생성
    var base_time = hours + '00';
    // console.log("base_time : ", base_time);
    yesterdayAreaXY(base_date_yesterday, base_time)
}



/* nx값과 ny값 구하기 시작 */
function yesterdayAreaXY(date, time){
    console.log("date : ", date);
    // console.log("time : ", time);
    var areaNames = document.querySelectorAll('.areaName');

    areaNames.forEach(function(area) {
        var areaNameText = area.textContent;
        // console.log(areaNameText);

        switch(areaNameText){
            case "영월군":
                // console.log("영월군");
                getYesterdayRainfall(date, time, "86", "119");
                break;
            case "영월읍":
                // console.log("영월읍");
                getYesterdayRainfall(date, time, "86", "119");
                break;
            case "상동읍":
                // console.log("상동읍");
                getYesterdayRainfall(date, time, "92", "118");
                break;
            case "산솔면":
                // console.log("산솔면");
                getYesterdayRainfall(date, time, "89", "118");
                break;
            case "김삿갓면":
                // console.log("김삿갓면");
                getYesterdayRainfall(date, time, "88", "118");
                break;
            case "북면":
                // console.log("북면");
                getYesterdayRainfall(date, time, "85", "120");
                break;
            case "남면":
                // console.log("남면");
                getYesterdayRainfall(date, time, "85", "119");
                break;
            case "한반도면":
                // console.log("한반도면");
                getYesterdayRainfall(date, time, "83", "120");
                break;
            case "주천면":
                // console.log("주천면");
                getYesterdayRainfall(date, time, "82", "121");
                break;
            case "무릉도원면":
                // console.log("무릉도원면");
                getYesterdayRainfall(date, time, "82", "121");
                break;
        }
    });
}
/* nx값과 ny값 구하기 끝(구현중)*/



//단기예보조회(어제)
function getYesterdayRainfall(date, time, nx, ny){
    console.log("date, time, nx, ny : ", date, time, nx, ny);

    const rainServiceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
    const rainPageNo = "1";
    const rainNumOfRows = "1000";
    const rainDataType = "JSON";

    // let getYesterdayRainUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey="+rainServiceKey+"&numOfRows="+rainNumOfRows+"&pageNo="+rainPageNo+"&base_date="+date+"&base_time="+time+"&nx="+nx+"&ny="+ny+"";
    let getYesterdayRainUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey="+rainServiceKey+"&numOfRows="+rainNumOfRows+"&pageNo="+rainNumOfRows+"&dataType="+rainDataType+"&base_date="+date+"&base_time=0500&nx="+nx+"&ny="+ny+"";

    fetch(getYesterdayRainUrl,{
            method:"GET",
            headers: {Accept: "application/json"},
        }
    )
    .then((response) => {return response.json();})
    .then((data) => {
        // console.log("getYesterdayRain", data);
        // 여기에서 wfSv 내용을 출력합니다.
        const rainContent = data.response.body.items.item;
        console.log("rainContent", rainContent);
        // console.log("rainContent.length", rainContent.length);

        rainContent.forEach(function (item) {
            // console.log("item", item);
            if(item.fcstDate == date){
                if(item.category == 'PCP'){
                    // console.log("item.category", item.category);
                    // console.log("item.fcstTime", item.fcstTime);
                    if(item.fcstTime == time){
                        // console.log("item.fcstTime", item.fcstTime);
                        // 영월군
                        if(item.nx == 86 && item.ny == 119 ){
                            console.log("item.baseDate", item.baseDate);
                            document.getElementById("YGyesterday").innerText = item.fcstValue;
                        }

                        // 영월읍
                        if(item.nx == 86 && item.ny == 119 ){
                            document.getElementById("YEyesterday").innerText = item.fcstValue;
                        }

                        // 상동읍
                        if(item.nx == 92 && item.ny == 118 ){
                            document.getElementById("SEyesterday").innerText = item.fcstValue;
                        }

                        // 산솔면
                        if(item.nx == 89 && item.ny == 118 ){
                            document.getElementById("SMyesterday").innerText = item.fcstValue;
                        }

                        // 김삿갓면
                        if(item.nx == 88 && item.ny == 118 ){
                            document.getElementById("GMyesterday").innerText = item.fcstValue;
                        }

                        // 북면
                        if(item.nx == 85 && item.ny == 120 ){
                            document.getElementById("BMyesterday").innerText = item.fcstValue;
                        }

                        // 남면
                        if(item.nx == 85 && item.ny == 119 ){
                            document.getElementById("NMyesterday").innerText = item.fcstValue;
                        }

                        // 한반도면
                        if(item.nx == 83 && item.ny == 120 ){
                            document.getElementById("HMyesterday").innerText = item.fcstValue;
                        }

                        // 주천면
                        if(item.nx == 82 && item.ny == 121 ){
                            document.getElementById("JMyesterday").innerText = item.fcstValue;
                        }

                        // 무릉도원면
                        if(item.nx == 82 && item.ny == 121 ){
                            document.getElementById("MMyesterday").innerText = item.fcstValue;
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error:', error));
}
