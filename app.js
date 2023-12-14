let boxes = document.querySelectorAll('.box');
const msgContainer = document.querySelector('.msg-container');
const message = document.getElementById('msg');
const player = document.getElementById('player');
const newGame  = document.getElementById('new-btn');
const reset = document.getElementById('reset-btn');
const playerWinnerMsg = document.getElementById('playerWinnerMsg')

let turn = true;

let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = "X"
            box.style.color = "red";
            player.innerText = "Player 2 turn"
            turn = false;
        }
        else{
            box.innerText = "O";
            box.style.color = "#063970";
            player.innerText = "Player 1 turn"
            turn = true;
        }
        box.disabled = true;
        checkWinner()
    })
})

function checkWinner() {
    wins.forEach(win=>{
        let val1 = boxes[win[0]].innerText;
        let val2 = boxes[win[1]].innerText;
        let val3 = boxes[win[2]].innerText;
       
        if(val1 != "" && val2 != "" && val3 != ""){
           if(val1 == val2 && val2 == val3 && val3 === val1){
            msgContainer.classList.remove('hide');
            message.innerHTML = `Winner is ${val3}`;
            playerWinnerMsg.innerHTML = turn === true?"Player 2 Winner":"Player 1 Winner"
            disableBoxes();
           }
        }
    })
}

function disableBoxes(){
    boxes.forEach(box=>{
        box.disabled = true;
    })
}

function restart(){
    turn = true;
    boxes.forEach(box=>{
        box.disabled = false;
        box.innerText = "";
    });
    msgContainer.classList.add('hide');  
}

newGame.addEventListener('click',restart)
reset.addEventListener('click',restart)