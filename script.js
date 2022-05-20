//Example derived from
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#examples
//Funtion to change the color of b3
//List of Words
const secretWord = ["Potato","Radish","Onion","Pickle","Cucumbers","Cauliflower"];
//Random Number Generator     
let randomNumber = getRandom();
//Number of Tries
let tries = 0;
function ChangeColor(selection){
  const box = document.getElementById(selection);
  const resultBox = document.getElementById("b3");
  let color = box.innerHTML;
  console.log(color);
  resultBox.style.backgroundColor = color;
}

function getRandom(){

  return Math.floor(Math.random() * (secretWord.length-1));
}
function DisplayToButton(){
  let button = document.getElementById("thebutton");
  button.innerHTML =  "Guess " + tries;
  
}

//The following function gets the content of the first textbox/
function guessSecretWord(){

  tries++;
  let message = document.getElementById("guess");
  let box2 = document.getElementById("result");
  console.log(message.value);
  if(message.value === secretWord[randomNumber]){
    alert("You Guessed!! Lets play again");
    randomNumber = getRandom();
    tries = 0;
    
  }
  else{   
    box2.value = "That's not it. "
    DisplayToButton();
  }
}



//This is the event listener, gives the button the power to sync with the function.
let el = document.getElementById("thebutton");
el.addEventListener("click", function(){
    guessSecretWord();
}, false);



//Below is previous code.



/*el = document.getElementById("b2");
el.addEventListener("click", function(){
    ChangeColor("b2");
}, false);*/

