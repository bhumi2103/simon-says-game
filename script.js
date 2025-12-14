let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started===false){
        console.log("Game Started");
        started=true;

        levelup();
    }
});
function btnflash(sbtn){
    sbtn.classList.add("flash");
    setTimeout(function()
    {sbtn.classList.remove("flash");},200);
}

function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    
    let ranidx=Math.floor(Math.random()*4);
    let ranbtn=btns[ranidx];
    let btn=document.querySelector(`#${ranbtn}`);
    console.log(ranbtn);
    btnflash(btn);
    } 