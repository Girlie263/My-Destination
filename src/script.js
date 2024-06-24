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