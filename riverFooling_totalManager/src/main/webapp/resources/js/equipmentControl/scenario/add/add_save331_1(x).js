let addText = document.getElementById("addText");
let inputContainer = document.getElementById("inputContainer");


//+버튼
document.getElementById("plusButton").addEventListener("click", ()=>{
    console.log("클릭");
    var newDisplay;
    if(plusButton.innerHTML === "+"){
        
        if(addText.value === ""){
            Swal.fire("전광판에 등록할 메세지를 입력해주세요");
        }
        else{
            plusButton.innerHTML = "-";
            plusButton.classList.remove("textAddBtn");
            plusButton.classList.add("textDeleteBtn");
            newDisplay = document.createElement("div");
            newDisplay.textContent = addText.value;
            newDisplay.className = "newDisplay";
            // displayContainer에 새로운 div를 추가합니다.
            inputContainer.appendChild(newDisplay);
            addText.remove();
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
    textAddBtn.onclick = addRow2;
    newCell2.appendChild(textAddBtn);
}


var addText2 = document.getElementById("addText2");

function addRow2() {
    // table element 찾기
    const table = document.getElementById('inputTable');
    
    // 새 행(Row) 추가
    const newRow = table.insertRow();
    
    // 새 행(Row)에 Cell 추가
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    // Cell에 텍스트 추가
    var input02 = document.createElement("input");
    input02.className ="inputText";
    input02.id ="addText2";
    newCell1.appendChild(input02);

    addText2 = input02;
    let addText2Value = addText2.value;
    console.log("addText2Value2 : ", addText2Value);

    var textAddBtn = document.createElement("button");
    textAddBtn.className = "textAddBtn";
    // textAddBtn.id = "plusButton";
    textAddBtn.innerHTML = "+";
    textAddBtn.onclick = plusClick;
    newCell2.appendChild(textAddBtn);
    addDisplay2(addText2Value);
}


function deleteRow(rownum) {

    // table element 찾기
    const table = document.getElementById('inputTable');

    // 행(Row) 삭제
    const newRow = table.deleteRow(rownum);

}



const colorButtons = document.querySelectorAll('.colorBtn');
var display1;
var displayBox;
function addDisplay(){
    let addTextValue = addText.value;

    console.log("addTextValue : ", addTextValue);
    var displayContainer = document.querySelector(".displayContainer");

    displayBox = document.createElement("div");    
    displayBox.className = "displayBox";
    displayBox.id="display";
    displayContainer.appendChild(displayBox);

    display1 = document.createElement("div");  
    display1.innerHTML = addTextValue;
    display1.className = "display1 fontColor7";
    displayBox.appendChild(display1);
    console.log("display1.innerHTML : ", display1.innerHTML);

    // Loop through each button and add a click event listener
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the color value from the data-color attribute
            const colorName = this.getAttribute('data-color');
            // Apply the color as the background color of the body
            console.log("display1.innerHTML 1 : ", display1.innerHTML);
            if (display1) {
                if (colorName == "#1") {                
                    display1.classList.add("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor6");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#2") {                
                    display1.classList.add("fontColor2");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor6");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#3") {                
                    display1.classList.add("fontColor3");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor6");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#4") {             
                    display1.classList.add("fontColor4");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor6");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#5") {                
                    display1.classList.add("fontColor5");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor6");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#6") {                
                    display1.classList.add("fontColor6");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor7");
                }
                if (colorName == "#7") {                
                    display1.classList.add("fontColor7");
                    display1.classList.remove("fontColor1");
                    display1.classList.remove("fontColor2");
                    display1.classList.remove("fontColor3");
                    display1.classList.remove("fontColor4");
                    display1.classList.remove("fontColor5");
                    display1.classList.remove("fontColor6");
                }
            }
        });
    });
}


var display2;
function addDisplay2(addText2Value){
    

    console.log("addText2Value2 : ", addText2Value);

    display2 = document.createElement("div");  
    display2.innerHTML = addText2Value;
    display2.className = "display2 fontColor7";
    displayBox.appendChild(display2);
    console.log("display2.innerHTML : ", display2.innerHTML);

    // Loop through each button and add a click event listener
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the color value from the data-color attribute
            const colorName = this.getAttribute('data-color');
            // Apply the color as the background color of the body
            console.log("display2.innerHTML : ", display2.innerHTML);
            if (display2) {
                if (colorName == "#1") {                
                    display2.classList.add("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor6");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#2") {                
                    display2.classList.add("fontColor2");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor6");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#3") {                
                    display2.classList.add("fontColor3");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor6");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#4") {             
                    display2.classList.add("fontColor4");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor6");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#5") {                
                    display2.classList.add("fontColor5");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor6");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#6") {                
                    display2.classList.add("fontColor6");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor7");
                }
                if (colorName == "#7") {                
                    display2.classList.add("fontColor7");
                    display2.classList.remove("fontColor1");
                    display2.classList.remove("fontColor2");
                    display2.classList.remove("fontColor3");
                    display2.classList.remove("fontColor4");
                    display2.classList.remove("fontColor5");
                    display2.classList.remove("fontColor6");
                }
            }
        });
    });
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

    let startDateValue = startDate.value;
    let dateValue = startDateValue.replace(/-/g, "");
    let selectTimeValue = selectTime.value;

    fetch("/sendData331_1", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"dateValue":dateValue, "selectTimeValue":selectTimeValue} ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        data = result;

        // 차트호출
        // lineChart(data);
        // makeTable(data);
        // liveInfomation(data);
        // openDounutChart(data);
        // closeDounutChart(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
});

