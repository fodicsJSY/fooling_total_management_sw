<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">

    <link rel="stylesheet" href="/resources/css/inundationSetting/임계값설정.css">
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
                    <div class="listTitle">침수설정</div>
                    <div class="listContent"><a href="/임계값설정" class="pageFoward nowForward">임계값설정</a></div>
                    <div class="listContent"><a href="/경보상황제어" class="pageFoward">경보상황 제어</a></div>
                    <div class="listContent"><a href="/경보발생내역" class="pageFoward">경보발생 내역</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">임계값설정</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 침수설정  &gt; 임계값 설정
                            </div>
                        </div>
                    </div>
                    <div class="zoneBox">
                        지구선택 : 
                        <select name="지구선택" id="zoneSelect" class="selectZone">
                            <option value="hutanZone">후탄지구</option>
                        </select>
                    </div>
                </div>
                <div class="searchContainer02">
                    
                </div>
                <div class="tableContainer">
                    <div>
                        <table class="sencerTable">
                            <tr>
                                <th>강우 센서 선택</th>
                                <td>
                                    <select name="지역선택" id="areaSelect" class="selectArea">
                                        <option value="" disabled>강우센서선택</option>
                                        <option value="yeongwol" selected>영월(도)</option>
                                        <option value="sangdong">상동읍(도)</option>
                                        <option value="jungdong_myeon">중동면(도)</option>
                                        <option value="gimsatgat_myeon">김삿갓면(도)</option>
                                        <option value="yeongwolBuk_myeon">영월북면(도)</option>
                                        <option value="yeongwolNam_myeon">영월남면(도)</option>
                                        <option value="hanbando_myeon">한반도면(도)</option>
                                        <option value="mureungdowon_myeon">무릉도원면(도)</option>
                                        <option value="jucheon">주천(도)</option>
                                        <option value="sangdong">상동(도)</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <table class="stepOneTable">
                            <tr>
                                <th class="step" rowspan="6"><input type="checkbox" id="stepOne" value="step1" checked><label class="checkStep"  for="stepOne">1단계</label></th>
                            </tr>
                            <tr>
                                <th class="group">침수</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="radio" id="stepOne_5cm" name="stepOneFlooding" value="5cm" checked> <label for="stepOne_5cm">5cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepOne_13cm" name="stepOneFlooding" value="13cm" > <label for="stepOne_13cm"> 13cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepOne_21cm" name="stepOneFlooding" value="21cm" > <label for="stepOne_21cm"> 21cm</label>
                                            </div>
                                        </div>
                                        <div>※ 침수상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">특보</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepOne_heavyRainAdvisory" name="stepOneWeatherWarning" value="heavyRainAdvisory" checked> <label for="stepOne_heavyRainAdvisory">호우주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_heavyRainWarning" name="stepOneWeatherWarning" value="heavyRainWarning" checked> <label for="stepOne_heavyRainWarning">호우경보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_typhoonAdvisory" name="stepOneWeatherWarning" value="typhoonAdvisory" checked> <label for="stepOne_typhoonAdvisory">태풍주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_typhoonWarning" name="stepOneWeatherWarning" value="typhoonWarning" checked> <label for="stepOne_typhoonWarning">태풍경보</label>
                                            </div>
                                        </div>
                                        <div>※ 특보상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group" rowspan="2" >강우량</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" class="stepOne_rainfallCheck" data-input-id="stepOne_todayInput" value="today" > <label for="stepOne_todayCheck">금일</label>
                                                <input type="text"class="stepOne_numInput" id="stepOne_todayInput" min="0" value="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" class="stepOne_rainfallCheck" data-input-id="stepOne_timeInput" value="time" > <label for="stepOne_timeCheck">시간</label>
                                                <input type="text" class="stepOne_numInput" id="stepOne_timeInput" min="0" value="0">mm
                                            </div>
                                        </div>
                                        <div>※ 강우상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" class="stepOne_rainfallCheck" data-input-id="stepOne_move15numInput" value="move15min" checked> <label for="stepOne_move15">이동15분</label>
                                                <input type="text" class="stepOne_numInput" id="stepOne_move15numInput" min="0" value="10">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" class="stepOne_rainfallCheck" data-input-id="stepOne_move60numInput" value="move60min" checked> <label for="stepOne_move60">이동60분</label>
                                                <input type="text" class="stepOne_numInput" id="stepOne_move60numInput"  min="0" value="15">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" class="stepOne_rainfallCheck" data-input-id="stepOne_move24hNumInput" value="move24h" > <label for="stepOne_move24h">이동24시</label>
                                                <input type="text" class="stepOne_numInput" id="stepOne_move24hNumInput"  min="0" value="0">mm
                                            </div>
                                        </div>
                                        <div>※ 금일,시간,이동강우 중 조건에 맞으면 경보발령이 됩니다. (OR)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">동작장비</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepOne_circuitBreaker" name="stepOne_equipment" value="circuitBreaker" > <label for="stepOne_circuitBreaker">차단기</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_broadcasting" name="stepOne_equipment" value="broadcasting" > <label for="stepOne_broadcasting">경보방송</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_scriptBoard" name="stepOne_equipment" value="scriptBoard" checked> <label for="stepOne_scriptBoard">문자전광판</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_userAPPalarm" name="stepOne_equipment" value="userAPPalarm" > <label for="stepOne_userAPPalarm">사용자APP알림</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepOne_managerAPPalarm" name="stepOne_equipment" value="managerAPPalarm" > <label for="stepOne_managerAPPalarm">관리자APP알림</label>
                                            </div>
                                        </div>
                                        <div>※ 조건에 만족하면 선택된 장비를 자동으로 동작합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table class="stepTwoTable">
                            <tr>
                                <th class="step" rowspan="6"><input type="checkbox" id="stepTwo" value="step2" checked><label class="checkStep"  for="stepTwo">2단계</label></th>
                            </tr>
                            <tr>
                                <th class="group">침수</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="radio" id="stepTwo_5cm" name="stepTwoFlooding" value="5cm" > <label for="stepTwo_5cm">5cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepTwo_13cm" name="stepTwoFlooding" value="13cm" checked> <label for="stepTwo_13cm"> 13cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepTwo_21cm" name="stepTwoFlooding" value="21cm" > <label for="stepTwo_21cm"> 21cm</label>
                                            </div>
                                        </div>
                                        <div>※ 침수상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">특보</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_heavyRainAdvisory"  name="stepTwoWeatherWarning"  value="heavyRainAdvisory" checked> <label for="stepTwo_heavyRainAdvisory">호우주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_heavyRainWarning" name="stepTwoWeatherWarning"  value="heavyRainWarning" checked> <label for="stepTwo_heavyRainWarning">호우경보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_typhoonAdvisory" name="stepTwoWeatherWarning"  value="typhoonAdvisory" checked> <label for="stepTwo_typhoonAdvisory">태풍주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_typhoonWarning" name="stepTwoWeatherWarning"  value="typhoonWarning" checked> <label for="stepTwo_typhoonWarning">태풍경보</label>
                                            </div>
                                        </div>
                                        <div>※ 특보상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group" rowspan="2" >강우량</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepTwo_todayInput" value="today" > <label for="stepTwo_todayCheck">금일</label>
                                                <input type="text"class="stepTwo_numInput" id="stepTwo_todayInput" min="0" value="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepTwo_timeInput" value="time" checked> <label for="stepTwo_timeCheck">시간</label>
                                                <input type="text" class="stepTwo_numInput" id="stepTwo_timeInput" min="0" value="20">mm
                                            </div>
                                        </div>
                                        <div>※ 강우상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepTwo_move15numInput" value="move15min" checked> <label for="stepTwo_move15">이동15분</label>
                                                <input type="text" class="stepTwo_numInput" id="stepTwo_move15numInput" min="0" value="10">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepTwo_move60numInput" value="move60min" checked> <label for="stepTwo_move60">이동60분</label>
                                                <input type="text" class="stepTwo_numInput" id="stepTwo_move60numInput"  min="0" value="18">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepTwo_move24hNumInput" value="move24h" > <label for="stepTwo_move24h">이동24시</label>
                                                <input type="text" class="stepTwo_numInput" id="stepTwo_move24hNumInput"  min="0" value="0">mm
                                            </div>
                                        </div>
                                        <div>※ 금일,시간,이동강우 중 조건에 맞으면 경보발령이 됩니다. (OR)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">동작장비</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_circuitBreaker" name="stepTwo_equipment" value="circuitBreaker" > <label for="stepTwo_circuitBreaker">차단기</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_broadcasting" name="stepTwo_equipment" value="broadcasting" > <label for="stepTwo_broadcasting">경보방송</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_scriptBoard" name="stepTwo_equipment" value="scriptBoard" checked> <label for="stepTwo_scriptBoard">문자전광판</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_userAPPalarm" name="stepTwo_equipment" value="userAPPalarm" checked> <label for="stepTwo_userAPPalarm">사용자APP알림</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepTwo_managerAPPalarm" name="stepTwo_equipment" value="managerAPPalarm" checked> <label for="stepTwo_managerAPPalarm">관리자APP알림</label>
                                            </div>
                                        </div>
                                        <div>※ 조건에 만족하면 선택된 장비를 자동으로 동작합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </table>
                        <table class="stepThreeTable">
                            <tr>
                                <th class="step" rowspan="6"><input type="checkbox" id="stepThree" value="3단계" checked><label class="checkStep"  for="stepThree">3단계</label></th>
                            </tr>
                            <tr>
                                <th class="group">침수</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="radio" id="stepThree_5cm" name="stepThreeFlooding" value="5cm" > <label for="stepThree_5cm">5cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepThree_13cm" name="stepThreeFlooding" value="13cm" > <label for="stepThree_13cm"> 13cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stepThree_21cm" name="stepThreeFlooding" value="21cm" checked> <label for="stepThree_21cm"> 21cm</label>
                                            </div>
                                        </div>
                                        <div>※ 침수상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">특보</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepThree_heavyRainAdvisory" name="stepThreeWeatherWarning" value="heavyRainAdvisory" checked> <label for="stepThree_heavyRainAdvisory">호우주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_heavyRainWarning" name="stepThreeWeatherWarning" value="heavyRainWarning" checked> <label for="stepThree_heavyRainWarning">호우경보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_typhoonAdvisory" name="stepThreeWeatherWarning" value="typhoonAdvisory" checked> <label for="stepThree_typhoonAdvisory">태풍주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_typhoonWarning" name="stepThreeWeatherWarning" value="typhoonWarning" checked> <label for="stepThree_typhoonWarning">태풍경보</label>
                                            </div>
                                        </div>
                                        <div>※ 특보상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group" rowspan="2" >강우량</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepThree_todayInput" value="today" > <label for="stepThree_todayCheck">금일</label>
                                                <input type="text"class="stepThree_numInput" id="stepThree_todayInput" min="0" value="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepThree_timeInput" value="time" checked> <label for="stepThree_timeCheck">시간</label>
                                                <input type="text" class="stepThree_numInput" id="stepThree_timeInput" min="0" value="30">mm
                                            </div>
                                        </div>
                                        <div>※ 강우상황을 조건에 추가합니다. (AND)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepThree_move15numInput" value="move15min" checked> <label for="stepThree_move15">이동15분</label>
                                                <input type="text" class="stepThree_numInput" id="stepThree_move15numInput" min="0" value="10">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepThree_move60numInput" value="move60min" checked> <label for="stepThree_move60">이동60분</label>
                                                <input type="text" class="stepThree_numInput" id="stepThree_move60numInput"  min="0" value="20">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" data-input-id="stepThree_move24hNumInput" value="move24h" > <label for="stepThree_move24h">이동24시</label>
                                                <input type="text" class="stepThree_numInput" id="stepThree_move24hNumInput"  min="0" value="0">mm
                                            </div>
                                        </div>
                                        <div>※ 금일,시간,이동강우 중 조건에 맞으면 경보발령이 됩니다. (OR)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="group">동작장비</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" id="stepThree_circuitBreaker" name="stepThree_equipment" value="circuitBreaker" > <label for="stepThree_circuitBreaker">차단기</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_broadcasting" name="stepThree_equipment" value="broadcasting" > <label for="stepThree_broadcasting">경보방송</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_scriptBoard" name="stepThree_equipment" value="scriptBoard" checked> <label for="stepThree_scriptBoard">문자전광판</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_userAPPalarm" name="stepThree_equipment" value="userAPPalarm" checked> <label for="stepThree_userAPPalarm">사용자APP알림</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="stepThree_managerAPPalarm" name="stepThree_equipment" value="managerAPPalarm" checked> <label for="stepThree_managerAPPalarm">관리자APP알림</label>
                                            </div>
                                        </div>
                                        <div>※ 조건에 만족하면 선택된 장비를 자동으로 동작합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <div><button class="saveButton" id="saveBtn">저 장</button></div>
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
            <%-- <div>(주)포딕스시스템</div>
            <div>포딕스로고</div> --%>
        </div>
    </footer>


    <script></script>
    <script src="/resources/js/inundationSetting/임계값설정.js"></script>
    <script src="/resources/js/date.js"></script>
</body>
</html>