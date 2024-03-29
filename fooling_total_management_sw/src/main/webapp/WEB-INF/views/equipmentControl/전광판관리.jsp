<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>전광판관리</title>


    
    <link rel="stylesheet" href="/resources/css/equipmentControl/전광판관리.css">
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
                    <div class="listContent"><a href="/차단기수동제어" class="pageFoward">차단기</a></div>
                    <div class="listContent"><a href="/" class="pageFoward nowForward">전광판</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">전광판 관리</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 장비제어  &gt; 전광판제어  &gt; 전광판리스트
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
                                    <th class="">지구</th>
                                    <th class="areaName">지역명</th>
                                    <th class="">시나리오관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="controlTD" rowspan="2">
                                        후탄지구
                                    </th>
                                    <td class="areaNameData">후탄리 25-3</td>
                                    <td class="controlTD">
                                        <div><a href="/후탄리25-3" class="scenario">시나리오관리</a></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="areaNameData">후탄리 331-1</td>
                                    <td class="controlTD">
                                        <div><a href="/후탄리331-1" class="scenario">시나리오관리</a></div>
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
    <script src="resources/js/equipmentControl/전광판관리/전광판관리_select.js"></script>
    <script src="resources/js/date.js"></script>
</body>
</html>