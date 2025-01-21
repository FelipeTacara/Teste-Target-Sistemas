const fs = require('fs'); // Módulo para trabalhar com arquivos

function calcularFaturamento(faturamentoMensal) {
    // Filtrar dias com faturamento maior que 0 (ignorar finais de semana/feriados)
    const valores = faturamentoMensal.filter(dia => dia.valor > 0).map(dia => dia.valor);

    // Verificar se há dados válidos
    if (valores.length === 0) {
        return {
            menor: null,
            maior: null,
            diasAcimaMedia: 0,
            mensagem: "Nenhum dia com faturamento válido."
        };
    }

    // Calcula o menor valor
    const menor = Math.min(...valores);

    // Calcula o maior valor
    const maior = Math.max(...valores);

    // Calcula a média mensal
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

    // Conta os dias com faturamento acima da média
    const diasAcimaMedia = valores.filter(val => val > media).length;

    return {
        menor,
        maior,
        diasAcimaMedia
    };
}

// Ler o arquivo JSON e processar os dados
fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    const faturamentoMensal = JSON.parse(data); // Parse do JSON
    const resultado = calcularFaturamento(faturamentoMensal);

    if (resultado.mensagem) {
        console.log(resultado.mensagem);
    } else {
        console.log(`Menor valor de faturamento: ${resultado.menor}`);
        console.log(`Maior valor de faturamento: ${resultado.maior}`);
        console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
    }
});
