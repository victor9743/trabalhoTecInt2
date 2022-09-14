$(document).ready(function($){
    // passo 1 esconder todos os passos e mostrar o primeiro
    // esconde todos os passos
    $(".step").hide();

    // mostra o primeiro passo
    $(".step").first().show();
   
    var passoExibido = function() {
        var index = parseInt($(".step:visible").index());
        if (index == 0) {
            $("#anterior").hide();
            $("#enviar").hide();
            $("#progress").html("25%");
            $(".progress-bar").css("width", "25%");
        } else if (index == 1){
            $("#enviar").hide();
            $("#anterior").show();
            $("#progress").html("50%");
            $(".progress-bar").css("width", "50%");
        } else if (index == 2){
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
    $("#avancar").on('click', function(e){
        e.preventDefault();
        var index = parseInt($(".step:visible").index());
        // primeira página
        if(index == 0) {
            var valid1 = 0;

            if($("#cpf").val() != ""){
                valid1 = valid1 + 1;

            } else {
                $("#cpf").addClass("is-invalid");
                $("#cpfMsg").css("display", "block");
                $("#cpfMsg").html("Cpf Inválido");
                $("#cpf").focus();              
            }

            if($("#nome").val() != ""){
                valid1 = valid1 + 1;
            } else {
                $("#nome").addClass("is-invalid");
                $("#nomeMsg").css("display", "block");
            }

            if($("#dataNascimento").val() != ""){
                valid1 = valid1 + 1;
            } else {
                $("#dataNascimento").addClass("is-invalid");
                $("#dataMsg").css("display", "block");
            }

            $(".step:visible").hide().next().show();
            if(valid1 == 3){
                $(".step:visible").hide().next().show();
                passoExibido();
            }
        }

        // segunda página
        if(index == 1) {
            // $("#cepMsg")
            var valid2 = 0;

            if($("#cep").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#cep").addClass("is-invalid");
                $("#cepMsg").css("display", "block");
            }

            if($("#logradouro").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#logradouro").addClass("is-invalid");
                $("#logradouroMsg").css("display", "block");
            }

            if($("#numLog").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#numLog").addClass("is-invalid");
                $("#lognumMsg").css("display", "block");
            }

            if($("#bairro").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#bairro").addClass("is-invalid");
                $("#bairroMsg").css("display", "block");
            }

            if($("#complemento").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#complemento").addClass("is-invalid");
                $("#complementoMsg").css("display", "block");
            }

            if($("#municipio").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#municipio").addClass("is-invalid");
                $("#municipioMsg").css("display", "block");
            }

            if($("#estados").val() != ""){
                valid2 = valid2 + 1;

            } else {
                $("#estados").addClass("is-invalid");
                $("#estadoMsg").css("display", "block");
            }

            
            $(".step:visible").hide().next().show();
            if(valid2 == 7){
                $(".step:visible").hide().next().show();
                passoExibido();
            }

        }

        if(index == 2){

            var valid3 = 0;
            if($("#email").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#email").addClass("is-invalid");
                $("#emailMsg").css("display", "block");
                $("#emailMsg").html("Campo Obrigatório");
            }

            if($("#confirmEmail").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#confirmEmail").addClass("is-invalid");
                $("#confirmEmailMsg").css("display", "block");
            }

            if($("#senha").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#senha").addClass("is-invalid");
                $("#senhaMsg").css("display", "block");
            }

            if($("#confirmSenha").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#confirmSenha").addClass("is-invalid");
                $("#confirmSenhaMsg").css("display", "block");
            }

            if($("#telFixo").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#telFixo").addClass("is-invalid");
                $("#telFixoMsg").css("display", "block");
            }

            if($("#telCel").val() != ""){
                valid3 = valid3 + 1;

            } else {
                $("#telCel").addClass("is-invalid");
                $("#telCelMsg").css("display", "block");
            }


           
            // $(".step:visible").hide().next().show();
            // if(valid2 == 7){
            //     $(".step:visible").hide().next().show();
            //     passoExibido();
            // }
        }   
            
    });

    //retrocede para o passo anterior
    $("#anterior").on('click', function(){
        $(".step:visible").hide().prev().show();
        passoExibido();
    });

    // muda a cor dos campos inputs
    $("#cpf").blur(function(){
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

    $("#nome").blur(function(){
        if (this.value != "") {
            $("#nome").removeClass("is-invalid");
            $("#nome").addClass("is-valid");
            $("#nomeMsg").css("display", "none");
        } else {
            $("#nomeMsg").css("display", "block");
            $("#nome").addClass("is-invalid");
            $("#nome").removeClass("is-valid");
        }
    });

    $("#cep").blur(function(){
        if (this.value != "") {
            $("#cep").removeClass("is-invalid");
            $("#cep").addClass("is-valid");
            $("#cepMsg").css("display", "none");
        } else {
            $("#cepMsg").css("display", "block");
            $("#cep").addClass("is-invalid");
            $("#cep").removeClass("is-valid");
        }
    });

    $("#logradouro").blur(function(){
        if (this.value != "") {
            $("#logradouro").removeClass("is-invalid");
            $("#logradouro").addClass("is-valid");
            $("#logradouroMsg").css("display", "none");
        } else {
            $("#logradouroMsg").css("display", "block");
            $("#logradouro").addClass("is-invalid");
            $("#logradouro").removeClass("is-valid");
        }
    });

    $("#numLog").blur(function(){
        if (this.value != "") {
            $("#numLog").removeClass("is-invalid");
            $("#numLog").addClass("is-valid");
            $("#lognumMsg").css("display", "none");
        } else {
            $("#lognumMsg").css("display", "block");
            $("#numLog").addClass("is-invalid");
            $("#numLog").removeClass("is-valid");
        }
    });

    $("#bairro").blur(function(){
        if (this.value != "") {
            $("#bairro").removeClass("is-invalid");
            $("#bairro").addClass("is-valid");
            $("#bairroMsg").css("display", "none");
        } else {
            $("#bairroMsg").css("display", "block");
            $("#bairro").addClass("is-invalid");
            $("#bairro").removeClass("is-valid");
        }
    });

    $("#complemento").blur(function(){
        if (this.value != "") {
            $("#complemento").removeClass("is-invalid");
            $("#complemento").addClass("is-valid");
            $("#complementoMsg").css("display", "none");
        } else {
            $("#complementoMsg").css("display", "block");
            $("#complemento").addClass("is-invalid");
            $("#complemento").removeClass("is-valid");
        }
    });

    $("#municipio").blur(function(){
        if (this.value != "") {
            $("#municipio").removeClass("is-invalid");
            $("#municipio").addClass("is-valid");
            $("#municipioMsg").css("display", "none");
        } else {
            $("#municipioMsg").css("display", "block");
            $("#municipio").addClass("is-invalid");
            $("#municipio").removeClass("is-valid");
        }
    });

    $("#estados").blur(function(){
        if (this.value != "") {
            $("#estados").removeClass("is-invalid");
            $("#estados").addClass("is-valid");
            $("#estadoMsg").css("display", "none");
        } else {
            $("#estadoMsg").css("display", "block");
            $("#estados").addClass("is-invalid");
            $("#estados").removeClass("is-valid");
        }
    });

    $("#senha").blur(function(){
        if (this.value != "") {
            $("#senha").removeClass("is-invalid");
            $("#senha").addClass("is-valid");
            $("#senhaMsg").css("display", "none");
        } else {
            $("#senhaMsg").css("display", "block");
            $("#senha").addClass("is-invalid");
            $("#senha").removeClass("is-valid");
        }
    });


    // Validação do formulário
    //máscaras
    $('#cpf').mask('000.000.000-00');
    $("#cep").mask('00000-000');
    $("#telFixo").mask('(99) 99999-9999');
    $("#telCel").mask('(99) 99999-9999');

    function validarCPF(cpf) {	
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '') return false;	
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
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9)))		
                return false;		
        // Valida 2o digito	
        add = 0;	
        for (i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }

    $("#email").blur(function(){
        if (this.value != "") {
            validacaoEmail(this.value);
        } else {
            $("#emailMsg").css("display", "block");
            $("#email").addClass("is-invalid");
            $("#email").removeClass("is-valid");
            $("#emailMsg").html("Campo Obrigatório");
            $("#email").focus();
        }
        
    })


    // validar email
    function validacaoEmail(field) {
        console.log(field.indexOf("@"));
        var usuario = field.substring(0, field.indexOf("@"));
        var dominio = field.substring(field.indexOf("@")+ 1, field.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            $("#emailMsg").html("E-mail válido");
            $("#email").removeClass("is-invalid");
            $("#email").addClass("is-valid");
            $("#emailMsg").css("display", "none");
            
        }
        else{
            $("#emailMsg").css("display", "block");
            $("#email").addClass("is-invalid");
            $("#email").removeClass("is-valid");
            $("#emailMsg").html("E-mail Inválido");
            $("#email").focus();
        }
    }

    // verificar se os emails são iguais
    $("#confirmEmail").keyup(function(){
        if(this.value != $("#email").val()){
            $("#confirmEmailMsg").css("display", "block");
            $("#confirmEmail").addClass("is-invalid");
            $("#confirmEmail").removeClass("is-valid");
            $("#confirmEmailMsg").html("E-mail não são idênticos");
            $("#confirmEmail").focus();
        } else {
            $("#confirmEmailMsg").css("display", "none");
            $("#confirmEmail").removeClass("is-invalid");
            $("#confirmEmail").addClass("is-valid");
        }
    });

    // verificar se as senhas são iguais
    $("#confirmSenha").keyup(function(){
        if(this.value != $("#senha").val()){
            $("#confirmSenhaMsg").css("display", "block");
            $("#confirmSenha").addClass("is-invalid");
            $("#confirmSenha").removeClass("is-valid");
            $("#confirmSenhaMsg").html("Senha não são idênticos");
            $("#confirmSenha").focus();
        } else {
            $("#confirmSenhaMsg").css("display", "none");
            $("#confirmSenha").removeClass("is-invalid");
            $("#confirmSenha").addClass("is-valid");
        }
    });

    $("#dataNascimento").change(function(){
        var dataNasc = this.value;
        dataNasc = new Date(dataNasc);
        var date = new Date();
        console.log(dataNasc.getTime() / 31536000000);
        console.log(Math.floor((Date.now() - dataNasc.getTime()) / 31536000000));

        if (dataNasc > date){
            $("#dataNascimento").addClass("is-invalid");
            $("#dataMsg").css("display", "block");
            $("#dataMsg").html("Data de nascimento não pode ser maior que a data atual");

        } else {
            // anos
            $("#valorIdade").html("");
            $("#valorIdade").html(Math.floor((Date.now() - dataNasc.getTime()) / 31536000000));
            // meses
            $("#valorMes").html("");
            $("#valorMes").html((date.getFullYear() - dataNasc.getFullYear()) * 12);

            // dias
            $("#valorDias").html("");
            $("#valorDias").html(Math.floor((Date.now() - dataNasc.getTime()) / 86400000));
            $(this).blur(function(){
                if (this.value != "") {
                    $("#dataNascimento").removeClass("is-invalid");
                    $("#dataNascimento").addClass("is-valid");
                    $("#dataMsg").css("display", "none");
                } else {
                    $("#dataMsg").css("display", "block");
                    $("#dataNascimento").addClass("is-invalid");
                    $("#dataNascimento").removeClass("is-valid");

                 
                }       
            });
        }       
    });

    // Lista de UF
    $.ajax({
        type: "get",
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').last().attr('content'))},
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
        success: function(data) {
            for(var i=0; i<= data.length - 1; i++){
                document.getElementById("estados").innerHTML += "<option value='"+data[i].sigla+"'>"+data[i].nome+"</option>";
            }
        }
    });
});
