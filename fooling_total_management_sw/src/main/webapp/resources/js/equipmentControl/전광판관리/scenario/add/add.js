//input date에 오늘 날짜
document.getElementById('startDate').value = new Date().toISOString().substring(0, 10);



/* 입력된 글자수 세기 시작*/
// input 요소와 바이트 표시 요소 가져오기
const inputField = document.getElementById('addText');
const byteDisplay = document.querySelector('.byte span');

// input 요소의 값이 변경될 때마다 실행되는 함수
inputField.addEventListener('input', function() {
    // 입력된 텍스트 가져오기
    const text = this.value;
    
    // 입력된 텍스트의 byte 수 계산
    const byteCount = countBytes(text);
    
    // byte 표시 업데이트
    byteDisplay.textContent = byteCount;
    
    // 만약에 byte 수가 20을 초과한다면, 초과한 부분을 잘라내기
    if (byteCount > 20) {
        const trimmedText = trimToByteLimit(text, 20);
        inputField.value = trimmedText;
        byteDisplay.textContent = 20; // 표시된 byte 수 업데이트
    }
});

// 주어진 텍스트의 byte 수를 계산하는 함수
function countBytes(text) {
    let byteCount = 0;
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (charCode <= 0x007f) {
            byteCount += 1;
        } else if (charCode <= 0x07ff) {
            byteCount += 2;
        } else if (charCode <= 0xffff) {
            byteCount += 3;
        } else {
            byteCount += 4;
        }
    }
    return byteCount;
}

// byte 제한에 맞게 텍스트를 자르는 함수
function trimToByteLimit(text, limit) {
    let byteCount = 0;
    let trimmedText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        let charByteSize = 0;
        if (charCode <= 0x007f) {
            charByteSize = 1;
        } else if (charCode <= 0x07ff) {
            charByteSize = 2;
        } else if (charCode <= 0xffff) {
            charByteSize = 3;
        } else {
            charByteSize = 4;
        }
        
        if (byteCount + charByteSize <= limit) {
            trimmedText += text[i];
            byteCount += charByteSize;
        } else {
            break; // byte 제한에 도달하면 중단
        }
    }
    return trimmedText;
}
/* 입력된 글자수 세기 끝*/