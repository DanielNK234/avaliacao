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

    it('deve calcular o total corretamente quando desconto e valor são informados', () => {
        const livro = new Livro();
        livro.adicionaValor(100);
        livro.adicionaDesconto(10);
        livro.calculaTotal();
        expect(livro.total).toBe(90);
      });
    
      it('deve adicionar autor corretamente', () => {
        const livro = new Livro();
        livro.adicionaAutor('Autor 1');
        livro.adicionaAutor('Autor 2');
        expect(livro.autor).toEqual(['Autor 1', 'Autor 2']);
      });
    
      it('deve adicionar editora corretamente', () => {
        const livro = new Livro();
        livro.adicionaEditora('Editora 1');
        livro.adicionaEditora('Editora 2');
        expect(livro.editora).toEqual(['Editora 1', 'Editora 2']);
      });

      it('deve adicionar o nome corretamente', () => {
        const livro = new Livro();
        livro.adicionaNome('Nome do Livro');
        expect(livro.nome).toBe('Nome do Livro');
      });
    
      it('deve adicionar o valor corretamente', () => {
        const livro = new Livro();
        livro.adicionaValor(100);
        expect(livro.valor).toBe(100);
      });
})