//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 up!!
//reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)\
//유저가 1~100범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지않음
//유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지않음
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let inputArea = document.getElementById("input-area");
let playButton = document.getElementById("play-button");
let resetArea = document.getElementById("reset-area");

playButton.addEventListener("click",play);
resetArea.addEventListener("click",reset);
let computerNum = 0
let chances = 5;
let history = [];

// 고 버튼을 누르면 play함수 실행되고 
function play(){
    let userValue = inputArea.value;
    if(userValue > 100 || userValue < 1) {
        resultArea.textContent = "1~100사이의 숫자를 입력하시오."
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다."
        return;
    }
    chances -- ;
    if(userValue < computerNum){
        resultArea.textContent = "up!!!"
        chanceArea.textContent = `남은기회 ${chances}회`
    } else if(userValue > computerNum){
        resultArea.textContent = "down!!!"
        chanceArea.textContent = `남은기회 ${chances}회`
    } else {
        resultArea.textContent = "정답입니다!"
        chanceArea.textContent = "!!--congratulation--!!";
    }

    history.push(userValue);
    console.log(history)
    if(chances < 1){
        playButton.disabled = true;
        resultArea.textContent = "ㅠㅠ"
        chanceArea.textContent = "모든 기회를 다 사용하셨습니다."
    }
}

function reset(){
    inputArea.value = "";
    pickRandomNum();
}

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum)
    chances = 5;
    resultArea.textContent = "Start!"
    chanceArea.textContent = "남은기회 5회"
}
pickRandomNum();