<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">
    <%-- sweetalert2 --%>
    <script src="/resources/js/sweetalert/sweetalert2.js"></script>
    <style>

    </style>
    <link rel="stylesheet" href="/resources/css/dataSearch/rainfall.css">
</head>
<body>
    <%-- ${loginUser} --%>
    <!-- header 시작 -->
    <jsp:include page="/WEB-INF/views/header.jsp"/>
    <!-- header 끝 -->
    <%-- <header>
        <div class="headContiner">
            <div class="headContent">
                    <a href="/dataSearch/rainfall"><div class="logoBox"><img class="logo" src="/resources/img/logo.png" alt=""></a></div>
                    <div class="menuContiner">
                        <div><a href="/dataSearch/rainfall">데이터검색</a></div>
                        <div><a href="/equipmentControl/차단기수동제어">장비제어</a></div>
                        <div><a href="/inundationSetting/임계값설정">침수설정</a></div>
                        <div><a href="/outputReport/보고서출력">보고서</a></div>
                    </div>
            </div>
        </div>
        <div>
            <button id="settingBtn">설정</button>
        </div>
    </header> --%>
<hr>
    <main>
        <section>
            <div class="sectionBox01">
                <div class="listBox">
                    <div class="listTitle">데이터 검색</div>
                    <div class="listContent"><a href="/dataSearch/rainfall" class="pageFoward nowForward">강우 데이터</a></div>
                    <div class="listContent"><a href="/dataSearch/flooding" class="pageFoward">침수 데이터</a></div>
                    <div class="listContent"><a href="/dataSearch/incomingAndOutgoing" class="pageFoward">입출차 정보</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">데이터검색</div>
                            <div class="typeBox">
                                <div class="searchType"><button type="button" class="rainfall active" id="dayRainfall"># 일간강우</button></div>
                                <%-- <div class="searchType"><button type="button" class="rainfall" id="monthRainfall"># 월간강우</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="yearRainfall"># 연간강우</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="dateRainfall"># 기간별강우</button></div> --%>
                            </div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 데이터검색  &gt; 강우데이터  &gt; 일간강우
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="measure">(단위 : mm)</div>
                    <div class="selectDate">
                        <%-- <div class="yearBox">
                            <select name="연도" id="year" class="yearSelect">
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                            년
                        </div>
                        <div class="monthBox">
                            <select name="월" id="month" class="monthSelect">
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
                            </select>
                            월
                        </div>
                        <div class="dayBox">
                                <select name="일" id="day" class="daySelect">
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
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                일
                        </div>
                        <div><button class="searchBtn">검색</button></div> --%>
                    </div>
                </div>
                <div class="tableContainer"></div>
            </div>
        </section>
    </main>

<hr>
    <jsp:include page="/WEB-INF/views/footer.jsp"/>
    <c:if test="${not empty message}">
        <script>
            Swal.fire({
                text: "${message}",
                icon: 'info',
                confirmButtonText: 'OK'
            });
        </script>
    </c:if>

    <script>
        var loginId = "${loginUser.user_id}";
        var loginPw = "${loginUser.user_pw}";

        console.log("loginId", loginId);
        console.log("loginPw", loginPw);

    </script>
    <script src="/resources/js/date.js"></script>
    <script src="/resources/js/dataSearch/rainfall/rainfall_select.js"></script>
    <script src="/resources/js/dataSearch/rainfall/rainfall_search.js"></script>
    <script src="/resources/js/dataSearch/rainfall/rainfall_table.js"></script>

    <script src="/resources/js/dbSetting.js"></script>
</body>
</html>