const score = document.querySelector(".scr");
let number = 0;
let addition;
score.innerHTML = number;
addition = function plusOne() {
    number++;
    score.innerHTML = number;
}
function reset(){
    number = 0;
    score.innerHTML = number;
}
function multiply(){
    if(number >= 20 && number < 50){
        number -= 20;
        score.innerHTML = number;
        addition = function plusTwo(){
            number += 2;
            score.innerHTML = number;
        }

    }
    else if(number >= 50 && number < 200){
        number -= 50;
        score.innerHTML = number;
        addition = function plusFive(){
            number += 5;
            score.innerHTML = number;
        }
    }
    else if(number >= 200 && number < 500){
        number -= 200;
        score.innerHTML = number;
        addition = function plusTen(){
            number += 10;
            score.innerHTML = number;
        }
    }
    else if(number >= 500 && number < 1000){
        number -= 500;
        score.innerHTML = number;
        addition = function plusFifteen(){
            number += 15;
            score.innerHTML = number;
        }
    }
    else if(number >= 1000 && number < 5000){
        number -= 1000;
        score.innerHTML = number;
        addition = function plusThirty(){
            number += 30;
            score.innerHTML = number;
        }
    }
    else if(number >= 5000 && number < 20000){
        number -= 5000;
        score.innerHTML = number;
        addition = function plusFifty(){
            number += 50;
            score.innerHTML = number;
        }
    }
    else if(number >= 20000 && number < 100000){
        number -= 20000;
        score.innerHTML = number;
        addition = function plusSeventyfive(){
            number += 75;
            score.innerHTML = number;
        }
    }
    else if(number >= 100000 && number < 500000){
        number -= 100000;
        score.innerHTML = number;
        addition = function plusHundred(){
            number += 100;
            score.innerHTML = number;
        }
    }
    else if(number >= 500000 && number < 2000000){
        number -= 500000;
        score.innerHTML = number;
        addition = function plusTwohundred(){
            number += 200;
            score.innerHTML = number;
        }
    }
    else{
        alert("You don't have enough points to buy this upgrade.");
    }
}