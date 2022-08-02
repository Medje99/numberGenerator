let box2 = $('#box2');
let input = $('#check');
let selected = $('#digits');
let btnNumbers = $('#btnNumbers');
let submit= $('#submit');


function displayOff(){
    let box2 = $('#box2');
    box2.css('visibility','hidden')
}

function displayOn(){
    let box2 = $('#box2');
    box2.css('visibility','visible')

}

btnNumbers.on('click', function () {
    
    submit.removeAttr('disabled');
    
    let timer = $('#selectTime');
    var timetime = 0;

    if(timer.val() == "a"){
        timetime = 250;
    }else if(timer.val() == "b"){
        timetime = 500
    }else if(timer.val() == "c"){
        timetime = 750
    }else if(timer.val() == "d"){
        timetime = 1000
    }



    setTimeout(displayOff, timetime);
    
    displayOn()

    if(selected.val() == "3"){
        x = Math.floor(Math.random() * 900) + 100;
         box2.html(x)
    }else if(selected.val() == "4"){
        x = Math.floor(Math.random() * 9000) + 1000;
        box2.html(x)
    }else if(selected.val() == "5"){
        x = Math.floor(Math.random() * 90000) + 10000;
        box2.html(x)
    }else if(selected.val() == "6"){
        x = Math.floor(Math.random() * 900000) + 100000;
        box2.html(x)

    }
})



let score = $('#score')
score = 0;

let sc = $('#numbers')


submit.on('click', function () {
    
    let y = input.val();
    submit.attr('disabled','disabled');
    
    if(x == ""){
        alert("Click on 'Get number!")
    }else if(y == ""){
        alert('insert number')
    }else if(y == x){
        alert('Correct number, click "Get number" to continue')
        score++
        sc.text(`${score}`);
    }else{
        alert('Wrong number, click "Get number" to continue')
        score = 0;
        sc.text(`${score}`);

    } 

    
});




    
 
    
function tutorial(){
    alert('The goal of this exercise is to type the same number that you got after clicking "Get number", and collect as many points as possible')
    alert('You can choose the difficulty of the task by changing the number of digits and digits display time.')

}