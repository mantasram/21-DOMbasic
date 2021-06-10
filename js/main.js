const pasirinkimasDOM = document.querySelector('.option');
const submitDOM = document.querySelector('button')
const gyvunuList = [
    { id: 'zuikis'},
    { id: 'barsukas'},
    { id: 'lape'},
    { id: 'vilkas'},
    { id: 'sernas'},
    { id: 'stirna'},
    { id: 'vovere'},
]

function renderSelect(selector, data){
    const DOM = document.querySelector(selector);
    let HTML = '';


    for (const i in data){
        const pet = data[i];
        HTML += `<option value="${pet.id}">${pet.id}</option>`
    }
    DOM.insertAdjacentHTML('afterend', `<select name="pets" id="pets">${HTML}</select>`);

    const petsDOM = document.querySelector('#pets');

    submitDOM.addEventListener('click', (e) => {
        e.preventDefault();
        pasirinkimasDOM.innerText = petsDOM.value;
    });


}

renderSelect('label', gyvunuList)



