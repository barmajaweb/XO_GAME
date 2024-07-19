let play = document.querySelectorAll('.play');
let chekk = document.querySelectorAll('.chek');
let button = document.querySelector('button');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let yes= 'X';
button.innerHTML = 'X'
function playe(num){
  let x=0;
  let y = 0;
  
  if(yes == 'X') {
    if(play[num].innerHTML === `<h1 class="chek">X</h1>`|| play[num].innerHTML === `<h1 class="chek"></h1>`){
      if(play[num].innerHTML === `<h1 class="chek"></h1>`){
        button.innerHTML = 'O'
        yes = 'O';
  
      }
      play[num].innerHTML= `<h1 class="chek">X</h1>`;
    }
  }else if(yes == 'O' ) {
    if(play[num].innerHTML === `<h1 class="chek">O</h1>`|| play[num].innerHTML === `<h1 class="chek"></h1>`){
      if(play[num].innerHTML === `<h1 class="chek"></h1>`){
        button.innerHTML = 'X'
        yes = 'X';

      } 
      play[num].innerHTML= `<h1 class="chek">O</h1>`;
    }
  }
  if(play[0].innerHTML!= `<h1 class="chek"></h1>` && play[1].innerHTML!= `<h1 class="chek"></h1>` && play[2].innerHTML!= `<h1 class="chek"></h1>` && play[3].innerHTML!= `<h1 class="chek"></h1>` && play[4].innerHTML!= `<h1 class="chek"></h1>` && play[5].innerHTML!= `<h1 class="chek"></h1>` && play[6].innerHTML!= `<h1 class="chek"></h1>` && play[7].innerHTML!= `<h1 class="chek"></h1>` && play[8].innerHTML!= `<h1 class="chek"></h1>`){
    
    for(let i = 0; i<9; i++){
      play[i].innerHTML= `<h1 class="chek"></h1>`
      button.innerHTML = 'X'
      yes = 'X';

 }

  }

  result();
  colo(num);
  rowcol(num);
}
player1.innerHTML =0;
player2.innerHTML=0;
function result(){
  for(let i = 0; i<9; i++){
    if(play[i].innerHTML != `<h1 class="chek"></h1>`){
      if(i<=2){
        if(play[0].innerHTML === play[1].innerHTML && play[1].innerHTML === play[2].innerHTML){
          if(button.innerHTML === 'O' ){
            player1.innerHTML =  +player1.innerHTML+1
          }else{
            player2.innerHTML =  +player2.innerHTML+1

          }
          for(let i = 0; i<9; i++){
            play[i].innerHTML= `<h1 class="chek"></h1>`
            button.innerHTML = 'X'
            yes = 'X';
  
          }
          

      }
      
      
    }
      if(i>=3 && i <= 5){
      if(play[3].innerHTML === play[4].innerHTML && play[4].innerHTML === play[5].innerHTML){
        if(button.innerHTML === 'O' ){
          player1.innerHTML =  +player1.innerHTML+1
        }else{
          player2.innerHTML =  +player2.innerHTML+1

        }
        for(let i = 0; i<9; i++){
          play[i].innerHTML= `<h1 class="chek"></h1>`
          button.innerHTML = 'X'
          yes = 'X';

        }
      }
    }
      if(i>=6 && i <= 8){
      if(play[6].innerHTML === play[7].innerHTML && play[7].innerHTML === play[8].innerHTML){
        if(button.innerHTML === 'O' ){
          player1.innerHTML =  +player1.innerHTML+1
        }else{
          player2.innerHTML =  +player2.innerHTML+1

        }
        for(let i = 0; i<9; i++){
          play[i].innerHTML= `<h1 class="chek"></h1>`
          button.innerHTML = 'X'
          yes = 'X';

        }
      }
    }
    }
   
  }
}
function colo(x){
    if(play[x].innerHTML != `<h1 class="chek"></h1>`){
      if(play[0].innerHTML !=  `<h1 class="chek"></h1>`){
        if(play[0].innerHTML === play[3].innerHTML && play[3].innerHTML === play[6].innerHTML){
          if(button.innerHTML === 'O' ){
            player1.innerHTML =  +player1.innerHTML+1
          }else{
            player2.innerHTML =  +player2.innerHTML+1
  
          }
          for(let i = 0; i<9; i++){
            play[i].innerHTML= `<h1 class="chek"></h1>`
            button.innerHTML = 'X'
            yes = 'X';
  
          }
          
  
        }

      }
      if(play[1].innerHTML !=  `<h1 class="chek"></h1>`){
        if(play[1].innerHTML === play[4].innerHTML && play[4].innerHTML === play[7].innerHTML){
          if(button.innerHTML === 'O' ){
            player1.innerHTML =  +player1.innerHTML+1
          }else{
            player2.innerHTML =  +player2.innerHTML+1
  
          }
          for(let i = 0; i<9; i++){
            play[i].innerHTML= `<h1 class="chek"></h1>`
            button.innerHTML = 'X'
            yes = 'X';
  
          }
          
  
        }

      }
      if(play[2].innerHTML !=  `<h1 class="chek"></h1>`){
        if(play[2].innerHTML === play[5].innerHTML && play[5].innerHTML === play[8].innerHTML){
          if(button.innerHTML === 'O' ){
            player1.innerHTML =  +player1.innerHTML+1
          }else{
            player2.innerHTML =  +player2.innerHTML+1
  
          }
          for(let i = 0; i<9; i++){
            play[i].innerHTML= `<h1 class="chek"></h1>`
            button.innerHTML = 'X'
            yes = 'X';
  
          }
          
  
        }

      }
      

    }

  
}
function rowcol(x){
  if(play[x].innerHTML != `<h1 class="chek"></h1>`){
    if(play[0].innerHTML !=  `<h1 class="chek"></h1>`){
      if(play[0].innerHTML === play[4].innerHTML && play[4].innerHTML === play[8].innerHTML){
        if(button.innerHTML === 'O' ){
          player1.innerHTML =  +player1.innerHTML+1
        }else{
          player2.innerHTML =  +player2.innerHTML+1

        }
        for(let i = 0; i<9; i++){
          play[i].innerHTML= `<h1 class="chek"></h1>`
          button.innerHTML = 'X'
          yes = 'X';

        }

      }

    }
    if(play[2].innerHTML !=  `<h1 class="chek"></h1>`){
      if(play[2].innerHTML === play[4].innerHTML && play[4].innerHTML === play[6].innerHTML){
        if(button.innerHTML === 'O' ){
          player1.innerHTML =  +player1.innerHTML+1
        }else{
          player2.innerHTML =  +player2.innerHTML+1

        }
        for(let i = 0; i<9; i++){
          play[i].innerHTML= `<h1 class="chek"></h1>`
          button.innerHTML = 'X'
          yes = 'X';

        }

      }

    }


    
  }

}
function reply(){
  player1.innerHTML =0;
player2.innerHTML=0;
button.innerHTML = 'X'
for(let i = 0; i<9; i++){
  play[i].innerHTML= `<h1 class="chek"></h1>`
  button.innerHTML = 'X'
  yes = 'X';

}


}

