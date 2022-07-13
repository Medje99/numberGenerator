let box = document.getElementById('box');
let box2 = document.getElementById('box2')
let input = document.getElementById('check')


let x = 0;

function numbers(){ 
    x = Math.floor(Math.random() * 900) + 100;
    box2.innerHTML = x;

       
    setTimeout(() => {
         box2 = document.getElementById('box2');
          box2.style.visibility = 'hidden';
      }, 3000);
    
     setTimeout(() => {
         box2 = document.getElementById('box2');
          box2.style.visibility = 'visible';
      },);
     
}

function checkk(){
    let y = input.value;
    if(x == ""){
        alert("Click on 'Get number!")
    }else if(y == ""){
        alert('insert number')
    }else if(y == x){
        alert('Correct number')
    }else{
        alert('Wrong number')
    }
}
