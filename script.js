
var color = "#4b4d50";
var computersChoice;
var playersChoice;
var round=0;
var playersScore=0;
var opponentsScore=0;

//add  click event listener to each html item with class element
document.querySelectorAll('.element').forEach(item => {
  item.addEventListener('click', event => {
  	//this is the code to be executed when click is detected
  	//change the background of the element to indicate selection to the user
    item.style.backgroundColor = color;
    playersChoice = item.id;
    round+=1;
    calculateOutcome();
	if(round>2){
		setTimeout(function(){
		if(playersScore>opponentsScore){
			document.getElementById("result").innerHTML = "You won the game!";
		}
		else if(playersScore<opponentsScore){
			document.getElementById("result").innerHTML = "You lost the game...";
		}
		else{
			document.getElementById("result").innerHTML = "It's a draw!";
		}
		
		document.getElementById("computersChoice").style.display = "none";
		document.getElementById("round").style.display = "none";
		document.getElementById("player").innerHTML = `Your score ${playersScore}`;
		document.getElementById("opponent").innerHTML = `Opponent's score ${opponentsScore}`;
		for (let choice of document.getElementsByClassName("element")){
   		choice.style.display="none";
			}		
		},1200);
	}	
	setTimeout(function(){
		item.style.backgroundColor = "transparent";
		},50);
  })
})


function opponentsPick(){
	var images = new Array("images/rock.png","images/paper.png","images/scissors.png");
	var randomNum = Math.floor(Math.random() * images.length);
	document.getElementById("computersChoice").src = images[randomNum];
	computersChoice = randomNum+1;
	document.getElementById("computersChoice").style.backgroundColor = color;
	setTimeout(function(){
		document.getElementById("computersChoice").style.backgroundColor = "transparent";
		},50);
	}



function calculateOutcome(){
		if(playersChoice == computersChoice){
			document.getElementById("result").innerHTML = `It's a draw`;
			}
		else if(playersChoice == 1 && computersChoice == 3){
			document.getElementById("result").innerHTML = `You won!`;
			playersScore+=1;
			}
		else if(playersChoice==3 && computersChoice == 1){
			document.getElementById("result").innerHTML = `You lost!`;
			opponentsScore+=1;
			}
		else if(playersChoice > computersChoice){
			document.getElementById("result").innerHTML = `You won!`;
			playersScore+=1;
			}
		else{
			document.getElementById("result").innerHTML = `You lost!`;
			opponentsScore+=1;
			}
		document.getElementById("round").innerHTML = `Round ${round}/3`;
		// for testing
		// console.log(`computer ${computersChoice}`);
		// console.log(`player ${playersChoice}`);
		}
