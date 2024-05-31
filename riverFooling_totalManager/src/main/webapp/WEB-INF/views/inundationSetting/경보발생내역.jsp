<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">
    
    <link rel="stylesheet" href="/resources/css/inundationSetting/경보발생내역.css">
    <link rel="stylesheet" href="/resources/css/inundationSetting/pagination.css">
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
                    <div class="listTitle">침수설정</div>
                    <div class="listContent"><a href="/inundationSetting/임계값설정" class="pageFoward">임계값설정</a></div>
                    <div class="listContent"><a href="/inundationSetting/경보상황제어" class="pageFoward">경보상황 제어</a></div>
                    <div class="listContent"><a href="/inundationSetting/경보발생내역" class="pageFoward nowForward">경보발생 내역</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">경보발생내역</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 침수설정  &gt; 경보발생내역
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="tableContainer">
                        <%-- <table class="sencerTable">
                            <thead>
                                <tr>
                                    <th>지구명</th>
                                    <th>상태</th>
                                    <th>경보내용</th>
                                    <th>제어</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>후탄지구</td>
                                    <td>정상</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            </tbody>
                        </table> --%>
                    </div>
                    <%-- <div id="content">
                        <!-- 이 부분에 페이지의 내용이 들어갑니다. -->
                        <p>Page 1 content</p>
                    </div> --%>
                    <div class="pagination" >
                        <nav>
                            <ul id="pagination">
                                <%-- 맨 처음 페이지로 이동 --%>
                                <%--
                                <li class="page-item">
                                    <a class="page-link" id="prev" href="/manager/manager?cp=1${sp}">맨 처음</a>
                                </li>
                                --%>
                                <%-- 이전 목록 페이지 이동 --%>
                                <%--
                                <li class="page-item">
                                    <a class="page-link" id="prev" href="/manager/manager?cp=${managerPagination.prevPage}${sp}">이전</a>
                                </li>
                                --%>
                                <%-- 특정 번호 목록 페이지 이동 --%>
                                <%--
                                <c:forEach var="i" begin="${managerPagination.startPage}" end="${managerPagination.endPage}" step="1">
                                    <c:choose>
                                        <c:when test="${i==managerPagination.currentPage}">
                                            <li class="page-item active" aria-current="page"><a class="page-link"  style="background:cornflowerblue;">${i}</a></li>
                                        </c:when>
                                        <c:otherwise>
                                            <li class="page-item"><a class="page-link" href="/manager/manager?cp=${i}${sp}">${i}</a></li>
                                        </c:otherwise>
                                    </c:choose>
                                </c:forEach>
                                --%>
                                <%-- 다음 목록 페이지 이동 --%>
                                <%--
                                <li class="page-item">
                                    <a class="page-link" id="next" href="/manager/manager?cp=${managerPagination.nextPage}${sp}">다음</a>
                                </li>
                                --%>
                                <%-- 맨 끝 페이지 이동 --%>
                                <%--
                                <li class="page-item">
                                    <a class="page-link" id="next" href="/manager/manager?cp=${managerPagination.endPage}${sp}">맨 끝</a>
                                </li>
                                --%>
                                <li class="page-item"><a class="page-link" href="#">이전</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item"><a class="page-link" href="#">6</a></li>
                                <li class="page-item"><a class="page-link" href="#">7</a></li>
                                <li class="page-item"><a class="page-link" href="#">8</a></li>
                                <li class="page-item"><a class="page-link" href="#">9</a></li>
                                <li class="page-item"><a class="page-link" href="#">10</a></li>
                                <li class="page-item"><a class="page-link" href="#">다음</a></li>
                            </ul>
                        </nav>
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
    <script src="/resources/js/inundationSetting/경보발생내역/경보발생내역.js"></script>
    <script src="/resources/js/inundationSetting/경보발생내역/pagination.js"></script>
    <script src="/resources/js/date.js"></script>

    <script src="/resources/js/share.js"></script>
    <script src="/resources/js/dbSetting.js"></script>
</body>
</html>