function calculadora(){
    const operacao = Number(prompt("Escolha a operação:\n 1 - SOMA\n 2 - SUBTRAÇÃO\n 3 - MULTIPLICAÇÃO\n 4 - DIVISÃO\n 5 - POTENCIAÇÃO"));

    if (!operacao || operacao >= 7 || operacao <= 0){
        alert("operação invalida");
        calculadora();
    }
    else{
        var n1 = Number(prompt("insira o primeiro valor"));
        var n2 = Number(prompt("insira o segundo valor"));
        let resultado;

        if (!n1 || !n2){
            alert("ERRO - valor(es) inválido(s)")
            calculadora();
        }
        else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
            }

            function subt(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }

            function mult(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }

            function divi(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }

            function poten(){
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`)
            }

            

            function calcularNova(){
                let opcao = prompt("deseja fazer outra operação?\n 1 - SIM \n 2 - NÃO");
                if (opcao == 1){
                    calculadora();
                }
                else if (opcao == 2 ){
                    alert("Até logo!");
                }
                else{
                    alert("Valor inválido");
                    calcularNova();
                }
            }
        }
        // if (operacao == 1){
        //     soma();
        //     calcularNova();
        // }
        // else if(operacao == 2){
        //     subt();
        //     calcularNova();
        // }
        // else if(operacao == 3){
        //     mult();
        //     calcularNova();
        // }
        // else if(operacao == 4){
        //     divi();
        //     calcularNova();
        // }
        // else if(operacao == 5){
        //     poten();
        //     calcularNova();
        // }

        switch (operacao){
            case 1:
                soma();
                calcularNova();
                break;
            case 2:
                subt();
                calcularNova();
                break;
            case 3:
                mult();
                calcularNova();
                break;
            case 4:
                divi();
                calcularNova();
                break;
            case 5:
                poten();
                calcularNova();
                break;
        }
    }
}

calculadora();