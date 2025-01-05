fetch('https://my-json-server.typicode.com/Joaremio/veiculos-api/veiculos')
  .then(response => response.json())
  .then(json => {
    localStorage.setItem("veiculos",JSON.stringify(json));
    const carouselInner = document.querySelector('.carousel-inner'); // Seleciona o contêiner do carrossel
    const veiculos = json;
    veiculos.forEach((veiculo, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (index === 0) {
        carouselItem.classList.add('active'); // Adiciona 'active' apenas ao primeiro item
      }

      // Cria o cartão e insere dentro do item do carrossel
      const cardHTML = criaCartao(veiculo);
      carouselItem.innerHTML = cardHTML;

      // Adiciona o item do carrossel ao contêiner
      carouselInner.appendChild(carouselItem);
    });
  })
  .catch(error=>{
    console.error("Falha ao buscar dados");
  })

function criaCartao(veiculo){
  return `
  <div class="card mx-auto" style="width: 40rem;">
  <img src="${veiculo.imagem}" class="card-img-top" alt="${veiculo.modelo}">
  <div class="card-body">
    <h5 class="card-title">${veiculo.modelo}</h5>
    <p class="card-text">Um veículo da marca ${veiculo.marca}, fabricado em ${veiculo.anoFabricacao}</p>
  </div>
  <ul class="list-group list-group-flush style= "display: flex;">
    <li class="list-group-item">COR: ${veiculo.cor},  TIPO: ${veiculo.tipo}</li>
    <li class="list-group-item">Quilometragem: ${veiculo.quilometragem}, Numero de portas:  ${veiculo.numeroPortas}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`;
}
