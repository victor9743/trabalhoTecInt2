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
                $("#nomeMsg").html("Campo Obrigatório")
            }

            if($("#dataNascimento").val() != ""){
                valid1 = valid1 + 1;
            } else {
                $("#dataNascimento").addClass("is-invalid");
                $("#dataMsg").css("display", "block");
                $("#dataMsg").html("Campo Obrigatório");
            }

            
            if(valid1 == 3){
                $(".step:visible").hide().next().show();
                passoExibido();
            }
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
            $("#nomeMsg").html("Campo Obrigatório");
            $("#nome").addClass("is-invalid");
            $("#nome").removeClass("is-valid");
        }
    });

    // Validação do formulário
    //máscaras
    $('#cpf').mask('000.000.000-00');
    $("#cep").mask('00000-000');

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
                    $("#dataMsg").html("Campo Obrigatório");
                    $("#dataNascimento").addClass("is-invalid");
                    $("#dataNascimento").removeClass("is-valid");

                 
                }       
            });
        }       
    });

});
