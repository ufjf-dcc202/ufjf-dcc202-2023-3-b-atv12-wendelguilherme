document.entrada.addEventListener('submit', leFormulario);

function leFormulario(params){
    event.preventDefault();
    const quantidade = document.entrada.quantidade.value;
    const fruta = document.entrada.fruta.value;
    console.log(`Eu tenho ${quantidade} ${fruta}`);
}