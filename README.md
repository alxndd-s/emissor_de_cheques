# Emissor de cheques
Aplicando meus conhecimentos mais uma vez em Javascript,HTML e CSS, fiz este sistema de emissor de cheques para impressoras mastriciais. O sistema conta com varias funções interessantes que explicarei melhor abaixo com os Screenshot's.

Logo abaixo na primeira imagem, temos a tela inicial do sistema. Onde é possivel escolher a quantidade de cheques que necessita emitir. O mesmo atualiza a data atual, sendo possivel alterar todos os campos.

No campo Favorecido, o sistema busca de um "datalist" dentro do próprio HTML, varios favorecidos pré-cadastrados, os que são mais utilizados na empresa.

![Screenshot 1](./img/Screenshot_1.png)

Na segunda captura de tela, veremos as primeiras funções. Ao selecionar mais de um cheque. O sistema irá habilitar o "checkbox" PRAZO DE PAGAMENTO, e ao marcar o mesmo habilita o campo para que possa digitar quantos dias a partir da primeira data do cheque quer as datas dos próximos cheques. Assim ao digitar um valor o sistema irá alterar as proximas datas contando dias corridos do mês.

![Screenshot 3](./img/Screenshot_3.png)

Na terceira captura, vemos que a opção "MOTORISTA" foi marcada. Essa opção foi adiciona para uso interno da empresa, para emitir cheque para os próprios funcionários. 
Ao marcar este campo, é disponibilizado um campo ao lado. Mostrando um modelo de array of objects. Esse array é gerado por uma planilha interna da empresa. A mesma gera o Seguinte array : [{favorecido:"SEBASTIAO DA SILVA",valorcheque:"2557,45"},{favorecido:"JOAO DE SOUSA",valorcheque:"4445,35"}]. Quando inserido o array no campo, o sistema irá verificar quantos objetos tem no array, gerar os cheques, preenchendo os campos conforme o array.

![Screenshot 4](./img/Screenshot_4.png)

Na ultima captura, vemos que os cheques tem o mesmo favorecido e valores. Isso graças aos botões 'Duplic.Fav.' e Duplic.Val' do lado direito, como diz o nome o mesmo irá duplicar o favorecido do primeiro cheque e copiar nos demais, assim como o valor.
Vemos que temos dois botões acima também, que são 'Emitir Cheques' e 'Favorecido ...'. 
Ao clicar no botao emitir cheques, o mesmo irá pegar os dados de todos os cheques e gerar um arquivo '.PRN' que normalmente é usado para imprimir em impressoras matriciais. Ele manda os dados puros direto para a impressora com uma largura maxima de 118 caracteres por linha. Cada banco tem seu Layout de cheques, a mesma está configurada para um banco com formulario de cheques de tamanho de 18 linhas. O segundo botão favorecido, irá baixar um arquivo apenas com o nome de um favorecido pré cadastrado no HTML, para facilitar. para sanar um problema de esquecimento de preenchimento de favorecido .
Em uma próxima atualização adiconarei uma checkagem para verificar se realmente quer imprimir um cheque sem favorecido. E bloquear emissão de cheque sem valor. 

![Screenshot 5](./img/Screenshot_5.png)
