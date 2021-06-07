const vardasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas')
const desertasDOM = document.querySelector('#desertas');
const sultysDOM = document.querySelector('#sultys');
const giraDOM = document.querySelector('#gira');
const pienasDOM = document.querySelector('#pienas');
const buttonDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"')


function aryraVardas (item) {
    if (vardasDOM.value === '') 
    return vardasDOM.value
} 



function norinenori(item) {
    return item.checked ? 'nori' : "nenori"
}

function gerimasNori(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    let kreipinys = ''
    if (vardasDOM.value === '') {
        kreipinys =  'kuris nera pateikes vardo'
    } else {
        kreipinys = 'vardu ' + vardasDOM.value
    }

    let kreipinys2 = gerimasNori(gerimaiDOM) ? gerimasNori(gerimaiDOM) + ' yra pasirinktas gerimas.' : 'nepasirinko jokio gerimo'

    orderDOM.innerText = `Uzsakovas ${kreipinys} ${aryraVardas(vardasDOM)}  , ${norinenori(sriubaDOM)} sriubos,${norinenori(patiekalasDOM)} pagrindinio patiekalo, ${norinenori(desertasDOM)}  deserto ir ${kreipinys2}`
});
