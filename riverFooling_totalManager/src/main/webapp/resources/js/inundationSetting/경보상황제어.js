
let warningSelect = document.getElementById("warningSelect");

//저장버튼
document.getElementById("warningBtn").addEventListener("click", ()=>{
    // console.log("클릭");

    let warningValue = warningSelect.value;

    // console.log("warningValue : ", warningValue);

    fetch("/sendWarning", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"warningValue":warningValue} ) 
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
        console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성

});