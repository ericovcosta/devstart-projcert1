class NotasAtletas{
    constructor(listaAtletas){
        this.listaAtletas = listaAtletas;
    }
    ordenaNotas(){
        this.listaAtletas.forEach(atleta => atleta.notas.sort());
    }
    removeMaiorEMenorNota(notas){
        notas.sort((a, b) => b - a);
        return notas.slice(1,4);
    }
    mediaDasNotas(atleta){
            let notasValidas = this.removeMaiorEMenorNota(atleta.notas);
            return notasValidas.reduce((a, b) => a + b)/(notasValidas.length);
    }
    mostraAtletas(){
        this.ordenaNotas();
        this.listaAtletas.forEach(atleta => {
            console.log(`
            Atleta: ${atleta.nome}
            Notas Obtidas: ${atleta.notas}
            Média Válida: ${this.mediaDasNotas(atleta)}`);
        });
    }
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
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

let notasAtletas = new NotasAtletas(atletas);
notasAtletas.mostraAtletas();