// 원하는 영역 print하기
var initBodyHtml;


function printPage() {
    window.print();
}

function beforePrint() {
    initBodyHtml = document.body.innerHTML;
    document.body.innerHTML = document.getElementById("printContents").innerHTML;
}

function afterPrint() {
    document.body.innerHTML = initBodyHtml;
}

window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;
