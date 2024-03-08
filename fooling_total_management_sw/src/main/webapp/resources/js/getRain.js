

today();
// 오늘 날짜 문자열 생성
function today(){
    var base_date_today = year + month + day;
    
    console.log("base_date_today : ", base_date_today);

    // 최종 시간 문자열 생성
    var base_time = hours + minutes;
    console.log("base_time : ", base_time);
    areaXY(base_date_today, base_time);

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
    console.log("base_date_yesterday : ", base_date_yesterday);


    // 최종 시간 문자열 생성
    var base_time = hours + minutes;
    console.log("base_time : ", base_time);
    // areaXY(base_date_yesterday, base_time)
}





/* nx값과 ny값 구하기 시작(구현중) */
function areaXY(date, time){
    console.log("date : ", date);
    console.log("time : ", time);
    var areaNames = document.querySelectorAll('.areaName');

    areaNames.forEach(function(area) {
        var areaNameText = area.textContent;
        // console.log(areaNameText);

        switch(areaNameText){
            case "영월군":
                // console.log("영월군");
                getRain(date, time, "86", "119");
                break;
            case "영월읍":
                // console.log("영월읍");
                getRain(date, time, "86", "119");
                break;
            case "상동읍":
                // console.log("상동읍");
                getRain(date, time, "92", "118");
                break;
            case "산솔면":
                // console.log("산솔면");
                getRain(date, time, "89", "118");
                break;
            case "김삿갓면":
                // console.log("김삿갓면");
                getRain(date, time, "88", "118");
                break;
            case "북면":
                // console.log("북면");
                getRain(date, time, "85", "120");
                break;
            case "남면":
                // console.log("남면");
                getRain(date, time, "85", "119");
                break;
            case "한반도면":
                // console.log("한반도면");
                getRain(date, time, "83", "120");
                break;
            case "주천면":
                // console.log("주천면");
                getRain(date, time, "82", "121");
                break;
            case "무릉도원면":
                // console.log("무릉도원면");
                getRain(date, time, "82", "121");
                break;
        }
    });
}
/* nx값과 ny값 구하기 끝(구현중)*/


//초단기실황조회(오늘)
function getRain(date, time, nx, ny){
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

        console.log("rain Content:", rainContent);
        // 영월군
        if(nx == 86 && ny == 119 ){
            document.getElementById("YGtoday").innerText = obsrValue;
        }

        // 영월읍
        if(nx == 86 && ny == 119 ){
            document.getElementById("YEtoday").innerText = obsrValue;
        }

        // 상동읍
        if(nx == 92 && ny == 118 ){
            document.getElementById("SEtoday").innerText = obsrValue;
        }

        // 산솔면
        if(nx == 89 && ny == 118 ){
            document.getElementById("SMtoday").innerText = obsrValue;
        }

        // 김삿갓면
        if(nx == 88 && ny == 118 ){
            document.getElementById("GMtoday").innerText = obsrValue;
        }

        // 북면
        if(nx == 85 && ny == 120 ){
            document.getElementById("BMtoday").innerText = obsrValue;
        }

        // 남면
        if(nx == 85 && ny == 119 ){
            document.getElementById("NMtoday").innerText = obsrValue;
        }

        // 한반도면
        if(nx == 83 && ny == 120 ){
            document.getElementById("HMtoday").innerText = obsrValue;
        }

        // 주천면
        if(nx == 82 && ny == 121 ){
            document.getElementById("JMtoday").innerText = obsrValue;
        }

        // 무릉도원면
        if(nx == 82 && ny == 121 ){
            document.getElementById("MMtoday").innerText = obsrValue;
        }

    })
    .catch(error => console.error('Error:', error));
}