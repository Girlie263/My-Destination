function handleForm(event){
    event.preventDefault();
    let departurElement = document.querySelector('#departure-input');
    let countryElement = document.querySelector('#country');
    let arrivalElement = document.querySelector('#arrival-input');

    countryElement.innerHTML = departurElement.value;
    countryElement.innerHTML = arrivalElement.value;
}


let searchElement = document.querySelector('#search-form');
searchElement.addEventListener('submit',handleForm);


let btnClear = document.querySelector(".clearButton");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener('click', ()=>{
  inputs.forEach(input => input.value = '');
});

let now = new Date;
console.log(now);

let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()

let formattedTime =`Current Time:<br />${hour}:${minute}:${second}`;
formattedTime.innerHTML = document.querySelector('.time')

console.log(formattedTime);

function startBooking(){
  alert("Booked");
}


let bookingButton = document.querySelector('#booking');
bookingButton.addEventListener('click',startBooking);

