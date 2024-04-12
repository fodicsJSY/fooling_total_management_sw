

function saveData(){
    console.log("저장");


    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let selectMonthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;

    console.log("selectYearValue : ", selectYearValue);
    console.log("selectMonthValue : ", selectMonthValue);

    let occuMonth = selectYearValue + "0"  + selectMonthValue;
    console.log("occuMonth : ", occuMonth);

    fetch("/sendMonth_floodingSave", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"occuMonth":occuMonth} ) 
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


}



function file_goToPungmuDataSave(goToPungmuCSVList, filename) {
    // console.log("goToPungmuCSVList : ", goToPungmuCSVList);
    // CSV 헤더 생성
    let csvContent = "순번,날짜,시간,승차,하차\n";

    no =0;
    // CSV 데이터 추가
    goToPungmuCSVList.forEach(function (item) {
        // console.log("item", item);

        item.forEach(function (data) {
            no++;
            // console.log("data", data);
            let row = `${no},${data.occuDate},${data.occuTime},${data.pungmu_in},${data.pungmu_out}\n`;
            csvContent += row;
        });
    });

    // UTF-8로 변환
    // const encoder = new TextEncoder();
    // const utf8Array = encoder.encode(csvContent);

    // Blob 생성
    //const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), utf8Array], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });

    // CSV 파일 생성
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    

    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    Swal.fire(`${filename}가 다운로드 되었습니다.`);
}