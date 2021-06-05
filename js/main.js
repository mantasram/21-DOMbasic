const vardasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas')
const desertasDOM = document.querySelector('#desertas');
const sultysDOM = document.querySelector('#sultys');
const giraDOM = document.querySelector('#gira');
const pienasDOM = document.querySelector('#pienas');
const buttonDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');


const item = ' ';

function norinenori(item) {
    return item.checked ? 'nori' : "nenori"
}





buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    orderDOM.innerText = `Uzsakovas vardu ${vardasDOM.value}  , ${norinenori(sriubaDOM)} sriubos,${norinenori(patiekalasDOM)} pagrindinio patiekalo, ${norinenori(desertasDOM)} deserto ir[gerymo pavadinimas]yra pasirinktas gerimas.`
});
