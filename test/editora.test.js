import Editora from '../editora'

describe('teste da editora', () =>{
 it('deve criar editora ', () => {
    const nome = 'editorax';
    const cidade = 'jaraguá do sul';
    const email = 'editora@gmail.com';

    const editora = new Editora(nome, cidade, email);

    expect(editora.nome).toBe(nome);
    expect(editora.cidade).toBe(cidade);
    expect(editora.email).toBe(email);
 });
})