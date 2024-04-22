

const loginFrm = document.getElementById("loginFrm"); //로그인 폼
const userId = document.querySelector("#loginFrm input[name='userId']");
const userPw = document.querySelector("#loginFrm input[name='userPw']");

loginFrm.addEventListener("submit", ()=>{
    // event.preventDefault(); // 폼이 실제로 제출되는 것을 막음
    
    const userIdValue = userId.value;
    const userPwValue = userPw.value;


    console.log("클릭");
    console.log("loginFrm : ", loginFrm);
    console.log("userId : ", userId);
    console.log("userPw : ", userPw);

    console.log("userIdValue : ", userIdValue);
    console.log("userPwValue : ", userPwValue);


});