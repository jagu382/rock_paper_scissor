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


function play_game(playerSelect, computerSelect) {
    switch (true) {
        case (playerSelect === computerSelect):
            return "It is a tie, choose again";

        case (playerSelect === "rock" && computerSelect === "scissor"):
        case (playerSelect === "paper" && computerSelect === "rock"):
        case (playerSelect === "scissor" && computerSelect === "paper"):
            player_score++;
            pScore.innerHTML = player_score;
            return "You win! " + playerSelect + " beats " + computerSelect + " , choose again";

        default:
            computer_score++;
            cScore.innerHTML = computer_score;
            return "You lose! " + computerSelect + " beats " + playerSelect + " , choose again";
    }
}






