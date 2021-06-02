const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio pomidoru darzas';
h1DOM.classList.add('pavadinimas')

const liDOM = document.querySelectorAll('li');
 for (let i=0;i<liDOM.length;i++) {
     liDOM[i].innerText = "Pomidoras"
     liDOM[i].classList.add('pomidoras')
 }