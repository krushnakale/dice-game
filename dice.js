// function playGame(){
 
//     document.getElementById('demo').innerHTML =  Math.floor(Math.random()* 7)
   
   

// }
let container = document.querySelector('.dice_number_container');
function playGame(){
   let randomNumber = Math.floor(Math.random()*10)+1;
    container.innerText=randomNumber;
}
