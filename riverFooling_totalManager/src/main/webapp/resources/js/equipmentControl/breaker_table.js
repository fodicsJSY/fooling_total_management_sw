// let tableDataList; 

// 차단기 테이블 만들기
function breakerMakeTable(data){
    // tableDataList = data.tableDataList;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");
    // console.log("data", data );
    
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
    makeCell(htr, "th", "EM LOCK");
    // makeCell(htr, "th", "경고등");
    // makeCell(htr, "th", "경보음");
    makeCell(htr, "th", "저장");

    var controlTbody = document.createElement("tbody");
    controlTbody.className = "controlTbody";
    controlTable.appendChild(controlTbody);

    for(let i = 0; i<data.length ; i++){
        var tr = document.createElement("tr");
        controlTbody.appendChild(tr);
        createCell(tr, "th", "areaNameData", data[i][2]);
        createSelectCell1(tr, "controlTD", data[i][1], data[i][2], i, data[i][3]);
        createSelectCell2(tr, "controlTD", data[i][1], data[i][2], i, data[i][3]);

        // createSelectCell3(tr, "controlTD", data[i][1], i);
        // createSelectCell4(tr, "controlTD", data[i][1], i);
        // 저장 버튼 셀 생성
        var saveCell = document.createElement("td");
        saveCell.classList.add("controlTD");
        var saveButton = document.createElement("button");
        saveButton.type = "button";
        saveButton.classList.add("saveButton");
        saveButton.textContent = "저장";
        saveButton.id = `saveBtn_${i}`; // ID를 데이터의 첫 번째 요소를 이용하여 설정
        saveButton.addEventListener("click", function() {
            // console.log("클릭");

            saveChanges(data[i][0], data[i][2], i, data[i][3], data[i][4]);
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
function createSelectCell1(row, className, status, cameraName, i, gateCode) {
    // console.log("createSelectCell1 gateCode : ", gateCode);
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

        if(gateCode == 6){
            // console.log("createSelectCell1 status : ", status);
            if (status == 20 || status == 21) {
                if (option.value == "1") { // 상태가 20 또는 21일 때 열림이 선택되도록 함
                    optionElement.selected = true;
                }
            } else {
                if (option.value == "0") { // 상태가 24 또는 23일 때 닫힘이 선택되도록 함
                    optionElement.selected = true;
                }
            }
        }else{
            if (option.value === status) {
                optionElement.selected = true; // 기존 값이면 선택
            }
        }

        select.appendChild(optionElement);
    });
    cell.appendChild(select);
    row.appendChild(cell);
}




// select 셀 생성 함수2(EM LOCK)
function createSelectCell2(row, className, status, cameraName, i, gateCode) {
    // console.log("gateCode : ", gateCode);
    var cell = document.createElement("td");
    cell.className = className;
    if(gateCode == 6){
        var select = document.createElement("select");
        select.name = "상태";
        select.id = `${cameraName}_emLock${i}`;
        var options = [
            { value: "1", text: "START" },
            { value: "0", text: "STOP" }
        ];
        options.forEach(function(option) {
            var optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            if (status == 24 || status == 21) {
                if (option.value == "1") { // 상태가 24 또는 21일 때 START가 선택되도록 함
                    optionElement.selected = true;
                }
            } else {
                if (option.value == "0") { // 상태가 24 또는 21이 아닐 때 STOP이 선택되도록 함
                    optionElement.selected = true;
                }
            }
            select.appendChild(optionElement);
        });
        cell.appendChild(select);

        // select가 변경될 때 createSelectCell1 함수의 select를 활성화 또는 비활성화하기
        // select.addEventListener('change', function() {
        //     if (select.value === '1') { // START가 선택되면 createSelectCell1의 select를 활성화
        //         document.getElementById(`${cameraName}_breaker${i}`).disabled = false;
        //     } else { // STOP이 선택되면 createSelectCell1의 select를 비활성화
        //         document.getElementById(`${cameraName}_breaker${i}`).disabled = true;
        //     }
        // });

    }else{
        cell.innerHTML="-"
    }
        row.appendChild(cell);
}






// select 셀 생성 함수3(경고등)
function createSelectCell3(row, className, value, cameraName, i) {
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




// select 셀 생성 함수4(경보음)
function createSelectCell4(row, className, value, cameraName, i) {
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
function saveChanges(camera_code, cameraName, i, gateCode, site_code) {
    // console.log("실행");
    // console.log("camera_code : ", camera_code);
    // console.log("cameraName : ", cameraName);
    // console.log("Index : ", i);
    // console.log("cameraName : ", cameraName);
    // console.log("gateCode : ", gateCode);

    var clickedButton = event.target;
    var row = clickedButton.closest("tr");

    var select1 = row.querySelector(`select[id="${cameraName}_breaker${i}"]`);
    var select2 = row.querySelector(`select[id="${cameraName}_emLock${i}"]`);
    // var select3 = row.querySelector(`select[id="${cameraName}_WarningLamp${i}"]`);
    // var select4 = row.querySelector(`select[id="${cameraName}_WarningSound${i}"]`);

    var value1 = select1.value;
    // console.log("Value 1: ", value1);

    // var value3 = select3.value;
    // console.log("Value 3: ", value3);
    // var value4 = select4.value;
    // console.log("Value 4: ", value4);


    if(gateCode == 6){

        var value2 = select2.value;
        // console.log("Value 2: ", value2);

        let doorCommand;
        if(value1 == 0){
            if(value2 == 0){
                doorCommand = 23;
            }else{
                doorCommand = 24;
            }
        }else{
            if(value2 == 0){
                doorCommand = 20;
            }else{
                doorCommand = 21;
            }
        }
        // console.log("doorCommand", doorCommand);

        fetch("/equipmentControl/breakerSave", { 
            method : "POST", 
            headers: {"Content-Type": "application/json;"}, 
            credentials: "include",
            body : JSON.stringify( {
                "camera_code" : camera_code,
                "command" : doorCommand,
            } )
        })
        .then(resp => resp.json()) 
        .then((result) => {
            // console.log("result", result );
            // result 문자열을 JSON으로 파싱
            let resultObj = JSON.parse(result.result);
    
            // res_code 값 추출
            let resCode = resultObj.res_code;
    
            // console.log(resCode); // 결과값 출력
    
            if(resCode == 200 ){
                // addLogData(camera_code, cameraName, gateCode);
                Swal.fire("저장이 완료되었습니다!").then(() => {
                    // location.reload();
                });
            }else{
                Swal.fire("저장에 실패했습니다.");
            }
    
        }) 
        .catch( err => {
            console.error("Error: ", err);
        }); 
    }else{
        // console.log("6아님");
        fetch("/equipmentControl/breakerSave", { 
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
            // console.log("result", result );
            // result 문자열을 JSON으로 파싱
            let resultObj = JSON.parse(result.result);
    
            // res_code 값 추출
            let resCode = resultObj.res_code;
    
            // console.log(resCode); // 결과값 출력
    
            if(resCode == 200 ){
                addLogData(camera_code, cameraName, value1, site_code);
                // Swal.fire("저장이 완료되었습니다!").then(() => {
                //     location.reload();
                // });
            }else{
                Swal.fire("저장에 실패했습니다.");
            }
    
        }) 
        .catch( err => {
            console.error("Error: ", err);
        }); 
    }
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