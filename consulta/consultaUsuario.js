const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('CPF');
const emailInput = document.getElementById('email');
const generoInput = document.getElementById('genero');
const senhaInput = document.getElementById('senha');

const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

let pessoas = pegaPessoasCadastradas();
mostraPessoas();

function mostraPessoas() {
    tabelaCadastroDiv.innerHTML = '';
    pessoas.forEach((pessoa) => {
        mostraPessoa(pessoa);
    });
}

function mostraPessoa(pessoa, index) {
    tabelaCadastroDiv.innerHTML += `
        <br/>
        <div class="linha ${index % 2 === 0 ? 'par' : 'impar'}">
            <span><strong>Nome: </strong> <span id="nome_${pessoa.Nome}">${pessoa.Nome}</span></span>
            <span><strong>Nascimento: </strong> <span id="nascimento_${pessoa.Nome}">${pessoa.Nascimento}</span></span>
            <span><strong>CPF: </strong> <span id="cpf_${pessoa.Nome}">${pessoa.cpf}</span></span>
            <span><strong>Email: </strong> <span id="email_${pessoa.Nome}">${pessoa.Email}</span></span>
            <span><strong>Gênero: </strong> <span id="genero_${pessoa.Nome}">${pessoa.Genero}</span></span>
            <span><strong>Senha: </strong> <span id="senha_${pessoa.Nome}">${pessoa.Senha}</span></span>
        </div>
        <button onclick="window.deletarUsuario('${pessoa.Nome}')">Deletar</button>
        <br/><br/>`;
}

window.deletarUsuario = function(nome) {
    pessoas = pessoas.filter(pessoa => pessoa.Nome !== nome);
    atualizarLocalStorage();
    mostraPessoas();
};

function pegaPessoasCadastradas() {
    let pessoasCadastradas = JSON.parse(localStorage.getItem("cadastroPessoas"));
    return pessoasCadastradas || [];
}

function atualizarLocalStorage() {
    localStorage.setItem("cadastroPessoas", JSON.stringify(pessoas));
}
