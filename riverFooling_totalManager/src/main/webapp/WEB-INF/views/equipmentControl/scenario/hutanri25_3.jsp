<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">


    
    <link rel="stylesheet" href="/resources/css/equipmentControl/scenario/후탄리25-3.css">
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
                            <div class="titleName">시나리오 관리</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 전광판제어  &gt; 전광판리스트 &gt; 시나리오리스트
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div>
                    <div class="tableTitle">
                            ▣ 전광판 정보
                    </div>
                    <div class="tableContainer">
                        <div>
                            <table>
                                <tr>
                                    <th>
                                        지역명
                                    </th>
                                    <td class="areaNameData">후탄리 25-3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="tableTitle">
                            ▣ 표출중인 시나리오
                    </div>
                    <div class="tableContainer">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width: 15%;" >시작일</th>
                                        <th>내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="str">
                                        <td id="showStartDay">
                                        </td>
                                        <td id="showContents"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tableTitle">
                        ▣ 등록된 시나리오
                    </div>
                    <div class="tableContainer" id="registeredContainer">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width: 10%;">시작일</th>
                                        <th style="width: 10%;">상태</th>
                                        <th>내용</th>
                                        <th style="width: 10%;">수정</th>
                                        <th style="width: 10%;">삭제</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="str">
                                        <td id="registeredStartDay"></td>
                                        <td id="registeredState"></td>
                                        <td id="registeredContents"></td>
                                        <td id="registeredUpdate"></td>
                                        <td id="registeredDelete"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div><a href="/equipmentControl/scenario/add/add331_1" class="add">추 가</a></div>
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
    <script src="/resources/js/equipmentControl/scenario/hutanri25-3.js"></script>
    <script src="/resources/js/date.js"></script>
</body>
</html>