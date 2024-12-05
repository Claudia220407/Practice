// //opdracht 1
// let name = 'Claudia';
// let age = 17;

// console.log(age + ' ' + name);

// //opdracht 2
// let numberOne = 78
// let numberTwo = 12

// console.log('Add' + numberOne + numberTwo);
// console.log(numberOne - numberTwo + 'Subract');
// console.log('multiply' + numberOne * numberTwo);
// console.log('divide' + numberOne / numberTwo);

// //opdracht 3
// let numberThree = 4
// console.log(numberThree > 6);
// console.log(numberThree === 2);
// console.log(numberThree < 3);

// //opdracht 4
// ageOne = prompt('How old are u');

// if(ageOne >= 18){
//     alert("Ur old enough"); 
// } else {
//     alert("Ur too young");
// }

// //opdracht 5

// AddConsole = document.querySelector('.ButtonOne');

// AddConsole.addEventListener('click', function(){
//     console.log(' button clicked ');
// });

// //opdracht 6
// const Array = ['Jonathan', 'Amauri', 'Joshua', 'Jort', 'Karina'];

// for(let i = 0; i < Array.length; i++){
//     console.log(Array[i]);
// }

// //opdracht 7
// const Paragraph = document.querySelectorAll('p');

// for(let i = 0; i < Paragraph.length; i++){
//     Paragraph[i].textContent = (`Hallo dit is de nieuwe text van alinea ${i + 1}`);   
// };

// //opdracht 8
// let numberFour = 8
// let numberFive = 12

// function calculate(numberFive, numberFour){
//     console.log(numberFive+numberFour);
// } calculate(numberFive, numberFour);

//opdracht 9
// const ageInput = document.querySelector('.age2');
// const exampleWorth = 25;
// const submitButton = document.querySelector('.submitButton');

// submitButton.addEventListener('click', function(){
//     if(exampleWorth > 0){
//         console.log("Input is valid");
//         console.log(ageInput.value);
//     } else {
//         console.log("Input is NOT valid");
//         document.body.innerHTML += '<p>Voer een geldig getal in</p>';
//         console.log(ageInput.value);
//     }
// });

//oefentoets

//opdracht 1
// let x = 0;

// while (x < 20) {
//     console.log('loop x');
//     if (x === 10){
//     console.log('Javascript is cool.');
// }
// x++;
// }

//opdracht 2
// const correctPassword = 'april';
// let userPassword = "";
// let authenticated = false;

// while(authenticated === false){
//     userPassword = prompt('Wachtwoord');
//     if(userPassword === correctPassword){
//         alert('youre authenticated');
//         console.log('wachtwoord klopt');
//         authenticated = true;
//     }else{
//         alert('Wrong password');
//     }
// }


//opdracht 3
// const addMessage = document.querySelector('.add');
// const removeMessage = document.querySelector('.remove');
// const ulList = document.querySelector('.ulList');
// let userAnswer = '';

// addMessage.addEventListener('click', function(){
//     userAnswer = prompt('Wat wil je zeggen');
//     ulList.innerHTML = `<li> ${userAnswer}</li>`
// });

// removeMessage.addEventListener('click', function(){
//     ulList.innerHTML = '';
// });

//opdracht 4
// const classes = ['b1p', 'b1test', 'b2s', 'b3p', 'b1test'];

// function displayClasses(){
//     for (let i = 0; i < classes.length; i++) {
//         if(classes[i] !== 'b2s'){
//             console.log(classes);
//             ulList.innerHTML += `<li> ${classes[i]} </li>`
//         }
        
//     }
// }

// displayClasses();

//opdracht calculator

const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
