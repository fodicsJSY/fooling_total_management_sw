let dayRainfall = document.getElementById("dayRainfall");
// let monthRainfall = document.getElementById("monthRainfall");
// let yearRainfall = document.getElementById("yearRainfall");
// let dateRainfall = document.getElementById("dateRainfall");


var subTitle = document.querySelector(".subTitle");
var selectDate = document.querySelector(".selectDate");



// 현재 날짜를 기준으로 select 태그들을 설정하는 함수
function setTodaySelections() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    var day = today.getDate(); // 현재 날짜를 가져옵니다.

    // 오늘 날짜에 해당하는 연도와 월을 선택합니다.
    var selectYear = document.getElementById("selectYear");
    var selectMonth = document.getElementById("selectMonth");
    var selectDay = document.getElementById("selectDay");
    var startYear = document.getElementById("startYear");
    var startMonth = document.getElementById("startMonth");
    var startDay = document.getElementById("startDay");
    var endYear = document.getElementById("endYear");
    var endMonth = document.getElementById("endMonth");
    var endDay = document.getElementById("endDay");

     // 현재 날짜로부터 일주일 전 날짜를 계산합니다.
    var oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    var startYearValue = oneWeekAgo.getFullYear();
    var startMonthValue = oneWeekAgo.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    var startDayValue = oneWeekAgo.getDate();




    if(selectDay){
        // 연도 select 태그 설정
        for (var i = 0; i < selectYear.options.length; i++) {
            if (parseInt(selectYear.options[i].value) === year) {
                selectYear.selectedIndex = i;
                break;
            }
        }
        
        // 월 select 태그 설정
        for (var i = 0; i < selectMonth.options.length; i++) {
            if (parseInt(selectMonth.options[i].value) === month) {
                selectMonth.selectedIndex = i;
                break;
            }
        }
        // 일 select 태그 설정
        for (var i = 0; i < selectDay.options.length; i++) {
            if (parseInt(selectDay.options[i].value) === day) {
                selectDay.selectedIndex = i;
                break;
            }
        }
    }else if(selectMonth){
        // 연도 select 태그 설정
        for (var i = 0; i < selectYear.options.length; i++) {
            if (parseInt(selectYear.options[i].value) === year) {
                selectYear.selectedIndex = i;
                break;
            }
        }
        
        // 월 select 태그 설정
        for (var i = 0; i < selectMonth.options.length; i++) {
            if (parseInt(selectMonth.options[i].value) === month) {
                selectMonth.selectedIndex = i;
                break;
            }
        }

    }else if(selectYear){
        // 연도 select 태그 설정
        for (var i = 0; i < selectYear.options.length; i++) {
            if (parseInt(selectYear.options[i].value) === year) {
                selectYear.selectedIndex = i;
                break;
            }
        }
    }else{
        // 시작연도 select 태그 설정
        for (var i = 0; i < startYear.options.length; i++) {
            if (parseInt(startYear.options[i].value) === startYearValue) {
                startYear.selectedIndex = i;
                break;
            }
        }

        // 시작월 select 태그 설정
        for (var i = 0; i < startMonth.options.length; i++) {
            if (parseInt(startMonth.options[i].value) === startMonthValue) {
                startMonth.selectedIndex = i;
                break;
            }
        }

        // 시작일 select 태그 설정
        for (var i = 0; i < startDay.options.length; i++) {
            if (parseInt(startDay.options[i].value) === startDayValue) {
                startDay.selectedIndex = i;
                break;
            }
        }

         // 연도 select 태그 설정
        for (var i = 0; i < endYear.options.length; i++) {
            if (parseInt(endYear.options[i].value) === year) {
                endYear.selectedIndex = i;
                break;
            }
        }
        
        // 월 select 태그 설정
        for (var i = 0; i < endMonth.options.length; i++) {
            if (parseInt(endMonth.options[i].value) === month) {
                endMonth.selectedIndex = i;
                break;
            }
        }

         // 일 select 태그 설정
        for (var i = 0; i < endDay.options.length; i++) {
            if (parseInt(endDay.options[i].value) === day) {
                endDay.selectedIndex = i;
                break;
            }
        }
    }

}


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


//강우페이지 로드시
document.addEventListener("DOMContentLoaded", function() {
    let occuDay = year + month + day;
    // console.log("occuDay", occuDay );

    dayRainfallForward();
    fetch("/dataSearch/getData", { 
        method : "POST", 
        headers: {"Content-Type": "application/json"}, 
        credentials: "include",
        body : JSON.stringify( {
                                // "key" : "K7p9sE5rT2yF8gU1hJ4iO3pL",
                                "baseDate": occuDay
                                } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        let data = result.results;
        // console.log("data", data);
        r_dayMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
});


function api(){
    console.log("api");
    fetch("/dataSearch/getData", { 
        method : "POST", 
        headers: {"Content-Type": "application/json"}, 
        credentials: "include",
        body : JSON.stringify( {
                                // "key" : "K7p9sE5rT2yF8gU1hJ4iO3pL",
                                "baseDate": "20240529"
                                } ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        let data = result.results;
        // console.log("data", data);
        r_dayMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}








//일일강우 클릭 시
// dayRainfall.addEventListener("click", ()=>{
//     dayRainfallForward();
// });

function dayRainfallForward(){
    // active 클래스 삭제
    // monthRainfall.classList.remove("active");
    // yearRainfall.classList.remove("active");
    // dateRainfall.classList.remove("active");
    // monthRainfall 버튼에 active 클래스 추가
    dayRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 일간강우"; 

    selectDate.innerHTML = ""; 

    makeDaySelectBox();

    let occuDay = year + month + day;
    console.log("occuDay", occuDay );

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
        // console.log("result", result );

        let data = result.results;
        // console.log("data", data);
        r_dayMakeTable(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
}



//일일강우 날짜선택
function makeDaySelectBox(){

    //연
    var yearBox = document.createElement("div");
    yearBox.className = "yearBox";
    selectDate.appendChild(yearBox);

    var yearSelect = document.createElement("select");
    yearSelect.className = "yearSelect";
    yearSelect.id = "selectYear";
    yearSelect.name = "연도";
    yearBox.appendChild(yearSelect);
    // console.log("year : ", year);

    for(let i =2024 ; i <=year; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        yearSelect.appendChild(option1);
    }
    var p01 = document.createElement("p");
    p01.innerHTML="년";
    yearBox.appendChild(p01);

    //월
    var monthBox = document.createElement("div");
    monthBox.className = "monthBox";
    selectDate.appendChild(monthBox);

    var monthSelect = document.createElement("select");
    monthSelect.className = "monthSelect";
    monthSelect.id = "selectMonth";
    monthSelect.name = "월";
    monthBox.appendChild(monthSelect);

    for(let i =1 ; i <=12; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        monthSelect.appendChild(option1);
    }
    var p02 = document.createElement("p");
    p02.innerHTML="월";
    monthBox.appendChild(p02);


    //일
    var dayBox = document.createElement("div");
    dayBox.className = "dayBox";
    selectDate.appendChild(dayBox);


    var daySelect = document.createElement("select");
    daySelect.className = "daySelect";
    daySelect.id = "selectDay";
    daySelect.name = "일";
    dayBox.appendChild(daySelect);




    for(let i =1 ; i <=31; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        daySelect.appendChild(option1);
    }
    var p03 = document.createElement("p");
    p03.innerHTML="일";
    dayBox.appendChild(p03);


    //버튼
    var div01 = document.createElement("div");
    selectDate.appendChild(div01);


    var button01 = document.createElement("button");

    button01.type = "button";
    button01.className = "searchBtn";
    button01.id = "searchButton";
    button01.innerHTML = "검색";

    div01.appendChild(button01);


    // searchButton 변수에 버튼 엘리먼트 할당
    searchButton = button01;



    let data;

    searchButton.addEventListener("click", ()=>{
        // console.log("클릭");


        searchData();

    });

    setTodaySelections();
}


// // 월간강우 클릭 시
// monthRainfall.addEventListener("click", ()=>{
//     // active 클래스 삭제
//     dayRainfall.classList.remove("active");
//     yearRainfall.classList.remove("active");
//     dateRainfall.classList.remove("active");
//     // monthRainfall 버튼에 active 클래스 추가
//     monthRainfall.classList.add("active");


//     subTitle.innerHTML = ""; 
//     subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 월간강우"; 

//     selectDate.innerHTML = ""; 

//     monthMakeTable();
//     makeMonthSelectBox();
// });



// //월간강우 날짜선택
// function makeMonthSelectBox(){

//     //연
//     var yearBox = document.createElement("div");
//     yearBox.className = "yearBox";
//     selectDate.appendChild(yearBox);

//     var yearSelect = document.createElement("select");
//     yearSelect.className = "yearSelect";
//     yearSelect.id = "selectYear";
//     yearSelect.name = "연도";
//     yearBox.appendChild(yearSelect);

//     for(let i =2020 ; i <=year; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         yearSelect.appendChild(option1);
//     }
//     var p01 = document.createElement("p");
//     p01.innerHTML="년";
//     yearBox.appendChild(p01);

//     //월
//     var monthBox = document.createElement("div");
//     monthBox.className = "monthBox";
//     selectDate.appendChild(monthBox);

//     var monthSelect = document.createElement("select");
//     monthSelect.className = "monthSelect";
//     monthSelect.id = "selectMonth";
//     monthSelect.name = "월";
//     monthBox.appendChild(monthSelect);

//     for(let i =1 ; i <=12; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         monthSelect.appendChild(option1);
//     }
//     var p02 = document.createElement("p");
//     p02.innerHTML="월";
//     monthBox.appendChild(p02);



//     //버튼
//     var div01 = document.createElement("div");
//     selectDate.appendChild(div01);


//     var button01 = document.createElement("button");

//     button01.type = "button";
//     button01.className = "searchBtn";
//     button01.id = "searchButton";
//     button01.innerHTML = "검색";

//     div01.appendChild(button01);
        
//     // searchButton 변수에 버튼 엘리먼트 할당
//     searchButton = button01;

//     searchButton.addEventListener("click", ()=>{
//         searchData();
//     });

//     // 현재 날짜를 기준으로 select 태그들을 설정
//     setTodaySelections();
// }






// // 연간강우 클릭 시
// yearRainfall.addEventListener("click", ()=>{
//     // active 클래스 삭제
//     dayRainfall.classList.remove("active");
//     monthRainfall.classList.remove("active");
//     dateRainfall.classList.remove("active");
//     // monthRainfall 버튼에 active 클래스 추가
//     yearRainfall.classList.add("active");

//     subTitle.innerHTML = ""; 
//     subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 연간강우"; 

//     selectDate.innerHTML = ""; 

//     yearMakeTable();
//     makeYearSelectBox();
// });



// // 연간강우 날짜선택
// function makeYearSelectBox(){

//     //연
//     var yearBox = document.createElement("div");
//     yearBox.className = "yearBox";
//     selectDate.appendChild(yearBox);

//     var yearSelect = document.createElement("select");
//     yearSelect.className = "yearSelect";
//     yearSelect.id = "selectYear";
//     yearSelect.name = "연도";
//     yearBox.appendChild(yearSelect);

//     for(let i =2020 ; i <=year; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         yearSelect.appendChild(option1);
//     }
//     var p01 = document.createElement("p");
//     p01.innerHTML="년";
//     yearBox.appendChild(p01);



//     //버튼
//     var div01 = document.createElement("div");
//     selectDate.appendChild(div01);


//     var button01 = document.createElement("button");

//     button01.type = "button";
//     button01.className = "searchBtn";
//     button01.id = "searchButton";
//     button01.innerHTML = "검색";

//     div01.appendChild(button01);
        
//     // searchButton 변수에 버튼 엘리먼트 할당
//     searchButton = button01;

//     searchButton.addEventListener("click", ()=>{
//         searchData();
//     });

//     // 현재 날짜를 기준으로 select 태그들을 설정
//     setTodaySelections();
// }



// // 기간별강우 클릭 시
// dateRainfall.addEventListener("click", ()=>{
//     // active 클래스 삭제
//     dayRainfall.classList.remove("active");
//     monthRainfall.classList.remove("active");
//     yearRainfall.classList.remove("active");
//     // monthRainfall 버튼에 active 클래스 추가
//     dateRainfall.classList.add("active");

//     subTitle.innerHTML = ""; 
//     subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 기간별강우"; 

//     selectDate.innerHTML = ""; 

//     dateMakeTable();
//     dateSelectBox();

// });



// //기간별 강우 날짜선택
// function dateSelectBox(){


//     //지역
//     var areaBox01 = document.createElement("div");
//     areaBox01.className = "areaBox";
//     selectDate.appendChild(areaBox01);

//     var areaSelect01 = document.createElement("select");
//     areaSelect01.className = "areaSelect";
//     areaSelect01.id = "area";
//     areaSelect01.name = "지역명";
//     areaBox01.appendChild(areaSelect01);

//     var option02 = document.createElement("option");
//     option02.value = "yeongwol";
//     option02.innerHTML = "영월(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "sangdong";
//     option02.innerHTML = "상동읍(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "jungdong_myeon";
//     option02.innerHTML = "중동면(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "gimsatgat_myeon";
//     option02.innerHTML = "김삿갓면(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "yeongwolBuk_myeon";
//     option02.innerHTML = "영월북면(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "yeongwolNam_myeon";
//     option02.innerHTML = "영월남면(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "hanbando_myeon";
//     option02.innerHTML = "한반도면(도)";
//     areaSelect01.appendChild(option02);


//     var option01 = document.createElement("option");
//     option01.value = "mureungdowon_myeon";
//     option01.innerHTML = "무릉도원면(도)";
//     areaSelect01.appendChild(option01);

//     var option02 = document.createElement("option");
//     option02.value = "jucheon";
//     option02.innerHTML = "주천(도)";
//     areaSelect01.appendChild(option02);

//     var option02 = document.createElement("option");
//     option02.value = "sangdong";
//     option02.innerHTML = "상동(도)";
//     areaSelect01.appendChild(option02);


//     //연
//     var yearBox01 = document.createElement("div");
//     yearBox01.className = "yearBox";
//     selectDate.appendChild(yearBox01);

//     var yearSelect01 = document.createElement("select");
//     yearSelect01.className = "yearSelect";
//     yearSelect01.id = "startYear";
//     yearSelect01.name = "연도";
//     yearBox01.appendChild(yearSelect01);

//     for(let i =2020 ; i <=year; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         yearSelect01.appendChild(option1);
//     }
//     var p01 = document.createElement("p");
//     p01.innerHTML="년";
//     yearBox01.appendChild(p01);

//     //월
//     var monthBox01 = document.createElement("div");
//     monthBox01.className = "monthBox";
//     selectDate.appendChild(monthBox01);

//     var monthSelect01 = document.createElement("select");
//     monthSelect01.className = "monthSelect";
//     monthSelect01.id = "startMonth";
//     monthSelect01.name = "월";
//     monthBox01.appendChild(monthSelect01);

//     for(let i =1 ; i <=12; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         monthSelect01.appendChild(option1);
//     }
//     var p02 = document.createElement("p");
//     p02.innerHTML="월";
//     monthBox01.appendChild(p02);


//     //일
//     var dayBox01 = document.createElement("div");
//     dayBox01.className = "dayBox";
//     selectDate.appendChild(dayBox01);


//     var daySelect01 = document.createElement("select");
//     daySelect01.className = "daySelect";
//     daySelect01.id = "startDay";
//     daySelect01.name = "일";
//     dayBox01.appendChild(daySelect01);


//     for(let i =1 ; i <=31; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         daySelect01.appendChild(option1);
//     }
//     var p03 = document.createElement("p");
//     p03.innerHTML="일";
//     dayBox01.appendChild(p03);




//     //연2
//     var yearBox02 = document.createElement("div");
//     yearBox02.className = "yearBox";
//     selectDate.appendChild(yearBox02);

//     var yearSelect02 = document.createElement("select");
//     yearSelect02.className = "yearSelect";
//     yearSelect02.id = "endYear";
//     yearSelect02.name = "연도";
//     yearBox02.appendChild(yearSelect02);

//     for(let i =2020 ; i <=year; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         yearSelect02.appendChild(option1);
//     }
//     var p01 = document.createElement("p");
//     p01.innerHTML="년";
//     yearBox02.appendChild(p01);

//     //월2
//     var monthBox02 = document.createElement("div");
//     monthBox02.className = "monthBox";
//     selectDate.appendChild(monthBox02);

//     var monthSelect02 = document.createElement("select");
//     monthSelect02.className = "monthSelect";
//     monthSelect02.id = "endMonth";
//     monthSelect02.name = "월";
//     monthBox02.appendChild(monthSelect02);

//     for(let i =1 ; i <=12; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         monthSelect02.appendChild(option1);
//     }
//     var p02 = document.createElement("p");
//     p02.innerHTML="월";
//     monthBox02.appendChild(p02);


//     //일2
//     var dayBox02 = document.createElement("div");
//     dayBox02.className = "dayBox";
//     selectDate.appendChild(dayBox02);


//     var daySelect02 = document.createElement("select");
//     daySelect02.className = "daySelect";
//     daySelect02.id = "endDay";
//     daySelect02.name = "일";
//     dayBox02.appendChild(daySelect02);


//     for(let i =1 ; i <=31; i++){
//         var option1 = document.createElement("option");
//         option1.value = i;
//         option1.innerHTML = i;
//         daySelect02.appendChild(option1);
//     }
//     var p03 = document.createElement("p");
//     p03.innerHTML="일";
//     dayBox02.appendChild(p03);


//     //버튼
//     var div01 = document.createElement("div");
//     selectDate.appendChild(div01);


//     var button01 = document.createElement("button");

//     button01.type = "button";
//     button01.className = "searchBtn";
//     button01.id = "searchButton";
//     button01.innerHTML = "검색";

//     div01.appendChild(button01);

        
//     // searchButton 변수에 버튼 엘리먼트 할당
//     searchButton = button01;

//     searchButton.addEventListener("click", ()=>{
//         searchData();
//     });

//     // 현재 날짜를 기준으로 select 태그들을 설정
//     setTodaySelections();
// }

