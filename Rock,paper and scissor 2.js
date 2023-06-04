const Compchoicedisplay = document.getElementsByClassName("chosenbutton");
const playerchoicedisplay = document.getElementsByClassName("pchosenbutton")[0];
const possiblechoice =document.querySelectorAll("button");
const maxrounds =2;
let roundsPlayed =0;
let playerscore =0;
let computerscore=0;
let choice1,choice2;

possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) =>{
  if(roundsPlayed < maxrounds)
  {
    const playerChoice =e.target.textContent;
    const computerchoice =getCompChoice();
    playerchoicedisplay.textContent = playerChoice;
    Compchoicedisplay.textContent =computerchoice;
    displayChosenButton(playerChoice,"Player");
    displayChosenButton(computerchoice,"Computer");
    playRound(playerChoice,computerchoice);
    roundsPlayed++;
    if(roundsPlayed === maxrounds)
    {
      dwinner();
    }

  }
}
))
function getCompChoice() {
  const choices = ['1. Rock ✊🏻', '2. Paper 🖐🏻', '3. Scissor ✌🏻'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
  }
function playRound(playerChoice,computerchoice)
{
  if(playerChoice == computerchoice)
  {
    //console.log("Its a tie");
    return;
  }
  if (
    (playerChoice === "1. Rock ✊🏻" && computerchoice === "2. Paper 🖐🏻") ||
    (playerChoice === "2. Paper 🖐🏻" && computerchoice === "3. Scissor ✌🏻") ||
    (playerChoice === "3. Scissor ✌🏻" && computerchoice === "1. Rock ✊🏻")
  ) {
    playerscore++;
  } else {
    computerscore++;
  }
  document.getElementById("ps").querySelector(".Results-score").textContent = playerscore;
  document.getElementById("cs").querySelector(".Results-score").textContent = computerscore;  
} 
function displayChosenButton(choice, source) {
  const paragraph = document.createElement('p');
  const textNode = document.createTextNode(`${source}: ${choice}`);
  paragraph.appendChild(textNode);
  
  if (source === 'Player') {
    // Clear existing content
    playerchoicedisplay.innerHTML = '';
    playerchoicedisplay.appendChild(paragraph);
  } else {
    // Clear existing content
    const computerChoiceDisplay = Compchoicedisplay[0];
    computerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.appendChild(paragraph);
  }
}

  function dwinner()
  {
    const wd =document.createElement("h3");
    let wm ="";
    if(playerscore >computerscore)
    {
      wm ="Player wins";
      wd.classList.add("player-win");
    }
    else if(playerscore<computerscore)
    {
      wm="Computer wins";
      wd.classList.add("computerwin");
    }
    else
    {
      wm="tie";
      wd.classList.add("tie");
    }
    const wtext=document.createTextNode(wm);
    wd.appendChild(wtext);
    const scoresElement = document.getElementsByClassName('Scores')[0];
    scoresElement.appendChild(wd);

  }
