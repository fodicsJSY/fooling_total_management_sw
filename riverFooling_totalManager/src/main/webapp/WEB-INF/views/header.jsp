<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>침수차단 시스템</title>

    <%-- sweetalert2 --%>
    <script src="/resources/js/sweetalert/sweetalert2.js"></script>
    <link rel="stylesheet" href="/resources/css/header.css">
</head>
<body>

<header>
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
        <button type="button" class="setBtn" id="settingBtn">설정</button>
    </div>
</header>
    <script src="/resources/js/header.js"></script>
    <script src="/resources/js/dbSetting.js"></script>
</body>
</html>