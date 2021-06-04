const inputDOM = document.querySelector('input');
const submitDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');



submitDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value

})
