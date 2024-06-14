function calcularMediaValida(notas) {
    let notasOrdenadas = notas.sort(function(a, b) {
        return a - b;
    });

    let notasValidas = notasOrdenadas.slice(1, 4);

    let soma = 0
    notasValidas.forEach(function(nota) {
        return soma += nota;
    }, 0);
    let media = soma / notasValidas.length;

    return media;
}

function apresentarResultados(atletas) {
    for (let i = 0; i < atletas.length; i++) {;
        console.log("Atleta: " + atletas[i].nome);
        console.log("Notas Obtidas: " + atletas[i].notas.join(", "));
        console.log("Média Válida: " + calcularMediaValida(atletas[i].notas));
        console.log("");
    }
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

apresentarResultados(atletas);