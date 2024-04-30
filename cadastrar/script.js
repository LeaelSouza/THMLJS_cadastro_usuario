const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('CPF');
const emailInput = document.getElementById('email');
const generoInput = document.getElementById('genero');
const senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

function CadastrarUsuarios(){
    const pessoa = {};

    const pessoasCadastradas = pegaPessoasCadastradas();

        pessoasCadastradas.push(pessoa);

        pessoa.Nome = nomeInput.value;
        pessoa.Nascimento = nascimentoInput.value;
        pessoa.cpf = cpfInput.value;
        pessoa.Email = emailInput.value;
        pessoa.Genero = generoInput.value;
        pessoa.Senha = senhaInput.value;

            localStorage.setItem("cadastroPessoas", JSON.stringify(pessoasCadastradas));
            mostraPessoa(pessoa);
                return false;
        }

            function pegaPessoasCadastradas(){

                let pessoasCadastradas = JSON.parse(localStorage.getItem("cadastroPessoas"));//coloca entre "" o nome da chave que você quer pegar
                
                    if(pessoasCadastradas === null){
                        pessoasCadastradas = [];
                    }
                
                    return pessoasCadastradas;
                }