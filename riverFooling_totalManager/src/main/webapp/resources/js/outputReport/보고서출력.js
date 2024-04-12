document.addEventListener("DOMContentLoaded", function() {
    MakeReportTable();
});




// 경보발생내역 테이블 만들기
function MakeReportTable(){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    //수위침수
    var tableBox = document.querySelector(".tableBox");
    tableBox.innerHTML = ""; // Clear previous data
    
    var div01 =  document.createElement("div");
    div01.className = "r_title";
    tableBox.appendChild(div01);
    
    
    var div001 =  document.createElement("div");
    div001.innerHTML = "◈ 수위/침수"; 
    div01.appendChild(div001);

    var div002 =  document.createElement("div");
    div002.innerHTML = "단위 : cm"; 
    div01.appendChild(div002);
    

    var reportTable = document.createElement("table");
    tableBox.appendChild(reportTable);

    var thead = document.createElement("thead");
    reportTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "지역명");
    makeCell(htr, "th", "현재");
    makeCell(htr, "th", "침수1(5cm)");
    makeCell(htr, "th", "침수2(15cm)");
    makeCell(htr, "th", "침수3(20cm)");

    
    var tbody = document.createElement("tbody");
    reportTable.appendChild(tbody);

    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    makeCell(tr, "td", "후탄지구");
    makeCell(tr, "td", "0.0");
    makeCell(tr, "td", "X");
    makeCell(tr, "td", "X");
    makeCell(tr, "td", "X");
    


    //강우량

    var div01 =  document.createElement("div");
    div01.className = "r_title";
    tableBox.appendChild(div01);
    
    
    var div001 =  document.createElement("div");
    div001.innerHTML = "◈ 강우량"; 
    div01.appendChild(div001);

    var reportTable = document.createElement("table");
    tableBox.appendChild(reportTable);

    var thead = document.createElement("thead");
    reportTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "지역명");
    makeCell(htr, "th", "3월 25일");
    makeCell(htr, "th", "3월 25일");
    makeCell(htr, "th", "3월 25일");
    makeCell(htr, "th", "합계");

    
    var tbody = document.createElement("tbody");
    reportTable.appendChild(tbody);


    for(let i = 0 ; i<10; i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
    }
    



    //경보발령내역(최근5개)
    var div01 =  document.createElement("div");
    div01.className = "r_title";
    tableBox.appendChild(div01);
    
    
    var div001 =  document.createElement("div");
    div001.innerHTML = "◈ 경보발령내역(최근5개)"; 
    div01.appendChild(div001);

    var reportTable = document.createElement("table");
    tableBox.appendChild(reportTable);

    var thead = document.createElement("thead");
    reportTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "발생지역");
    makeCell(htr, "th", "발생종류");
    makeCell(htr, "th", "발생시간");
    makeCell(htr, "th", "자동/수동");
    makeCell(htr, "th", "상태");

    
    var tbody = document.createElement("tbody");
    reportTable.appendChild(tbody);


    for(let i = 0 ; i<6; i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
    }



    //문자전광판 표시내용
    var div01 =  document.createElement("div");
    div01.className = "r_title";
    tableBox.appendChild(div01);
    
    
    var div001 =  document.createElement("div");
    div001.innerHTML = "◈ 문자전광판 표시내용"; 
    div01.appendChild(div001);

    var reportTable = document.createElement("table");
    tableBox.appendChild(reportTable);

    var thead = document.createElement("thead");
    reportTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "장비명");
    makeCell(htr, "th", "장비상태");
    makeCell(htr, "th", "파워1");
    makeCell(htr, "th", "파워2");
    makeCell(htr, "th", "파워3");

    
    var tbody = document.createElement("tbody");
    reportTable.appendChild(tbody);

    for(let i = 0 ; i<2; i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
    }






    //차단기상태
    var div01 =  document.createElement("div");
    div01.className = "r_title";
    tableBox.appendChild(div01);
    
    
    var div001 =  document.createElement("div");
    div001.innerHTML = "◈ 차단기상태"; 
    div01.appendChild(div001);

    var reportTable = document.createElement("table");
    tableBox.appendChild(reportTable);

    var thead = document.createElement("thead");
    reportTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "장비명");
    makeCell(htr, "th", "차단기상태");
    makeCell(htr, "th", "경고음상태");
    makeCell(htr, "th", "경고등상태");

    
    var tbody = document.createElement("tbody");
    reportTable.appendChild(tbody);

    for(let i = 0 ; i<4; i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
        makeCell(tr, "td", "");
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


//클래스이름 없는 셀 생성 함수
function makeCell(row, elementType, content) {
    var cell = document.createElement(elementType);
    
    // 이미지 엘리먼트인 경우에는 바로 추가
    if (typeof content === 'object' && content instanceof HTMLElement) {
        cell.appendChild(content);
    } else {
        cell.innerHTML = content;
    }

    row.appendChild(cell);
}
