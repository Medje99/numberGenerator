let box = document.getElementById('box');
let box2 = document.getElementById('box2');
let input = document.getElementById('check');
let selected = document.getElementById('digits');

let x = 0;


function displayOff(){
    box2 = document.getElementById('box2');
    box2.style.visibility = 'hidden';
}

function displayOn(){
    box2 = document.getElementById('box2');
    box2.style.visibility = 'visible';
}


function numbers(){ 
    
    document.getElementById('submit').disabled = false;
    let timer = document.getElementById('selectTime')
    var timetime = 0;

    if(timer.value == "a"){
        timetime = 250;
    }else if(timer.value == "b"){
        timetime = 500
    }else if(timer.value == "c"){
        timetime = 750
    }else if(timer.value == "d"){
        timetime = 1000
    }



    setTimeout(displayOff, timetime);
    
    displayOn()

    if(selected.value == "3"){
        x = Math.floor(Math.random() * 900) + 100;
         box2.innerHTML = x;
    }else if(selected.value == "4"){
        x = Math.floor(Math.random() * 9000) + 1000;
         box2.innerHTML = x;
    }else if(selected.value == "5"){
        x = Math.floor(Math.random() * 90000) + 10000;
         box2.innerHTML = x;
    }else if(selected.value == "6"){
        x = Math.floor(Math.random() * 900000) + 100000;
         box2.innerHTML = x;
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
 
    
function tutorial(){
    alert('The goal of this exercise is to type the same number that you got after clicking "Get number", and collect as many points as possible')
    alert('You can choose the difficulty of the task by changing the number of digits and digits display time.')

}