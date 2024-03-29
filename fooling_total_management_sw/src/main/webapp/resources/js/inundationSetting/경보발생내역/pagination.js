  // 페이지네이션을 처리하는 함수
// function paginate(totalPages) {
//     const pagination = document.getElementById('pagination');
//     // pagination.innerHTML = ''; // 기존 페이지네이션 초기화

//     for (let i = 1; i <= totalPages; i++) {
//         const link = document.createElement('a');
//         link.href = '#';
//         link.textContent = i;

//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             showPageContent(i); // 클릭한 페이지의 내용을 표시하는 함수 호출
//         });

//         pagination.appendChild(link);
//     }
// }

// // 페이지의 내용을 표시하는 함수
// function showPageContent(pageNumber) {
//     const content = document.getElementById('content');
//     content.innerHTML = `<p>Page ${pageNumber} content</p>`; // 페이지 번호에 따른 내용 생성
// }

// // 예시로 5개의 페이지가 있다고 가정하고 페이지네이션을 생성합니다.
// const totalPages = 5;
// paginate(totalPages);

// // 초기 페이지 로드 시 첫 번째 페이지 내용을 표시합니다.
// showPageContent(1);