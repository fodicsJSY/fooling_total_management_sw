// 파일명 받기
async function getFileName() {
    const { value: fname } = await Swal.fire({
        title: "파일명을 입력해주세요.",
        input: "text",
        inputLabel: "파일명을 입력해주세요.",
        showCancelButton: true,
        inputValidator: (value) => {
            //console.log("value : ", value);
            if (!value) {
                return getFileName();
            }
        }
    });
    return fname;
}



// 비동기로 이름 받아오기
async function fetchData() {

    // 파일명 가져오기
    const fname = await getFileName();

    if (fname) {
        fetch("fnameUrl", { 
            method : "POST", 
            headers: {"Content-Type": "application/json"}, 
            body : JSON.stringify( {"fname":fname} ) 
        })
        .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
        .then((result) => {
            console.log("result : ", result);

            let filename = result.fname;

            saveData(fname);

        }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
        .catch( err => {
            // console.log("err : ", err);
            Swal.fire("파일을 다운로드 할 수 없습니다.");
        }); // 예외 발생 시 처리할 내용을 작성
    }
}


function saveData(fname){
    console.log("저장");


    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let selectMonthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;

    console.log("selectYearValue : ", selectYearValue);
    console.log("selectMonthValue : ", selectMonthValue);

    let occuMonth = selectYearValue + "0"  + selectMonthValue;
    console.log("occuMonth : ", occuMonth);

    fetch("/dataSearch/sendMonth_floodingSave", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"occuMonth":occuMonth, "fname":fname} ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        console.log("result", result );

        floodingDataSave(result)


        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성


}

function floodingDataSave(result) {
    // 결과 확인
    // console.log("result : ", result);
    
    // 결과에서 월별 침수 데이터 가져오기
    var month_floodingSaveList = result.month_floodingSaveList;
    // console.log("month_floodingSaveList : ", month_floodingSaveList);

    // CSV 헤더 생성 (1부터 31까지의 날짜와 24시간을 포함)
    let csvContent = "지역명";
    for (let i = 1; i <= 31; i++) {
        csvContent += "," + String(i).padStart(2, "0");
    }
    csvContent += "\n";

    let previousLocation = ""; // 이전 지역명 기억

    console.log("csvContent1 : ", csvContent);


    // 월별 침수 데이터를 반복하여 CSV에 추가
    month_floodingSaveList.forEach(function (data) {
        // 중복되지 않는 지역명일 때만 추가
        if (data.sensorLocation !== previousLocation) {
            csvContent += data.sensorLocation;
            previousLocation = data.sensorLocation;
            // 해당 날짜와 시간에 따른 침수량 데이터 추가
            for (let i = 1; i <= 31; i++) {
                let foundData = month_floodingSaveList.find(item => item.day === String(i).padStart(2, "0")); // 데이터 리스트에서 해당 날짜의 데이터 찾기
                if (foundData) {
                    csvContent += "," + foundData.waterLevel; // 침수량 데이터 추가
                } else {
                    csvContent += ",0.0"; // 데이터가 없으면 0.0으로 처리
                }
            }
            csvContent += "\n"; // 줄 바꿈
        }
    });
    


    // CSV 파일 생성
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // 다운로드 링크 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${result.fname}.csv`); // 파일명 지정
    document.body.appendChild(link);
    link.click(); // 다운로드 클릭
    document.body.removeChild(link); // 링크 제거

    Swal.fire("침수 데이터가 다운로드 되었습니다.");
}
