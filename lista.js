let form = document.getElementById("musicaForm");
let lista = document.getElementById("listaMusicas");

let musicas = JSON.parse(localStorage.getItem("musicas")) || [];

function salvarLocalStorage() {
  localStorage.setItem("musicas", JSON.stringify(musicas));
}

function exibirMusicas() {
  lista.innerHTML = "";
  musicas.forEach((m, index) => {
    const item = document.createElement("li");
    item.textContent = `Música ${m.nome} pelo o autor: ${m.autor} `;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = " Editar";
    btnEditar.className = "editar";
    btnEditar.style.cursor = "pointer";
    btnEditar.onclick = () => editarMusica(index);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = " Excluir";
    btnRemover.className = "remover";
    btnRemover.style.cursor = "pointer";
    btnRemover.onclick = () => removerMusica(index);

    item.appendChild(btnEditar);
    item.appendChild(btnRemover);
    lista.appendChild(item);

    btnEditar.style.backgroundColor = "green";
    btnEditar.style.padding = "10px";
    btnEditar.style.borderRadius = "10px";

    btnRemover.style.backgroundColor = "red";
    btnRemover.style.padding = "10px";
    btnRemover.style.borderRadius = "10px";
  });
}

function editarMusica(index) {
  const novaNome = prompt("Novo nome da música:", musicas[index].nome);
  const novoAutor = prompt("Novo autor da música:", musicas[index].autor);

  if (novaNome !== null && novoAutor !== null) {
    const nome = novaNome.trim();
    const autor = novoAutor.trim();
    if (nome && autor) {
      musicas[index] = { nome, autor };
      salvarLocalStorage();
      exibirMusicas();
    }
  }
}

function removerMusica(index) {
  musicas.splice(index, 1);
  salvarLocalStorage();
  exibirMusicas();
}

function limparTudo() {
  if (confirm("Tem certeza que deseja excluir todas as músicas?")) {
    musicas = [];
    salvarLocalStorage();
    exibirMusicas();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nomeMusica").value.trim();
  const autor = document.getElementById("autorMusica").value.trim();

  if (nome && autor) {
    musicas.push({ nome, autor });
    salvarLocalStorage();
    exibirMusicas();
    form.reset();
  }
});

window.onload = exibirMusicas;
