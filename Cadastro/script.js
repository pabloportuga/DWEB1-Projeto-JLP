document.getElementById("formCadastro").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Captura os valores preenchidos
    const veiculo = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        ano: document.getElementById("ano").value,
        cor: document.getElementById("cor").value,
        quilometragem: document.getElementById("quilometragem").value,
        portas: document.getElementById("portas").value,
        imagem: document.getElementById("imagem").value
    };

    // Validação de campos obrigatórios
    if (Object.values(veiculo).some(value => value === "")) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Chama a função de cadastro
    cadastro(veiculo);

    // Limpa os campos após o envio
    document.getElementById("formCadastro").reset();

    // Feedback ao usuário (opcional)
    alert("Veículo cadastrado com sucesso!");

    // Atualiza a lista de veículos cadastrados
    mostrarVeiculos();
});

// Função de cadastro
function cadastro(veiculo) {
    // Recupera veículos já cadastrados ou inicializa uma lista vazia
    const veiculosSalvos = JSON.parse(localStorage.getItem("veiculos")) || [];

    // Adiciona o novo veículo à lista
    veiculosSalvos.push(veiculo);

    // Salva no localStorage
    localStorage.setItem("veiculos", JSON.stringify(veiculosSalvos));
}

// Função para mostrar veículos cadastrados
function mostrarVeiculos() {
    const veiculosSalvos = JSON.parse(localStorage.getItem("veiculos")) || [];
    const listaVeiculos = document.getElementById("listaVeiculos");

    // Limpa a lista antes de atualizá-la
    listaVeiculos.innerHTML = "";

    // Adiciona cada veículo na lista
    veiculosSalvos.forEach((veiculo, index) => {
        const li = document.createElement("li");
        li.textContent = `${veiculo.marca} ${veiculo.modelo} (${veiculo.anoFabricacao})`;
        listaVeiculos.appendChild(li);
    });
}

// Chama a função para mostrar os veículos cadastrados quando a página carregar
window.onload = mostrarVeiculos;
