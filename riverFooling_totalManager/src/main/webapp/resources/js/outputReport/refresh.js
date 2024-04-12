// 버튼 클릭 시 페이지 새로고침
document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload(true); // true 파라미터는 캐시를 무시하고 새로고침
});
