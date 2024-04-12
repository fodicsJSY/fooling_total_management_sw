let addText = document.getElementById("addText");
// let display = document.getElementById("display");


//+버튼
document.getElementById("plusButton").addEventListener("click", ()=>{
    console.log("클릭");
    
    if(plusButton.innerHTML === "+"){

        if(addText.value === ""){
            Swal.fire("전광판에 등록할 메세지를 입력해주세요");
        }else{
            plusButton.innerHTML = "-";
            plusButton.classList.remove("textAddBtn");
            plusButton.classList.add("textDeleteBtn");
            addRow();
            addDisplay();
        }

    }else{
        deleteRow(-1);
        deleteDisplay();
        addText.value ="";
        plusButton.classList.remove("textDeleteBtn");
        plusButton.classList.add("textAddBtn");
        plusButton.innerText = "+";
    }

});


function plusClick(){
    if(addText.value === ""){
        Swal.fire("전광판에 등록할 메세지를 입력해주세요");
    }else{
        plusButton.innerHTML = "-";
        plusButton.classList.remove("textAddBtn");
        plusButton.classList.add("textDeleteBtn");
        addRow();
        addDisplay();
    }
}



function addRow() {
    // table element 찾기
    const table = document.getElementById('inputTable');
    
    // 새 행(Row) 추가
    const newRow = table.insertRow();
    
    // 새 행(Row)에 Cell 추가
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    // Cell에 텍스트 추가
    var input = document.createElement("input");
    input.className ="inputText";
    input.id ="addText";
    newCell1.appendChild(input);

    var textAddBtn = document.createElement("button");
    textAddBtn.className = "textAddBtn";
    // textAddBtn.id = "plusButton";
    textAddBtn.innerHTML = "+";
    textAddBtn.onclick = plusClick;
    newCell2.appendChild(textAddBtn);
}


function deleteRow(rownum) {

    // table element 찾기
    const table = document.getElementById('inputTable');

    // 행(Row) 삭제
    const newRow = table.deleteRow(rownum);

}


function addDisplay(){
    var displayContainer = document.querySelector(".displayContainer");

    var displayBox = document.createElement("div");    
    displayBox.className = "displayBox";
    displayBox.id="display";
    displayContainer.appendChild(displayBox);
}



function deleteDisplay(){
    // 요소 삭제
    var displayContainer = document.querySelector(".displayContainer");
    var displayBox = document.querySelector(".displayBox");
    displayContainer.removeChild(displayBox);
}




let startDate = document.getElementById("startDate");
let selectTime = document.getElementById("selectTime");


//저장버튼
document.getElementById("saveButton").addEventListener("click", ()=>{
    console.log("클릭");
    console.log("startDate : ", startDate.value);
    console.log("selectTime : ", selectTime.value);
});

