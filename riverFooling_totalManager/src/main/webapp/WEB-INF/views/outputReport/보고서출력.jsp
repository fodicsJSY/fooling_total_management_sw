<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">
    
    <link rel="stylesheet" href="/resources/css/outputReport/보고서출력.css">
</head>
<body>
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
    </header> --%>
<hr>
    <main>
        <section>
            <div class="sectionBox01">
                <div class="listBox">
                    <div class="listTitle">보고서</div>
                    <div class="listContent"><a href="/outputReport/보고서출력" class="pageFoward nowForward">보고서출력</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">보고서</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                                ▶ 보고서  &gt; 보고서출력
                            </div>
                        </div>
                    </div>
                </div>



                <div class="searchContainer02">
                    <div>
                        <div class="innerContainer" >
                            <div class="tableContainer" id="printContents">
                                <div class="innerBox01" >
                                    <img src="/resources/img/slogan.png" class="slogan">
                                    <strong>영월군 침수차단 현황</strong>
                                    <br>
                                    <span>[영월군재난안전대책본부]</span>
                                </div>
                                <div class="innerBox02" >
                                        <div class="tableBox" >
                                        </div>
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn" onclick="return printPage();">인쇄</button>
                                <button type="button" class="btn" id="refreshButton" >새로고침</button>
                            </div>       
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>

<hr>
    <jsp:include page="/WEB-INF/views/footer.jsp"/>


    <script></script>
    <script src="/resources/js/outputReport/보고서출력.js"></script>
    <script src="/resources/js/outputReport/print.js"></script>
    <script src="/resources/js/outputReport/refresh.js"></script>
    <script src="/resources/js/date.js"></script>

    <script src="/resources/js/share.js"></script>
    <script src="/resources/js/dbSetting.js"></script>
</body>
</html>