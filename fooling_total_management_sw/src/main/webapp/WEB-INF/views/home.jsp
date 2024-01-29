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


    </style>
    
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
            <div style="margin:10px;width:150px;border: 1px solid red;">
                <div style="height:100px;">보고서</div>
                <div style="height:40px;"><a href="#">일일보고서</a></div>
            </div>
        </div>
        <div class="gridBox" id="printContents" style="display:flex;flex-direction:column;justify-content:center;">
            <div>보고서</div>
            <div style="display:flex;flex-direction:column;justify-content:center;">
                <div><hr></div>
                <div>영월군 침수차단 현황</div>
                <div>[영월군 재난 안전 대책 본부]</div>
                <div><hr></div>
                <div>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div><strong>수위/침수</strong></div>
                        <div><strong>단위: Cm</strong></div>
                    </div>
                    <div>
                        <table border="1">
                            <tr>
                                <th>지역명</th>
                                <th>01월27일</th>
                                <th>01월28일</th>
                                <th>01월29일</th>
                                <th>합계</th>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>0.0</td>
                                <td>X</td>
                                <td>X</td>
                                <td>X</td>
                            </tr>
                        </table>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div><strong>강우량</strong></div>
                    </div>
                    </div>
                    <div>
                        <table border="1">
                            <tr>
                                <th>지역명</th>
                                <th>현재</th>
                                <th>침수1(5cm)</th>
                                <th>침수2(15cm)</th>
                                <th>침수3(20cm)</th>
                            </tr>
                            <tr>
                                <td>영월(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>상동읍(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>중동면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>김삿갓면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>영월북면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>영월남면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>한반도면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>무릉도원면(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>주천(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                            <tr>
                                <td>상동(도)</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                        </table>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div><strong>경보발령 내역(최근5개)</strong></div>
                    </div>
                    <div>
                        <table border="1">
                            <tr>
                                <th>장비명</th>
                                <th>발생종류</th>
                                <th>발생시간</th>
                                <th>수동/자동</th>
                                <th>상태</th>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>임계치 3단계</td>
                                <td>2023-08-25 04:01:00</td>
                                <td>자동발생</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>임계치 3단계</td>
                                <td>2023-08-25 03:00:00</td>
                                <td>자동발생</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>임계치 3단계</td>
                                <td>2023-08-25 01:01:00</td>
                                <td>자동발생</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>임계치 3단계</td>
                                <td>2023-08-25 00:20:00</td>
                                <td>자동발생</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>후탄지구</td>
                                <td>임계치 2단계</td>
                                <td>2023-08-25 20:42:00</td>
                                <td>자동발생</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div><strong>문자전광판 표시내용</strong></div>
                    </div>
                    <div>
                        <table border="1">
                            <tr>
                                <th>장비명</th>
                                <th>장비상태</th>
                                <th>파워1</th>
                                <th>파워2</th>
                                <th>파워3</th>
                            </tr>
                            <tr>
                                <td>후탄리 25-3</td>
                                <td>정상</td>
                                <td>정상</td>
                                <td>정상</td>
                                <td>정상</td>
                            </tr>
                            <tr>
                                <td>후탄리 331-1</td>
                                <td>정상</td>
                                <td>정상</td>
                                <td>정상</td>
                                <td>정상</td>
                            </tr>
                        </table>
                    </div>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div><strong>차단기 상태</strong></div>
                    </div>
                    <div>
                        <table border="1">
                            <tr>
                                <th>장비명</th>
                                <th>차단기상태</th>
                                <th>경고음상태</th>
                                <th>경고등상태</th>
                            </tr>
                            <tr>
                                <td>후탄리 331-1</td>
                                <td>열림</td>
                                <td>꺼짐</td>
                                <td>꺼짐</td>
                            </tr>
                            <tr>
                                <td>후탄리 25-3</td>
                                <td>열림</td>
                                <td>꺼짐</td>
                                <td>꺼짐</td>
                            </tr>
                            <tr>
                                <td>판운리 426-20</td>
                                <td>열림</td>
                                <td>꺼짐</td>
                                <td>꺼짐</td>
                            </tr>
                            <tr>
                                <td>광천리 998-7</td>
                                <td>열림</td>
                                <td>꺼짐</td>
                                <td>꺼짐</td>
                            </tr>
                        </table>
                    </div>
                </div>
            <div style="display:flex;flex-direction:row;justify-content:center;">
                <button type="button" onclick="return printPage();">인쇄</button>
                <button>새로고침</button>
            </div>
            </div>
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
        // 원하는 영역 print하기
        var initBodyHtml;

            
        function printPage(){
            window.print();
        }    

        function beforePrint(){
            initBodyHtml = document.body.innerHTML;
            document.body.innerHTML = document.getElementById("printContents").innerHTML;
        }

        function afterPrint(){
            document.body.innerHTML=initBodyHtml;
        }

        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;

    </script>
</body>
</html>
