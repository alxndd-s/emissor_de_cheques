
function listaprimeirocheque() {

  var gettable = document.querySelector('table#tabeladeinput')
  gettable.innerHTML = ""
  gettable.innerHTML =  `
    <tr>
      <td><input list="favorecidos" id = "favorecido1" class = "favorecido" value=""></input></td>
      <td><input type="text" id = "valor1" class = "valor" value="" onKeyUp="mascaraMoeda(this, event)" onchange ="somarcheques()" ></input></td>
      <td><input type="date" id = "data1" class = "data"></input></td>
      <td id = "botoescopiar" ><button id ="copiarcheques" onclick = "copiarfavorecido()" title="Duplica o primeiro favorecido nos outros cheques">Duplic.Fav.</button><button id ="copiarvalor" onclick = "copiarvalor()" title="Duplica o primeiro valor nos outros cheques">Duplic.Valor</button></td>
    </tr>
    `

}




function listarcheques(){
  
  listaprimeirocheque()



  
  var qtdcheque = document.getElementById('qtdcheques').value;

  for (let item = 1; item <= qtdcheque-1; item++){

    var pegatabela = document.querySelector('table#tabeladeinput')

    var onchangevalor = ''
    
    if (item == (qtdcheque-1)){

      onchangevalor = 'somarcheques()'


    }


    pegatabela.innerHTML +=  `                
    <tr>
      <td><input list="favorecidos" id = "favorecido${item+1}" class = "favorecido" value=""></input></td>
      <td><input type="text" id = "valor${item+1}" class = "valor" value="" onchange="somarcheques()" onKeyUp="mascaraMoeda(this, event)" ></input></td>
      <td><input type="date" id = "data${item+1}" class = "data" value="${pegadataatual()}"></input></td>
    </tr> 
    
    `


  }



}

function copiarfavorecido(){

  var firstfavorecido = document.querySelector('input#favorecido1').value
  
  const linhastabela = document.querySelectorAll('tr');


  var cheque = ''

  for (let item = 1; item <= linhastabela.length; item++){

    document.getElementById(`favorecido${item}`).value = firstfavorecido

    

  }

}


function copiarvalor(){

  var firsvalor = document.querySelector('input#valor1').value
  
  const linhastabela = document.querySelectorAll('tr');


  var cheque = ''

  for (let item = 1; item <= linhastabela.length; item++){

    document.getElementById(`valor${item}`).value = firsvalor

    

  }

  somarcheques()

}


function gerarhmax() {


var espaco = " "

//valor em reais
var linha1 =espaco.repeat(118)
//linha em branco
var linha2 = espaco.repeat(118)

//valor por extenso 1
var linha3 = espaco.repeat(118)

//valor por extenso 2

var linha4 = espaco.repeat(118)

//linha em branco

var linha5 = espaco.repeat(118)

var favorecido = "HMAX COMBUSTIVEIS E LUBRIFICANTES LTDA"

var linha6 = espaco.repeat(7) + espaco.repeat(20) + favorecido + espaco.repeat(91 - favorecido.length)

var linha7 = espaco.repeat(118)
var linha8 = espaco.repeat(118)
var linha9 = espaco.repeat(118)
var linha10 = espaco.repeat(118)
var linha11 = espaco.repeat(118)
var linha12 = espaco.repeat(118)
var linha13 = espaco.repeat(118)


var linha14 = espaco.repeat(118) 
var linha15 = espaco.repeat(118)
var linha16 = espaco.repeat(118)
var linha17 = espaco.repeat(118)
var linha18 = espaco.repeat(118)


// Cria a string formatada do arquivo PRN

var cheque = (linha1 + "\r\n" + linha2 + "\r\n" + linha3 + "\r\n" + linha4 + "\r\n" + linha5 + "\r\n" + linha6 + "\r\n" + linha7 + "\r\n" + linha8 + "\r\n" + linha9 + "\r\n" + linha10 + "\r\n" + linha11 + "\r\n" + linha12 + "\r\n" + linha13 + "\r\n" + linha14 + "\r\n" + linha15 + "\r\n" + linha16 + "\r\n" + linha17 + "\r\n"+ linha18 + "\r\n");



// Cria um objeto Blob com a string formatada



var blob = new Blob([cheque], {type: "text/plain;charset=utf-8"});

// Cria um link de download e adiciona-o à página
var link = document.createElement("a");
link.href = window.URL.createObjectURL(blob);
link.download = "Favorecido HMAX.prn";
document.body.appendChild(link);


// Clica no link de download para iniciar o download
link.click();




}



function gerarPRN() {


        // seleciona todas as tags 'tr' no documento HTML
  const linhasTabela = document.querySelectorAll('tr');
  
  // itera sobre a lista de tags 'tr'
  var cheque = ''

  for (let item = 1; item <= linhasTabela.length; item++){
    // acessa os inputs dentro de cada linha
    const favorecido = document.querySelector(`#favorecido${item}`).value;
    const valororig = document.querySelector(`#valor${item}`).value;
    const data = document.querySelector(`#data${item}`).value;

    
    // Captura os dados do formulário
    
    

    var dataconver = data.slice(8,10) + '/' + data.slice(5,7) + '/' + data.slice(0,4)

    var meses = ['JANEIRO','FEVEREIRO','MARCO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']


    //2023-03-14  14/0/2023-
    var valor = '***R$ ' +  valororig + '***'
    var valorcanhoto = 'R$ ' +  valororig

    var valorinteiro = valororig.toString().split(',')[0]

    var centavosstring = valororig.toString().split(',')[1]

    
    var centavo = ""
          
    
    if ((Number(centavosstring)) != 0 && centavosstring != undefined) {

      var centavo = ' e ' + centavosstring.toString().extenso2(true)


    }
    
    
    
    
    

    // if ((Number(centavosstring)) != 0){
    //   var centavos = centavosstring.extenso(true)

    // }

    


    var extenso = valorinteiro.extenso(true)  +  centavo
    
    var espaco = " "
    var extensolinha2 = ""
    var tamanho = extenso.length; if (tamanho > 81) tamanho = 81;




    if (tamanho < 82) {   

      var extensolinha2 = extenso.slice(82,extenso.length)
    }

    var aster = "*"
    

    //PROBLEMA NA PRIMEIRA LINHA 

    
    //valor em reais
    var linha1 =(espaco.repeat(118-(valor.length))) + valor
    //linha em branco
    var linha2 = espaco.repeat(118)

    //valor por extenso 1
    var linha3 = espaco.repeat(17-(cortarString(favorecido, 14 , 0).length)) + cortarString(favorecido, 14 , 0) + espaco.repeat(20) + (cortarString(extenso, 82 , 0).toUpperCase()) + aster.repeat(81-(cortarString(extenso, 82 , 0).length))
    
    //valor por extenso 2

    var linha4 = cortarString(favorecido, 17 , 15) + espaco.repeat(17-(cortarString(favorecido, 17 , 15).length)) + espaco.repeat(10) + (cortarString(extenso, 95 , 82).toUpperCase()) + aster.repeat(91-(cortarString(extenso, 95 , 82).length))

    //linha em branco

    var linha5 = espaco.repeat(118)

    //data e favorecido do cheque

    var linha6 = espaco.repeat(7) + dataconver + espaco.repeat(10) + favorecido + espaco.repeat(91 - favorecido.length)

    var linha7 = espaco.repeat(118)
    var datatamanho = "CANDEIAS," + espaco.repeat(5) + data.slice(8,10) + espaco.repeat(17-(meses[Number(data.slice(5,7))-1].length)) + meses[Number(data.slice(5,7))-1] + espaco.repeat(7) + data.slice(0,4)
    var linha8 = espaco.repeat(118-datatamanho.length) + datatamanho 
    var linha9 = espaco.repeat(118)
    var linha10 = espaco.repeat(118)
    var linha11 = espaco.repeat(118)
    var linha12 = espaco.repeat(17-valorcanhoto.length) + valorcanhoto + espaco.repeat(101)
    var linha13 = espaco.repeat(118)
    
    var bompara = ''
    var linha14 = espaco.repeat(118) // adicionar 23 caracteres com bom para
    var linha15 = espaco.repeat(118)
    var linha16 = espaco.repeat(118)
    var linha17 = espaco.repeat(118)
    var linha18 = espaco.repeat(118)
    

    // Cria a string formatada do arquivo PRN

    var cheque2 = (linha1 + "\r\n" + linha2 + "\r\n" + linha3 + "\r\n" + linha4 + "\r\n" + linha5 + "\r\n" + linha6 + "\r\n" + linha7 + "\r\n" + linha8 + "\r\n" + linha9 + "\r\n" + linha10 + "\r\n" + linha11 + "\r\n" + linha12 + "\r\n" + linha13 + "\r\n" + linha14 + "\r\n" + linha15 + "\r\n" + linha16 + "\r\n" + linha17 + "\r\n"+ linha18 + "\r\n");
    cheque += cheque2
    

    // Cria um objeto Blob com a string formatada
  }
  
  
  var blob = new Blob([cheque], {type: "text/plain;charset=utf-8"});

  var nomearquivo = `${linhasTabela.length} Cheque TCM .prn`;

  if(linhasTabela.length > 1){

    nomearquivo = `${linhasTabela.length} Cheques TCM .prn`;

  }

  

  // Cria um link de download e adiciona-o à página
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  link.download = nomearquivo;

  document.body.appendChild(link);

  
  // Clica no link de download para iniciar o download
  link.click();
  

  

}


function cortarString(str, maxLength, startIndex = 0) {
    // Divida a string em um array de palavras
    const words = str.split(' ');
  
    // Calcule o índice da primeira palavra a ser incluída
    let firstWordIndex = 0;
    let lengthSoFar = 0;
    while (firstWordIndex < words.length && lengthSoFar < startIndex) {
      lengthSoFar += words[firstWordIndex].length + 1; // +1 para contar o espaço
      firstWordIndex++;
    }
    if (lengthSoFar > startIndex && firstWordIndex > 0) {
      firstWordIndex--;
    }
  
    // Verifique o comprimento total das palavras no array
    let length = 0;
    let selectedWords = [];
    for (let i = firstWordIndex; i < words.length; i++) {
      length += words[i].length;
      if (length <= maxLength) {
        selectedWords.push(words[i]);
        // Adicione 1 para contar o espaço entre as palavras
        length++;
      } else {
        break;
      }
    }
  
    // Crie uma nova string a partir das palavras selecionadas
    
    return selectedWords.join(' ');
}
  


function numeroPorExtenso(numero) {

      const extenso = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove','dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove',
      'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa','cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 
      'mil', 'milhão', 'bilhão', 'trilhão', 'quadrilhão', 'quintilhão', 'sextilhão', 'septilhão', 'octilhão', 'nonilhão', 'decilhão']

      let extensoNumero = '';
  
      if (numero === 0) {
        extensoNumero = 'zero';
      }else if(numero === 1){
        extensoNumero = extenso[1] + ' real'
      }else if(numero > 1 && numero <= 20){
        extensoNumero = extenso[numero] + ' reais'

      }else if(numero > 20){

        extensoNumero = extenso[numero] + ' reais'

      }



      return extensoNumero;
}




  // VERIFICAR SE TEM CENTAVOS 




  String.prototype.extenso = function(c){
    var ex = [
        ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

String.prototype.extenso2 = function(c){
  var ex = [
      ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
      ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
      ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
      ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
  ];
  var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "centavo", d = "centavo", sl;
  for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
      j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
      if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
      for(a = -1, l = v.length; ++a < l; t = ""){
          if(!(i = v[a] * 1)) continue;
          i % 100 < 20 && (t += ex[0][i % 100]) ||
          i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
          s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
          ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
      }
      a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
      a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("o", "os") : j ? d : $)) : ""));
  }
  return r.join(e);
}



String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};

function mascaraMoeda(campo,evento){
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "##.###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}


function pegadataatual() {
  // esta funcao mostra na aba media solicitada o mes atual
  // Obter a data atual
  const dataatual = new Date();
  var ano = dataatual.getFullYear();
  var mes = dataatual.getMonth() + 1; // Months start at 0!
  var dia = dataatual.getDate();
  
  if (dia < 10) dia = '0' + dia;
  if (mes < 10) mes = '0' + mes;

  
  const dataatualformat = ano + '-' + mes + '-' + dia;
  document.getElementById('data1').value = dataatualformat;

  return dataatualformat

  // Exibir a data no HTML
  // document.querySelector('input#data1').value = dataFormatada
  // return 






}

function motoristas(){

  
  var favorecidos = document.querySelector('datalist#favorecidos')
  favorecidos.innerHTML = ''
  favorecidos.innerHTML = `<option id = '1' value ='ADILSON DE SOUSA ANDRADE'>
  <option id = '2' value ='ALTIELIS JOSE RODRIGUES'>
  <option id = '3' value ='ANTONIO CARLOS DOS SANTOS'>
  <option id = '4' value ='CELIO DE SOUZA ANDRADE'>
  <option id = '5' value ='DIEGO CAMPOS DA MATA'>
  <option id = '6' value ='EDNILSON DE ALMEIDA'>
  <option id = '7' value ='EDUALDO ANTONIO DE OLIVEIRA'>
  <option id = '8' value ='ELI RICARDO ROSA'>
  <option id = '9' value ='ERNESTINO EUSTAQUIO DA SILVA'>
  <option id = '10' value ='EVERTON DINIZ'>
  <option id = '11' value ='GERSYLAINE RODRIGUES'>
  <option id = '12' value ='ISAC FIRMINO RIBEIRO'>
  <option id = '13' value ='ISRAEL HONORATO SOARES'>
  <option id = '14' value ='IZAIAS FIRMINO RIBEIRO'>
  <option id = '15' value ='JULIO CESAR CUSTODIO'>
  <option id = '16' value ='PAULO HENRIQUE RODRIGUES'>
  <option id = '17' value ='RONILSON CARLOS EMERENCIANO'>
  <option id = '18' value ='RONY JOSE SILVEIRA'>
  `



}

function mostraprazo(){

  var checkboxprazo = document.getElementById('checkboxprazo')

  

  if (checkboxprazo.checked) {
    var getconfigcheques = document.getElementById('configcheques')
    var criainputpredat = document.createElement('input')
    criainputpredat.id = 'predatacheque'
    criainputpredat.type = 'text'
    criainputpredat.setAttribute('onchange', 'alteradata()')
    

    getconfigcheques.appendChild(criainputpredat)



  }else{
        

    document.location.reload(true);

  }



}

function verificaqtdcheques(){

  var pegaqtdcheques = document.getElementById('qtdcheques')

  if (pegaqtdcheques.value > 1){

    var getconfigcheques = document.getElementById('configcheques')
    var criainputcheckprazo = document.createElement('input')
    criainputcheckprazo.id = 'checkboxprazo'
    criainputcheckprazo.type = 'checkbox'
    criainputcheckprazo.setAttribute('onchange', 'mostraprazo()')
    var crialabelcheckprazo = document.createElement('label')
    crialabelcheckprazo.id = 'labelqtdcheques'
    crialabelcheckprazo.textContent = 'PRAZO PAGAMENTO    '

    getconfigcheques.appendChild(criainputcheckprazo)
    getconfigcheques.appendChild(crialabelcheckprazo)


  }


}

function alteradata(){

  const cheques = document.querySelectorAll('tr');
  var primeiradata = document.getElementById('data1').value
  var qtddias = Number(document.getElementById('predatacheque').value) + Number(1)
  

  for (let linha = 0; linha <= (cheques.length); linha ++){


    if (linha > 1){

      document.getElementById(`data${linha}`).value = somardata(primeiradata, qtddias)

      var primeiradata = document.getElementById(`data${linha}`).value



    }
    

  }


}

function chequemotorista(){

  

  var checkbox = document.getElementById('checkboxmot')


  if (checkbox.checked){
    var configcheque = document.getElementById('configcheques')
    var criarinput = document.createElement('input')
    criarinput.id = 'chequesmotoristas'
    criarinput.class = 'chequesmotoristas'
    criarinput.setAttribute('placeholder', "Cole aqui o Array : [{favorecido:exemplo,valorcheque:123,45},{favorecido:exemplo1,valorcheque:123,45}]")
    criarinput.setAttribute('onchange', 'listachequemot()')

    configcheque.appendChild(criarinput)

  }else{

    document.location.reload(true);

  }
  
}

// fazer com que pege o lenght abaixo e liste o cheques, depois jogue os valores dos cheques nos campos 
function listachequemot(){

  var gettext = eval(document.getElementById('chequesmotoristas').value)

  




  var chequemotlenght = gettext.length

  document.getElementById('qtdcheques').value = chequemotlenght

  listarcheques()

  for (let item = 0; item < (chequemotlenght); item ++){





    document.getElementById(`favorecido${item+1}`).value = gettext[item].favorecido

    document.getElementById(`valor${item+1}`).value = gettext[item].valorcheque.toString().replace(".",",")


   }





document.getElementById('data1').value = pegadataatual()
}




function somardata (data, dias){

  let dataatual = new Date(data)


  dataatual.setDate(dataatual.getDate() + parseInt(dias));
 
  let ano = dataatual.getFullYear();
  let mes = dataatual.getMonth() + 1; // Months start at 0!
  let dia = dataatual.getDate();
  
  if (dia < 10) dia = '0' + dia;
  if (mes < 10) mes = '0' + mes;

  let dataadd = ano + '-' + mes + '-' + dia;
  
  return dataadd
  

}


function somarcheques(){

  var divvalortotal = document.querySelector('div#valortotal')
  
  
  const cheques = document.querySelectorAll('tr');

  var valortotal = 0

  for (let cheque = 1; cheque <= cheques.length ; cheque++){

    console.log(`valor${cheque}`)

    var valores = document.getElementById(`valor${cheque}`).value
    var valorconv = parseFloat(valores.replace(/[^\d,]/g, '').replace(',', '.'));

    if (valores == ""){
      valorconv = 0
    }
    
    valortotal += valorconv
    

  }

  var valorforma = valortotal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace(',', '.');
  
  divvalortotal.innerHTML = ''
  
  divvalortotal.innerHTML = `<strong>Valor Total </strong>: R$ ${valorforma}`
  
  

}
