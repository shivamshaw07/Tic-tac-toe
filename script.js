console.log("hello")
let music = new Audio("ting.mp3")
let winMusic = new Audio("music.mp3")
let gameOverMusic = new Audio("gameover.mp3")
var turn = "X"
var gameover = false
document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

var count = 0;
//function to change turn
const changeTurn = () => {
    return turn === "X"?"O" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.getElementsByClassName("info")[0].innerText ="Player : "+  turn + " has WON";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "170px";
            winMusic.play();
            
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".box-text")
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            checkWin();
            count++;
            if(count==9){
                gameOverMusic.play();
            }
            turn = changeTurn();
            music.play();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click',() => {
    let boxText = document.querySelectorAll(".box-text")
    Array.from(boxText).forEach(e => {
        e.innerText = "";
    })
    turn = "X";
    count = 0;
    gameOverMusic.pause();

    gameover = false
    turn = "X"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById('gif').style.width = "0px"
    winMusic.pause();
})