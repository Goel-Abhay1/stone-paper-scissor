
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
    let temp_var = Math.floor(Math.random() * 3)
    computerStylingTask(temp_var)
    return avlChoice[temp_var]
    
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
const handleContentClick=(event)=> {
    let userChoice = event.currentTarget.getAttribute("value");
    userStylingTask(userChoice);
    let computerChoice = randomChoice();
    checkFor(userChoice, computerChoice);
}

const initialEventAdder = ()=>{for(let block of arr){
    for(let content of block){
        content.addEventListener("click",handleContentClick)
    }
}}
initialEventAdder()

let newGame  = document.querySelector("#newGame")
newGame.addEventListener("click",()=>{
    countLose=countTie=countWin=0;
    updateCount()
    for(let choices of computerChoiceArr){
        for(content of choices){
            content.style.border = "5px solid white"
        }
    }
    for(let choices of arr){
        for(content of choices){
            content.style.border = "5px solid white"
        }
    }
    initialEventAdder()
        
})

// computer side programming

let computerRock = [
    document.querySelector("#computerRockImg"),
    document.querySelector("#computerCaptionRock")
]

let computerPaper = [
    document.querySelector("#computerPaperImg"),
    document.querySelector("#computerCaptionPaper")
]

let computerScissor = [
    document.querySelector("#computerScissorImg"),
    document.querySelector("#computerCaptionScissor")
]

let computerChoiceArr = [computerRock,computerPaper,computerScissor];

const computerStylingTask = (idx)=>{
    for(let i of computerChoiceArr[idx]){
        i.style.border = "5px solid yellow"
    }
}

const userStylingTask = (choice)=>{
    let bothChoice = document.querySelectorAll(`[value="${choice}"]`)
    for(let content of bothChoice){
        content.style.border = "5px solid magenta"
    }
    for(let choice of arr){
        for(let content of choice){
            content.removeEventListener("click",handleContentClick)
        }
    }
}