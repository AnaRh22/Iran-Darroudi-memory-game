


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
     // console.log(secondCard);
     console.log(secondCard.id);


     checkForMatch();

     /* firstCard and secondCard are null here,
     because you execute the function checkForMatch() above, and
     if they match, you disable the cards.
     */
     // console.log(firstCard,secondCard);
     // console.log(secondCard.id);
               
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

      // function zoomInOut(element){

      // element.classList.toggle("fullsize");

      // }
      
      function myFunction() {
        document.getElementById("id_1").classList.toggle("fullsize");
      }


     // var line = new LeaderLine(
     //  document.getElementById(id_1),
     //  document.getElementById(id_2)
     //  );


     //  const handle = document.getElementById("handle");
     //  const leaderLineDefs = document.getElementById("leader-line-defs");
     //  const leaderLine = document.getElementsByClassName("LeaderLine");
      
     //  leaderLineDefs.after(handle);
     //  leaderLine.after(handle);
      

//      const dragable = document.getElementsByClassName('canvas-mask');
//      dragable.addEventListener('scroll', AnimEvent.add(function() {
//   line.position();
// }), false);

//      dragable.AnimEvent.add(function(event) { console.log(event); });

      
     }

     else {
        unflipCards();
     }


     //isMatch ? disableCards() : unflipCards();

  }



  function disableCards(){

     firstCard.removeEventListener("click",flipCard);
     secondCard.removeEventListener("click",flipCard);




 // new LeaderLine(
 //  document.getElementById('item_1'),
 //   document.getElementById('item_14')
 //  );

   // if (firstCard.dataset.framework ===
   //    secondCard.dataset.framework) {

   //   var x1 = firstCard.getBoundingClientRect().left;
   // console.log(x1);
   //   var y1 = firstCard.getBoundingClientRect().top;
   // console.log(y1);

   //  var x2 = secondCard.getBoundingClientRect().left;
   // console.log(x2);
   //   var y2 = secondCard.getBoundingClientRect().top;
   // console.log(y2);

                     

   //   var canvas = document.querySelector("#myCanvas");
   //   var context = canvas.getContext("2d");

   //   context.beginPath();
   //   context.moveTo(x1-300, y1+700);
   //   //context.bezierCurveTo(400, 400, 250, 350, xxitem6, yyitem6);
   //   context.lineTo(x2-300, y2+700);
   //   context.strokeStyle = "#FF0000";
   //   context.stroke();
   //  }
               
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

 // cards.forEach(card => card.addEventListener('click',flipCard));



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


