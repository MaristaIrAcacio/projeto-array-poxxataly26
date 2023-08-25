// Array para armazenar lista
const tarefas = [];

// Seleciona os elementos do DOM
const adicionarTarefaBtn = document.getElementById("adicionar-tarefa");
const novaTarefaInput = document.getElementById("nova-tarefa");
const listaTarefas = document.getElementById("tarefa-lista");

// Adiciona um ouvinte de evento ao botão "Adicionar"
adicionarTarefaBtn.addEventListener("click", () => {
  const novaTarefa = novaTarefaInput.value;
  // Adiciona o novo item ao array
  if (novaTarefa !== "") {
    tarefas.push(novaTarefa);
    novaTarefaInput.value = "";
    // Atualiza a exibição da nova tarefa
    exibirTarefas();
  }
});

// Função para atualizar a exibição das tarefas
function exibirTarefas() {
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    listaTarefas.appendChild(li);
  });
}
