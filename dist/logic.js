let temp = document.querySelector("#messageContainer")
let choiceUser = document.querySelectorAll("img");
const randomSelection = ()=>{
    const randomChoice = Math.floor(Math.random() * 3);
    const choiceArr = [
        "rock",
        "paper",
        "scissor"
    ]
    return choiceArr[randomChoice];
}
const newGame = document.querySelector('[data-action="newGame"]')
newGame.addEventListener("click",()=>{
    temp.innerText=""
    temp.style.display="none"
    newGame.style.display="none"
})
const winSituation = ()=>{
    
    temp.innerText = "You won the Game"
}
const tieSituation = ()=>{
    temp.innerText = "Game Tied"

}
const loseSituation = ()=>{
    temp.innerText = "You lose the Game"

}
choiceUser.forEach((element)=>{
    element.addEventListener("click",()=>{
        newGame.style.display=""
        temp.style.display=""
        let userChoice = element.getAttribute("value")
        let randomChoice = randomSelection();
        console.log(`Computer choice is ${randomChoice}`)
        if(userChoice == randomChoice){
            tieSituation();
        }
        else if(userChoice == "rock" ){
            if(randomChoice == "paper"){
                loseSituation();
            }
            else{
                winSituation();
            }
        }
        else if(userChoice=="paper"){
            if(randomChoice=="rock"){
                winSituation();
            }
            else{
                loseSituation();
            }
        }
        else{
            if(randomChoice=="rock"){
                loseSituation();
            }
            else{
                winSituation();
            }
        }

        
    })
})