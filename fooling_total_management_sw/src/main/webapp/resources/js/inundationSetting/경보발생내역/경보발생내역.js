document.addEventListener("DOMContentLoaded", function() {
    MakeWarningTable();
});




// 경보발생내역 테이블 만들기
function MakeWarningTable(){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div =  document.createElement("div");
    tableContainer.appendChild(div);

    var sencerTable = document.createElement("table");
    sencerTable.className = "sencerTable";
    div.appendChild(sencerTable);

    var thead = document.createElement("thead");
    sencerTable.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);

    makeCell(htr, "th", "No");
    makeCell(htr, "th", "발생지역");
    makeCell(htr, "th", "발생종류");
    makeCell(htr, "th", "발생시간");
    makeCell(htr, "th", "자동/수동");
    makeCell(htr, "th", "발생종료");
    makeCell(htr, "th", "상태");




    var tbody = document.createElement("tbody");
    sencerTable.appendChild(tbody);


    for(let i=0; i <100 ;i++){

        var tr = document.createElement("tr");
        tbody.appendChild(tr);

        makeCell(tr, "td", "33");
        makeCell(tr, "td", "후탄지구");
        makeCell(tr, "td", "임계치3단계");
        makeCell(tr, "td", "2023-07-25 04:01:00");
        makeCell(tr, "td", "자동발생");
        makeCell(tr, "td", "2023-07-25 04:01:00");
        makeCell(tr, "td", "자동종료");
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
