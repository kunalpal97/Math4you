
// const option1 = document.getElementById('option1');
// const option2 = document.getElementById('option2');
// const option3 = document.getElementById('option3');
// const option4 = document.getElementById('option4');

// const audio = document.getElementById('audio');

// let answer = 0;

// function generate_equation(){

//     var num1 = Math.floor(Math.random() * 35 );

//     var num2 = Math.floor(Math.random() * 35 );

//     var dummyAnswer1 = Math.floor(Math.random() * 28 );
//     var dummyAnswer2 = Math.floor(Math.random() * 28 );
//     var dummyAnswer3 = Math.floor(Math.random() * 28 );

//     var allAnswers = [];
//     var switchAnswer = [];

//     answer = eval(num1 / num2);

//     document.getElementById("num1").innerHTML = num1;
//     document.getElementById("num2").innerHTML = num2;

//     allAnswers = [answer , dummyAnswer1 , dummyAnswer2 , dummyAnswer3 ];
//     for(i = allAnswers.length; i--;){

//         switchAnswer.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1)[0]);

//     };

//     option1.innerHTML = switchAnswer[0];
//     option2.innerHTML = switchAnswer[1];
//     option3.innerHTML = switchAnswer[2];
//     option4.innerHTML = switchAnswer[3];

// };

// option1.addEventListener("click" , function(){

//     if(option1.innerHTML = answer){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }

// });

// option2.addEventListener("click" , function(){

//     if(option1.innerHTML = answer){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }

// });

// option3.addEventListener("click" , function(){

//     if(option1.innerHTML = answer){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }

// });

// option4.addEventListener("click" , function(){

//     if(option1.innerHTML = answer){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }

// });

//   generate_equation();

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const audio = document.getElementById("myAudio");

let answer = 0;

function generateEquation() {
    let num2 = Math.floor(Math.random() * 9) + 1; // num2 (1-9) to avoid division by 0
    let quotient = Math.floor(Math.random() * 10) + 1; // Quotient (1-10) for reasonable numbers
    let num1 = num2 * quotient; // Ensure clean division

    answer = quotient; // Since num1 / num2 = quotient

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    let allAnswers = new Set();
    allAnswers.add(answer);

    while (allAnswers.size < 4) {
        let dummyAnswer = answer + (Math.floor(Math.random() * 4) - 2); // Create close values
        if (dummyAnswer > 0 && dummyAnswer !== answer) {
            allAnswers.add(dummyAnswer);
        }
    }

    let shuffledAnswers = Array.from(allAnswers).sort(() => Math.random() - 0.5);

    option1.innerHTML = shuffledAnswers[0];
    option2.innerHTML = shuffledAnswers[1];
    option3.innerHTML = shuffledAnswers[2];
    option4.innerHTML = shuffledAnswers[3];
}

function checkAnswer(selectedOption) {
    if (parseInt(selectedOption.innerHTML) === answer) {
        generateEquation();
    } else {
        audio.play();
    }
}

option1.addEventListener("click", () => checkAnswer(option1));
option2.addEventListener("click", () => checkAnswer(option2));
option3.addEventListener("click", () => checkAnswer(option3));
option4.addEventListener("click", () => checkAnswer(option4));

generateEquation();
