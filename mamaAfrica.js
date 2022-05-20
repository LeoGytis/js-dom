function mamaAfrica(selector, array) {
    const DOM = document.querySelector(selector);
    let HTML = ''; 
    let columnIndex = 0;

    for(let i = 0; i < array.length; i++) {
        columnIndex += 1;
        if (!array[i] || array[i].length === "") {
            return null;
        } else 
        HTML += `
        <li><ul>${array[i]}<ul></li>
        `;    
    }

    DOM.innerHTML= HTML;
}
export { mamaAfrica };