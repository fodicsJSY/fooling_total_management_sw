<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>
    <link rel="shortcut icon" type="image/png" href="/resources/img/slogan.png" sizes="192x192">

    <link rel="stylesheet" href="/resources/css/inundationSetting/경보상황제어.css">
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
                    <div class="listContent"><a href="/inundationSetting/경보상황제어" class="pageFoward nowForward">경보상황 제어</a></div>
                    <div class="listContent"><a href="/inundationSetting/경보발생내역" class="pageFoward">경보발생 내역</a></div>
                </div>
            </div>
            <div class="sectionBox02">
                <div class="searchContainer01">
                    <div class="titleContiner01">
                        <div class="titleBox">
                            <div class="titleName">경보상황제어</div>
                        </div>
                    </div>
                    <div class="titleContiner02">
                        <div class="subTitleBox">
                            <div class="subTitle">
                            ▶ 침수설정  &gt; 경보상황제어
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchContainer02">
                    <div class="tableContainer">
                        <table class="sencerTable">
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
                                        <select name="경보내용" id="warningSelect" class="selectWarning">
                                            <option value="" disabled selected>발생내용을 선택해주세요</option>
                                            <option value="criticalLevel1">임계치 1단계</option>
                                            <option value="criticalLevel2">임계치 2단계</option>
                                            <option value="criticalLevel3">임계치 3단계</option>
                                            <option value="heavyRainAdvisory">호우주의보</option>
                                            <option value="heavyRainWarning">호우경보</option>
                                            <option value="typhoonAdvisory">태풍주의보</option>
                                            <option value="typhoonWarning">태풍경보</option>
                                    </select>
                                    </td>
                                    <td>
                                        <button type="button" class="warningButton" id="warningBtn">경보상황 발생</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="stageContainer">
                        <div class="sTitle">후탄지구</div>
                        <div>
                            <div class="stageTitle">
                                [임계치 1단계]
                            </div>
                            <div>
                            - 발령조건 : 침수,강우,특보<br>
                            - 동작장비 : 전광판
                            </div>
                        </div>
                        <div>
                            <div class="stageTitle">
                                [임계치 2단계]
                            </div>
                            <div>
                                - 발령조건 : 침수,강우,특보<br>
                                - 동작장비 : 전광판,사용자APP,관리자APP
                            </div>
                        </div>
                        <div>
                            <div class="stageTitle">
                                [임계치 3단계]
                            </div>
                            <div>
                                - 발령조건 : 침수,강우,특보<br>
                                - 동작장비 : 전광판,사용자APP,관리자APP
                            </div>
                        </div>
                        <div>
                            <div class="stageTitle">
                                [기타]
                            </div>
                            <div>
                                - 발령조건 : 수동 발령시 경보발령됩니다.<br>
                                - 동작장비 : 경보기, 문자전광판
                            </div>
                        </div>
                    </div>
                    <br>
                    </div>
                    <div class="messageContainer">
                        <div class="sTitle">발령문자 및 경보방송 메세지</div>
                        <div>
                            <div class="stageTitle">1단계</div>
                            <div>
                                주민 여러분 재난 안전 대책본부에서 알려 드립니다<br>
                                현재시간 우리 지역에 호우 예비 특보가 발표하였습니다<br>
                                앞으로 많은 비가 예상되어 하천변 주차장 범람이 예상되고 있습니다.<br>
                                주차장에 주차된 차량을 안전한 곳으로 이동 주차할 수 있도록 적극 협조해주시기 바랍니다.<br>
                                이상은 재난안전대책본부에서 알려드렸습니다.<br>
                            </div>
                        </div>
                        <div>
                            <div class="stageTitle">2단계</div>
                            <div>
                                주민 여러분 재난 안전 대책본부에서 알려 드립니다.<br>
                                현재시각 우리지역에 많은 비로 인해 하천 수위가 상승하고 있어 하천변 출입을 통제합니다.<br>
                                하천변에 계시는 주민께서는 지금 즉시 안전한 곳으로 이동하시고 차량은 신속히 안전지대로 이동 주차해 주시기 바랍니다.<br>
                                지금 즉시 안전지대로 차량을 신속히 이동 주차해 주시기 바랍니다.<br>
                                이상은 재난안전대책본부에서 알려드렸습니다.<br>
                            </div>
                        </div>
                        <div>
                            <div class="stageTitle">3단계</div>
                            <div>
                                주민 여러분 재난 안전 대책본부에서 알려 드립니다.<br>
                                현재시각 우리지역에 많은 비로 인해 하천 수위가 급격히 상승하여 하천이 범람하고 있어 하천변 출입을 긴급 통제합니다.<br>
                                하천변에 계시는 주민께서는 지금 즉시 높은 지대로 피하시고 이동 가능한 차량은 신속히 안전지대로 이동 주차해 주시기 바랍니다.<br>
                                지금 즉시 높은 지대로 대피하여 주시기 바랍니다.<br>
                                이상은 재난안전대책본부에서 알려드렸습니다.<br>
                            </div>
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
    <script src="/resources/js/inundationSetting/경보상황제어.js"></script>
    <script src="/resources/js/date.js"></script>

    <script src="/resources/js/share.js"></script>
    <script src="/resources/js/dbSetting.js"></script>
</body>
</html>