<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>임계값설정</title>
    <link rel="stylesheet" href="/resources/css/inundationSetting/임계값설정.css">
</head>
<body>
    <header>
        <div class="headContiner">
            <div class="headContent">
                    <a href="/"><div class="logoBox"><img class="logo" src="/resources/img/logo.png" alt=""></a></div>
                    <div class="menuContiner">
                        <div><a href="#">데이터검색</a></div>
                        <div><a href="/전광판관리">장비제어</a></div>
                        <div><a href="/임계값설정">침수설정</a></div>
                        <div><a href="#">보고서</a></div>
                    </div>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div class="sectionBox01">
                <div class="listBox">
                    <div class="listTitle">데이터 검색</div>
                    <div class="listContent"><a href="#" class="pageFoward nowForward">강우 데이터</a></div>
                    <div class="listContent"><a href="/침수데이터" class="pageFoward">침수 데이터</a></div>
                    <div class="listContent"><a href="/입출차정보" class="pageFoward">입출차 정보</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">임계값설정</div>
                            <%-- <div class="typeBox">
                                <div class="searchType"><button type="button" class="rainfall active" id="dayRainfall"># 일간강우</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="monthRainfall"># 월간강우</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="yearRainfall"># 연간강우</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="dateRainfall"># 기간별강우</button></div>
                            </div> --%>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 침수설정  &gt; 임계값 설정
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="zoneBox">
                        지구선택 : 
                        <select name="지구선택" id="zoneSelect" class="selectZone">
                            <option value="후탄지구">후탄지구</option>
                        </select>
                    </div>
                </div>
                <div class="tableContainer">
                    <div>
                        <table class="sencerTable">
                            <tr>
                                <th>강우 센서 선택</th>
                                <td>
                                    <select name="지역선택" id="areaSelect" class="selectArea">
                                        <option value="영월">영월(도)</option>
                                        <option value="상동읍">상동읍(도)</option>
                                        <option value="중동면">중동면(도)</option>
                                        <option value="김삿갓면">김삿갓면(도)</option>
                                        <option value="영월북면">영월북면(도)</option>
                                        <option value="영월남면">영월남면(도)</option>
                                        <option value="한반도면">한반도면(도)</option>
                                        <option value="무릉도원면">무릉도원면(도)</option>
                                        <option value="주천">주천(도)</option>
                                        <option value="상동">상동(도)</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <table class="stepOneTable">
                            <tr>
                                <th class="step" rowspan="6"><input type="checkbox" id="stepOne" value="1단계" ><label class="checkStep"  for="stepOne">1단계</label></th>
                            </tr>
                            <tr>
                                <th class="group">침수</th>
                                <td>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="radio" id="" value="5cm" > <label for="">5cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="" value="13cm" > <label for=""> 13cm</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="" value="21cm" > <label for=""> 21cm</label>
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
                                                <input type="checkbox" id="" value="호우주의보" > <label for="">호우주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="호우경보" > <label for="">호우경보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="태풍주의보" > <label for="">태풍주의보</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="태풍경보" > <label for="">태풍경보</label>
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
                                                <input type="checkbox" id="" value="금일" > <label for="">금일</label>
                                                <input type="number"class="numInput" min="0" placeholder="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="시간" > <label for="">시간</label>
                                                <input type="number" class="numInput" min="0" placeholder="0">mm
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
                                                <input type="checkbox" id="" value="이동 15분" > <label for="">이동 15분</label>
                                                <input type="number" class="numInput"  min="0" placeholder="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="이동 60분" > <label for="">이동 60분</label>
                                                <input type="number" class="numInput"  min="0" placeholder="0">mm
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="이동 24시" > <label for="">이동 24시</label>
                                                <input type="number" class="numInput"  min="0" placeholder="0">mm
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
                                                <input type="checkbox" id="" value="차단기" > <label for="">차단기</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="경보방송" > <label for="">경보방송</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="문자전광판" > <label for="">문자전광판</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="사용자APP 알림" > <label for="">사용자APP 알림</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="" value="관리자APP 알림" > <label for="">관리자APP 알림</label>
                                            </div>
                                        </div>
                                        <div>※ 조건에 만족하면 선택된 장비를 자동으로 동작합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table class="stepTwoTable"></table>
                        <table class="stepThreeTable"></table>
                    </div>
                    <div><button class="saveButton">저장</button></div>
                
                </div>
            </div>
        </section>
    </main>


    <footer>
        <div style=" width: 1730px; height: 100%; display:flex; flex-direction: row; justify-content: space-between; align-items: center;">
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
    <script src="resources/js/dataSearch/강우데이터.js"></script>
    <script src="resources/js/date.js"></script>
</body>
</html>