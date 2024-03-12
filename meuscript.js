function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue);
    document.getElementById('display').value = result;
}
function inverterNomes() {
    var nomes = [];
    nomes.push(document.getElementById("nome1").value);
    nomes.push(document.getElementById("nome2").value);
    nomes.push(document.getElementById("nome3").value);
    nomes.push(document.getElementById("nome4").value);
    nomes.push(document.getElementById("nome5").value);
  
    nomes.reverse();
  
    document.getElementById("nome1").value = nomes[0];
    document.getElementById("nome2").value = nomes[1];
    document.getElementById("nome3").value = nomes[2];
    document.getElementById("nome4").value = nomes[3];
    document.getElementById("nome5").value = nomes[4];
  }
  
  document.getElementById("inverterButton").addEventListener("click", inverterNomes);
  