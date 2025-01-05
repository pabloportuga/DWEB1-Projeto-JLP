document.getElementById("formcadastro").addEventListener("submit", (event) => {
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

    // Chama a função de cadastro
    cadastro(veiculo);

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

    // Verifica o localStorage (opcional)
    console.log(JSON.parse(localStorage.getItem("veiculos")));
}
