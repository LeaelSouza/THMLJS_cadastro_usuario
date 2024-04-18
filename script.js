const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');


function CadastrarUsuarios(){
    nomeInput.value;
    nascimentoInput.value;
    emailInput.value;
    senhaInput.value;

    //Nome
    tabelaCadastroDiv.innerHTML +=`<span style="color: red; background-color: green; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Nome: </strong> ${nomeInput.value}</span>`;//&nbsp; espaçamento entre palavras

    //Nascimento
    tabelaCadastroDiv.innerHTML += `<span style="color: white; background-color: black; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Data nascimento: </strong> ${nascimentoInput.value}</span>`;

    //Email
    tabelaCadastroDiv.innerHTML += `<span style="color: yellow; background-color: purple; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Email: </strong> ${emailInput.value}</span>`;

    //Senha
    tabelaCadastroDiv.innerHTML += `<span style="color: blue; background-color: gray; border: 3px solid black; display: inline-block; padding: 0px 10px;"><strong>Senha: </strong> ${senhaInput.value}</span><br/>`;

    nomeInput.value = "";
    nascimentoInput.value = "";
    emailInput.value = "";
    senhaInput.value = "";
    
}