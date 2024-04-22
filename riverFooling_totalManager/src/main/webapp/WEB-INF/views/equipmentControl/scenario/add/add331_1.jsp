<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">

    <link rel="stylesheet" href="/resources/css/equipmentControl/scenario/add/add.css">

    <%-- sweetalert2 --%>
    <script src="/resources/js/sweetalert/sweetalert2.js"></script>
</head>
<body>
    <header>
        <div class="headContiner">
            <div class="headContent">
                <a href="/fooling_total"><div class="logoBox"><img class="logo" src="/resources/img/logo.png" alt=""></a></div>
                <div class="menuContiner">
                    <div><a href="/fooling_total">데이터검색</a></div>
                    <div><a href="/차단기수동제어">장비제어</a></div>
                    <div><a href="/임계값설정">침수설정</a></div>
                    <div><a href="/보고서출력">보고서</a></div>
                </div>
            </div>
        </div>
    </header>
<hr>
    <main>
        <section>
            <div class="sectionBox01">
                <div class="listBox">
                    <div class="listTitle">장비제어</div>
                    <div class="listContent"><a href="/차단기수동제어" class="pageFoward">차단기</a></div>
                    <div class="listContent"><a href="/displayManagement" class="pageFoward nowForward">전광판</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">시나리오 등록</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 전광판제어  &gt; 시나리오 등록
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="tableContainer">
                        <div>
                            <table class="start">
                                <tr>
                                    <th>
                                        시작시간
                                    </th>
                                    <td>
                                        <div class="selectBox">
                                            <div>
                                                <input type="date" class="inputStartDate" name="startDate" id="startDate" aria-label="Date-Time"> 
                                                <select class="selectStartTime" name="startTime" id="selectTime">
                                                    <option value="00">00</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                </select>
                                                시
                                            </div>
                                            <div class="text"> ※ 시작시간 기준으로 이전에 등록된 시나리오는 표출 종료후 표출됩니다.</div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="addContainer">
                        <div class="addBox">
                            <div class="addinnerBox">

                                <div class="addingTextBox">
                                    <table class="inputTable" id="inputTable">
                                    </table>
                                </div>
                                <div class="addTextBox">
                                    <table class="inputTable" id="inputTable">
                                        <tr><td id="inputContainer"><input type="text" name="addText" class="inputText" id="addText" maxlength="20"></td><td><button class="textAddBtn" id="plusButton">+</button></td></tr>
                                    </table>
                                </div>
                                <div class="byte"><span>0</span> / 20 byte</div>
                            </div>
                            <%-- <div> --%>
                            <div style="display:none;">
                                <textarea name="saveText" id="saveText"></textarea>
                                <textarea name="textNum" id="textNum"></textarea>
                            </div>
                        </div>

                        <div class="displayContainer"></div> 
                    </div>

                    <div class="btnBox">
                        <div><button class="colorBtn color1" data-color="#1"></button></div>
                        <div><button class="colorBtn color2" data-color="#2"></button></div>
                        <div><button class="colorBtn color3" data-color="#3"></button></div>
                        <div><button class="colorBtn color4" data-color="#4"></button></div>
                        <div><button class="colorBtn color5" data-color="#5"></button></div>
                        <div><button class="colorBtn color6" data-color="#6"></button></div>
                        <div><button class="colorBtn color7" data-color="#7"></button></div>
                    </div>
                    <div class="saveBtnBox"><button type="button" class="saveBtn" id="saveButton">저장</button></div>
                </div>
            </div>
        </section>
    </main>

<hr>
    <footer>
        <div>
            <div>
                <div>[24347] 강원도 영월군 영월읍 하송로 64 Tel : 1577-0545</div>
                <div>Copyright 2020ⓒ,Yeongwol County All rights reserved.</div>
                <div>본 홈페이지에 게시된 모든 내용에 대하여 영월군의 허락없는 무단복제를 금합니다.</div>
            </div>
        </div>
    </footer>


    <script></script>
    <%-- <script src="/resources/js/equipmentControl/scenario/add/add.js"></script> --%>
    <script src="/resources/js/equipmentControl/scenario/add/add_save331_1.js"></script>
    <script src="/resources/js/date.js"></script>
</body>
</html>