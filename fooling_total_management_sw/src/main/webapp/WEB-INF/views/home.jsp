<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mainPage</title>

    <style>

        *{ 
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            /* background-color: white; */
            color:black;
        }


        /* 다 만들고 삭제예정 */
        div, main, section, header, footer, article, nav, aside, form 
        { border: 1px solid yellow; }  


        body {
            display: flex;
            flex-direction: column;
            width:100%;
            justify-content: center;
        }


        header{
            height: 10vh;
        }


        footer{
            height: 10vh;
        }


        main{
            /* width: 1140px; */
            margin: auto;
            min-height: 80vh; /* 최소 높이를 뷰포트 높이의 100%로 설정합니다. */
            width:100%;
            /* min-height: 요소의 최소 높이  
                            -> 내부 요소 없어도 최소 높이 유지
                            -> 내부 요소가 지정된 크기를 초과하면 
                                그에 맞게 늘어남
            */
            /* min-height: 500px; */
        }


        section{
            width:100%;
            height:100%;
            display: grid;
            grid-template-columns: 20% 80%; /* 2개의 열 설정 */
            border: 1px solid green;
            gap: 5px;
            }

        .gridBox{
            min-height: 1000px;
            border: 1px solid blue;
        }

        /* .gridBox:first-child{
            width: 100%;
        }

        .gridBox:last-of-type {
            width: 100%;
        } */

        .cameraContainer{
            width:100%;
            height:100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2개씩 설정 */
            gap: 5px;
        }


        /* 움직이는 텍스트 시작*/
        .animated-title {font-size:60px; font-family:'Raleway',Sans-serif; font-weight:300; position: relative; width: 100%;max-width:100%; height: auto; padding:100px 0; overflow-x: hidden; overflow-y: hidden; }
        .animated-title .track {position: absolute; white-space: nowrap;will-change: transform;animation: marquee 60s linear infinite; }
        @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
        }
        @media (hover: hover) and (min-width: 700px){
        .animated-title .content {-webkit-transform: translateY(calc(100% - 8rem)); transform: translateY(calc(100% - 8rem));}
            }
        /* 움직이는 텍스트 끝*/


    </style>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
</head>
<body>
    
    <header>
        <div style="height: 100%;  display:flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div>
                123456
            </div>
            <div></div>
        </div>
    </header>

    <main>
    <section>
        <div class="gridBox">
        </div>
        <div class="gridBox">
            <div class="animated-title">
                <div class="track">
                    <div class="content">
                        노는게 제일 좋아 칭구들 모여라 언제나 즐거워 개구쟁이 뽀로로 한적한 숲속마을 꼬마펭귄 나가신다 오늘은 또 무슨일이 생길까 뽀로로를 불러봐요 뽀롱뽀로로 뽀롱뽀로로 뽀롱뽀롱뽀로로 
                    </div>
                </div>
            </div>
            <div>기상청_중기예보 조회서비스 ~ 중기전망조회(강원105)</div>
            <div class="animated-title">
                <div class="track">
                    <div class="content" id="weatherContents">
                    </div>
                </div>
            </div>
            <div>(영월)중동면이 산솔면으로 명칭 변경됨 </div>
            <div>
                <table border="1">
                    <tr>
                        <th>지역명</th>
                        <th>전일강우</th>
                        <th>금일강우</th>
                        <th>현재시간</th>
                    </tr>
                    <tr>
                        <td>영월군</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>영월읍</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>상동읍</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>산솔면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>김삿갓면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>북면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>남면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>한반도면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>주천면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>무릉도원면</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="gridBox">
        </div>
    </section>


    </main>


    <footer>
        <div style="height: 100%; display:flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div>(주)포딕스시스템</div>
            <div>포딕스로고</div>
        </div>
    </footer>


    <script>

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

        //날짜+시간
        var tmFc;
        if(hours + minutes < 1800){
            tmFc = year + month + day + "0600";
        }
        if(hours + minutes >= 1800){
            tmFc = year + month + day + "1800";
        }
        console.log("tmFc", tmFc);


        getWeather()
        function getWeather(){

            const serviceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
            const pageNo = "1";
            const numOfRows = "10";
            const dataType = "JSON";
            const stnId = "105"; //강원

    
            let totalUrl = "https://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst?serviceKey=9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D&pageNo=1&numOfRows=10&dataType=json&stnId=105&tmFc="+tmFc+"";

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


        // 최종 날짜 문자열 생성
        var base_date = year + month + day;
        console.log("base_date : ", base_date);

        // 최종 시간 문자열 생성
        var base_time = hours + minutes;
        console.log("base_time : ", base_time);

        getRain()
        function getRain(){

            const serviceKey = "9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D";
            const pageNo = "1";
            const numOfRows = "10";
            const dataType = "JSON";

            let nx = "86";
            let ny = "119";
    
            let totalUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=9pU1U1AX4DstHNWuttTMFHFOnRv85QODFmRrOrueaopEhKLJMbWJk1i1WrKCDhS%2F1EzPCV1TUZV%2BUn9OCPXvGA%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date="+base_date+"&base_time="+base_time+"&nx=86&ny=119";

            fetch(totalUrl,{
                    method:"GET",
                    headers: {Accept: "application/json"},
                }
            )
                .then((response) => {return response.json();})
                .then((data) => {
                    console.log("getRain", data);
                    // 여기에서 wfSv 내용을 출력합니다.
                    //const rainContent = data.response.body.items.item[0].wfSv;
                    //console.log("rain Content:", rainContent);
                    
                })
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>
