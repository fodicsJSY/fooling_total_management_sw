function addLogData(camera_code, cameraName, cmd, site_code){
            // console.log("camera_code", camera_code );
            // console.log("cameraName", cameraName );
            // console.log("site_code", site_code );

            // console.log("cmd", cmd );
            
            
            let uniqno = camera_code + "_" + year+month+day+hours+minutes+secounds;
            // console.log("uniqno", uniqno );
            
            let gate_name = cameraName;
            // console.log("gate_name", gate_name );
            // console.log("camera_code", camera_code );

            let gate_code = camera_code;
            // console.log("gate_code", gate_code );
            
            let log_date = year +'-'+ month +'-'+ day;
            // console.log("log_date", log_date );
            
            let log_time = hours+":"+minutes+":"+secounds+".0000000";
            // console.log("log_time", log_time );

            let user_id = loginId;
            // console.log("user_id", user_id );

            // console.log("cmd", cmd);
            
            let img_data = null;
            // console.log("img_data", img_data);


    // 차단기 로그 insert
    fetch("/equipmentControl/addLogData", {
        method : "POST",
        headers: {"Content-Type":"application/json;"},
        credentials:"include",
        body : JSON.stringify({
                                "serverip" : savedIP,
                                "port" : savePORT,
                                "user_id" : loginId,
                                "user_pw" : loginPw,
                                "query" : "INSERT INTO TB_CIRCUIT_BREAKER_LOG VALUES('"+uniqno+"', '"+site_code+"', '"+camera_code+"', '"+cameraName+"', '"+gate_code+"', '"+gate_name+"' , '"+log_date+"' , '"+log_time+"' , 'dashboard', "+cmd+", "+img_data+ ")"
                            })
        })
        .then(resp => resp.json())
        .then((result)=>{
            // console.log("result", result );
            Swal.fire("저장이 완료되었습니다!").then(() => {
                location.reload();
            });
        })
        .catch(err => {
            console.error("Error", err)
        });

        

}