const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');


    const pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));

    for(let index =0; index < pessoas.length; index++){
        mostraPessoa(pessoas[index]);
    }

function CadastrarUsuarios(){

    //Acessa o valor do input
    nomeInput.value;
    nascimentoInput.value;
    emailInput.value;
    senhaInput.value;

        //Criando objeto de pessoa (JSON)
        const pessoa = {};
        pessoa.nome = nomeInput.value;
        pessoa.nascimento = nascimentoInput.value;
        pessoa.email = emailInput.value;
        pessoa.senha = senhaInput.value;
        console.log(pessoa);

            let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
                if(!pessoasCadastradas){//Se vier nulo atribui um valor vazio para que não de erro
                    pessoasCadastradas = [];
                }
            pessoasCadastradas.push(pessoa);

            localStorage.setItem('pessoasCadastro', JSON.stringify(pessoasCadastradas));//JSON.stringify() - Pega o objeto e transforma em texto
            mostraPessoa(pessoa);
        
        //Para zerar os dados que foram preenchidos no input
        
        return false;
}

function mostraPessoa(i){
    const paragrafo = document.createElement('p');
    //Nome
    tabelaCadastroDiv.innerHTML +=`<span style="color: red; background-color: green; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Nome: </strong> ${i.nome}</span>`;//&nbsp; espaçamento entre palavras

    //Nascimento
    tabelaCadastroDiv.innerHTML += `<span style="color: white; background-color: black; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Data nascimento: </strong> ${i.nascimento}</span>`;

    //Email
    tabelaCadastroDiv.innerHTML += `<span style="color: yellow; background-color: purple; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Email: </strong> ${i.email}</span>`;

    //Senha
    tabelaCadastroDiv.innerHTML += `<span style="color: blue; background-color: gray; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Senha: </strong> ${i.senha}</span><br/>`;

        //Adicionando o paragrafo. Adicionando conteúdo dinâmico ao elemento HTML
        tabelaCadastroDiv.append(paragrafo);
}