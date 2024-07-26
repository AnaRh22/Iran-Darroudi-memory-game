


// flip the cards
const cards= document.querySelectorAll('.item');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

cards.forEach(card => card.addEventListener('click',flipCard));

 function flipCard(){
   if(lockBoard) return;
   if(this===firstCard) return;
   this.classList.add('flip');

   if(!hasFlippedCard){

   //first click
     hasFlippedCard= true;
     firstCard=this;

    console.log(firstCard.id);
    }else {

   //second click
     hasFlippedCard = false;
     secondCard =this;
     console.log(secondCard.id);

     checkForMatch();

     /* firstCard and secondCard are null here,
     because you execute the function checkForMatch() above, and
     if they match, you disable the cards.
     */
                 
     }
   }

  function checkForMatch(){

    let isMatch = firstCard.dataset.framework ===
     secondCard.dataset.framework;

     if (isMatch) {
     // Get id's 
     var id_1 = firstCard.id;
     var id_2 = secondCard.id;

     console.log('match. draw a line between' + id_1 + ' and ' + id_2);

     // TODO: Draw a line between the elements

     disableCards();

     firstCard.addEventListener("click", myFunction);
           
      function myFunction() {
        document.getElementById("id_1").classList.toggle("fullsize");
      }

      }

     else {
        unflipCards();
     }

  }


  function disableCards(){

     firstCard.removeEventListener("click",flipCard);
     secondCard.removeEventListener("click",flipCard);
         
     resetBoard();
   
 }


  function unflipCards(){
   lockBoard = true;

     setTimeout(() => {
       firstCard.classList.remove('flip');
       secondCard.classList.remove('flip');
       
       resetBoard();
    },1500);
  } 
  
  function resetBoard(){
   [hasFlippedCard,lockBoard]= [false,false];
   [firstCard,secondCard]=[null,null];
  }


//Using Dragdealer library to make the canvas dragable
var canvasMask = new Dragdealer('canvas-mask', {
 x: 0,
 // Start in the bottom-left corner
 y: 1,
 vertical: true,
 speed: 0.2,
 loose: true,
 requestAnimationFrame: true
});

// Bind event on the wrapper element to prevent it when a drag has been made
// between mousedown and mouseup (by stopping propagation from handle)
$('#canvas-mask').on('click', '.menu a', function(e) {
 e.preventDefault();
 var anchor = $(e.currentTarget);
 canvasMask.setValue(anchor.data('x'), anchor.data('y'));
});


