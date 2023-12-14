
let rock = [(document.querySelector("#rockImg"))];
rock.push(document.querySelector("#captionRock"))
let paper = [document.querySelector("#paperImg"),document.querySelector("#captionPaper")]
let scissor = [document.querySelector("#scissorImg"),document.querySelector("#captionScissor")]

let countWin = 0;
let countLose = 0;
let countTie = 0;
let arr = [rock,paper,scissor]
const randomChoice = ()=>{
    let avlChoice = ["rock","paper","scissor"]
    return avlChoice[Math.floor(Math.random() * 3)]
}
const checkFor =(userChoice,computerChoice )=>{
    if(userChoice == computerChoice){
        console.log("tie")
        countTie++;
        updateCount()
    }
    else if(userChoice =="rock"){
        if(computerChoice == "paper"){
            console.log("lose")
            countLose++;
            updateCount()

        }
        else{
            console.log("win")
            countWin++;
            updateCount()

        }
    }
    else if(userChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("win")
            countWin++;
            updateCount()

        }
        else{
            console.log("lose")
            countLose++;
            updateCount()

        }
    }
    else{
        if(computerChoice == "rock"){
            console.log("lose")
            countLose++;
            updateCount()

        }
        else{
            console.log("win")
            countWin++
            updateCount()

        }
    }
}
const updateCount = ()=>{
    let winHTML = document.querySelector("#winHTML")
    let loseHTML = document.querySelector("#loseHTML")
    let tieHTML = document.querySelector("#tieHTML")
    winHTML.innerText = `Win : ${countWin}`
    loseHTML.innerText = `Lose : ${countLose}`
    tieHTML.innerText = `Tie : ${countTie}`
}
for(let block of arr){
    for(let content of block){
        content.addEventListener("click",()=>{
            let userChoice = content.getAttribute("value")
            let computerChoice = randomChoice();
            checkFor(userChoice,computerChoice);
        })
    }
}

let newGame  = document.querySelector("#newGame")
newGame.addEventListener("click",()=>{
    countLose=countTie=countWin=0;
    
})