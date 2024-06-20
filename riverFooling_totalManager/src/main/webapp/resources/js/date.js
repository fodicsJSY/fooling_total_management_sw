
    // 현재날짜
    let currentDate = new Date();

    // 연, 월, 일을 얻어옴
    let year = currentDate.getFullYear();
    console.log("year : ", year);
    let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1, 두 자리로 포맷
    console.log("month : ", month);
    let day = currentDate.getDate().toString().padStart(2, "0"); // 두 자리로 포맷
    console.log("day : ", day);

    // 현재 시간을 얻어옴
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");
    let secounds = currentDate.getSeconds().toString().padStart(2, "0");

    //날짜+시간
    var tmFc;
    if(hours + minutes < 1800){
        tmFc = year + month + day + "0600";
    }
    if(hours + minutes >= 1800){
        tmFc = year + month + day + "1800";
    }
    console.log("tmFc", tmFc);