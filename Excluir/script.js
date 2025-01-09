document.addEventListener("DOMContentLoaded", () => {
    const veiculosContainer = document.getElementById("veiculos-container");
    const veiculosSalvos = JSON.parse(localStorage.getItem("veiculos")) || [];

    // Função para renderizar a lista de veículos
    function renderVeiculos() {
        veiculosContainer.innerHTML = ""; // Limpa o container

        if (veiculosSalvos.length === 0) {
            veiculosContainer.innerHTML = `<p class="alert alert-warning text-center">Nenhum veículo encontrado para exclusão.</p>`;
            return;
        }

        // Itera pelos veículos e cria os cards
        veiculosSalvos.forEach((veiculo, index) => {
            const veiculoCard = document.createElement("div");
            veiculoCard.className = "col-md-4 mb-3";
            veiculoCard.innerHTML = `
                <div class="card">
                    <img src="${veiculo.imagem || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${veiculo.modelo}">
                    <div class="card-body">
                        <h5 class="card-title">${veiculo.modelo}</h5>
                        <p class="card-text">
                            <strong>Marca:</strong> ${veiculo.marca}<br>
                            <strong>Ano:</strong> ${veiculo.ano}<br>  
                            <strong>Cor:</strong> ${veiculo.cor}<br>
                            <strong>Quilometragem:</strong> ${veiculo.quilometragem}<br>
                            <strong>Portas:</strong> ${veiculo.portas}
                        </p>
                        <button class="btn btn-danger w-100" onclick="excluirVeiculo(${index})">Excluir</button>
                    </div>
                </div>
            `;
            veiculosContainer.appendChild(veiculoCard);
        });
    }

    // Função de exclusão de veículo
    window.excluirVeiculo = (index) => {
        const confirmacao = confirm("Tem certeza que deseja excluir este veículo?");
        if (confirmacao) {
            veiculosSalvos.splice(index, 1); // Remove o veículo pelo índice
            localStorage.setItem("veiculos", JSON.stringify(veiculosSalvos)); // Atualiza o localStorage
            renderVeiculos(); // Re-renderiza a lista atualizada

            // Feedback ao usuário
            alert("Veículo excluído com sucesso!");
        }
    };

    // Inicializa a renderização ao carregar a página
    renderVeiculos();
});