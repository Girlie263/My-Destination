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

let h2 = document.querySelector("h2");

let hour = now.getHours()

let minute = now.getMinutes()
if (minute < 10){
  minute = `0${minute}`
};

let second = now.getSeconds()
if (second < 10){
  second = `0${second}`
};

h2.innerHTML = `Current time: <br />
${hour}:${minute}:${second}`

function startBooking(){
  alert("You are Booked for your next Destination😊");
}


let bookingButton = document.querySelector('#booking');
bookingButton.addEventListener('click',startBooking);

