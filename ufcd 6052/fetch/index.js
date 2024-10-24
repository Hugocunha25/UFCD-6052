fetch("https://www.sapo.pt")
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    
    return response.json();  // Para retornar JSON, por exemplo
  })
  .then(data => {
    console.log(data);  // Trabalhe com os dados recebidos
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });

