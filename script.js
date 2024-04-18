const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('container');


// function CadastrarUsuarios(){
//     console.log(nomeInput.value);
//     console.log(nascimentoInput.value);
//     console.log(emailInput.value);
//     console.log(senhaInput.value);

//     const paragrafo = document.createElement('p');

//     //Nome
//     tabelaCadastroDiv.innerHTML += `<span><strong>Nome: </strong> ${nomeInput.value}&nbsp;</span>`;//&nbsp; espaçamento entre palavras

//     //Nascimento
//     tabelaCadastroDiv.innerHTML += `<span><strong>Data nascimento: </strong> ${nascimentoInput.value}&nbsp;</span>`;

//     //Email
//     tabelaCadastroDiv.innerHTML += `<span><strong>Email: </strong> ${emailInput.value}&nbsp;</span>`;

//     //Senha
//     tabelaCadastroDiv.innerHTML += `<span><strong>Senha: </strong> ${senhaInput.value}&nbsp;</span><br/>`;
// }

function CadastrarUsuarios(){

var container = document.getElementById("container");
container.innerHTML = [
  '<table>',
    '<thead>',
    '<tr>',
    '<th>Nome</th>',
    '<th>Data Nascimento</th>',
    '<th>Email</th>',
    '<th>Senha</th>',
    '</tr>',
    '</thead>',

    '<tbody>',
        '<tr>',
            tabelaCadastroDiv.innerHTML += `${nomeInput.value}`,
            '<td>1</td>',
        '</tr>',
            '<tr>',
                '<td>2</td>',
                '<td>data</td>',
                '<td>data</td>',
                '<td>data</td>',
            '</tr>',
                '<tr>',
                    '<td>3</td>',
                    '<td>data</td>',
                    '<td>data</td>',
                    '<td>data</td>',
                '</tr>',
    '</tbody>',
  '</table>'
].join("\n");


}

// const container = document.getElementById('container');
// constainer.innerHTML +=
//     `<table>,
//         <thead>,
//             <tr>,
//             <th>Nome</th>,
//             <th>Data de Nascimento</th>,
//             <th>Email</th>,
//             <th>Senha</th>,
//             </tr>,
//         </thead>,

//     <tbody>,
//         <tr>,
//         <td>1</td>,
//         <td>data</td>,
//         <td>data</td>,
//         <td>data</td>,
//         </tr>,
//             <tr>,
//             <td>2</td>,
//             <td>data</td>,
//             <td>data</td>,
//             <td>data</td>,
//             </tr>,
//                 <tr>,
//                 <td>3</td>,
//                 <td>data</td>,
//                 <td>data</td>,
//                 <td>data</td>,
//                 </tr>,
//     </tbody>,

//     </table>;`

