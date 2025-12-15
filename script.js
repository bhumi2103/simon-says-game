let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"];
let highestscore=0;

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
    h2.innerHTML=`Level ${level} <br> Highest Score: ${highestscore}`;
    
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
            if(level-1>highestscore){
                highestscore=level-1;}
            h2.innerHTML=`Game Over, Your score is <b> ${level-1} </b> <br>Highest score is :${highestscore} <br>Press Any Key to Restart!!`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },200);
            
            reset();
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

    function reset(){
        started=false;
        level=0;
        gameseq=[];
        userseq=[];
    }