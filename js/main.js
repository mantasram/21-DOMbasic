function generuotiLenta (selector, number) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false
    }
    if (number < 0 || number % 1 !== 0) {

        return false
    }
    let HTML = '';
    for (let i=1; i<=number; i++) {
        HTML += `<div>${i}</div>`;
    }
    return DOM.innerHTML = HTML

}



console.log(generuotiLenta('.lenta', 4));