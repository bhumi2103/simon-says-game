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
    {sbtn.classList.remove("flash");},250);
}

function levelup(){
    level++;
    userseq=[];
    h2.innerText=`Level ${level}`;
    
    let ranidx=Math.floor(Math.random()*4);
    let ranbtn=btns[ranidx];
    let btn=document.querySelector(`#${ranbtn}`);
    console.log(ranbtn);
    gameseq.push(ranbtn);
    console.log(gameseq);
    btnflash(btn);
    } 
    function anscheck(idx){
       
       
        if(userseq[idx]===gameseq[idx]){
            if(userseq.length===gameseq.length){
              setTimeout ( levelup,1000);
            }
        }
        else{
            h2.innerText="Game Over, Press Any Key to Restart!!";
        }
    }

    function btnpress(){
        let btn=this;
        btnflash(btn);
        let userchosen=btn.getAttribute("id");
        userseq.push(userchosen);
        let idx=userseq.length-1;
        anscheck(idx);
    }
    let Allbtns=document.querySelectorAll(".btn");
    for(let btn of Allbtns){
         btn.addEventListener("click", btnpress);
    }