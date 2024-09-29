let gameSeq= [];
let userSeq= [];

let highestScr=0;

let started=false;
let level=0;

let btns=["red","yellow","green","purple"];

let h2=document.querySelector('h2');
let h4=document.querySelector("h4");





document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game started");
        started=true;
        levelUp(); 
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },500);

};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    if(level>highestScr){
        highestScr=level;
    }
    
    h4.innerText=`Highest score =${highestScr}`;
    h2.innerText=`level ${level}`;
    
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(randIdx);
    console.log(randColor);
};
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
    }else{
        h2.innerHTML=`gameover! your score was <b>${level}<b> <br> press any key to start`; 
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();   
    }

}

function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(this);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener("click",btnPress);  
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


