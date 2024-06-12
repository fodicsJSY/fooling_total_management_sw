let tableDataList; 

// 시간별 강우 테이블 만들기
function minMakeTable(data){

    // console.log("data" + data);
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

    createCell(htr, "th", "rainfull time", "시간");
    createCell(htr, "th", "rainfull dataType", "데이터타입");

    // 분 헤더 생성
    for(let i = 10; i <= 60; i += 10 ){
        createCell(htr, "th", "rainfull dayData", i+"분");
    }

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    for(let i = 0; i < 24; i++ ){
        var trFlooding = document.createElement("tr");
        rainfullTbody.appendChild(trFlooding);

        // 시간 값을 위아래 두 칸 차지하도록 설정합니다.
        var tdSpan = document.createElement("th");
        tdSpan.className = "rainfull time";
        tdSpan.setAttribute("rowspan", "2");
        tdSpan.textContent = i+"시";
        trFlooding.appendChild(tdSpan);

        // "침수" 행 생성
        var tdFlooding = document.createElement("td");
        tdFlooding.className = "rainfull dataType";
        tdFlooding.textContent = "침수";
        trFlooding.appendChild(tdFlooding);

        for(let j = 0; j < 6; j++ ){
            let min = (j * 10) + 5; // 분 계산
            // console.log("min : ", min);
            let cellValue = data ? findDataByTime(data, i, min, "alarmWaterLevel") : "-";
            // console.log("cellValue : ", cellValue);
            
            createCell(trFlooding, "td", "rainfull", cellValue);
        }

        var trWaterLevel = document.createElement("tr");
        rainfullTbody.appendChild(trWaterLevel);

        // "수위" 행 생성
        var tdWaterLevel = document.createElement("td");
        tdWaterLevel.className = "rainfull dataType";
        tdWaterLevel.textContent = "수위";
        trWaterLevel.appendChild(tdWaterLevel);

        for(let k = 0; k < 6; k++ ){
            let min = (k * 10) + 5; // 분 계산
            let cellValue =  data ? findDataByTime(data, i, min, "waterLevel") : "-";
            createCell(trWaterLevel, "td", "rainfull", cellValue);
        }
    }
}

// 시간과 분에 따른 데이터 찾기
function findDataByTime(data, hour, min, property) {
    let foundData = data.find(item => {
        let itemHour = parseInt(item.hour); // 데이터의 시간 값
        let itemMin = parseInt(item.min.substring(0, 2)); // 데이터의 분 값

        // 데이터의 시간과 분이 모두 유효한지 확인
        if (!isNaN(itemHour) && !isNaN(itemMin)) {
            return itemHour === hour && itemMin <= min && min < itemMin + 10;
        } else {
            return false; // 시간이나 분 중 하나라도 유효하지 않으면 해당 데이터는 무시
        }
    });

    return foundData ? foundData[property] : "-";
}




// 일별 침수 테이블 만들기
function dayMakeTable(data) {
    let tableContainer = document.querySelector(".tableContainer");
    tableContainer.innerHTML = ""; // Clear previous data

    let div = document.createElement("div");
    tableContainer.appendChild(div);

    let rainfullTable = document.createElement("table");
    rainfullTable.className = "rainfullTable";
    div.appendChild(rainfullTable);

    let rainfullThead = document.createElement("thead");
    rainfullThead.className = "rainfullThead";
    rainfullTable.appendChild(rainfullThead);

    let htr = document.createElement("tr");
    rainfullThead.appendChild(htr);

    createCell(htr, "th", "rainfull areaName", "지역명");

    for (let i = 0; i < 24; i++) {
        let paddedNumber = String(i).padStart(2, "0");
        createCell(htr, "th", "rainfull dayData", paddedNumber);
    }

    let rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueLocations = [...new Set(data.map(item => item.sensorLocation))];

    uniqueLocations.forEach(location => {
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        let tdLocation = document.createElement("td");
        tdLocation.className = "rainfull areaNameData";
        tdLocation.textContent = location;
        tr.appendChild(tdLocation);

        for (let j = 0; j < 24; j++) {
            let cellValue = "-";

            // 해당 지역의 데이터만 필터링
            let filteredData = data.filter(item => item.sensorLocation === location);

            // 해당 일에 대한 데이터가 있는 경우 값을 할당
            let foundData = filteredData.find(item => String(item.hour).padStart(2, "0") === String(j).padStart(2, "0"));
            if (foundData) {
                cellValue = foundData.waterLevel;
            }

            createCell(tr, "td", "rainfull", cellValue);
        }
    });
}






// 월별 강우 테이블 만들기
function monthMakeTable(data){
    // console.log("data", data );

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

    for (let i = 1; i <= 31; i++) {
        let paddedNumber = String(i).padStart(2, "0");
        createCell(htr, "th", "rainfull dayData", paddedNumber);
    }


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueLocations = [...new Set(data.map(item => item.sensorLocation))];

    uniqueLocations.forEach(location => {
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        let tdLocation = document.createElement("td");
        tdLocation.className = "rainfull areaNameData";
        tdLocation.textContent = location;
        tr.appendChild(tdLocation);

        for (let j = 1; j <= 31; j++) {
            let cellValue = "-";

            // 해당 지역의 데이터만 필터링
            let filteredData = data.filter(item => item.sensorLocation === location);

            // 해당 일에 대한 데이터가 있는 경우 값을 할당
            let foundData = filteredData.find(item => String(item.day).padStart(2, "0") === String(j).padStart(2, "0"));
            if (foundData) {
                cellValue = foundData.waterLevel;
            }

            createCell(tr, "td", "rainfull", cellValue);
        }
    });
}






//  연간강우 테이블 만들기
function yearMakeTable(data){
    
    // console.log("data", data );
    

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


    for (let i = 1; i < 13; i++) {
        let paddedNumber = String(i).padStart(2, "0");
        createCell(htr, "th", "rainfull dayData", paddedNumber);
    }



    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);

    var tr = document.createElement("tr");
    rainfullTbody.appendChild(tr);

    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueLocations = [...new Set(data.map(item => item.sensorLocation))];

    uniqueLocations.forEach(location => {
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        let tdLocation = document.createElement("td");
        tdLocation.className = "rainfull areaNameData";
        tdLocation.textContent = location;
        tr.appendChild(tdLocation);

        for (let j = 1; j < 13; j++) {
            let cellValue = "-";

            // 해당 지역의 데이터만 필터링
            let filteredData = data.filter(item => item.sensorLocation === location);

            // 해당 일에 대한 데이터가 있는 경우 값을 할당
            let foundData = filteredData.find(item => String(item.month).padStart(2, "0") === String(j).padStart(2, "0"));
            if (foundData) {
                cellValue = foundData.waterLevel;
            }
            createCell(tr, "td", "rainfull", cellValue);
        }
    });

}








// 기간별강우 flooding 테이블 만들기
function dateMakeFloodingTable(data){
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

    createCell(htr, "th", "rainfull htrDate", "날짜");

    
    for (let i = 0; i < 24; i++) {
        let paddedNumber = String(i).padStart(2, "0");
        createCell(htr, "th", "rainfull dayData", paddedNumber);
    }


    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);


    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueDate= [...new Set(data.map(item => item.date))];
    // console.log("flooding_uniqueDate: ", uniqueDate);
    uniqueDate.forEach(date => {
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        let tdLocation = document.createElement("td");
        tdLocation.className = "rainfull areaNameData";
        tdLocation.textContent = formatTableDate(date);
        tr.appendChild(tdLocation);

        for (let j = 0; j < 24; j++) {
            let cellValue = "-";

            // 해당 지역의 데이터만 필터링
            let filteredData = data.filter(item => item.date === date);
            // console.log("flooding_filteredData : ", filteredData);

            // 해당 일에 대한 데이터가 있는 경우 값을 할당
            let foundData = filteredData.find(item => String(item.hour).padStart(2, "0") === String(j).padStart(2, "0"));
            // console.log("flooding_foundData : ", foundData);
            if (foundData) {
                cellValue = foundData.alarmWaterLevel;
                // console.log("flooding_cellValue : ", cellValue);
            }
            createCell(tr, "td", "rainfull", cellValue);
        }
    });


}






// 기간별강우 waterLevel 테이블 만들기
function dateMakeWaterLevelTable(data){
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

    createCell(htr, "th", "rainfull htrDate", "날짜");
    
    for (let i = 0; i < 24; i++) {
        let paddedNumber = String(i).padStart(2, "0");
        createCell(htr, "th", "rainfull dayData", paddedNumber);
    }

    var rainfullTbody = document.createElement("tbody");
    rainfullTbody.className = "rainfullTbody";
    rainfullTable.appendChild(rainfullTbody);



    // 중복을 제거한 후에 중복 제거된 값들의 배열을 만듭니다.
    const uniqueDate= [...new Set(data.map(item => item.date))];
    // console.log("waterLevel_uniqueDate : ", uniqueDate);
    uniqueDate.forEach(date => {
        let tr = document.createElement("tr");
        rainfullTbody.appendChild(tr);

        let tdLocation = document.createElement("td");
        tdLocation.className = "rainfull areaNameData";
        tdLocation.textContent = formatTableDate(date);
        tr.appendChild(tdLocation);

        for (let j = 0; j < 24; j++) {
            let cellValue = "-";

            // 해당 지역의 데이터만 필터링
            let filteredData = data.filter(item => item.date === date);
            // console.log("waterLevel_filteredData : ", filteredData);

            // 해당 일에 대한 데이터가 있는 경우 값을 할당
            let foundData = filteredData.find(item => String(item.hour).padStart(2, "0") === String(j).padStart(2, "0"));
            // console.log("waterLevel_foundData : ", foundData);
            if (foundData) {
                cellValue = foundData.waterLevel;
                // console.log("waterLevel_cellValue : ", cellValue);
            }
            createCell(tr, "td", "rainfull", cellValue);
        }
    });

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



function formatTableDate(dateString) {
    // dateString을 YYYYMMDD 형식으로 파싱하여 Date 객체 생성
    let date = new Date(dateString.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'));

    // 월과 일을 0부터 시작하는 인덱스로 변환
    let month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    let day = date.getDate();

    // "월 일, 년" 형식으로 포맷팅
    return date.getFullYear() + "년 " + month + "월 " + day + "일";
}