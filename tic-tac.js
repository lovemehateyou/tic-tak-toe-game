let position = ''
let player_X = 0
let player_O = 0


const pop = document.querySelector('.js-b1')
const pop2 = document.querySelector('.js-b2')
const pop3 = document.querySelector('.js-b3')
const pop4 = document.querySelector('.js-b4')
const pop5 = document.querySelector('.js-b5')
const pop6 = document.querySelector('.js-b6')
const pop7 = document.querySelector('.js-b7')
const pop8 = document.querySelector('.js-b8')
const pop9 = document.querySelector('.js-b9')
const choicex = document.querySelector('.js-x')
const choiceo = document.querySelector('.js-o')
const box = document.querySelector('.box-js')
const score = document.querySelector('.js-score')
const reset1 = document.querySelector('.js-reset') 


pop.addEventListener( 'click', function() {
    position = 'b1';
})

pop2.addEventListener( 'click', function() {
    position = 'b2';
 })

 pop3.addEventListener( 'click', function() {
    position = 'b3';
 })

 pop4.addEventListener( 'click', function() {
    position = 'b4';
 })

 pop5.addEventListener( 'click', function() {
    position = 'b5';
 })

 pop6.addEventListener( 'click', function() {
    position = 'b6';
 })

 pop7.addEventListener( 'click', function() {
    position = 'b7';
 })

 pop8.addEventListener( 'click', function() {
    position = 'b8';
})

pop9.addEventListener( 'click', function() {
    position = 'b9';
 })
 reset1.addEventListener('click',function(){
    reset()
 })
 

 choicex.addEventListener( 'click', function() {
    x_or_o('X');

 })

 choiceo.addEventListener( 'click', function() {
    x_or_o('O');
 })


 function result(a){
    if(pop.innerHTML === pop2.innerHTML&& pop.innerHTML === pop3.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();
}
    else if(pop4.innerHTML === pop5.innerHTML&& pop4.innerHTML === pop6.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();       
    }
    else if(pop7.innerHTML === pop8.innerHTML&& pop7.innerHTML === pop9.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();
    }
    else if(pop.innerHTML === pop4.innerHTML&& pop.innerHTML === pop7.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();
        
    }
    else if(pop2.innerHTML === pop5.innerHTML&& pop2.innerHTML === pop8.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();
    }
    else if(pop3.innerHTML === pop6.innerHTML&& pop3.innerHTML === pop9.innerHTML){
        alert(`player with ${a} wins the game`)
        reset();
    }
    else if(pop.innerHTML === pop5.innerHTML&& pop.innerHTML === pop9.innerHTML){
        alert(`player with ${a} wins the game`) 
        reset();
    }
    else if(pop3.innerHTML === pop5.innerHTML&& pop3.innerHTML === pop7.innerHTML){
        alert(`player with ${a} wins the game`)  
        reset();
    }
    
}
function reset(){
    pop.innerHTML = 'b1';
    pop2.innerHTML = 'b2';
    pop3.innerHTML = 'b3';
    pop4.innerHTML = 'b4';
    pop5.innerHTML = 'b5';
    pop6.innerHTML = 'b6';
    pop7.innerHTML = 'b7';
    pop8.innerHTML = 'b8';
    pop9.innerHTML = 'b9';
  
}


function x_or_o(a){
    if (position === undefined) {
        console.log('position is not initialized');
        return;
      }
    else if (position === 'b1'){
        pop.innerHTML = a;
    }
    else if (position === 'b2'){
        pop2.innerHTML = a;
    }
    else if (position === 'b3'){
        pop3.innerHTML = a;
    }
    else if (position === 'b4'){
        pop4.innerHTML = a;
    }
    else if (position === 'b5'){
        pop5.innerHTML = a;
    }
    else if (position === 'b6'){
        pop6.innerHTML = a;
    }
    else if (position === 'b7'){
        pop7.innerHTML = a;
    }
    else if (position === 'b8'){
        pop8.innerHTML = a;
    }
    else if (position === 'b9'){
        pop9.innerHTML = a;
    }
    result(a);
    
}





