var titulo = document.getElementById('tituloBemVindo');
var texto = titulo.innerHTML;
var index = 0
var intervalo;
const novoTexto = "Infotec Solution Provider"

const escrever = ()=> {
    titulo.innerHTML = titulo.innerHTML.replace('|', '')

    if(texto.length > index){
        if(index === 0){
            titulo.innerHTML = texto.charAt(index);
        } else {
            titulo.innerHTML += texto.charAt(index);
        }
        titulo.innerHTML += '|';
        index++;
        intervalo = setTimeout(escrever, 100);
        } else{
            setTimeout(apagar, 1000);
        }
    }
    function apagar(){
        titulo.innerHTML = titulo.innerHTML.replace('|', '');
        if(texto.length > 0){
            titulo.innerHTML = titulo.innerHTML.slice(0, -1) + '|';
            texto = texto.slice(0, -1);
            intervalo = setTimeout(apagar, 100);
        } else {
            titulo.innerHTML = '|'
            setTimeout(function(){
                texto = novoTexto;
                index = 0;
                escreverNovoTexto();
            }, 100); 
        }
    }

    function escreverNovoTexto() {
        titulo.innerHTML = titulo.innerHTML.replace('|', '');

        if (novoTexto.length > index) {
            if (index === 0) {
                titulo.innerHTML = novoTexto.charAt(index);
            } else {
                titulo.innerHTML += novoTexto.charAt(index);
            }
            titulo.innerHTML += '|';
            index++;
            intervalo = setTimeout(escreverNovoTexto, 100);
        } else {
            titulo.innerHTML = novoTexto; // Remove o cursor quando o texto estiver completo
        }
    }
        
    escrever();
