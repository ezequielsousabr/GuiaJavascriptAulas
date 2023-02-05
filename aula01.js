var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpites(){

  var palpiteUsuario = Number(campoPalpite.value);

  if(contagemPalpites == 1){
    palpites.textContent += palpiteUsuario + ' ';
  }

  if(palpiteUsuario === numeroAleatorio){
    ultimoResultado.textContent = "Parabéns! Voce acertou...";
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = ' ';

    configFimDeJogo();
  }
  else if(contagemPalpites === 10){
    ultimoResultado.textContent = "Fim de Jogo!!!!";
    baixoOuAlto.textContent = ' ';
    configFimDeJogo();
  }
  else{
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.backgroundColor = 'red';
    
    if(palpiteUsuario < numeroAleatorio){
      baixoOuAlto.textContent = "Seu palpite esta muito baixo!";
    }
    else if(palpiteUsuario > numeroAleatorio){
      baixoOuAlto.textContent = "Seu palpite esta muito alto!";
    }
  }

  palpiteUsuario++;
  campoPalpite.value = "";
  campoPalpite.focus();

}

envioPalpite.addEventListener('click', conferirPalpites);

function configFimDeJogo(){
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  document.body.appendChild(botaoReinicio);
  botaoReinicio.textContent = "Reiniciar Jogo!";

  botaoReinicio.setAttribute('class', 'botaoReiniciar');
  
  botaoReinicio.addEventListener('click', reniciarJogo);
}

function reiniciarJogo(){
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll('.reiniciarParas p');

  for(var i = 0; i < reiniciarParas.length; i++){
    reiniciarParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  campoPalpite.value = '';
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = 'white';

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}