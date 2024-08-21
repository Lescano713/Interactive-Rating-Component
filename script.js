const options = document.querySelectorAll('input[type="radio"]');
const submitButton = document.querySelector('button[type="submit"]');


capture()
function capture(){
    options.forEach(option =>{
        option.addEventListener('click', e => {
            const value = e.target.value;
            raitingState(value);
        })
    })
}

function raitingState(value){
    const state = document.querySelector('#state');
    state.textContent += `${value} out of 5`
}

submitButton.addEventListener('click', e =>{
    e.preventDefault()
    document.body.classList.add('hide')
})