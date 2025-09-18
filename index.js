let player_score=0;
let computer_score=0;
const buttons=document.querySelectorAll("button")
const pScore=document.querySelector("#usre_score")
const cScore=document.querySelector("#computer_score")
const FinalResult=document.querySelector("#result")

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const result=play_game(button.id,computerplay());
        FinalResult.innerHTML=result;
    })
})


function computerplay(){
    const choices=["rock","paper","scissor"]
    const randomChoice=Math.floor(Math.random()*3)
    return choices[randomChoice];
}


function play_game(playerSelect,computerSelect){

    if(playerSelect===computerSelect){
        return "It is a tie , choose again "
    }
    else if((playerSelect==="rock" && computerSelect==="scissor")||(playerSelect==="paper" && computerSelect==="rock")||(playerSelect==="scissor" && computerSelect==="paper")){
        player_score++;
        pScore.innerHTML=player_score;
        return " you win " +playerSelect+ "  beats " +computerSelect+ " , choose again";
    }
    else{
        computer_score++
        cScore.innerHTML=computer_score
        return "you lose " +computerSelect+ " beats " +playerSelect+ " , choose again";
    }
}





