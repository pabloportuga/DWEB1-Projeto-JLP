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
