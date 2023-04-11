let interruptor = document.getElementById(`interruptor`)
let root = document.documentElement

function toggleDarckMode() {
    root.classList.toggle (`tema-claro`)
}

function loadTheme() {
    const darckMode = localStorage.getItem(`tema-claro`)

    if (darckMode) {
        toggleDarckMode();
    }
}

//chamar função
loadTheme();

interruptor.addEventListener(`click`, () => {
    toggleDarckMode()
    
    
    //salvar ou remover o Darck Mode
    localStorage.removeItem(`tema-claro`);

    if (root.classList.contains(`tema-claro`)) {
        localStorage.setItem(`tema-claro`, 1);
    }

})

