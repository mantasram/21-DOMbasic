let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus')
const zeroDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1')
const h1DOMtext = h1DOM.innerText

plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas+1;
    h1DOM.innerText = 'Zaidimas progrese'
    zeroDOM.innerText = rezultatas;
})

minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    h1DOM.innerText = 'Zaidimas progrese'
    zeroDOM.innerText = rezultatas;
})

zeroDOM.addEventListener('click', () => {
    rezultatas = 0;
    console.log(rezultatas)
    h1DOM.innerText = h1DOMtext
    zeroDOM.innerText = rezultatas;
})
