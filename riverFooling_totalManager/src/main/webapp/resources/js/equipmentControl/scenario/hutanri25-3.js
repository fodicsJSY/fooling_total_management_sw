document.addEventListener("DOMContentLoaded", function() {
    showScenario();
    registeredScenario();
});



var showStartDay = document.getElementById("showStartDay");
var showContents = document.getElementById("showContents");


var registeredContainer = document.getElementById("registeredContainer");

var registeredStartDay = document.getElementById("registeredStartDay");
var registeredState = document.getElementById("registeredState");
var registeredContents = document.getElementById("registeredContents");
var registeredUpdate = document.getElementById("registeredUpdate");
var registeredDelete = document.getElementById("registeredDelete");



function showScenario(){
    
    var display =  document.createElement("div");
    display.className = "display";
    
    var block1 =  document.createElement("div");
    block1.className = "block";
    display.appendChild(block1);
    
    
    var span =  document.createElement("span");
    span.className = "span01";
    block1.appendChild(span);
    span.innerHTML="보입니다.";
    
    showStartDay.innerHTML="2023-11-21 09:00:00";
    showContents.appendChild(display);


}





function registeredScenario(){

    registeredContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    registeredContainer.appendChild(div);

    var table = document.createElement("table");
    div.appendChild(table);


    var thead = document.createElement("thead");
    table.appendChild(thead);

    var htr = document.createElement("tr");
    thead.appendChild(htr);


    createCell(htr, "th", "w10percent", "시작일");
    createCell(htr, "th", "w10percent", "상태");
    makeCell(htr, "th", "내용");
    createCell(htr, "th", "w10percent", "수정");
    createCell(htr, "th", "w10percent", "삭제");




    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    var tr = document.createElement("tr");
    tr.className = "str";
    tbody.appendChild(tr);

    makeCell(tr, "td", "2023-11-21 14:00:00");
    createCell(tr, "td", "w10percent", "표출종료");



    var display =  document.createElement("div");
    display.className = "display";

    var block1 =  document.createElement("div");
    block1.className = "block";
    display.appendChild(block1);


    var span01 =  document.createElement("span");
    span01.className = "span01";
    block1.appendChild(span01);
    span01.innerHTML="내용입니다만.";

    var block2 =  document.createElement("div");
    block2.className = "block";
    display.appendChild(block2);

    var span02 =  document.createElement("span");
    span02.className = "span01";
    block2.appendChild(span02);
    span02.innerHTML="야호야호";


    makeCell(tr, "td", display);
    makeCell(tr, "td", "수정불가");
    makeCell(tr, "td", "수정불가");


    /* 임시 작성  */
    var tr1 = document.createElement("tr");
    tr1.className = "str";
    tbody.appendChild(tr1);

    makeCell(tr1, "td", "2023-11-21 14:00:00");
    createCell(tr1, "td", "w10percent", "표출중");
    var display1 =  document.createElement("div");
    display1.className = "display";

    var block01 =  document.createElement("div");
    block01.className = "block";
    display1.appendChild(block01);


    var span1 =  document.createElement("span");
    span1.className = "span01";
    block01.appendChild(span1);
    span1.innerHTML="함노해ㅑ몯호ㅟㅏ";


    makeCell(tr1, "td", display1);
    makeCell(tr1, "td", "수정불가");
    makeCell(tr1, "td", "수정불가");
    /* 임시 작성  */

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
