import Livro from '../livro'

describe('teste de livro', () => {
    it('verificar se todas as variaveis são nulas',()=>{
        const livro = new Livro;

        expect(livro.nome).toBeNull();
        expect(livro.valor).toBeNull();
        expect(livro.editora).toEqual([]);
        expect(livro.autor).toEqual([])
        expect(livro.desconto).toBeNull();
        expect(livro.total).toBeNull();
    });

    it('deve lançar um erro se desconto ou valor não forem informados ao calcular o total', () => {
        const livro = new Livro;

        expect(() => livro.calculaTotal()).toThrow('Valor de desconto não informado');
        livro.adicionaDesconto(10); 
        expect(() => livro.calculaTotal()).toThrow('Valor do produto não informado');
    });
})