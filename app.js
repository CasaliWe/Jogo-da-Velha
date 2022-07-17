document.getElementById('btn1').addEventListener('click', (e)=>{
       var btn = e.target
       var player = document.querySelector('#jogador > span').textContent
       btn.textContent = player
       if(document.querySelector('#jogador > span').textContent == 'X'){
               document.querySelector('#jogador > span').textContent = 'O'
       } else {
               document.querySelector('#jogador > span').textContent = 'X'
       }  

       if(document.getElementById('btn1').textContent == 'O'){
              document.getElementById('btn1').style.color = 'black'
       }

       verficiarV();
})

document.getElementById('btn2').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn2').textContent == 'O'){
        document.getElementById('btn2').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn3').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn3').textContent == 'O'){
        document.getElementById('btn3').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn4').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn4').textContent == 'O'){
        document.getElementById('btn4').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn5').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    } 
    
    if(document.getElementById('btn5').textContent == 'O'){
        document.getElementById('btn5').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn6').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    } 
    
    if(document.getElementById('btn6').textContent == 'O'){
        document.getElementById('btn6').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn7').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn7').textContent == 'O'){
        document.getElementById('btn7').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn8').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn8').textContent == 'O'){
        document.getElementById('btn8').style.color = 'black'
    }

    verficiarV();
})

document.getElementById('btn9').addEventListener('click', (e)=>{
    var btn = e.target
    var player = document.querySelector('#jogador > span').textContent
    btn.textContent = player
    if(document.querySelector('#jogador > span').textContent == 'X'){
            document.querySelector('#jogador > span').textContent = 'O'
    } else {
            document.querySelector('#jogador > span').textContent = 'X'
    }  

    if(document.getElementById('btn9').textContent == 'O'){
        document.getElementById('btn9').style.color = 'black'
    }

    verficiarV();
})







function verficiarV(){
      var getBtn = document.querySelectorAll('.btnn')
      var valueBtnX = []
      var valueBtnO = []
      getBtn.forEach((valor)=>{
               if(valor.textContent == 'X'){
                      valueBtnX.push(valor.value)
               } else if(valor.textContent == 'O') {
                      valueBtnO.push(valor.value)
               }
      })


    win(valueBtnX,valueBtnO);
}



function win(X, O){
    if(X.indexOf('1') != -1 && X.indexOf('2') != -1 && X.indexOf('3') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('4') != -1 && X.indexOf('5') != -1 && X.indexOf('6') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('7') != -1 && X.indexOf('8') != -1 && X.indexOf('9') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('1') != -1 && X.indexOf('4') != -1 && X.indexOf('7') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('2') != -1 && X.indexOf('5') != -1 && X.indexOf('8') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('3') != -1 && X.indexOf('6') != -1 && X.indexOf('9') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('1') != -1 && X.indexOf('5') != -1 && X.indexOf('9') != -1) {
           fimDeJogo('X');
    } else if(X.indexOf('3') != -1 && X.indexOf('5') != -1 && X.indexOf('7') != -1) {
           fimDeJogo('X');
    }


      if(O.indexOf('1') != -1 && O.indexOf('2') != -1 && O.indexOf('3') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('4') != -1 && O.indexOf('5') != -1 && O.indexOf('6') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('7') != -1 && O.indexOf('8') != -1 && O.indexOf('9') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('1') != -1 && O.indexOf('4') != -1 && O.indexOf('7') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('2') != -1 && O.indexOf('5') != -1 && O.indexOf('8') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('3') != -1 && O.indexOf('6') != -1 && O.indexOf('9') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('1') != -1 && O.indexOf('5') != -1 && O.indexOf('9') != -1) {
            fimDeJogo('O');
      } else if(O.indexOf('3') != -1 && O.indexOf('5') != -1 && O.indexOf('7') != -1) {
            fimDeJogo('O');
      } 


      verficiarE();

}




function fimDeJogo(player){
        setTimeout(() => {
             document.getElementById('game').style.display = 'none'
             document.getElementById('playerWin').textContent = player
             document.getElementById('msgWin').style.display = 'block'
             document.querySelector('a').style.display = 'block'

             if(player == 'O'){
                  document.getElementById('playerWin').style.color = 'black'
             }
        }, 300);
}



function  verficiarE(){
       if(document.getElementById('btn1').textContent != '' && document.getElementById('btn2').textContent != '' && document.getElementById('btn3').textContent != '' && document.getElementById('btn4').textContent != '' && document.getElementById('btn5').textContent != '' && document.getElementById('btn6').textContent != '' && document.getElementById('btn7').textContent != '' &&document.getElementById('btn8').textContent != '' &&document.getElementById('btn9').textContent != ''){
              setTimeout(() => {
                    if(document.getElementById('playerWin').textContent == ''){
                        setTimeout(() => {
                            document.getElementById('game').style.display = 'none'
                            document.getElementById('empate').style.display = 'block'
                            document.querySelector('a').style.display = 'block'
                       }, 300);
                    } 
              }, 1000);
       }
}
