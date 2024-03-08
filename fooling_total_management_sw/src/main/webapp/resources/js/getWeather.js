    getWeather();
    function getWeather(){

        const serviceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
        const pageNo = "1";
        const numOfRows = "10";
        const dataType = "JSON";
        const stnId = "105"; //강원

        // let totalUrl = "https://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst?serviceKey=9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D&pageNo=1&numOfRows=10&dataType=json&stnId=105&tmFc="+tmFc+"";
        let totalUrl = "https://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst?serviceKey="+serviceKey+"&pageNo="+pageNo+"&numOfRows="+numOfRows+"&dataType="+dataType+"&stnId="+stnId+"&tmFc="+tmFc+"";

        fetch(totalUrl,{
                method:"GET",
                headers: {Accept: "application/json"},
            }
        )
            .then((response) => {return response.json();})
            .then((data) => {
                console.log("getWeather", data);
                // 여기에서 wfSv 내용을 출력합니다.
                const wfSvContent = data.response.body.items.item[0].wfSv;
                console.log("wfSv Content:", wfSvContent);
                document.getElementById("weatherContents").innerHTML = wfSvContent;
            })
            .catch(error => console.error('Error:', error));
    }