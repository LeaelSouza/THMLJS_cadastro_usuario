const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('CPF');
const emailInput = document.getElementById('email');
const generoInput = document.getElementById('genero');
const senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

let contador = 0;
    const pessoas = pegaPessoasCadastradas();
            for(const pessoa of pessoas) {
                mostraPessoa(pessoa);
                contador = contador++;
            }

        // const pessoas = pegaPessoasCadastradas();
        //     for (let index = 0; index < pessoas.length; index++) {
        //         const pessoa = pessoas[index];
        //         mostraPessoa(pessoa, index); // Passando o índice para a função mostraPessoa
        // }



    //             function mostraPessoa(i){

    //                 tabelaCadastroDiv.innerHTML +=`<br/><span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Nome: </strong> ${i.Nome}</span>`;
    //                 tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Data nascimento: </strong> ${i.Nascimento}</span>`;
    //                 tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>CPF: </strong> ${i.cpf}</span>`;
    //                 tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Email: </strong> ${i.Email}</span>`;
    //                 tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Genero: </strong> ${i.Genero}</span>`;
    //                 tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Senha: </strong> ${i.Senha}</span><br/>`;

    //                     tabelaCadastroDiv.innerHTML +=`<p></p>`
    //             }


                function mostraPessoa(i, contador){

                    let resultado = pegaPessoasCadastradas(contador);
                    console.log(resultado);

                    let rowCase = resultado % 2 == 0 ? 'par' : 'impar';

                    tabelaCadastroDiv.innerHTML +=`<br/>
                        <div class="linha ${rowCase}">
                            <span><strong>Nome: </strong> ${i.Nome}</span>
                            <span><strong>Nascimento: </strong> ${i.Nascimento}</span>
                            <span><strong>CPF: </strong> ${i.cpf}</span>
                            <span><strong>Email: </strong> ${i.Email}</span>
                            <span><strong>Gênero: </strong> ${i.Genero}</span>
                            <span><strong>Senha: </strong> ${i.Senha}</span>
                            
                        </div><br/>`;

                    // tabelaCadastroDiv.innerHTML +=`<br/><span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Nome: </strong> ${i.Nome}</span>`;
                    // tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Data nascimento: </strong> ${i.Nascimento}</span>`;
                    // tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>CPF: </strong> ${i.cpf}</span>`;
                    // tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Email: </strong> ${i.Email}</span>`;
                    // tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Genero: </strong> ${i.Genero}</span>`;
                    // tabelaCadastroDiv.innerHTML += `<span style="color: black; background-color: white; border: 1px dashed black; display: inline-block; padding: 0px 10px;"><strong>Senha: </strong> ${i.Senha}</span><br/>`;

                    //     tabelaCadastroDiv.innerHTML +=`<p></p>`
                }
                    
                    function pegaPessoasCadastradas(){
                        let pessoasCadastradas = JSON.parse(localStorage.getItem("cadastroPessoas"));
                            if(pessoasCadastradas === null){
                                pessoasCadastradas = [];
                            }
                        
                            return pessoasCadastradas;
                    }