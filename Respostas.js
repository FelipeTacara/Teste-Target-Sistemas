
//Avaliação 1
let INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA); // 
Resultado: 91

//Avaliação 2
function isFibonacci(num) {
  // Verifica se o número é negativo ou não é um inteiro
  if (num < 0 || !Number.isInteger(num)) {
      return false; // Números negativos ou não inteiros não pertencem à sequência
  }

  let a = 0, b = 1, temp;

  // Verifica diretamente se o número é 0 ou 1
  if (num === 0 || num === 1) {
      return true;
  }

  // Continua gerando a sequência enquanto 'b' for menor ou igual ao número informado
  while (b <= num) {
      temp = b;
      b = a + b;
      a = temp;

      if (b === num) {
          return true;
      }
  }

  return false; // Retorna 'false' caso o número não seja encontrado na sequência
}

// Função que usa isFibonacci e retorna a mensagem
function checkFibonacci(num) {
  if (num < 0 || !Number.isInteger(num)) {
      return `O número ${num} não é válido para a sequência de Fibonacci. Use um número inteiro não negativo.`;
  }
  return `O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`;
}

//Avaliação 3
//Executar calcular_faturamento.js
//node calcular_faturamento.js

//Avaliação 4
function calcularPercentual() {
  // Dados fixos do faturamento mensal por estado
  const faturamentoEstados = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
  };

  // Calcula o faturamento total
  const totalFaturamento = faturamentoEstados.SP + faturamentoEstados.RJ + faturamentoEstados.MG + faturamentoEstados.ES + faturamentoEstados.Outros;

  // Calcula o percentual de cada estado
  const percentualPorEstado = {
      SP: ((faturamentoEstados.SP / totalFaturamento) * 100).toFixed(2),
      RJ: ((faturamentoEstados.RJ / totalFaturamento) * 100).toFixed(2),
      MG: ((faturamentoEstados.MG / totalFaturamento) * 100).toFixed(2),
      ES: ((faturamentoEstados.ES / totalFaturamento) * 100).toFixed(2),
      Outros: ((faturamentoEstados.Outros / totalFaturamento) * 100).toFixed(2)
  };

  // Exibe os percentuais
  console.log(`Percentual de SP: ${percentualPorEstado.SP}%`);
  console.log(`Percentual de RJ: ${percentualPorEstado.RJ}%`);
  console.log(`Percentual de MG: ${percentualPorEstado.MG}%`);
  console.log(`Percentual de ES: ${percentualPorEstado.ES}%`);
  console.log(`Percentual de Outros: ${percentualPorEstado.Outros}%`);
}

//Avaliação 5
function inverterString() {
  // Solicitar ao usuário que insira a string
  const inputString = prompt("Digite a string para inverter:");
  let resultado = '';

  // Percorrer a string de trás para frente
  for (let i = inputString.length - 1; i >= 0; i--) {
      resultado += inputString[i];
  }

  // Exibir o resultado
  alert(`String invertida: ${resultado}`);
}

inverterString();
