const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('CPF');
const emailInput = document.getElementById('email');
const generoInput = document.getElemntById('genero');
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
    cpfInput.value;
    emailInput.value;
    generoInput.value;
    senhaInput.value;

        //Criando objeto de pessoa (JSON)
        const pessoa = {};
        pessoa.nome = nomeInput.value;
        pessoa.nascimento = nascimentoInput.value;
        pessoa.CPF = cpfInput.value;
        pessoa.email = emailInput.value;
        pessoa.genero = generoInput.value;
        pessoa.senha = senhaInput.value;
        console.log(pessoa);

            let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
                if(!pessoasCadastradas){//Se vier nulo atribui um valor vazio para que não de erro
                    pessoasCadastradas = [];
                }
            pessoasCadastradas.push(pessoa);

            localStorage.setItem('pessoasCadastro', JSON.stringify(pessoasCadastradas));//JSON.stringify() - Pega o objeto e transforma em texto
            mostraPessoa(pessoa);

                //Zerando os campos após cadastrar
                nomeInput.value = "";
                nascimentoInput.value = "";
                cpfInput.value = "";
                emailInput.value ="";
                generoInput.value = "";
                senhaInput.value = "";
        
        return false;
}

function mostraPessoa(i){
    const paragrafo = document.createElement('p');
    //Nome
    tabelaCadastroDiv.innerHTML +=`<span style="color: red; background-color: green; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Nome: </strong> ${i.nome}</span>`;//&nbsp; espaçamento entre palavras

    //Nascimento
    tabelaCadastroDiv.innerHTML += `<span style="color: white; background-color: black; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Data nascimento: </strong> ${i.nascimento}</span>`;

    //CPF
    tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: yellow; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>CPF: </strong> ${i.CPF}</span>`;

    //Email
    tabelaCadastroDiv.innerHTML += `<span style="color: yellow; background-color: purple; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Email: </strong> ${i.email}</span>`;

    //Genero
    tabelaCadastroDiv.innerHTML += `<span style="color: blue; background-color: white; border: 3px solid black; display: inline-block; padding: 0px 10px; <strong>Genero: </strong> ${i.genero}<>">`

    //Senha
    tabelaCadastroDiv.innerHTML += `<span style="color: blue; background-color: gray; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Senha: </strong> ${i.senha}</span><br/>`;

        //Adicionando o paragrafo. Adicionando conteúdo dinâmico ao elemento HTML
        tabelaCadastroDiv.append(paragrafo);
}