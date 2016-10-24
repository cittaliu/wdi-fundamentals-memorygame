var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var createCards = function(){
    var cardInfo = document.getElementById("game-board");
    for(var i=0; i<4; i++){
	    var newCard = document.createElement('div');
        // add a class... <div class='card'></div>
        newCard.className = 'card';
        cardInfo.appendChild(newCard);
    }
};

function createBoard(){
	for(var i=0; i<cards.length; i++){
		cardElement.setAttribute('data-card', cards[i]);
	}
}

for(var i=0; i<cards.length; i++){
	cardElement.addEventListener('click', isTwoCards);
}

function isMatch(arr){
    if(arr[0] === arr[1]){
    	alert("You found a match!");
    }else{
    	alert("Sorry, try again.")
    }
}

function isTwoCards() { 
	if(this.getAttribute('data-card') === "king"){
	    cardElement.innerHTML = '<img src="king.png" alt="King" />';
	}else if(this.getAttribute('data-card') === "queen"){
		cardElement.innerHTML = '<img src="queen.png" alt="Queen" />';
	}
	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];

	}
}

/*if(cardTwo === cardFour){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}

if(cardOne === cardFour){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}

if(cardOne === cardTwo){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}

if(cardOne === cardThree){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}

if(cardTwo === cardThree){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
} */