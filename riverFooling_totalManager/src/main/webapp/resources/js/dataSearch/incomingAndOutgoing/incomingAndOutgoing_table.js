
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


    for(let i = 1; i<=31 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i<4 ; i ++ ){
        
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

    for(let i = 0; i<4 ; i ++ ){
        
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

    for(let i = 0; i<4 ; i ++ ){
        
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

    createCell(htr, "th", "rainfull areaName", "날짜");

    for(let i = 0; i<24 ; i++){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");



    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);


    
        
    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    
    createCell(tr, "td", "rainfull date", "24년 04월 01일");
        

    for(let j = 0; j<24 ; j ++ ){
        createCell(tr, "td", "rainfull", "0");
    }
    createCell(tr, "td", "rainfull dateSumData", "12");











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



