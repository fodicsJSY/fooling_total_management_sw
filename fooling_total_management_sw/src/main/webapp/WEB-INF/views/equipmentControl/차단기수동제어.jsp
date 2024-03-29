<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>차단기수동제어</title>

    <link rel="stylesheet" href="/resources/css/equipmentControl/차단기수동제어.css">
</head>
<body>
    <header>
        <div class="headContiner">
            <div class="headContent">
                    <a href="/"><div class="logoBox"><img class="logo" src="/resources/img/logo.png" alt=""></a></div>
                    <div class="menuContiner">
                        <div><a href="/">데이터검색</a></div>
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
                    <div class="listContent"><a href="#" class="pageFoward nowForward">차단기</a></div>
                    <div class="listContent"><a href="/전광판관리" class="pageFoward">전광판</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">차단기 수동제어</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 장비제어  &gt; 차단기  &gt; 차단기 수동제어
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                <div class="tableContainer">
                    <div>
                        <table class="controlTable">
                        <thead class="controlThead">
                            <tr>
                                <th class="areaName">지역명</th>
                                <th>차단기</th>
                                <th>경고등</th>
                                <th>경보음</th>
                                <th>저장</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="areaNameData">후탄리 25-3</th>
                                <td class="controlTD">
                                    <select name="상태" id="gate25_3">
                                        <option value="open">열림</option>
                                        <option value="close">닫힘</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="light25_3">
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="sound25_3" >
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <button type="button" class="saveButton" id="saveBtn25_3">저장</button>
                                </td>
                            </tr>
                            <tr>
                                <th class="areaNameData">후탄리 331-1</th>
                                <td class="controlTD">
                                    <select name="상태" id="gate331_1">
                                        <option value="open">열림</option>
                                        <option value="close">닫힘</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="light331_1">
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="sound331_1" >
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <button type="button" class="saveButton" id="saveBtn331_1">저장</button>
                                </td>
                            </tr>
                            <tr>
                                <th class="areaNameData">판운리 426-20</th>
                                <td class="controlTD">
                                    <select name="상태" id="gate426_20">
                                        <option value="open">열림</option>
                                        <option value="close">닫힘</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="light426_20">
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="sound426_20" >
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <button type="button" class="saveButton" id="saveBtn426_20">저장</button>
                                </td>
                            </tr>
                            <tr>
                                <th class="areaNameData">광전리 998-7</th>
                                <td class="controlTD">
                                    <select name="상태" id="gate998_7">
                                        <option value="open">열림</option>
                                        <option value="close">닫힘</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="light998_7">
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <select name="상태" id="sound998_7" >
                                        <option value="Turn_off">꺼짐</option>
                                        <option value="Turn_on">켜짐</option>
                                    </select>
                                </td>
                                <td class="controlTD">
                                    <button type="button" class="saveButton" id="saveBtn998_7">저장</button>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
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
    <script src="resources/js/equipmentControl/차단기수동제어.js"></script>
    <script src="resources/js/date.js"></script>
</body>
</html>