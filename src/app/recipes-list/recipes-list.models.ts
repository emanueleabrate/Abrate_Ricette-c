export class IngredientiModel{
    public nome:string;
    public qta: number;
    public udm: string

    constructor(nome:string, qta:number, udm:string){
        this.nome = nome;
        this.qta = qta;
        this.udm = udm
    }
}

export class RecipesListModel {

    public id:string;
    public nomeRicetta:string;
    public descrizione:string;
    public ingredienti:IngredientiModel[];
    public istruzioni:string;
    public tempo:string;
    public difficolta:string;
    public immagine:string;
    

    constructor(id:string, nomeRicetta:string, descrizione:string, ingredienti:IngredientiModel[], istruzioni:string, 
        tempo:string, difficolta:string, immagine:string){
        this.id = id;
        this.nomeRicetta = nomeRicetta;
        this.descrizione = descrizione;
        this.ingredienti = ingredienti;
        this.istruzioni = istruzioni;
        this.tempo = tempo;
        this.difficolta = difficolta;
        this.immagine = immagine;
    }
}