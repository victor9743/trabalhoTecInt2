//máscaras
$(document).ready(function ($) {
    $("#cpf").mask('000.000.000-00');
    $("#cep").mask("00000-000")
    $("#telefone").mask("(00) 0000-0000")
    $("#celular").mask("(00) 9 0000-0000")
})

$(document).ready(function ($) {
    // passo 1 esconder todos os passos e mostrar o primeiro
    // esconde todos os passos
    $(".step").hide();


    // mostra o primeiro passo
    $(".step").first().show();

    var passoExibido = function () {
        var index = parseInt($(".step:visible").index());
        if (index == 0) {
            $("#anterior").hide();
            $("#enviar").hide();
            $("#progress").html("25%");
            $(".progress-bar").css("width", "25%");
        } else if (index == 1) {
            $("#enviar").hide();
            $("#anterior").show();
            $("#progress").html("50%");
            $(".progress-bar").css("width", "50%");
        } else if (index == 2) {
            $("#anterior").show();
            $("#enviar").hide();
            $("#avancar").show();
            $("#progress").html("75%");
            $(".progress-bar").css("width", "75%");
        } else if (index == 3) {
            $("#avancar").hide();
            $("#enviar").show();
            $("#anterior").show();
            $("#progress").html("100%");
            $(".progress-bar").css("width", "100%");
        }
        $("#passo").html(index + 1);
    }
    passoExibido();

    // avanca para o proximo passo
    $("#avancar").on('click', function (e) {
        e.preventDefault();
        var index = parseInt($(".step:visible").index());
        if (index == 0) {
            var valid1 = 0;

            if ($("#cpf").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#cpf").addClass("is-invalid");
            }

            if ($("#nome").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#nome").addClass("is-invalid");
            }

            if ($("#dataNascimento").val() != "" && $("#dataNascimento").val() < '2022-09-23') {
                valid1 = valid1 + 1;
            } else {
                $("#dataNascimento").addClass("is-invalid")
            }

            if (valid1 == 3) {
                $(".step:visible").hide().next().show();
                passoExibido();
            }

        } else if (index == 1) {
            var valid1 = 0;

            if ($("#cep").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#cep").addClass("is-invalid");

            }

            if ($("#logradouro").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#logradouro").addClass("is-invalid")

            }

            if ($("#numeroCasa").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#numeroCasa").addClass("is-invalid")

            }

            if ($("#bairro").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#bairro").addClass("is-invalid")
            }

            if ($("#complemento").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#complemento").addClass("is-invalid")
            }

            if ($("#municipio").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#municipio").addClass("is-invalid")
            }

            if ($("#UF").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#UF").addClass("is-invalid")

            }
            if (valid1 == 7) {
                $(".step:visible").hide().next().show();
                passoExibido();
            }

        } else if (index == 2) {
            var valid1 = 0;

            if ($("#email").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#email").addClass("is-invalid");

            }

            if ($("#confir-email").val() != "" && $("#confir-email").val() == $("#email").val()) {
                valid1 = valid1 + 1;
            } else {
                $("#confir-email").addClass("is-invalid")
            }

            if ($("#senha").val() != "") {
                valid1 = valid1 + 1;
            } else {
                $("#senha").addClass("is-invalid")
            }

            if ($("#confir-senha").val() != "" && $("#confir-senha").val() == $("#senha").val()) {
                valid1 = valid1 + 1;
            } else {
                $("#confir-senha").addClass("is-invalid")
            }

            if ($("#telefone").val() != "" &&  $("#celular").val() != "") {
                valid1 = valid1 + 1;
                $("#telefone").addClass("is-valid")
                $("#celular").addClass("is-valid")
            } else {
                $("#telefone").addClass("is-invalid")
                $("#celular").addClass("is-invalid")
                $("#telefoneMsg").html("Telefone e Celular são Obrigatórios")
            }

            if (valid1 == 5) {
                $(".step:visible").hide().next().show();
                passoExibido();
            }

        }


    });

    //retrocede para o passo anterior
    $("#anterior").on('click', function () {
        $(".step:visible").hide().prev().show();
        passoExibido();
    });


    // muda a cor dos campos inputs
    $("#cpf").blur(function () {
        if (validarCPF(this.value)) {
            $("#cpf").removeClass("is-invalid");
            $("#cpf").addClass("is-valid");
            $("#cpfMsg").css("display", "none");
        } else {
            $("#cpfMsg").css("display", "block");
            $("#cpfMsg").html("Cpf Inválido");
            $("#cpf").addClass("is-invalid");
            $("#cpf").removeClass("is-valid");
            $("#cpf").focus();
        }
    });

    $("#nome").blur(function () {
        if (this.value != "") {
            $("#nome").removeClass("is-invalid");
            $("#nome").addClass("is-valid");
            $("#nomeMsg").css("display", "none");
        } else {
            $("#nomeMsg").css("display", "block");
            $("#nomeMsg").html("Campo Obrigatório");
            $("#nome").addClass("is-invalid");
            $("#nome").removeClass("is-valid");
        }
    });

    $("#dataNascimento").blur(function () {
        var dataInformada = $("#dataNascimento").val()
        dataInformada.replace(/\//g, "-");
        var dataInformada = dataInformada.split("-");
        var dia = dataInformada[2];
        var mes = dataInformada[1];
        var ano = dataInformada[0];
        var hoje = new Date();
        var d1 = hoje.getDate();
        var m1 = hoje.getMonth() + 1;
        var a1 = hoje.getFullYear();
        var d1 = new Date(a1, m1, d1);
        var d2 = new Date(ano, mes, dia);
        var diff = d2.getTime() - d1.getTime();
        if (this.value != "" && diff < 0) {
            $("#dataNascimento").removeClass("is-invalid");
            $("#dataNascimento").addClass("is-valid");
            $("#dataMsg").css("display", "none");
        } else {
            $("#dataMsg").css("display", "block");
            $("#dataMsg").html("Data Inválida");
            $("#dataNascimento").addClass("is-invalid");
            $("#dataNascimento").removeClass("is-valid");
        }

    });

    //Exibir idade do usuário
    $("#dataNascimento").change(function () {
        var dataInformada = $("#dataNascimento").val()
        var converteAno = parseInt(dataInformada)
        var anoAtual = new Date();
        var idade = anoAtual.getFullYear() - converteAno
        if (idade <= 0) {
            $("#valorData").html('0')
        } else {
            $("#valorData").html(idade)
        }
    });

    // Validação do formulário   
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    $("#cep").on('change', function (e) {

        function limpa_formulário_cep() {
            // Limpa valores do formulário de cep.
            $("#cep").val("");
            $("#logradouro").val("");
            $("#localidade").val("");
            $("#uf").val("");
            $("#numeroCasa").val("");
            $("#complemento").val("");
        }

        var cep = $("#cep").val();
        var url = `https://viacep.com.br/ws/${cep}/json/`;


        fetch(url).then(function (response) {
            response.json().then(function (data) {
                $("#logradouro").val("");
                $("#bairro").val("");
                $("#municipio").val("");
                $("#UF").val("").html();

                if (!("erro" in data)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#logradouro").val(data.logradouro).addClass("is-valid");
                    $("#bairro").val(data.bairro).addClass("is-valid");
                    $("#municipio").val(data.localidade).addClass("is-valid");
                    $("#UF").val(data.uf).change().addClass("is-valid");
                    $("#cep").val(data.cep).addClass("is-valid");
                } else {
                    limpa_formulário_cep();
                    $("#cep").val(data.cep).addClass("is-invalid")
                    $("#cepMsg").html("Cep Não Encontrado");
                    $("#cep").addClass("is-invalid");
                }
            })

        });

    });

    //Validações apartir da index1
    $("#cep").blur(function () {
        if (this.value != "") {
            $("#cep").removeClass("is-invalid");
            $("#cep").addClass("is-valid");
            $("#cepMsg").css("display", "none");
        } else {
            $("#cep").css("display", "block");
            $("#cepMsg").html("Campo Obrigatório");
            $("#cep").addClass("is-invalid");
            $("#cep").removeClass("is-valid");
        }

        $("#logradouro").blur(function () {
            if (this.value != "") {
                $("#logradouro").removeClass("is-invalid");
                $("#logradouro").addClass("is-valid");
                $("#logradouroMsg").css("display", "none");

            } else {
                $("#logradouro").css("display", "block");
                $("#logradouroMsg").html("Campo Obrigatório");
                $("#logradouro").addClass("is-invalid");
                $("#logradouro").removeClass("is-valid");
            }
        });

        $("#bairro").blur(function () {
            if (this.value != "") {
                $("#bairro").removeClass("is-invalid");
                $("#bairro").addClass("is-valid");
                $("#bairroMsg").css("display", "none");
            } else {
                $("#bairro").css("display", "block");
                $("#bairroMsg").html("Campo Obrigatório");
                $("#bairro").addClass("is-invalid");
                $("#bairro").removeClass("is-valid");
            }
        });

        $("#municipio").blur(function () {
            if (this.value != "") {
                $("#municipio").removeClass("is-invalid");
                $("#municipio").addClass("is-valid");
                $("#municipioMsg").css("display", "none");
            } else {
                $("#municipio").css("display", "block");
                $("#municipioMsg").html("Campo Obrigatório");
                $("#municipio").addClass("is-invalid");
                $("#municipio").removeClass("is-valid");
            }
        });

        $("#UF").blur(function () {
            if (this.value != "") {
                $("#UF").removeClass("is-invalid");
                $("#UF").addClass("is-valid");
                $("#UFMsg").css("display", "none");
            } else {
                $("#UF").css("display", "block");
                $("#UFMsg").html("Campo Obrigatório");
                $("#UF").addClass("is-invalid");
                $("#UF").removeClass("is-valid");
            }
        });

        $("#numeroCasa").blur(function () {
            if (this.value != "") {
                $("#numeroCasa").removeClass("is-invalid");
                $("#numeroCasa").addClass("is-valid");
                $("#numeroCasaMsg").css("display", "none");
            } else {
                $("#numeroCasa").css("display", "block");
                $("#numeroCasaMsg").html("Campo Obrigatório");
                $("#numeroCasa").addClass("is-invalid");
                $("#numeroCasa").removeClass("is-valid");
            }
        });

        $("#complemento").blur(function () {
            if (this.value != "") {
                $("#complemento").removeClass("is-invalid");
                $("#complemento").addClass("is-valid");
                $("#complementoMsg").css("display", "none");
            } else {
                $("#complemento").css("display", "block");
                $("#complementoMsg").html("Campo Obrigatório");
                $("#complemento").addClass("is-invalid");
                $("#complemento").removeClass("is-valid");
            }
        });

        // Validações apartir da index 2
        $("#email").on('keyup', function () {
            if (validarEmail(email.value) !== true) {
                $("#email").css("display", "block");
                $("#emailMsg").html("O Formato do email deve ser abc@com")
                $("#email").addClass("is-invalid");
                $("#emial").removeClass("is-valid");
            } else {
                $("#email").removeClass("is-invalid");
                $("#email").addClass("is-valid");
                $("#emailMsg").css("display", "none")
            }
        });


        $("#confir-email").on('keyup', function () {
            if ($("#confir-email").val() != $("#email").val()) {
                $("#confir-email").css("display", "block");
                $("#confir-emailMsg").html("Email divergente")
                $("#confir-email").addClass("is-invalid");
                $("#confir-email").removeClass("is-valid");
            } else {
                $("#confir-email").removeClass("is-invalid");
                $("#confir-email").addClass("is-valid");
                $("#confir-emailMsg").css("display", "none");
            }
        });


        $("#senha").on('keyup', function () {
            if (validarSenha(senha.value) !== true) {
                $("#senha").css("display", "block");
                $("#senhaMsg").html("Minímo 6 caracteres, letras, numeros, @.#$!& ")
                $("#senha").addClass("is-invalid");
                $("#senha").removeClass("is-valid");
            } else {
                $("#senha").removeClass("is-invalid");
                $("#senha").addClass("is-valid");
                $("#senhaMsg").css("display", "none")
            }
        });

        $("#confir-senha").on('keyup', function () {
            if ($("#confir-senha").val() != $("#senha").val()) {
                $("#confir-senha").css("display", "block");
                $("#confir-senhaMsg").html("Senhas não conferem")
                $("#confir-senha").addClass("is-invalid");
                $("#confir-senha").removeClass("is-valid");
            } else {
                $("#confir-senha").removeClass("is-invalid");
                $("#confir-senha").addClass("is-valid");
                $("#confir-senhaMsg").css("display", "none")
            }
        });


        function validarEmail(email) {
            const emailPadrao = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
            return emailPadrao.test(email)
        }

        function validarSenha(senha) {
            const senhaPadrao = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            return senhaPadrao.test(senha)
        }

        $("#telefone").blur(function () {
            if (this.value != "") {
                $("#telefone").removeClass("is-invalid");
                $("#telefone").addClass("is-valid");
            } else {
                $("#telefone").css("display", "block");
                $("#telefone").addClass("is-invalid");
                $("#telefone").removeClass("is-valid");
            }
        });

        $("#celular").blur(function () {
            if (this.value != "") {
                $("#celular").removeClass("is-invalid");
                $("#celular").addClass("is-valid");
            } else {
                $("#celular").css("display", "block");
                $("#celular").addClass("is-invalid");
                $("#celular").removeClass("is-valid");
            }
        });


        // Validações apartir da index 3
        $("#enviar").on('click', function (e) {
           
            //seletor para os checkbox com name mcheckbox selecionados
            // var checkbox = $('input:checkbox[type^=checkbox]:checked');
            var checkbox1 = $('[name="esporte"]:checked');
            var checkbox2 = $('[name="aprendizado"]:checked');
            var radioButton = document.querySelector('input[name=info]:checked');
            var valid = 0;
            $("#esporteMsg").css("display", "none");
            $("#aprendMsg").css("display", "none");
            $("#infoMsg").css("display", "none");
            //verifica se existem checkbox selecionados
            if(checkbox1.length > 0){
                if(checkbox1.length < 2){
                    // alert("É necessário marca ao menos dois tipos de esporte");
                    $("#esporteMsg").css("display", "block");
                    $("#esporteMsg").html("É necessário marca ao menos dois tipos de esporte");
                }else {
                    valid = valid + 1;
                    $("#esporteMsg").css("display", "none");
                }
            } else{
                $("#esporteMsg").css("display", "block");
                $("#esporteMsg").html("Campo Obrigatório");
            }
            
            if(checkbox2.length > 0){

                if(checkbox2.length < 3){
                    $("#aprendMsg").css("display", "block");
                    $("#aprendMsg").html("É necessário marca ao menos três desejos que queira aprender");
                }else {
                    valid = valid + 1;
                }
            } else {
                $("#aprendMsg").css("display", "block");
                $("#aprendMsg").html("Campo Obrigatório");
            }

            if(radioButton != null ){
                valid = valid + 1;
            } else{
                $("#infoMsg").css("display", "block");
                $("#infoMsg").html("Campo Obrigatório");
            }
            
            if(valid < 3){
                e.preventDefault();
            }
            
        });

            $("#outrosInfo").click(function() {
                    $("#outros").css("display", "block");
                    $("#outros").addClass("is-invalid");
                    $("#aprendMsg").html("Campo Obrigatório");
            });

           
        
        
    });

});