function Tabela() {
    let arrayDaTabela = [];
    for (let i = 0; i <= 10; i++) {  //gera as linhas da tabela
        arrayDaTabela[i] = [];
        for(let j = 0; j <= 10; j++){ // gera as colunas 
            arrayDaTabela[i][j]= i*j; // multiplica a linha pela coluna
        }
    }
    console.table(arrayDaTabela) // resultado final da tabela
}

function TabelaComEntrada(n) {
    let arrayDaTabela = [];
    for (let i = 0; i <= n; i++) {  //gera as linhas da tabela
        arrayDaTabela[i] = [];
        for(let j = 0; j <= n; j++){ // gera as colunas 
            arrayDaTabela[i][j]= i*j; // multiplica a linha pela coluna
        }
    }
    console.table(arrayDaTabela) // resultado final da tabela
}