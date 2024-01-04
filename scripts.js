const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let minhaListaDeitens = [];

function OqueTenhoqueFazer() {
    minhaListaDeitens.push({
        tarefa: input.value,
        concluida: false
    });
    input.value = '';

    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLI = '';
    const ListaCompleta = document.querySelector('.list-tasks'); // Adicionei esta linha

    minhaListaDeitens.forEach((item, index) => {
        novaLI = novaLI + `<li class="task ${item.concluida ? "done" : ""}">
                <img src="./img/checked.png" alt="Checked na tarefa" onClick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="Tarefa Para o Lixo" onclick="deletarItem(${index})">
            </li>`;
    });

    ListaCompleta.innerHTML = novaLI;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeitens)); // Corrigi o nome da variável

}

function concluirTarefa(index) {
    minhaListaDeitens[index].concluida = !minhaListaDeitens[index].concluida;
    mostrarTarefas();
}

function deletarItem(index) {
    minhaListaDeitens.splice(index, 1);
    mostrarTarefas();
}

function recarregartarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista');
    if (tarefasDoLocalStorage) {
        minhaListaDeitens = JSON.parse(tarefasDoLocalStorage);
    }
    mostrarTarefas();
}

recarregartarefas();

button.addEventListener('click', OqueTenhoqueFazer);

