
function listarcheques(){

  document.querySelector('div.inputvalores').innerHTML = ""

  var qtdcheque = document.getElementById('qtdcheques').value;

  for (let item = 1; item <= qtdcheque; item++){

    var listadeinputcheque = document.createElement('table')
    listadeinputcheque.id = 'tabeladeinput'





    listadeinputcheque.innerHTML +=  `                
    <tr>
      <td><input list="favorecidos" id = "favorecido${item}" class = "favorecido" value=""></input></td>
      <td><input type="text" id = "valor${item}" class = "valor" value="" onKeyUp="mascaraMoeda(this, event)"></input></td>
      <td><input type="date" id = "data${item}" class = "data" value="2023-03-14"></input></td>
    </tr>
    `
    
    

    document.querySelector('div.inputvalores').appendChild(listadeinputcheque);  

  }



}

function gerarPRN() {

    // seleciona todas as tags 'tr' no documento HTML
  const linhasTabela = document.querySelectorAll('tr');

  // itera sobre a lista de tags 'tr'
  linhasTabela.forEach((linha, index) => {
    // acessa os inputs dentro de cada linha
    const inputFavorecido = linha.querySelector(`#favorecido${index+1}`).value;
    const inputValor = linha.querySelector(`#valor${index+1}`).value;
    const inputData = linha.querySelector(`#data${index+1}`).value;



    // faz alguma coisa com os valores
    console.log(inputFavorecido + index);
  });




}



function gerarPRN2() {


        // seleciona todas as tags 'tr' no documento HTML
  const linhasTabela = document.querySelectorAll('tr');

  // itera sobre a lista de tags 'tr'
  linhasTabela.forEach((linha, index) => {
    // acessa os inputs dentro de cada linha
    const inputFavorecido = linha.querySelector(`#favorecido${index+1}`).value;
    const inputValor = linha.querySelector(`#valor${index+1}`).value;
    const inputData = linha.querySelector(`#data${index+1}`).value;

    // Captura os dados do formulário
    
    var cheque = ''
    var favorecido = document.getElementById("favorecido1").value

    var valororig = document.getElementById("valor1").value
    

    var data = document.getElementById("data1").value
    var dataconver = data.slice(8,10) + '/' + data.slice(5,7) + '/' + data.slice(0,4)

    var meses = ['JANEIRO','FEVEREIRO','MARCO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']


    //2023-03-14  14/0/2023-
    var valor = '***R$ ' +  valororig + '***'
    var valorcanhoto = 'R$ ' +  valororig

    var valorinteiro = valororig.toString().split(',')[0]

    var centavosstring = valororig.toString().split(',')[1]

    
    var centavo = ""
    
    if(centavosstring.length == 2) {
      
    
      if ((Number(centavosstring)) != 0 && centavosstring != undefined) {

        var centavo = ' e ' + centavosstring.toString().extenso2(true)


      }
      
      
      
      
      

      // if ((Number(centavosstring)) != 0){
      //   var centavos = centavosstring.extenso(true)

      // }

      


      var extenso = valorinteiro.extenso(true)  +  centavo
      console.log(extenso)
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
      var linha3 = espaco.repeat(17-(cortarString(favorecido, 17 , 0).length)) + cortarString(favorecido, 17 , 0) + espaco.repeat(20) + (cortarString(extenso, 82 , 0).toUpperCase()) + aster.repeat(81-(cortarString(extenso, 82 , 0).length))
      
      //valor por extenso 2

      var linha4 = espaco.repeat(17-(cortarString(favorecido, 17 , 17).length)) + cortarString(favorecido, 17 , 17) + espaco.repeat(10) + (cortarString(extenso, 95 , 82).toUpperCase()) + aster.repeat(91-(cortarString(extenso, 95 , 82).length))

      //linha em branco

      var linha5 = espaco.repeat(118)

      //data e favorecido do cheque

      var linha6 = espaco.repeat(7) + dataconver + espaco.repeat(10) + favorecido + espaco.repeat(91 - favorecido.length)

      var linha7 = espaco.repeat(118)
      var datatamanho = "CANDEIAS," + espaco.repeat(5) + data.slice(8,10) + espaco.repeat(7) + meses[Number(data.slice(5,7))-1] + espaco.repeat(7) + data.slice(0,4)
      var linha8 = espaco.repeat(118-datatamanho.length) + datatamanho 
      var linha9 = espaco.repeat(118)
      var linha10 = espaco.repeat(118)
      var linha11 = espaco.repeat(118)
      var linha12 = espaco.repeat(17-valorcanhoto.length) + valorcanhoto + espaco.repeat(101)
      var linha13 = espaco.repeat(118)
      var linha14 = espaco.repeat(118)
      var linha15 = espaco.repeat(118)
      var linha16 = espaco.repeat(118)
      var linha17 = espaco.repeat(118)
      

      // Cria a string formatada do arquivo PRN

      var cheque = linha1 + "\r\n" + linha2 + "\r\n" + linha3 + "\r\n" + linha4 + "\r\n" + linha5 + "\r\n" + linha6 + "\r\n" + linha7 + "\r\n" + linha8 + "\r\n" + linha9 + "\r\n" + linha10 + "\r\n" + linha11 + "\r\n" + linha12 + "\r\n" + linha13 + "\r\n" + linha14 + "\r\n" + linha15 + "\r\n" + linha16 + "\r\n" + linha17
      // Cria um objeto Blob com a string formatada

      var blob = new Blob([cheque], {type: "text/plain;charset=utf-8"});
      
      // Cria um link de download e adiciona-o à página
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "arquivo.prn";
      document.body.appendChild(link);

      
      // Clica no link de download para iniciar o download
      link.click();
    
    }else{

      window.alert("[ERRO] Digite apenas duas casas decimais !.")
      
    }

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