function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#image');
    var greet = window.document.querySelector('div#greet');
    var data = new Date();
    var hora = data.getHours() + 10;
    var min = data.getMinutes();
    var sec = data.getUTCSeconds();
    var timer = setInterval(carregar, 1000);
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    msg.innerHTML = `${hora}:${min}:${sec}`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        window.document.body.style.background = 'linear-gradient(to right, #d3f9a7, #b3ae27)';
        greet.innerHTML = 'Bom Dia';
    } else if (hora >= 12 && hora < 18) {
            img.src = 'tarde.jpg'; //O erro está por aqui
            window.document.body.style.background = 'linear-gradient(to right, #ffc500, #c21500)';
            greet.innerHTML = 'Boa Tarde';
        } else {
            img.src = 'noite.jpg';
            window.document.body.style.background = 'linear-gradient(to right, #072530, #111129)';
            greet.innerHTML = 'Boa Noite';
        }
}
/* 
Problemas
- O relógio precisa ser dinâmico ok
- O limite de horas precisa ser de 23:59:59 ok 
- Uma mensagem de interação com o usuario ok
*/