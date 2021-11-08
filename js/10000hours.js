const startButton = document.querySelector(".start_btn");
const goButton = document.querySelector('.go_btn');
const closeButton = document.querySelector('.close_btn');
const loading = document.querySelector('.result_loading');
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const shareButton = document.querySelector('.share_btn')

const field_value = document.querySelector('#field_value');
const time_value = document.querySelector('#time_value');
const field_result = document.querySelector('.field_result');
const time_result = document.querySelector('.time_result');


function calculator() {
    if(field_value.value == "") {
        alert("입력되지 않았습니다.");
        field_value.focus()
        return;
    }
    else if(time_value.value == "") {
        alert("입력되지 않았습니다.");
        time_value.focus()
        return;
    }
    else if(time_value.value > 24) {
        alert("잘못된 시간의 값입니다. 24이하로 입력하여 주십시오")
        time_value.focus()
        return;
    }
    loading.style.display = "flex";

    setTimeout(function(){
        loading.style.display = "none";
        result.style.display = "flex";
        field_result.innerHTML = field_value.value;
        time_result.innerHTML = parseInt((10000/time_value.value), 10);
    }, 1500);
}

function openModal(){
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none"
}

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

startButton.addEventListener('click', calculator);
goButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
shareButton.addEventListener('click', copyUrl);

