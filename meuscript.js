/*EX3*/
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

  /*EX4*/

  function intercalarPalavras() {

    const palavra1 = document.getElementById('palavra1').value;
    const palavra2 = document.getElementById('palavra2').value;
  
  
    let intercalada = '';
    const tamanhoMaximo = Math.max(palavra1.length, palavra2.length);
    for (let i = 0; i < tamanhoMaximo; i++) {
      if (i < palavra1.length) {
        intercalada += palavra1[i];
      }
      if (i < palavra2.length) {
        intercalada += palavra2[i];
      }
    }
  
    document.getElementById('resultado').value = intercalada;
  }
  

  /*EX5*/

var banners = ["Icones/feliz1.png", "Icones/feliz2.png", "Icones/feliz3.png"];
var bannerAtual = 0;
var intervalo;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % banners.length;
  document.getElementById('imgBanner').src = banners[bannerAtual];
}

function iniciarRotacao() {
  intervalo = setInterval(trocaBanner, 1000);
}

function pausarRotacao() {
  clearInterval(intervalo);
}
  
iniciarRotacao();


/*EX6*/

function buscarCEP() {
  var cep = document.getElementById('cep').value;
  if (cep.length !== 8 || isNaN(cep)) {
      alert('CEP inválido');
      return;
  }
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          mostrarResultado(data);
      }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

function mostrarResultado(data) {
  var resultDiv = document.getElementById('result');
  var html = '';
  html += '<p><strong>CEP:</strong> ' + data.cep + '</p>';
  html += '<p><strong>Logradouro:</strong> ' + data.logradouro + '</p>';
  html += '<p><strong>Bairro:</strong> ' + data.bairro + '</p>';
  html += '<p><strong>Cidade:</strong> ' + data.localidade + '</p>';
  html += '<p><strong>Estado:</strong> ' + data.uf + '</p>';
  resultDiv.innerHTML = html;
}