





// 일별 강우 테이블 만들기
function dayMakeTable(data){
    // console.log("data", data );
    var tableDataList = data;
    // console.log("tableDataList", tableDataList);
    // console.log("tableDataList.length", tableDataList.length);

    let cameraList = [];
    
    for(let i = 0; i < tableDataList.length; i++){
        cameraList.push(tableDataList[i][0]);
    }

    const cameras = [...new Set(cameraList)];
    // console.log("cameras : ", cameras);

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

    createCell(htr, "th", "rainfull areaName", "카메라명");
    createCell(htr, "th", "rainfull inout", "구분");

    // 시간 헤더 생성
    for(let i = 0; i<24 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    // 바디 생성
    for(let i = 0; i<cameras.length ; i++){
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        // 카메라명을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = cameras[i];
        tr.appendChild(tdSpan);

        // "OPEN" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "OPEN";

        for(let j = 0; j<24; j++){
            let cellValue = findOpenData(tableDataList, j, cameras[i]);
            createCell(tr, "td", "rainfull", cellValue);
        }

        // "OPEN" 행 합계
        let openSum = openSumData(tableDataList, cameras[i]);
        createCell(tr, "td", "rainfull dateSumData", openSum);

        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "CLOSE" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "CLOSE";

        for(let j = 0; j<24; j++){
            let cellValue = findCloseData(tableDataList, j, cameras[i]);
            createCell(tr3, "td", "rainfull", cellValue);
        }
        // "CLOSE" 행 합계
        let closeSum = closeSumData(tableDataList, cameras[i]);
        createCell(tr3, "td", "rainfull dateSumData", closeSum);
    }

    }
    
    function findOpenData(data, hour, camera) {
        // console.log("data", data);
        // console.log("camera", camera);
    
        let filteredData = data.filter(item => {
            let itemCamera = item[0];
            let itemHour = item[1];
            let itemCmd = item[2];
    
            // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
            return itemHour == hour && itemCamera == camera && itemCmd == '1';
        });
    
        // console.log("filteredData : ", filteredData);
    
        // 조건을 만족하는 데이터의 개수를 반환
        let count = filteredData.length;
        // console.log("count : ", count);
    
        return count > 0 ? count : "-";
    }

    function findCloseData(data, hour, camera) {
        // console.log("data", data);
        // console.log("camera", camera);
    
        let filteredData = data.filter(item => {
            let itemCamera = item[0];
            let itemHour = item[1];
            let itemCmd = item[2];
    
            // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
            return itemHour == hour && itemCamera == camera && itemCmd == '0';
        });
    
        // console.log("filteredData : ", filteredData);
    
        // 조건을 만족하는 데이터의 개수를 반환
        let count = filteredData.length;
        // console.log("count : ", count);
    
        return count > 0 ? count : "-";
    }


    
    function openSumData(data,camera) {
        // console.log("data", data);
        // console.log("camera", camera);
    
        let filteredData = data.filter(item => {
            let itemCamera = item[0];
            let itemCmd = item[2];
    
            // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
            return itemCamera == camera && itemCmd == '1';
        });
    
        // console.log("filteredData : ", filteredData);
    
        // 조건을 만족하는 데이터의 개수를 반환
        let count = filteredData.length;
        // console.log("count : ", count);
    
        return count > 0 ? count : "-";
    }
    
    function closeSumData(data,camera) {
        // console.log("data", data);
        // console.log("camera", camera);
    
        let filteredData = data.filter(item => {
            let itemCamera = item[0];
            let itemCmd = item[2];
    
            // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
            return itemCamera == camera && itemCmd == '0';
        });
    
        // console.log("filteredData : ", filteredData);
    
        // 조건을 만족하는 데이터의 개수를 반환
        let count = filteredData.length;
        // console.log("count : ", count);
    
        return count > 0 ? count : "-";
    }



// 월별 강우 테이블 만들기
function monthMakeTable(data){
    var tableDataList = data;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");

    let cameraList = [];
    
    for(let i = 0; i < tableDataList.length; i++){
        cameraList.push(tableDataList[i][0]);
    }

    const cameras = [...new Set(cameraList)];
    // console.log("cameras : ", cameras);

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

    createCell(htr, "th", "rainfull areaName", "카메라명");
    createCell(htr, "th", "rainfull inout", "구분");


    for(let i = 1; i<=31 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i<cameras.length ; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = cameras[i];
        tr.appendChild(tdSpan);
        

        // "OPEN" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "OPEN";

        for(let j = 1; j<=31 ; j ++ ){
            let cellValue = monthOpenData(tableDataList, j, cameras[i]);
            createCell(tr, "td", "rainfull", cellValue);
        }

        // "OPEN" 행 합계
        let openSum = openSumData(tableDataList, cameras[i]);
        createCell(tr, "td", "rainfull dateSumData", openSum);



        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "CLOSE" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "CLOSE";

        for(let j = 1; j<=31 ; j ++ ){
            let cellValue = monthCloseData(tableDataList, j, cameras[i]);
            createCell(tr3, "td", "rainfull", cellValue);
        }
        // "CLOSE" 행 합계
        let closeSum = closeSumData(tableDataList, cameras[i]);
        createCell(tr3, "td", "rainfull dateSumData", closeSum);

    }
}




function monthOpenData(data, day, camera) {
    // console.log("data", data);
    // console.log("camera", camera);
    let dayValue = day < 10 ? "0" + day : day.toString();
    // console.log("dayValue", dayValue);

    let filteredData = data.filter(item => {
        let itemCamera = item[0];
        let itemDay = item[1];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemDay == dayValue && itemCamera == camera && itemCmd == '1';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}

function monthCloseData(data, day, camera) {
    // console.log("data", data);
    // console.log("camera", camera);
    let dayValue = day < 10 ? "0" + day : day.toString();
    // console.log("dayValue", dayValue);

    let filteredData = data.filter(item => {
        let itemCamera = item[0];
        let itemDay = item[1];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemDay == dayValue && itemCamera == camera && itemCmd == '0';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}



//  연간강우 테이블 만들기
function yearMakeTable(data){
    var tableDataList = data;

    // console.log("tableDataList", tableDataList );
    // console.log("테이블 생성");


    let cameraList = [];
    
    for(let i = 0; i < tableDataList.length; i++){
        // console.log("tableDataList[i]", tableDataList[i]);
        cameraList.push(tableDataList[i][0]);
        // console.log("cameraList", cameraList);
        }
        const cameras = [...new Set(cameraList)];
        // console.log("cameras : ", cameras);

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

    createCell(htr, "th", "rainfull areaName", "카메라명");
    createCell(htr, "th", "rainfull inout", "구분");


    // 일 헤더 생성
    for(let i = 1; i<=12 ; i++ ){
        createCell(htr, "th", "rainfull dayData", i);
    }

    createCell(htr, "th", "rainfull sum", "계");

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);


        // 바디 생성
    for(let i = 0; i<cameras.length; i ++ ){
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
        
        var tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        
        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull areaName";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = cameras[i];
        tr.appendChild(tdSpan);
        





        // "OPEN" 행 생성
        var trFlooding = document.createElement("th");
        tr.appendChild(trFlooding);
        trFlooding.className = "rainfull inoutData";
        trFlooding.innerHTML = "OPEN";



        for(let j = 1; j<=12 ; j ++ ){
            let cellValue = findOpenData(tableDataList, j, cameras[i]);
            createCell(tr, "td", "rainfull", cellValue);
        }

        // "OPEN" 행 합계
        let openSum = openSumData(tableDataList, cameras[i]);
        createCell(tr, "td", "rainfull dateSumData", openSum);


        var tr3 = document.createElement("tr");
        rainfullTbody.appendChild(tr3);

        // "CLOSE" 행 생성
        var trWaterLevel = document.createElement("th");
        tr3.appendChild(trWaterLevel);
        trWaterLevel.className = "rainfull inoutData";
        trWaterLevel.innerHTML = "CLOSE";

        for(let j = 1; j<=12 ; j ++ ){
            let cellValue = findCloseData(tableDataList, j, cameras[i]);
            createCell(tr3, "td", "rainfull", cellValue);
        }


        // "CLOSE" 행 합계
        let closeSum = closeSumData(tableDataList, cameras[i]);
        createCell(tr3, "td", "rainfull dateSumData", closeSum);

    }


}


function yearOpenData(data, month, camera) {
    // console.log("data", data);
    // console.log("camera", camera);
    

    let filteredData = data.filter(item => {
        let itemCamera = item[0];
        let itemMonth = item[1];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemMonth == month && itemCamera == camera && itemCmd == '1';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}

function yearCloseData(data, month, camera) {
    // console.log("data", data);
    // console.log("camera", camera);

    let filteredData = data.filter(item => {
        let itemCamera = item[0];
        let itemMonth = item[1];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemMonth == month && itemCamera == camera && itemCmd == '0';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}






// 기간별강우 열림 테이블 만들기
function dateMakeOpenTable(data){
    // console.log("열림");
    // console.log("테이블 data : ", data);
    // console.log("테이블 datalength : ", datalength);

    // console.log("tableDataList", tableDataList );
    // console.log("tableDataList.length", tableDataList.length );
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



        
    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueDate= [...new Set(data.map(item => item[0]))];
    // console.log("uniqueDate: ", uniqueDate);

    for (let j = 0; j < uniqueDate.length; j++) {
        // console.log("date :", uniqueDate[j]);
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
    
        createCell(tr, "td", "rainfull", uniqueDate[j]);
    
        for (let k = 0; k < 24; k++) {
            // console.log("야호");
    
            let cellValue = dateOpenData(data, uniqueDate[j], k); // uniqueDate[j]를 전달
    
            createCell(tr, "td", "rainfull", cellValue);
        }
        let openSum = dateOpenSum(data, uniqueDate[j]);
        createCell(tr, "td", "rainfull dateSumData", openSum);
    }

}



function dateOpenData(data, date, hour) {
    let dateValue = date.toString();
    let hourValue = hour < 10 ? "0" + hour : hour.toString();

    let filteredData = data.filter(item => {
        let itemDate = item[0].toString();
        let itemhour = item[1];
        let itemCmd = item[2];
        
        return itemDate == dateValue && itemhour == hourValue && itemCmd == '1';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}


function dateOpenSum(data, date) {
    // console.log("data", data);
    // console.log("camera", camera);

    let filteredData = data.filter(item => {
        let itemDate = item[0];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemDate == date && itemCmd == '1';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}




// 기간별강우 닫힘 테이블 만들기
function dateMakeCloseTable(data){
    // console.log("닫힘");
    
    // console.log("테이블 data : ", data);
    // console.log("테이블 datalength : ", datalength);

    // console.log("tableDataList", tableDataList );
    // console.log("tableDataList.length", tableDataList.length );
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



        
    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueDate= [...new Set(data.map(item => item[0]))];
    // console.log("uniqueDate: ", uniqueDate);

    for (let j = 0; j < uniqueDate.length; j++) {
        // console.log("date :", uniqueDate[j]);
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);
    
        createCell(tr, "td", "rainfull", uniqueDate[j]);
    
        for (let k = 0; k < 24; k++) {
            // console.log("야호");
    
            let cellValue = dateCloseData(data, uniqueDate[j], k); // uniqueDate[j]를 전달
    
            createCell(tr, "td", "rainfull", cellValue);
        }
        let closeSum = dateCloseSum(data, uniqueDate[j]);
        createCell(tr, "td", "rainfull dateSumData", closeSum);
    }

}



function dateCloseData(data, date, hour) {
    // console.log("data", data);
    // console.log("date", date);
    let dateValue = date.toString();
    let hourValue = hour < 10 ? "0" + hour : hour.toString();
    
    let filteredData = data.filter(item => {
        let itemDate = item[0].toString();
        let itemhour = item[1];
        let itemCmd = item[2];
        
        // let total = itemDate == dateValue && itemhour == hourValue && itemCmd == '0'? "진짜진짜" : "없음";
        // console.log("total", total);
        
        return itemDate == dateValue && itemhour == hourValue && itemCmd == '0';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
}






function dateCloseSum(data,date) {
    // console.log("data", data);
    // console.log("camera", camera);

    let filteredData = data.filter(item => {
        let itemDate = item[0];
        let itemCmd = item[2];

        // 데이터의 시간, 카메라, 개폐여부가 모두 유효한지 확인하고 조건을 만족하는지 검사
        return itemDate == date && itemCmd == '0';
    });

    // console.log("filteredData : ", filteredData);

    // 조건을 만족하는 데이터의 개수를 반환
    let count = filteredData.length;
    // console.log("count : ", count);

    return count > 0 ? count : "-";
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



