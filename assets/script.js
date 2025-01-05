console.log("Teste")


fetch('https://my-json-server.typicode.com/joaremio/veiculos-api/veiculos')
    .then(response => response.json())
    .then(json => {
    	const div = document.getElementById("conteudo");
    	div.innerText = JSON.stringify(json);
   })