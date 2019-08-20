// 
// BlackJack
// By Kenneth Ze Ondoua 
//
// License GPL 

// variable
// DOM variable
let paragraph = document.getElementById("text-area");

let hit = document.getElementById("hit");
let stay = document.getElementById("stay");
let ngame = document.getElementById("new game");


// card variable

let suits = ["Hearts","Spades","Clubs","Diamonds"];

let values = [ "Ace","King","Queen","Eight","Ten",
      "Two","Jack","Nine","Seven",
      "Three","Four","Five","Six"];
      

      
// Game Variables

let gameStarted=false,
    gameOver=false;
    playerWon = false,
    dealerCards=[],
    playerCards = [],
    dealerScore = 0,
    playerScore =0,
    desk=[];


let welcomeMsg = "Welcome in BlackJack Game 1!", msgResult="You are Dealt: ";



hit.style.display = 'none';
stay.style.display = 'none';
showStatus();

      
      


//let card1="Ace of Spades",card2="Ten of Squarres";

// functions 

function createDesk(){
  
  let desk = [ ];
   for(let suitIdx=0; suitIdx<suits.length; suitIdx++){
  
   for(let valueid=0 ;valueid <values.length;valueid++){
       
       let card = {
           suit: suits[suitIdx],
           value: values[valueid]
       };
        
       desk.push( card );
       
      // console.log(desk[value]);
     
   }
} 

  return desk;
}


function getNextCard()
{
   return desk.shift();
}


function getCardString(card){
  return card.value +' of '+ card.suit;
}
 
 
function  getCardNumericValue(card){
  
  switch(card.value){
    
    case 'Ace':
        return 1;
    case 'Two':
        return 2;
    case 'Three':
        return 3;
    case 'Four':
        return 4;
      case 'Five':
        return 5;
    case 'Six':
        return 6;
    case 'Seven':
        return 7;
    case 'Eight':
        return 8;

    case 'Nine':
        return 9;
    default:
        return 10;      
              
          
  }
}
 
 
function getScore(cardArray){
  
  let score = 0;
  let hasAce = false;
  
  for(let i=0 ; i<cardArray.length;i++){
    let card = cardArray[i];
    score += getCardNumericValue(card);
    
    if(card.value === "Ace"){
      hasAce = true;
    }
    
  }
  
    if(hasAce & score + 10 <= 21){
      return score + 10;
    }
    return score;
} 
 
function updateScores(){
  dealerScore=getScore(dealerCards);
  
  console.log('dealer score:'+dealerScore);
  
  playerScore=getScore(playerCards);
  
  console.log('player score:'+playerScore);
  
} 
 
function showStatus(){
  if(!gameStarted){
    paragraph.innerText=welcomeMsg;    
    
    return;
  }
  
  let dealerCardString = " ";
  for(var i=0; i<dealerCards.length ;i++){
    dealerCardString += "\n "+getCardString(dealerCards[i]);    
    
  }
  
  
  
  let playerCardString = " ";
  for(var i=0; i<playerCards.length ;i++){
    playerCardString += "\n "+getCardString(playerCards[i]);    
    
  }
  
  
  updateScores();
  
    paragraph.innerText ="Dealer Has :\n" +dealerCardString + '\n(score: '+dealerScore+')\n\n'
              +"Player Has :\n" +playerCardString + '\n(score: '+playerScore+')\n\n';    
  
  
   if(gameOver){
     if(playerWon){
       paragraph.innerText += "YOU WIN!";
     }else{
        paragraph.innerText += "DEALER WINS";
     }
     
     
  ngame.style.display = "inline";
  hit.style.display = 'none';
  stay.style.display = 'none';
   }
  /*
  for(var i=0; i<desk.length ;i++){
    paragraph.innerText += "\n "+getCardString(desk[i]);    
    
  }*/
} 
 
 function checkForEndOfGame(){
   
   updateScores();
   
   if(gameOver){
     // let dealer take cards
     while(dealerScore < playerScore && playerScore <= 21 &&  dealerScore <= 21 ){
       dealerCards.push(getNextCard());
        updateScores();
       
     }
   }
   
   if(playerScore > 21 ){
     
     playerWon= false;
     gameOver = true
     
   }
   else if(dealerScore > 21 ){
     
     playerWon= true;
     gameOver = true
     
   }else if(gameOver )
   {
     
      if(playerScore > dealerScore ){
     
        playerWon= true;
       }else{
         playerWon = false;
       }
     
   }
   
 }
 
function shuffleDesk(desk){
  
  for(let i=0; i<desk.length; i++){
    let swapId = Math.trunc(Math.random() * desk.length);
    let tmp = desk[swapId];
    
    desk[swapId] = desk[i];
    desk[i]=tmp;
  }  
}

hit.addEventListener('click',function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});



stay.addEventListener('click',function(){
  
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});


ngame.addEventListener('click',function(){
  
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
 desk = createDesk();
 shuffleDesk(desk);
 
 dealerCards=[getNextCard(),getNextCard()];
 playerCards=[getNextCard(),getNextCard()];

   
  //paragraph.innerText = "Started ...";
  ngame.style.display = "none";
  hit.style.display = 'inline';
  stay.style.display = 'inline';

  showStatus();
});
 
 


console.log(welcomeMsg);
console.log(msgResult);

//console.log(getNextCard(),getNextCard());

//console.log(" " + getCardString(playerCards[0]));
//console.log(" "+ getCardString(playerCards[1]));




//console.log(" " +card1);
//console.log(" "+card2);

/*let value = 99;

console.log(typeof(value));

let value1 = 4.1 + 4.3 ;

console.log(value1);

var value2=null;
console.log(value2);
*/
/*
let arr = [1,2,3] ;

console.log(arr.length);

arr.push(4);
arr.push(6);
console.log(arr.length,arr);
arr.pop();
console.log(arr.length,arr);
arr.splice(7,1,1,2);
console.log(arr.length,arr);
arr.splice(7,1,1,2);
console.log(arr.length,arr);
*/

//let paragraph = document.getElementById("text-area");

//paragraph.style.display='none';
//let btn = document.getElementById("ok");


/*
btn.addEventListener('click',function(){
  
  //paragraph.innerText= "this is paragraph";

  paragraph.style.display='block';
});*/









