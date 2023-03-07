// html 끌어오기 근데 정확한 방법 기억 안남 
// let resultArea =
let input
let gobutton
let resultArea
let chanceArea
//go버튼 클릭이벤트 주기 안에 뭐 있었던거 같음
gobutton.addeventlistener("click", go)

// 컴퓨터가 답을 가지고 있어야함
function computerNum(){
    let randomNum = Math.floor(Math.random()*100)+1
    console.log(randomNum);
    return randomNum
}
let abc = computerNum();
let history = [];

//go버튼을 눌렀을때 // 고 버튼을 누르면 play함수 실행되고 

function go() {
    //유저가 입력한값을 사용하고 싶다 근데 어떻게 가지고 오지?
    // 아 위에 입력할때마다 INPUT.VALUE가 바뀌니까 누를 당시의 값이 내가 원하는 값이 된다
    //아래에 100보다 크거나 0보다 작거나 정답과 차이가 있는지?

    // 유효하지 않은 값
    if(inputNum > 100 || inputNum < 0 ){
        //결과창에 1~100까지의 숫자를 입력해주세요 라고 표시
        return;
    }
    // 이미 입력했다
        // 컴퓨터에 유저가 주는값들이 저장이 되어야함
        // 저장할곳이 필요함
        // inputNum이랑 저장한곳에 같은 숫자가 있는지 비교
        // 있다
            // 있으면 return;
        // 없다
            // 스무스하게 넘어감
            history.push(inputNum)
    // 유저가 쓴값과 컴퓨터 값이 일치할때 
    if(computerNum == inputNum){
        // 결과값에 축하한다 정답이다,
        // 횟수창에 영어 축하한다
        // go버튼 disabled
        // reset버튼은 따로 함수를 구현
    
        }

    // 횟수 차감
    // 작다    
    // 큰다



    

}