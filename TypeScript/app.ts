class Produto
{
    codigo: String;
    descricao:String;
    preco : number;

    constructor(_codigo: string, _descricao: string, _preco: number)
    {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }

    getDados()
    {
        return "Produto de codigo "+ this.codigo +":"+this.descricao+" - R$:"+ this.preco
    }
}