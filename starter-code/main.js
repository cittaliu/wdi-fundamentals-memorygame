var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var createCards = function(){
    var cardInfo = document.getElementById("game-board");
        for(var i=0; i<4; i++){
	    var newCard = document.createElement('div');
        // add a class... <div class='card'></div>
        newCard.className = 'card';
        cardInfo.appendChild(newCard);
    }
};

createCards();

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