//Declarando listas vazias
let listaFrutas = [];
let listaLaticineos = [];
let listaCongelados = [];
let listaDoces = [];
let listaDeLista = [listaFrutas,listaLaticineos,listaCongelados,listaDoces]

//Recebendo resposta sim e não
let respostaSim = document.getElementById('respostaSim');
let respostaNao = document.getElementById('respostaNao');
let escolhaRemover = document.getElementById('escolhaRemover');

//Declarando tipo de alimento
let tipoAlimento = document.getElementsByClassName('tipoAlimento');

//Recebendo as escolhas de sim, não ou remover item
let listaDeCompra = document.getElementById('listaDeCompra');
let adicionarAlimento = document.getElementById('adicionarAlimento')
let removerAlimento = document.getElementById('removerAlimento')

//Função para sim e não
function simNao() {
    if (respostaSim.checked){
        adicionarAlimento.style.display = 'block';
        listaDeCompra.style.display = 'none';
        removerAlimento.style.display = 'none'; 
    } else if (respostaNao.checked){
        adicionarAlimento.style.display = 'none';
        listaDeCompra.style.display = 'block';
        removerAlimento.style.display = 'none'; 
        listaDeCompra.innerHTML = `<p>Lista de compras:</p> 
        <p>Frutas: ${listaFrutas} </p>
        <p>Laticíneos: ${listaLaticineos} </p>
        <p>Congelados: ${listaCongelados}</p> 
        <p>Doces: ${listaDoces}</p>`;
    }else if (escolhaRemover.checked){
        adicionarAlimento.style.display = 'none';
        listaDeCompra.style.display = 'block';
        removerAlimento.style.display = 'block'; 
        listaDeCompra.innerHTML = `<p>Lista de compras:</p> 
        <p>Frutas: ${listaFrutas} </p>
        <p>Laticíneos: ${listaLaticineos} </p>
        <p>Congelados: ${listaCongelados}</p> 
        <p>Doces: ${listaDoces}</p>`;
    }
}

//Adicionando alimentos no array correto
function adicionarLista(){
    let contador = 0
    for (let i=0;i < tipoAlimento.length; i++){
        if(tipoAlimento[i].checked){
            listaDeLista[i].push(document.getElementById('alimento').value);
            alert('Alimento adicionado');
            document.getElementById('alimento').value = '';
            contador ++
        }
    }
    if (contador === 0){
        alert('Selecione um tipo de alimento.')
    }
}

//Removendo item
function removerLista(){
    let contador = 0
    for (let i=0; i< tipoAlimento.length; i++){
        let respostaRemover = document.getElementById('respostaRemover').value;
        if (listaDeLista[i].indexOf(respostaRemover) != -1){
            listaDeLista[i].splice(respostaRemover);
            alert('Alimento removido!');
            document.getElementById('respostaRemover').value = '';
            contador ++
        }else{
        }
    }
    if (contador === 0){
        alert('Digite um alimento válido.')
    }
    simNao()
}
