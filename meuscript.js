function inverterNomes() {
    const form = document.getElementById('form');
    const nomes = [];
  
    for (let i = 0; i < form.length - 1; i++) {
      const nome = form.elements[i].value;
      nomes.push(nome);
    }
  
    const nomesInvertidos = nomes.reverse();
  
    for (let i = 0; i < form.length - 1; i++) {
      form.elements[i].value = nomesInvertidos[i];
    }
  
    const divNomesInvertidos = document.getElementById('nomesInvertidos');
    divNomesInvertidos.innerHTML = nomesInvertidos.join(', ');
  }