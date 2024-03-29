function searchData(){
    console.log("클릭");
    // yearSelect 요소의 값을 가져와서 콘솔에 출력합니다.


    let selectYearValue = document.getElementById("selectYear") ? document.getElementById("selectYear").value : null;
    let selectMonthValue = document.getElementById("selectMonth") ? document.getElementById("selectMonth").value : null;
    let selectDayValue = document.getElementById("selectDay") ? document.getElementById("selectDay").value : null;


    let startYearValue;
    let startMonthValue;
    let startDayValue;

    let endYearValue;
    let endMonthValue;
    let endDayValue;

    if(selectDayValue){ //연월일
        console.log("selectYearValue : ", selectYearValue);
        console.log("selectMonthValue : ", selectMonthValue);
        console.log("selectDayValue : ", selectDayValue);
    }else if(selectMonthValue){ //연월
        console.log("selectYearValue : ", selectYearValue);
        console.log("selectMonthValue : ", selectMonthValue);
    }else if(selectYearValue){ //연
        console.log("selectYearValue : ", selectYearValue);
    }else{ //시작연월일~종료연월일
        startYearValue = document.getElementById("startYear").value;
        startMonthValue = document.getElementById("startMonth").value;
        startDayValue = document.getElementById("startDay").value;
    
        endYearValue = document.getElementById("endYear").value;
        endMonthValue = document.getElementById("endMonth").value;
        endDayValue = document.getElementById("endDay").value;
        
        console.log("startYearValue : ", startYearValue);
        console.log("startMonthValue : ", startMonthValue);
        console.log("startDayValue : ", startDayValue);
        
        console.log("endYearValue : ", endYearValue);
        console.log("endMonthValue : ", endMonthValue);
        console.log("endDayValue : ", endDayValue);

        let areaValue = document.getElementById("area").value;
        console.log("areaValue : ", areaValue);

        let kindValue = document.getElementById("kind").value;
        console.log("kindValue : ", kindValue);
    }

}