function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#image');
    var greet = window.document.querySelector('div#greet');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var sec = data.getUTCSeconds();
    var timer = setInterval(carregar, 1000);
    
    if (min < 10) {min = '0' + min;}
    if (sec < 10) {sec = '0' + sec;}
    if (hora < 10) { hora = '0' + hora;}
    msg.innerHTML = `${hora}:${min}:${sec}`;

    if (hora >= 0 && hora < 12) {
        img.src = './gif/sunrise.gif';
        window.document.body.style.background = 'linear-gradient(to right, #d7e060d0, #e9d736d0), url(./img/bgmorning.jpg)';
        greetings.innerHTML = 'Bom Dia!';
    } else if (hora >= 12 && hora < 18) {
            img.src = './gif/sunset.gif'; //O erro está por aqui
            window.document.body.style.background = 'linear-gradient(to right, #ffc500dc, #c21500dc), url(./img/bgafternoon.jpg)';
            greetings.innerHTML = 'Boa Tarde!';
        } else {
            img.src = './gif/night.gif';
            window.document.body.style.background = 'linear-gradient(to right, #072530d0, #111129d0), url(./img/bgnight.jpg)';
            greetings.innerHTML = 'Boa Noite!';
        }
}
/* 
Problemas
- O relógio precisa ser dinâmico ok
- O limite de horas precisa ser de 23:59:59 ok 
- Uma mensagem de interação com o usuario ok
*/