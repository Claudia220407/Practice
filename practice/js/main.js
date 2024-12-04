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
const ageInput = document.querySelector('.age2');
const exampleWorth = 25;
const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', function(){
    if(exampleWorth > 0){
        console.log("Input is valid");
        console.log(ageInput.value);
    } else {
        console.log("Input is NOT valid");
        document.body.innerHTML += '<p>Voer een geldig getal in</p>';
        console.log(ageInput.value);
    }
});






