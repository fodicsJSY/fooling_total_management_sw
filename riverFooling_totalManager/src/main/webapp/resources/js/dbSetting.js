async function getDBIP() {
    const { value: dataIP } = await Swal.fire({
        title: "데이터 조회 IP를 입력해주세요.",
        input: "text",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return '데이터 조회 IP를 입력해주세요.';
            }
        }
    });
    
    if (dataIP) {
        const { value: breakerIP } = await Swal.fire({
            title: "차단기 IP를 입력해주세요.",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return '차단기 IP를 입력해주세요.';
                }
            }
        });
        
        if (breakerIP) {
            // 두 IP 주소를 로컬 스토리지에 저장
            saveIPToLocalStorage(dataIP, breakerIP);
            // initialize(dataIP, breakerIP);
        }
    }
}

// 로컬 스토리지에 IP 주소를 저장하는 함수
function saveIPToLocalStorage(dataIP, breakerIP) {
    localStorage.setItem("dataIP", dataIP);
    localStorage.setItem("breakerIP", breakerIP);
}

// 로컬 스토리지에서 IP 주소를 가져오는 함수
function getIPFromLocalStorage() {
    return {
        dataIP: localStorage.getItem("dataIP"),
        breakerIP: localStorage.getItem("breakerIP")
    };
}


let savedIP;




