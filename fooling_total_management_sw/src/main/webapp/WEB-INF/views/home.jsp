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

        .today{
            text-align: center;
        }
        .cureentTime{
            text-align: center;
        }

    </style>
    <script src="../../resources/js/jquery/jquery.min.js"></script>
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
                        <%-- 노는게 제일 좋아 칭구들 모여라 언제나 즐거워 개구쟁이 뽀로로 한적한 숲속마을 꼬마펭귄 나가신다 오늘은 또 무슨일이 생길까 뽀로로를 불러봐요 뽀롱뽀로로 뽀롱뽀로로 뽀롱뽀롱뽀로로  --%>
                        이것저것 보장하라!! 아무거나 규탄하라!!! 아무튼 보장하라!!  이것저것 보장하라!! 아무거나 규탄하라!!! 아무튼 보장하라!!  아무거나 규탄하라!!! 이것저것 보장하라!! 아무거나 규탄하라!!! 아무튼 보장하라!!  아무거나 규탄하라!!!
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
                        <th class="areaName">지역명</th>
                        <th>전일강우</th>
                        <th>금일강우</th>
                        <th>현재시간</th>
                    </tr>
                    <tr>
                        <td class="areaName">영월군</td>
                        <td class="yesterday" id="YGyesterday"></td>
                        <td class="today"  id="YGtoday"></td>
                        <td class="cureentTime" id="YG-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">영월읍</td>
                        <td class="yesterday" id="YEyesterday"></td>
                        <td class="today" id="YEtoday"></td>
                        <td class="cureentTime" id="YE-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">상동읍</td>
                        <td class="yesterday" id="SEyesterday"></td>
                        <td class="today" id="SEtoday"></td>
                        <td class="cureentTime" id="SE-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">산솔면</td>
                        <td class="yesterday" id="SMyesterday"></td>
                        <td class="today" id="SMtoday"></td>
                        <td class="cureentTime" id="SM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">김삿갓면</td>
                        <td class="yesterday" id="GMyesterday"></td>
                        <td class="today" id="GMtoday"></td>
                        <td class="cureentTime" id="GM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">북면</td>
                        <td class="yesterday" id="BMyesterday"></td>
                        <td class="today" id="BMtoday"></td>
                        <td class="cureentTime" id="BM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">남면</td>
                        <td class="yesterday" id="NMyesterday"></td>
                        <td class="today" id="NMtoday"></td>
                        <td class="cureentTime" id="NM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">한반도면</td>
                        <td class="yesterday" id="HMyesterday"></td>
                        <td class="today" id="HMtoday"></td>
                        <td class="cureentTime" id="HM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">주천면</td>
                        <td class="yesterday" id="JMyesterday"></td>
                        <td class="today" id="JMtoday"></td>
                        <td class="cureentTime" id="JM-CureentTime"></td>
                    </tr>
                    <tr>
                        <td class="areaName">무릉도원면</td>
                        <td class="yesterday" id="MMyesterday"></td>
                        <td class="today" id="MMtoday"></td>
                        <td class="cureentTime" id="MM-CureentTime"></td>
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

    <script src="/resources/js/date.js"></script>
    <script src="/resources/js/getWeather.js"></script>
    <script src="/resources/js/getRain.js"></script>
    <%-- <script src="/resources/js/time.js"></script> --%>
    <script>

    </script>
</body>
</html>
