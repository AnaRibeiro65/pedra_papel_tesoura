var elementos = document.querySelectorAll('.player-jogador div > img');
var jogadorOpt =''
var inimigoOpt =''

function validarVitoria(){

    let venceor = document.querySelector('.venceor');
    
    if(jogadorOpt == 'papel'){

        if(inimigoOpt == 'papel'){
            venceor.innerHTML = 'O jogo foi empatado';
            document.querySelector('.venceor').style.color = 'blue';
        }else if(inimigoOpt == 'tesoura' ){
            venceor.innerHTML = 'Você perdeu o jogo';
            document.querySelector('.venceor').style.color = 'red';
        }else if(inimigoOpt == 'pedra' ){
            venceor.innerHTML = 'Você ganhou o jogo';
            document.querySelector('.venceor').style.color = 'green';
        }
    }

    if(jogadorOpt == 'tesoura'){

        if(inimigoOpt == 'papel'){
            venceor.innerHTML = 'Você ganhou o jogo';
            document.querySelector('.venceor').style.color = 'green';
        }else if(inimigoOpt == 'tesoura' ){
            venceor.innerHTML = 'O jogo foi empatado';
            document.querySelector('.venceor').style.color = 'blue';
        }else if(inimigoOpt == 'pedra' ){
            venceor.innerHTML = 'Você perdeu o jogo';
            document.querySelector('.venceor').style.color = 'red';
        }
    }

    if(jogadorOpt == 'pedra'){

        if(inimigoOpt == 'papel'){
            venceor.innerHTML = 'Você perdeu o jogo';
            document.querySelector('.venceor').style.color = 'red';
        }else if(inimigoOpt == 'tesoura' ){
            venceor.innerHTML = 'Você ganhou o jogo';
            document.querySelector('.venceor').style.color = 'green';
        }else if(inimigoOpt == 'pedra' ){
            venceor.innerHTML = 'O jogo foi empatado';
            document.querySelector('.venceor').style.color = 'blue';
        }
    }
}


function retiraOpacInimig(){
    const playerMaquina = document.querySelectorAll('.player-maquina div');
    for( var i = 0; i < playerMaquina.length; i++){
        playerMaquina[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogo(){
    let rand = Math.floor(Math.random()*3);

    const playerMaquina = document.querySelectorAll('.player-maquina div');
    retiraOpacInimig();
    for(var i = 0; i < playerMaquina.length; i++){
      if(i == rand){
            playerMaquina[i].childNodes[0].style.opacity = 1;
            inimigoOpt = playerMaquina[i].childNodes[0].getAttribute('opt');
      }
  }
  
  validarVitoria();
}

function retiraOpacidade(){
    for(i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        retiraOpacidade();
        t.target.style.opacity =1;
        jogadorOpt = t.target.getAttribute('opt')

        inimigoJogo()
    });
}





