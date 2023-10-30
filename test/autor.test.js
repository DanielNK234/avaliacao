import Autor from '../autor';

describe('teste de autor', () => {
    it('deve criar autor', () =>{
        const nome = 'danilos';
        const nacionalidade = 'brasileira';

        const autor = new Autor(nome, nacionalidade);

        expect(autor.nome).toBe(nome);
        expect(autor.nacionalidade).toBe(nacionalidade);
    })
})