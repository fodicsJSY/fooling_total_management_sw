//input date에 오늘 날짜
document.getElementById('startDate').value = new Date().toISOString().substring(0, 10);


var nowText = "";
var checkCount = 0;
var savedCount = 2;
var saveText = new Array();
var textNum = new Array();






    var plusButton = document.getElementById("plusButton");
    plusButton.addEventListener("click", ()=>{
        // console.log("클릭");

        var addText = document.getElementById("addText").value;
        var addText2 = document.getElementById("addText").value;
        addText = addText.replace(/\#1|\#2|\#3|\#4|\#5|\#6|\#7|/gi,"");
        
        if( addText == '' ){
            Swal.fire("전광판에 등록할 메세지를 입력해주세요");
            return;
        }
        
        var re = /[@\#$%^&*\()\-=+_']/gi; 
        if(re.test(addText)){ //특수문자가 포함되면 삭제하여 값으로 다시셋팅
            Swal.fire("특수문자는 사용할 수 없습니다.");
            return;
        }
        
        
        var byte = byteCheck(addText);
        if( byte > 20 ){
            Swal.fire("최대 입력가능한 수를 넘겼습니다.");
            return;
        }
        
        if( (saveText.length/2) > 15.9 ){
            Swal.fire("시나리오는 최대 16개까지만 등록가능합니다.");
            return;
        }
        
        var addtr = "<tr id='subTr"+checkCount+"'>" +
                    "<td>" +
                            '<div class="inputText">'+addText2+'</div>'+
                        '</td>'+
                        '<td width="10%" align="center"><div class="subBtn" data-id="'+checkCount+'" onclick="subBtnClick('+checkCount+');">-</div></td>'+
                    '</tr>';
        
        // console.log("checkCount : ", checkCount);
        saveText.push(addText2);
        textNum.push(checkCount);

        
        document.querySelector(".addingTextBox .inputTable").innerHTML += addtr;
        
        
        displaySample();
        
        // 상태 초기화
        document.getElementById("addText").value = '';
        document.querySelector(".byte span").innerText = "0";
        checkCount++;


    });



    const colorButtons = document.querySelectorAll('.colorBtn');
    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            var color = this.getAttribute("data-color");
            
            var addText = document.getElementById("addText");
            var cursorPos = addText.selectionStart;
            var v = addText.value;
            var textBefore = v.substring(0, cursorPos);
            var textAfter = v.substring(cursorPos, v.length);
            
            addText.value = textBefore + color + textAfter;
            addText.focus();
        });
    });



    var addText = document.getElementById("addText");
    addText.addEventListener("keyup", ()=>{
        
        var addText = document.getElementById("addText").value;
        
        addText = addText.replace(/\#1|\#2|\#3|\#4|\#5|\#6|\#7|/gi,"");
        
        var byte = byteCheck(addText);
        document.querySelector(".byte span").innerText = byte;

        
        if( byte > 20 ){
            Swal.fire("최대 입력가능한 수를 넘겼습니다.");
            return;
        }
        
    });




    addText.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            // console.log("추가");
            document.getElementById("plusButton").click();
        }
    });




    var dataIdValue;

    function subBtnClick(checkCount){
        // console.log("checkCount : ", checkCount);
        
        const clickedBtn = document.querySelector('[data-id="' + checkCount + '"]');
        // console.log("clickedBtn : ", clickedBtn);
    
        // if (!clickedBtn) {
        //     console.error("Button not found");
        //     return;
        // }
        // const subBtn = document.querySelectorAll('.subBtn');
        // console.log("subBtn : ", subBtn);
    
        dataIdValue = clickedBtn.getAttribute("data-id");
        // console.log("dataIdValue : ", dataIdValue);
    
        // console.log("textNum", textNum);
        // console.log("saveText", saveText);
        
        for (var i = textNum.length - 1; i >= 0; i--) {
            // console.log("gg");
            
            if (textNum[i] == checkCount) {
                // console.log("123");
                textNum.splice(i, 1);
                saveText.splice(i, 1);
            }
            // console.log("textNum splice", textNum);
            // console.log("saveText splice", saveText);
        }
    
    
        clickedBtn.parentElement.parentElement.remove();
        
        var joinText = saveText.join('|');
        document.getElementById("saveText").value = joinText;
        
        var textNum2 = textNum.join('|');
        document.getElementById("textNum").value = textNum2;
    
        // console.log("joinText", joinText);
        // console.log("textNum2", textNum2);
    
        // console.log("saveText", saveText);
        // console.log("textNum", textNum);
        
        displaySample();
    }
    



function displaySample(){
    
    var html = "";
    
    for(var i = 0; i < saveText.length; i++ ){
        if( i % 2 == 0 ){
            html = html + '<div class="display">';
        }
        
        html = html + '<div class="block">';
        
        var splitText = saveText[i].split("#");
        
        for(var j=0; j< splitText.length; j++ ){
            
            var first = splitText[j].substr(0,1);
            if( first == "1" || first == "2" || first == "3" || first == "4" || first == "5" || first == "6" || first == "7" ){
                var text = splitText[j].substr(1);
                                
                var color = "";
                if( first == "1" ){
                    color = "rgba(255,0,0,1.00)";
                }else if( first == "2" ){
                    color = "rgba(0,255,0,1.00)";
                }else if( first == "3" ){
                    color = "rgba(255,255,0,1.00)";
                }else if( first == "4" ){
                    color = "rgba(0,0,255,1.00)";
                }else if( first == "5" ){
                    color = "rgba(255,0,255,1.00)";
                }else if( first == "6" ){
                    color = "rgba(0,255,255,1.00)";
                }else if( first == "7" ){
                    color = "rgba(255,255,255,1.00)";
                }
                
                html = html + '<span style="color:'+color+';">'+ text +'</span>';
            }else{
                html = html + '<span style="color:rgba(255,0,0,1.00);">'+ splitText[j] +'</span>';
            }
            
        }
        
        
        html = html + '</div>';
        
        if( i % 2 == 1 || i == saveText.length ){
            html = html + '</div>';
        }
    }

    // $(".displayContainer").empty().append(html);
    var displayBoxes = document.querySelectorAll(".displayContainer");

    // 모든 displayBox 요소를 순회하면서 자식 요소를 삭제하고 새 HTML 코드를 추가합니다.
    displayBoxes.forEach(function(displayBox) {
        displayBox.innerHTML = html;
    });


}




function byteCheck(str) {
    let bytes = 0;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 0x0000 && charCode <= 0x007F) {
            bytes += 1; // 숫자와 영어는 1바이트
        } else {
            bytes += 2; // 한글은 2바이트
        }
    }
    return bytes;
}





let startDate = document.getElementById("startDate");
let selectTime = document.getElementById("selectTime");


//저장버튼
document.getElementById("saveButton").addEventListener("click", ()=>{
    console.log("클릭");
    console.log("startDate : ", startDate.value);
    console.log("selectTime : ", selectTime.value);

    let startDateValue = startDate.value;
    let dateValue = startDateValue.replace(/-/g, "");
    let selectTimeValue = selectTime.value;

    if( startDate == "" ){
        Swal.fire("시작일자를 선택해 주세요" );
        return;	
    }

    if( saveText == "" ){
        Swal.fire("전광판에 등록할 내용을 입력해주세요");
        return;	
    }

    fetch("/sendData331_1", { 
        method : "POST", 
        headers: {"Content-Type": "application/json;"}, 
        body : JSON.stringify( {"dateValue":dateValue, "selectTimeValue":selectTimeValue} ) 
    })
    .then(resp => resp.json()) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱
    .then((result) => {
        // console.log("result", result );

        data = result;

        // 차트호출
        // lineChart(data);
        // makeTable(data);
        // liveInfomation(data);
        // openDounutChart(data);
        // closeDounutChart(data);

        
    }) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성
    .catch( err => {
        // console.log("err : ", err);
    }); // 예외 발생 시 처리할 내용을 작성
});

