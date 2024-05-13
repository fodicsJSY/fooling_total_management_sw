// let tableDataList; 

// 차단기 테이블 만들기
function breakerMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    console.log("테이블 생성");
    console.log("data", data );
    
    var tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    var div = document.createElement("div");    
    tableContainer.appendChild(div);

    var controlTable = document.createElement("table");
    controlTable.className = "controlTable";
    div.appendChild(controlTable);

    var controlThead = document.createElement("thead");
    controlThead.className = "controlThead";
    controlTable.appendChild(controlThead);

    var htr = document.createElement("tr");
    controlThead.appendChild(htr);

    createCell(htr, "th", "areaName", "카메라명");
    makeCell(htr, "th", "차단기");
    makeCell(htr, "th", "경고등");
    makeCell(htr, "th", "경보음");
    makeCell(htr, "th", "저장");

    var controlTbody = document.createElement("tbody");
    controlTbody.className = "controlTbody";
    controlTable.appendChild(controlTbody);

    for(let i = 0; i<data.length ; i++){
        var tr = document.createElement("tr");
        controlTbody.appendChild(tr);
        createCell(tr, "th", "areaNameData", data[i][2]);
        createSelectCell1(tr, "controlTD", data[i][1], data[i][2], i);
        createSelectCell2(tr, "controlTD", data[i][1], i);
        createSelectCell3(tr, "controlTD", data[i][1], i);
        // 저장 버튼 셀 생성
        var saveCell = document.createElement("td");
        saveCell.classList.add("controlTD");
        var saveButton = document.createElement("button");
        saveButton.type = "button";
        saveButton.classList.add("saveButton");
        saveButton.textContent = "저장";
        saveButton.id = `saveBtn_${i}`; // ID를 데이터의 첫 번째 요소를 이용하여 설정
        saveButton.addEventListener("click", function() {
            saveChanges(data[i][0], data[i][2], i);
        });
        saveCell.appendChild(saveButton);
        tr.appendChild(saveCell);
    }

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



// select 셀 생성 함수1
function createSelectCell1(row, className, value, cameraName, i) {
    var cell = document.createElement("td");
    cell.className = className;
    var select = document.createElement("select");
    select.name = "상태";
    select.id = `${cameraName}_breaker${i}`;
    var options = [
        { value: "1", text: "열림" },
        { value: "0", text: "닫힘" }
    ];
    options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.value === value) {
            optionElement.selected = true; // 기존 값이면 선택
        }
        select.appendChild(optionElement);
    });
    cell.appendChild(select);
    row.appendChild(cell);
}




// select 셀 생성 함수2
function createSelectCell2(row, className, value, cameraName, i) {
    var cell = document.createElement("td");
    cell.className = className;
    var select = document.createElement("select");
    select.name = "상태";
    select.id = `${cameraName}_WarningLamp${i}`;
    var options = [
        { value: "1", text: "켜짐" },
        { value: "0", text: "꺼짐" }
    ];
    options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.value === value) {
            optionElement.selected = true; // 기존 값이면 선택
        }
        select.appendChild(optionElement);
    });
    cell.appendChild(select);
    row.appendChild(cell);
}




// select 셀 생성 함수3
function createSelectCell3(row, className, value, cameraName, i) {
    var cell = document.createElement("td");
    cell.className = className;
    var select = document.createElement("select");
    select.name = "상태";
    select.id = `${cameraName}_WarningSound${i}`;
    var options = [
        { value: "1", text: "켜짐" },
        { value: "0", text: "꺼짐" }
    ];
    options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.value === value) {
            optionElement.selected = true; // 기존 값이면 선택
        }
        select.appendChild(optionElement);
    });
    cell.appendChild(select);
    row.appendChild(cell);
}







// 저장 함수 정의
function saveChanges(camera_code, cameraName, i) {
    console.log("camera_code : ", camera_code);
    console.log("cameraName : ", cameraName);
    console.log("Index : ", i);

    var clickedButton = event.target;
    var row = clickedButton.closest("tr");

    var select1 = row.querySelector(`select[id="${cameraName}_breaker${i}"]`);
    // var select2 = row.querySelector(`select[id="${cameraName}_WarningLamp${i}"]`);
    // var select3 = row.querySelector(`select[id="${cameraName}_WarningSound${i}"]`);

    var value1 = select1.value;
    console.log("Value 1: ", value1);
    // var value2 = select2.value;
    // console.log("Value 2: ", value2);
    // var value3 = select3.value;
    // console.log("Value 3: ", value3);


    fetch("/breakerSave", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        credentials: "include",
        body : JSON.stringify( {
            "camera_code" : camera_code,
            "command" : value1,
        } )
    })
    .then(resp => resp.json()) 
    .then((result) => {
        console.log("result", result );

    }) 
    .catch( err => {
        console.error("Error: ", err);
    }); 
}






// // 저장 함수 정의
// function saveChanges(camera_code,cameraName, i) {
//     console.log("123");
//     console.log("camera_code : ", camera_code);

//     // var selectId = `${cameraName}_breaker${i}`;
//     // console.log("Select ID: ", selectId);

//     // 클릭한 버튼 요소 가져오기
//     var clickedButton = event.target;

//     // 클릭한 버튼과 동일한 행의 select 요소들을 찾기 위해 부모 노드인 <tr> 요소 찾기
//     var row = clickedButton.closest("tr");
    
//     // select 요소들을 찾기
//     var select1 = row.querySelector(".controlTD select:nth-child(1)");
//     var select2 = row.querySelector(".controlTD select:nth-child(2)");
//     var select3 = row.querySelector(".controlTD select:nth-child(3)");

//     // select 요소의 값 가져오기
//     var value1 = select1.value;
//     var value2 = select2.value;
//     var value3 = select3.value;

//     // 가져온 값 사용 예시
//     console.log("Value 1: ", value1);
//     console.log("Value 2: ", value2);
//     console.log("Value 3: ", value3);


//     fetch("/breakerSave", { 
//         method : "POST", 
//         headers: {"Content-Type": "application/json;"}, 
//         credentials: "include",
//         body : JSON.stringify( {
//                                 "camera_code" : camera_code,
//                                 "command" : 1,
//         } )
//     })
//     .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
//     .then((result) => {
//         console.log("result", result );

//         var data = result.result
//         console.log("data", data);
//         // forwardBreaker(data)
//         // breakerMakeTable(data);
        
//     }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
//     .catch( err => {
//         // console.log("err : ", err);
//     }); // 예외 발생 시 처리할 내용을 작성

// }