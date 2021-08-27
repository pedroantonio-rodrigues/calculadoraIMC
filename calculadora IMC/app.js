// document.getElementById('botao').innerText = "Mudei o Valor"
// console.log(document.getElementsByClassName('fieldset'))
// console.log(document.getElementsByTagName('legend'))
// console.log(document.getElementsByName('inputPeso'))

function mensagem(){
    
    let nome = prompt ("Qual seu nome?")
    alert (nome)

   // console.log("Pedro Antonio");
}


function calcular() {
    
    if (validaCampos()) {
        let peso   = parseFloat(document.getElementById('peso').value)
        let altura = parseFloat(document.getElementById('altura').value)
        let resultadoImc = (peso / (altura * altura)) * 10000;  
        document.getElementById('resultadoTexto').innerText =  'Resultado: '; 
        document.getElementById('resultado').innerText =  resultadoImc.toFixed(1);
    } else {
        document.getElementById('resultado').innerText =  'Valores incorretos';    
    }
    
}

function validaCampos() {
    let peso   = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    if (isNaN(peso) || isNaN(altura)) {
        return false;
    }
    return true;
}

function validaTamanhoInput() {
    setTimeout(() => {
        let campoInputPeso = document.getElementById('peso')
        if (campoInputPeso.value.length > 3 ) {
            document.getElementById('erroInputPeso').style.display = 'block'
        } else {
            console.log(campoInputPeso.value.length);
            document.getElementById('erroInputPeso').style.display = 'none'   
        }        
    }, 100);    
}

function grau_imc(){
    let resultado = parseFloat(document.getElementById ('resultado').innerText)
    const tagimg = document.getElementById('imagenResultado')
    console.log(tagimg)
    if(resultado <= 18.5){
        tagimg.src ("https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png");
    }else if (resultado >= 18.5 && resultado <= 25 ){
        tagimg.src ("https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png")
    }else if (resultado >= 25 && resultado <= 30){
        tagimg.src ("https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png")
    }else if (resultado >= 30 && resultado <= 35){
        tagimg.src("https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png")
    }else if (resultado >= 35 && resultado <= 40){
        tagimg.src("https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png")
    }else {
        tagimg.src("https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png")
    }
}