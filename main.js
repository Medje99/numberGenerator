let box2 = $('#box2');
let input = $('#check');
let selected = $('#digits');
let btnNumbers = $('#btnNumbers');
let submit= $('#submit');
let x;


  selected.on('click', function gg(){
    let box2 = $('#box2');
    box2.css('visibility','visible')

    if(selected.val() == "3"){    
        box2.html('***')
   }else if(selected.val() == "4"){
       box2.html('****')
   }else if(selected.val() == "5"){
       box2.html('*****')
   }else if(selected.val() == "6"){
       box2.html('******')
   }
  });

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
    return x;
})



let score = $('#score')
score = 0;

let sc = $('#numbers')


submit.on('click', function () {
    
    let submit= $('#submit');
    let timer = $('#selectTime');
    let y = input.val();

    submit.attr('disabled','disabled');
    
    if(isNaN(x)){
        alert("Click on 'Get a number!")
    }else if(y == ""){
        alert('insert number')
    }else if(y == x){

        if(selected.val() == 3){
            alert('Correct number, click "Get number" to continue')
            score += 0.5;
            sc.text(`${score}`);
        }else if(selected.val() == 4){
            alert('Correct number, click "Get number" to continue')
            score++;
            sc.text(`${score}`);
        }
        else if(selected.val() == 5){
            alert('Correct number, click "Get number" to continue')
            score += 1.5;
            sc.text(`${score}`);
        }
        else if(selected.val() == 6){
            alert('Correct number, click "Get number" to continue')
            score += 2;
            sc.text(`${score}`);
        };

        if(timer.val() == "a"){
            score += 2;
            sc.text(`${score}`);
        }else if(timer.val() == "b"){
            score += 1.5;
            sc.text(`${score}`);
        }else if(timer.val() == "c"){
            score += 1;
            sc.text(`${score}`);
        }else if(timer.val() == "d"){
            score += 0.5;
            sc.text(`${score}`);
        }
    }else{
        
        alert('Wrong number, click "Get number" to continue')
        score = 0;
        sc.text(`${score}`);

    } 

    
});




    
 
    
function tutorial(){
    alert('The goal of this exercise is to type the same number that you get after clicking "Get number", and collect as many points as possible')
    alert('You can choose the difficulty of the task by changing the number of digits and digits display time.')
    alert( '0.5 Points for 1s\n1 Points for 0.75s')

}

function infoTime(){
    alert( '0.5 Points for 1s\n1 Points for 0.75s\n1.5 Points for 0.5s\n2 Points for 0.25s')
}

function infoNum(){
    alert( '0.5 Points for 3 digits\n1 Points for 4 digits\n1.5 Points for 5 digits\n2 Points for 6 digits')
}
