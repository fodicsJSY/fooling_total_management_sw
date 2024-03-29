let dayRainfall = document.getElementById("dayRainfall");
let monthRainfall = document.getElementById("monthRainfall");
let yearRainfall = document.getElementById("yearRainfall");
let dateRainfall = document.getElementById("dateRainfall");


var subTitle = document.querySelector(".subTitle");
var selectDate = document.querySelector(".selectDate");


var area;
var selectYear;
var selectMonth;
var selectDay;
var searchButton;
var downloadButton;
var startYear;
var startMonth;
var startDay;
var endYear;
var endMonth;
var endDay;



document.addEventListener("DOMContentLoaded", function() {
    makeDaySelectBox();
    dayMakeTable();
});



//일일강우 클릭 시
dayRainfall.addEventListener("click", ()=>{
    dayRainfallForward();
});

function dayRainfallForward(){
    // active 클래스 삭제
    monthRainfall.classList.remove("active");
    yearRainfall.classList.remove("active");
    dateRainfall.classList.remove("active");

    // monthRainfall 버튼에 active 클래스 추가
    dayRainfall.classList.add("active");
    

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 입출차정보  &gt; 일간입출차"; 

    selectDate.innerHTML = ""; 

    makeDaySelectBox();
    dayMakeTable();

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
    console.log("year : ", year);
    for(let i =year ; i >=2020; i--){
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
}


// 월간강우 클릭 시
monthRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    dayRainfall.classList.remove("active");
    yearRainfall.classList.remove("active");
    dateRainfall.classList.remove("active");

    // monthRainfall 버튼에 active 클래스 추가
    monthRainfall.classList.add("active");


    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 입출차정보  &gt; 월간입출차"; 

    selectDate.innerHTML = ""; 

    monthMakeTable();
    makeMonthSelectBox();

});



//월간강우 날짜선택
function makeMonthSelectBox(){

    //연
    var yearBox = document.createElement("div");
    yearBox.className = "yearBox";
    selectDate.appendChild(yearBox);

    var yearSelect = document.createElement("select");
    yearSelect.className = "yearSelect";
    yearSelect.id = "selectYear";
    yearSelect.name = "연도";
    yearBox.appendChild(yearSelect);

    for(let i =year ; i >=2020; i--){
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



    //검색버튼
    var div01 = document.createElement("div");
    selectDate.appendChild(div01);


    var button01 = document.createElement("button");

    button01.type = "button";
    button01.className = "searchBtn";
    button01.id = "searchButton";
    button01.innerHTML = "검색";

    div01.appendChild(button01);


    // 엑셀파일받기 버튼
    var div02 = document.createElement("div");
    selectDate.appendChild(div02);


    var button02 = document.createElement("button");

    button02.type = "button";
    button02.className = "downloadBtn";
    button02.id = "downloadButton";
    button02.innerHTML = "엑셀파일받기";

    div02.appendChild(button02);



}



// 연간강우 클릭 시
yearRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    dayRainfall.classList.remove("active");
    monthRainfall.classList.remove("active");
    dateRainfall.classList.remove("active");

    // monthRainfall 버튼에 active 클래스 추가
    yearRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 입출차정보  &gt; 연간입출차"; 

    selectDate.innerHTML = ""; 

    yearMakeTable();
    makeYearSelectBox();

});




// 연간강우 날짜선택
function makeYearSelectBox(){

    //연
    var yearBox = document.createElement("div");
    yearBox.className = "yearBox";
    selectDate.appendChild(yearBox);

    var yearSelect = document.createElement("select");
    yearSelect.className = "yearSelect";
    yearSelect.id = "selectYear";
    yearSelect.name = "연도";
    yearBox.appendChild(yearSelect);

    for(let i =year ; i >=2020; i--){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        yearSelect.appendChild(option1);
    }
    var p01 = document.createElement("p");
    p01.innerHTML="년";
    yearBox.appendChild(p01);



    //버튼
    var div01 = document.createElement("div");
    selectDate.appendChild(div01);


    var button01 = document.createElement("button");

    button01.type = "button";
    button01.className = "searchBtn";
    button01.id = "searchButton";
    button01.innerHTML = "검색";

    div01.appendChild(button01);
}



// 기간별강우 클릭 시
dateRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    dayRainfall.classList.remove("active");
    monthRainfall.classList.remove("active");
    yearRainfall.classList.remove("active");
    // monthRainfall 버튼에 active 클래스 추가
    dateRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 입출차정보  &gt; 기간별입출차"; 

    selectDate.innerHTML = ""; 

    dateMakeTable();
    dateSelectBox();

});



//기간별강우 날짜선택
function dateSelectBox(){


    //침수&수위 선택
    var kindBox01 = document.createElement("div");
    kindBox01.className = "kindBox";
    selectDate.appendChild(kindBox01);

    var kindSelect01 = document.createElement("select");
    kindSelect01.className = "kindSelect";
    kindSelect01.id = "kind";
    kindSelect01.name = "지역명";
    kindBox01.appendChild(kindSelect01);


    var option02 = document.createElement("option");
    option02.value = "침수";
    option02.innerHTML = "침수";
    kindSelect01.appendChild(option02);

    var option03 = document.createElement("option");
    option03.value = "수위";
    option03.innerHTML = "수위";
    kindSelect01.appendChild(option03);


    //지역
    var areaBox01 = document.createElement("div");
    areaBox01.className = "areaBox";
    selectDate.appendChild(areaBox01);

    var areaSelect01 = document.createElement("select");
    areaSelect01.className = "areaSelect";
    areaSelect01.id = "area";
    areaSelect01.name = "지역명";
    areaBox01.appendChild(areaSelect01);


    var option01 = document.createElement("option");
    option01.value = "후탄지구";
    option01.innerHTML = "후탄지구";
    areaSelect01.appendChild(option01);



    //연
    var yearBox01 = document.createElement("div");
    yearBox01.className = "yearBox";
    selectDate.appendChild(yearBox01);

    var yearSelect01 = document.createElement("select");
    yearSelect01.className = "yearSelect";
    yearSelect01.id = "startYear";
    yearSelect01.name = "연도";
    yearBox01.appendChild(yearSelect01);

    for(let i =year ; i >=2020; i--){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        yearSelect01.appendChild(option1);
    }
    var p01 = document.createElement("p");
    p01.innerHTML="년";
    yearBox01.appendChild(p01);

    //월
    var monthBox01 = document.createElement("div");
    monthBox01.className = "monthBox";
    selectDate.appendChild(monthBox01);

    var monthSelect01 = document.createElement("select");
    monthSelect01.className = "monthSelect";
    monthSelect01.id = "startMonth";
    monthSelect01.name = "월";
    monthBox01.appendChild(monthSelect01);

    for(let i =1 ; i <=12; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        monthSelect01.appendChild(option1);
    }
    var p02 = document.createElement("p");
    p02.innerHTML="월";
    monthBox01.appendChild(p02);


    //일
    var dayBox01 = document.createElement("div");
    dayBox01.className = "dayBox";
    selectDate.appendChild(dayBox01);


    var daySelect01 = document.createElement("select");
    daySelect01.className = "daySelect";
    daySelect01.id = "startDay";
    daySelect01.name = "일";
    dayBox01.appendChild(daySelect01);


    for(let i =1 ; i <=31; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        daySelect01.appendChild(option1);
    }
    var p03 = document.createElement("p");
    p03.innerHTML="일";
    dayBox01.appendChild(p03);




    //연2
    var yearBox02 = document.createElement("div");
    yearBox02.className = "yearBox";
    selectDate.appendChild(yearBox02);

    var yearSelect02 = document.createElement("select");
    yearSelect02.className = "yearSelect";
    yearSelect02.id = "endYear";
    yearSelect02.name = "연도";
    yearBox02.appendChild(yearSelect02);

    for(let i =year ; i >=2020; i--){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        yearSelect02.appendChild(option1);
    }
    var p01 = document.createElement("p");
    p01.innerHTML="년";
    yearBox02.appendChild(p01);

    //월2
    var monthBox02 = document.createElement("div");
    monthBox02.className = "monthBox";
    selectDate.appendChild(monthBox02);

    var monthSelect02 = document.createElement("select");
    monthSelect02.className = "monthSelect";
    monthSelect02.id = "endMonth";
    monthSelect02.name = "월";
    monthBox02.appendChild(monthSelect02);

    for(let i =1 ; i <=12; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        monthSelect02.appendChild(option1);
    }
    var p02 = document.createElement("p");
    p02.innerHTML="월";
    monthBox02.appendChild(p02);


    //일2
    var dayBox02 = document.createElement("div");
    dayBox02.className = "dayBox";
    selectDate.appendChild(dayBox02);


    var daySelect02 = document.createElement("select");
    daySelect02.className = "daySelect";
    daySelect02.id = "endDay";
    daySelect02.name = "일";
    dayBox02.appendChild(daySelect02);


    for(let i =1 ; i <=31; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        daySelect02.appendChild(option1);
    }
    var p03 = document.createElement("p");
    p03.innerHTML="일";
    dayBox02.appendChild(p03);


    //버튼
    var div01 = document.createElement("div");
    selectDate.appendChild(div01);


    var button01 = document.createElement("button");

    button01.type = "button";
    button01.className = "searchBtn";
    button01.id = "searchButton";
    button01.innerHTML = "검색";

    div01.appendChild(button01);
}



let tableDataList; 





// 일별 강우 테이블 만들기
function dayMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    tableContainer.appendChild(div);

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    div.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");
    createCell(htr, "th", "rainfull inout", "구분");


    for(let i = 1; i<=day ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i<=4 ; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = "후탄리 25-3";
        tr.appendChild(tdSpan);
        





        // "in" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "in";

        for(let j = 1; j<=day ; j ++ ){
            createCell(tr, "td", "rainfull", "0");
        }
        createCell(tr, "td", "rainfull sumData", "12");



        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "out" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "out";

        for(let j = 1; j<=day ; j ++ ){
            createCell(tr3, "td", "rainfull",  "0");
        }
        createCell(tr3, "td", "rainfull sumData", "12");

    }
    


    // 데이터 삽입
    /*
    tableDataList.forEach(function (item) {    
        var tr = document.createElement("tr");
        gateTbody.appendChild(tr);
        createCell(tr, "td", "gatetd", item.gateName);

        var div1 = document.createElement("div");
        div1.className = "gateIconBox";
        tr.appendChild(div1);

        let gateImg =  document.createElement("img");
        gateImg.className = "gateIcon";

        
        // console.log("item.gateStatus : ", item.gateStatus );
        

        if(item.gateStatus == 'close'){
            gateImg.src = "/resources/img/iconBTN_GateClose.png";
        }
        if(item.gateStatus == 'open'){
            gateImg.src = "/resources/img/iconBTN_GateOpen.png";
        }
        div1.appendChild(gateImg);
        
        if(item.gateStatus == ''){
            div1.innerHTML = "-";
        }

        
        let signalImg =  document.createElement("img");
        signalImg.className = "signalIcon";

        // console.log("item.commStatus : ", item.commStatus );
        if(item.commStatus == 'on'){
            signalImg.src = "/resources/img/connect-signalOK.png";
        }
        if(item.commStatus == 'off'){
            signalImg.src = "/resources/img/connect-signalNO.png";
        }

        // createCell(tr, "td", "gatetd", data);
        createCell(tr, "td", "gatetd gate", div1);
        createCell(tr, "td", "gatetd", signalImg.outerHTML);
    });
    */
}



// 월별 강우 테이블 만들기
function monthMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    tableContainer.appendChild(div);

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    div.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");
    createCell(htr, "th", "rainfull inout", "구분");


    for(let i = 1; i<=31 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i<=4 ; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = "후탄리 25-3";
        tr.appendChild(tdSpan);
        





        // "in" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "in";

        for(let j = 1; j<=31 ; j ++ ){
            createCell(tr, "td", "rainfull", "0");
        }
        createCell(tr, "td", "rainfull sumData", "12");



        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "out" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "out";

        for(let j = 1; j<=31 ; j ++ ){
            createCell(tr3, "td", "rainfull",  "0");
        }
        createCell(tr3, "td", "rainfull sumData", "12");

    }


    // 데이터 삽입
    /*
    tableDataList.forEach(function (item) {    
        var tr = document.createElement("tr");
        gateTbody.appendChild(tr);
        createCell(tr, "td", "gatetd", item.gateName);

        var div1 = document.createElement("div");
        div1.className = "gateIconBox";
        tr.appendChild(div1);

        let gateImg =  document.createElement("img");
        gateImg.className = "gateIcon";

        
        // console.log("item.gateStatus : ", item.gateStatus );
        

        if(item.gateStatus == 'close'){
            gateImg.src = "/resources/img/iconBTN_GateClose.png";
        }
        if(item.gateStatus == 'open'){
            gateImg.src = "/resources/img/iconBTN_GateOpen.png";
        }
        div1.appendChild(gateImg);
        
        if(item.gateStatus == ''){
            div1.innerHTML = "-";
        }

        
        let signalImg =  document.createElement("img");
        signalImg.className = "signalIcon";

        // console.log("item.commStatus : ", item.commStatus );
        if(item.commStatus == 'on'){
            signalImg.src = "/resources/img/connect-signalOK.png";
        }
        if(item.commStatus == 'off'){
            signalImg.src = "/resources/img/connect-signalNO.png";
        }

        // createCell(tr, "td", "gatetd", data);
        createCell(tr, "td", "gatetd gate", div1);
        createCell(tr, "td", "gatetd", signalImg.outerHTML);
    });
    */
}




//  연간강우 테이블 만들기
function yearMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    tableContainer.appendChild(div);

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    div.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");
    createCell(htr, "th", "rainfull inout", "구분");


    for(let i = 1; i<=12 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i<=4 ; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = "후탄리 25-3";
        tr.appendChild(tdSpan);
        





        // "in" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "in";

        for(let j = 1; j<=12 ; j ++ ){
            createCell(tr, "td", "rainfull", "0");
        }
        createCell(tr, "td", "rainfull sumData", "12");



        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "out" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "out";

        for(let j = 1; j<=12 ; j ++ ){
            createCell(tr3, "td", "rainfull",  "0");
        }
        createCell(tr3, "td", "rainfull sumData", "12");

    }



    // 데이터 삽입
    /*
    tableDataList.forEach(function (item) {    
        var tr = document.createElement("tr");
        gateTbody.appendChild(tr);
        createCell(tr, "td", "gatetd", item.gateName);

        var div1 = document.createElement("div");
        div1.className = "gateIconBox";
        tr.appendChild(div1);

        let gateImg =  document.createElement("img");
        gateImg.className = "gateIcon";

        
        // console.log("item.gateStatus : ", item.gateStatus );
        

        if(item.gateStatus == 'close'){
            gateImg.src = "/resources/img/iconBTN_GateClose.png";
        }
        if(item.gateStatus == 'open'){
            gateImg.src = "/resources/img/iconBTN_GateOpen.png";
        }
        div1.appendChild(gateImg);
        
        if(item.gateStatus == ''){
            div1.innerHTML = "-";
        }

        
        let signalImg =  document.createElement("img");
        signalImg.className = "signalIcon";

        // console.log("item.commStatus : ", item.commStatus );
        if(item.commStatus == 'on'){
            signalImg.src = "/resources/img/connect-signalOK.png";
        }
        if(item.commStatus == 'off'){
            signalImg.src = "/resources/img/connect-signalNO.png";
        }

        // createCell(tr, "td", "gatetd", data);
        createCell(tr, "td", "gatetd gate", div1);
        createCell(tr, "td", "gatetd", signalImg.outerHTML);
    });
    */
}








// 기간별강우 테이블 만들기
function dateMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    tableContainer.appendChild(div);

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    div.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");
    createCell(htr, "th", "rainfull inout", "구분");

    for(let i = 0; i<24 ; i++){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");



    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);


    
    for(let i = 0; i<=4 ; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = "후탄리 25-3";
        tr.appendChild(tdSpan);
        





        // "in" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "in";

        for(let j = 0; j<24 ; j ++ ){
            createCell(tr, "td", "rainfull", "0");
        }
        createCell(tr, "td", "rainfull sumData", "12");



        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "out" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "out";

        for(let j = 0; j<24 ; j ++ ){
            createCell(tr3, "td", "rainfull",  "0");
        }
        createCell(tr3, "td", "rainfull sumData", "12");

    }






    // var tr = document.createElement("tr");
    // rainfullTbody.appendChild(tr);

    // createCell(tr, "td", "rainfull areaName", "24년 03월 26일");

    // for(let i = 0; i<24 ; i++){
    //     createCell(tr, "td", "rainfull", "0");
    // }
    // createCell(tr, "td", "rainfull sumData", "25");


    // 데이터 삽입
    /*
    tableDataList.forEach(function (item) {    
        var tr = document.createElement("tr");
        gateTbody.appendChild(tr);
        createCell(tr, "td", "gatetd", item.gateName);

        var div1 = document.createElement("div");
        div1.className = "gateIconBox";
        tr.appendChild(div1);

        let gateImg =  document.createElement("img");
        gateImg.className = "gateIcon";

        
        // console.log("item.gateStatus : ", item.gateStatus );
        

        if(item.gateStatus == 'close'){
            gateImg.src = "/resources/img/iconBTN_GateClose.png";
        }
        if(item.gateStatus == 'open'){
            gateImg.src = "/resources/img/iconBTN_GateOpen.png";
        }
        div1.appendChild(gateImg);
        
        if(item.gateStatus == ''){
            div1.innerHTML = "-";
        }

        
        let signalImg =  document.createElement("img");
        signalImg.className = "signalIcon";

        // console.log("item.commStatus : ", item.commStatus );
        if(item.commStatus == 'on'){
            signalImg.src = "/resources/img/connect-signalOK.png";
        }
        if(item.commStatus == 'off'){
            signalImg.src = "/resources/img/connect-signalNO.png";
        }

        // createCell(tr, "td", "gatetd", data);
        createCell(tr, "td", "gatetd gate", div1);
        createCell(tr, "td", "gatetd", signalImg.outerHTML);
    });
    */
}






// 셀 생성 함수
function createCell(row, elementType, className, content) {
    var cell = document.createElement(elementType);
    cell.className = className;
    
    // 이미지 엘리먼트인 경우에는 바로 추가
    if (typeof content === 'object' && content instanceof HTMLElement) {
        cell.appendChild(content);
    } else {
        cell.innerHTML = content;
    }

    row.appendChild(cell);
}



