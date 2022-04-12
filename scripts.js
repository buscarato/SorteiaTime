let input = document.getElementById('txtDados')
let button = document.getElementById('btnAdd')
let tarefa = document.getElementById('nomeTarefaId')
let btnSorteio = document.getElementById('btnSorteio')
let arrayDeTarefas = []
let listaCompleta = document.getElementById('tarefas')
document.getElementById('btnVoltar').style.display = 'none';


recarregarTarefas()


//mostrar tarefas na telas
function mostraTarefas() {
    var novaLi = ''
    arrayDeTarefas.forEach((tarefa, index) => {
        novaLi = novaLi + `
        <li class="itemTarefas ${tarefa.concluida == true ? "concluido" : ""}">
        <button class="confirma" onclick="concluirTarefa(${index})">
        <i class=""></i></button>
        <p class="nomeTarefa" id="nomeTarefaId">${index + 1} ${tarefa.tarefa}</p>
        <button class="delete" onclick="deletarTarefa(${index})">
        <i class="fa-solid fa-trash-can"></i></button>
    </li>`

    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))

}

function deletarTarefa(index) {
    //console.log('deletar tarefas' + index)
    arrayDeTarefas.splice(index, 1)
    mostraTarefas()
}

//adicionar tarefas 
function adicionarTarefas() {
    if (input.value) {

        arrayDeTarefas.push({
            tarefa: input.value,
            concluida: false
        })

    }
    else {
        alert('Você tem que ter no mínimo dois atletas cadastrado')

    }

    input.value = ""
    mostraTarefas()
}


function concluirTarefa(index) {
    // arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida
    // console.log(arrayDeTarefas)
    mostraTarefas()

}

function recarregarTarefas() {
    let minhasTarfas = localStorage.getItem("lista")
    if (minhasTarfas) {
        arrayDeTarefas = JSON.parse(minhasTarfas)
        //console.log(arrayDeTarefas)
        mostraTarefas()
    }

}

button.addEventListener('click', adicionarTarefas)

function addEnter(teclas) {
    if (teclas.key === "Enter") {
        adicionarTarefas()
    }

}

document.addEventListener("keypress", addEnter)


btnSorteio.addEventListener('click', sortearAtleta)


function sortearAtleta() {
    //verifica quantos atletas tem no array
    qtdAtletas = arrayDeTarefas.length
    //verificar se a quantidade é par
    if (qtdAtletas % 2 === 0) {
        var resultado = true
        console.log(qtdAtletas);
    }


    if (qtdAtletas === 0) {
        alert('Você tem que ter no mínimo dois atletas cadastrado')
    }
    else {
        //valida 
        if (resultado === true) {

            //limpa a tela atual 
            var lista = document.getElementById("tarefas").innerHTML;
            lista = '<li> </li>'
            document.getElementById("tarefas").innerHTML = lista;

            //variavel de daos
            var dados = []
            arrayDeTarefas.forEach((tarefa, index) => {
                dados.push(tarefa.tarefa)
            })


            //faz um for para sortear metade dos atletas 
            //VOLTAR AQUI NO FUTURO QUE DÁ PARA MELHORAR ESTE CODIGO 
            //TEM PROGRAMAÇÃO DOBRADA AQUI 
            for (let n = 0; n < (qtdAtletas / 2); n++) {
                const randomizar = opcoes => opcoes[Math.floor(Math.random() * opcoes.length)]
                const atletas = randomizar(dados)


                //colocar os dados do html aqui 
                lista = lista + `
            <li class="itemTimes1"> 
            <button class="btnTime1" onclick="false()">
            <i class="fa-solid fa-people-group"></i> </button>
            <p class="nomeTarefa" id="nomeTarefaId"> ${atletas}  </p>
            </li>
        `

                document.getElementById("tarefas").innerHTML = lista;
                console.log('Time 01: ' + (n + 1) + ' ' + atletas)

                //exclui nomes do array para não repetir 
                var buscar = atletas;
                var indice = dados.indexOf(buscar);
                while (indice >= 0) {
                    dados.splice(indice, 1);
                    indice = dados.indexOf(buscar);
                }

            }

            console.log('=-=-=-=-=-=  Time 002 =-=-=-=-=-=')

            for (let n = 0; n < (qtdAtletas / 2); n++) {
                const randomizar = opcoes => opcoes[Math.floor(Math.random() * opcoes.length)]
                const atletas = randomizar(dados)


                //colocar os dados do html aqui 
                lista = lista + `
            <li class="itemTimes2"> 
            <button class="btnTime1" onclick="false()">
            <i class="fa-solid fa-people-roof"></i> </button>
            <p class="nomeTarefa" id="nomeTarefaId"> ${atletas}  </p>
            </li>
        `

                document.getElementById("tarefas").innerHTML = lista;
                console.log('Time 01: ' + (n + 1) + ' ' + atletas)

                //exclui nomes do array para não repetir 
                var buscar = atletas;
                var indice = dados.indexOf(buscar);
                while (indice >= 0) {
                    dados.splice(indice, 1);
                    indice = dados.indexOf(buscar);
                }

            }


            //ocultar botoões da tela 
            document.getElementById('btnAdd').style.display = 'none';
            document.getElementById('txtDados').style.display = 'none';
            document.getElementById('btnVoltar').style.display = 'inline';



        }
        else {
            alert('Total de atletas cadastrados tem que ser par')
        }

    }

}