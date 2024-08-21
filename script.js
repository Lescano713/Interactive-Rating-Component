const options = document.querySelectorAll('input[type="radio"]');
const submitButton = document.querySelector('button[type="submit"]');



function raitingState(value){
    const state = document.querySelector('#state');
    state.textContent += `${value} out of 5`
}

submitButton.addEventListener('click', e =>{
    e.preventDefault()
    const optionSelected = Array.from(options).find(option => option.checked);
    if (!optionSelected) {
        alert("Please choose an option");
    } else {
        raitingState(optionSelected.value)
        document.body.classList.add('hide');
    }
})