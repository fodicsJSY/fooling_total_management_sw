<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">

    <link rel="stylesheet" href="/resources/css/login.css">
</head>
<body>
<%-- 로그인 --%>
    <%-- <header>
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
                    <div class="listTitle">데이터 검색</div>
                    <div class="listContent"><a href="/" class="pageFoward">강우 데이터</a></div>
                    <div class="listContent"><a href="/flooding" class="pageFoward nowForward">침수 데이터</a></div>
                    <div class="listContent"><a href="/incomingAndOutgoing" class="pageFoward">입출차 정보</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">데이터검색</div>
                            <div class="typeBox">
                                <div class="searchType"><button type="button" class="rainfall active" id="minRainfall"># 10분</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="dayRainfall"># 일간</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="monthRainfall"># 월간</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="yearRainfall"># 연간</button></div>
                                <div class="searchType"><button type="button" class="rainfall" id="dateRainfall"># 기간별</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 데이터검색  &gt; 강우데이터  &gt; 시간별강우
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="measure">(단위 : mm)</div>
                    <div class="selectDate">
                    </div>
                </div>
                <div class="tableContainer"></div>
            </div>
        </section>
    </main> --%>
<header>
    <div class="headContent">
        <div><a href="/"><div class="logoBox"><img class="logo" src="/resources/img/logo.png" alt=""></a></div></div>

    </div>
</header>
<hr>
<main>
    <section>
        <form id="loginFrm">
            <div class="loginContainer">
                <div>
                    <div><a href="/"><div class="logoBox"><img class="slogan" src="/resources/img/slogan.png" alt=""></a></div></div>
                    <div class="loginText">LOGIN</div>
                </div>
                <div>
                    <div class="textContainer">
                        ID : 
                    </div>
                    <div>
                        <input type="text" name="user_id" id="id" placeholder="id">
                    </div>
                </div>
                <div>
                    <div class="textContainer">
                        PW : 
                    </div>
                    <div>
                        <input type="password"  name="user_pw" id="pw" placeholder="password" autocomplete="off">
                    </div>
                </div>
                <div>
                    <button id="loginSubmit">login</button>
                </div>
            </div>
        </form>
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
    <script src="/resources/js/login.js"></script>

</body>
</html>