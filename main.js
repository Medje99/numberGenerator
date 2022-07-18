let box = document.getElementById('box');
let box2 = document.getElementById('box2');
let input = document.getElementById('check');
let selected = document.getElementById('digits');

let x = 0;

function numbers(){ 
    
    document.getElementById('submit').disabled = false;

    setTimeout(() => {
        box2 = document.getElementById('box2');
         box2.style.visibility = 'hidden';
     }, 100);
    
     setTimeout(() => {
        box2 = document.getElementById('box2');
         box2.style.visibility = 'visible';
     },);

    if(selected.value == "3"){
        x = Math.floor(Math.random() * 900) + 100;
        return box2.innerHTML = x;
    }else if(selected.value == "4"){
        x = Math.floor(Math.random() * 9000) + 1000;
        return box2.innerHTML = x;
    }else if(selected.value == "5"){
        x = Math.floor(Math.random() * 90000) + 10000;
        return box2.innerHTML = x;
    }else if(selected.value == "6"){
        x = Math.floor(Math.random() * 900000) + 100000;
        return box2.innerHTML = x;
    }
    
    

   
}

let score = document.getElementById('score');
score = 0;

let sc = document.getElementById('numbers');







function checkk(){
    let y = input.value;
    document.getElementById('submit').disabled = true;
    
    if(x == ""){
        alert("Click on 'Get number!")
    }else if(y == ""){
        alert('insert number')
    }else if(y == x){
        alert('Correct number, click "Get number" to continue')
        score++
        sc.innerText = score;
    }else{
        alert('Wrong number, click "Get number" to continue')
        score = 0;
         sc.innerText = score;
    } 
}
 
    
