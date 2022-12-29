const add = document.getElementById('add');
const input = document.getElementById('campo');
var lista = criarLista();

add.addEventListener('click', ()=>{
    
    return adicionar(input.value);

});

function adicionar(string) {
    let li = document.createElement('li');
    
    li.innerHTML = string;
    li.className = "list-group-item";
    lista.appendChild(li);
    

}

function criarLista() {
    const listaDiv = document.getElementById('list');
    let lista = document.createElement('ul');
    listaDiv.appendChild(lista);
    lista.className = "list-group list-group-flush";
    return lista;
}

//list-group list-group-flush