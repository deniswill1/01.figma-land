// const calc = function(operacao, num1, num2) {
//     return operacao(num1, num2)
// }

// const soma = function (num1, num2) {
//     return num1 + num2;
// }

// const sub = function (num1, num2) {
//     return num1 - num2;
// }

// const somaCalc = calc(soma, 5, 1);
// const subCalc = calc (sub, 4, 5);

// console.log(somaCalc);
// console.log(subCalc);


const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navegation');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');

});