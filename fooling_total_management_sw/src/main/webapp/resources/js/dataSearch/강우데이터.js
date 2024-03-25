let dayRainfall = document.getElementById("dayRainfall");
let monthRainfall = document.getElementById("monthRainfall");
let yearRainfall = document.getElementById("yearRainfall");
let dateRainfall = document.getElementById("dateRainfall");


var subTitle = document.querySelector(".subTitle");
var selectDate = document.querySelector(".selectDate");





//일일강우 클릭 시
dayRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    monthRainfall.classList.remove("active");
    yearRainfall.classList.remove("active");
    dateRainfall.classList.remove("active");
    // monthRainfall 버튼에 active 클래스 추가
    dayRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 일간강우"; 

    selectDate.innerHTML = ""; 

    dayMakeTable();
    makeDaySelectBox();

});


function makeDaySelectBox(){

    var yearBox = document.createElement("div");
    yearBox.className = "yearBox";
    selectDate.appendChild(yearBox);

    var yearSelect = document.createElement("select");
    yearSelect.className = "yearSelect";
    yearSelect.id = "year";
    yearSelect.name = "연도";
    yearBox.appendChild(yearSelect);




    for(let i =2020 ; i <=year; i++){
        var option1 = document.createElement("option");
        option1.value = i;
        option1.innerHTML = i;
        yearSelect.appendChild(option1);
    }


    var monthBox = document.createElement("div");
    monthBox.className = "monthBox";
    selectDate.appendChild(monthBox);


    var dayBox = document.createElement("div");
    dayBox.className = "dayBox";
    selectDate.appendChild(dayBox);


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
    subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 월간강우"; 

    selectDate.innerHTML = ""; 

    monthMakeTable();

});


// 연간강우 클릭 시
yearRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    dayRainfall.classList.remove("active");
    monthRainfall.classList.remove("active");
    dateRainfall.classList.remove("active");
    // monthRainfall 버튼에 active 클래스 추가
    yearRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 연간강우"; 

    selectDate.innerHTML = ""; 

    yearMakeTable();

});


// 기간별강우 클릭 시
dateRainfall.addEventListener("click", ()=>{
    // active 클래스 삭제
    dayRainfall.classList.remove("active");
    monthRainfall.classList.remove("active");
    yearRainfall.classList.remove("active");
    // monthRainfall 버튼에 active 클래스 추가
    dateRainfall.classList.add("active");

    subTitle.innerHTML = ""; 
    subTitle.innerHTML = "▶ 데이터검색  &gt; 강우데이터  &gt; 기간별강우"; 

    selectDate.innerHTML = ""; 



});



let tableDataList; 

// 일별 강우 테이블 만들기
function dayMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    tableContainer.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");
    createCell(htr, "th", "rainfull max", "최고");
    createCell(htr, "th", "rainfull min", "최저");

    for(let i = 1; i<=day ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull dataSum", "계");


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    createCell(tr, "td", "rainfull areaNameData", "무릉도원면(도)");
    createCell(tr, "td", "rainfull maxData", "0.0");
    createCell(tr, "td", "rainfull minData", "0.0");
    
    for(let i = 1; i<=day ; i++ ){
        createCell(tr, "td", "rainfull",  "0.0");
    }

    createCell(tr, "td", "rainfull sumData", "0.0");


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

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    tableContainer.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");

    for(let i = 1; i<32 ; i++){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull dataSum", "계");


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    createCell(tr, "td", "rainfull areaNameData", "무릉도원면(도)");

    for(let i = 1; i<32 ; i++){
        createCell(tr, "td", "rainfull", "0.0");
    }
    
    createCell(tr, "td", "rainfull sumData", "0.0");


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
function yearMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    tableContainer.appendChild(rainfullTable);

    var rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    var htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");

    for(let i = 1; i<13 ; i++){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull dataSum", "계");


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    createCell(tr, "td", "rainfull areaNameData", "무릉도원면(도)");

    for(let i = 1; i<13 ; i++){
        createCell(tr, "td", "rainfull", "0.0");
    }
    
    createCell(tr, "td", "rainfull sumData", "0.0");


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



function dateMakeTable(data){

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



