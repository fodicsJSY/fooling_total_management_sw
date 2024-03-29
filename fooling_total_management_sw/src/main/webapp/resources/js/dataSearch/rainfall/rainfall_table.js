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

    createCell(htr, "th", "rainfull max", "최고");
    createCell(htr, "th", "rainfull min", "최저");

    for(let i = 1; i<13 ; i++){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull dataSum", "계");


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    createCell(tr, "td", "rainfull maxData", "0.0");
    createCell(tr, "td", "rainfull minData", "0.0");

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



