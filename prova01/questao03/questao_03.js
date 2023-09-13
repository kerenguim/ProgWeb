class Venda{
    Venda(id, quantidade, preco){
        id = this.id;
        quantidade = this.quantidade;
        preco = this.preco;
    }
    setId(id){
        id = this.id;
    }
    setQuantidade(quantidade){
        quantidade = this.quantidade;
    }
    setPreco(preco){
        preco = this.preco;
    }
    getId(){
        return id;
    }
    getQuantidade(){
        return quantidade;
    }
    getPreco(){
        return preco;
    }
    getValorTotal(){
        return this.getQuantidade * this.getPreco;
    }
}

console.log(Venda(1,2,2));
