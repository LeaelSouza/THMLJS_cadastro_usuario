                    //Deletar usuários
                    function deletarUsuario(nome){
                        let usuario = pegaPessoasCadastradas();

                        //Para achar o indice do usuário
                        const usuarioDel = usuario.findIndex(usuarios => usuarios.nome === nome);

                        if(usuarioDel  !== -1){
                            usuario.splice(index, 1);

                            localStorage.setItem("cadastroPessoas", JSON.stringify(usuario));

                            console.log("Usuário deletado");
                        }else{
                            console.log("Usuário não localizado");
                        }
                    }