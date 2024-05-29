




const loginFrm = document.getElementById("loginFrm");
const inputIp = document.querySelector("#loginFrm input[name='serverip']");
const inputPort = document.querySelector("#loginFrm input[name='port']");
const inputUserId = document.querySelector("#loginFrm input[name='user_id']");
const inputUserPw = document.querySelector("#loginFrm input[name='user_pw']");

/* 로그인 체크 */
if (loginFrm != null) {
    loginFrm.addEventListener("submit", e => {
        
        /* ip 체크 */
        if (inputIp.value.trim().length == 0) {
            e.preventDefault(); /* 제출 방지 */

            Swal.fire("IP를 입력해주세요");
            return;
        }

        /* port 체크 */
        if (inputPort.value.trim().length == 0) {
            e.preventDefault(); /* 제출 방지 */

            Swal.fire("PORT를 입력해주세요");

            return;
        }

        /* id 체크 */
        if (inputUserId.value.trim().length == 0) {
            e.preventDefault(); /* 제출 방지 */

            Swal.fire("아이디를 입력해주세요");

            return;
        }
        /* pw 체크 */
        if (inputUserPw.value.trim().length == 0) {
            e.preventDefault(); /* 제출 방지 */

            Swal.fire("비밀번호를 입력해주세요");

            return;
        }
    });
}
