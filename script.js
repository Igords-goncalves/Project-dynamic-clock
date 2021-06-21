function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#image');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    msg.innerHTML = `Horário Atual <strong>${hora}:${min}</strong>`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        window.document.body.style.background = 'linear-gradient(to right, #bdf9a7, #CAC531)';
    } else if (hora >= 12 && hora < 18) {
            img.src = 'tarde.jpg'; //O erro está por aqui
            window.document.body.style.background = 'linear-gradient(to right, #ffc500, #c21500)';
        } else {
            img.src = 'noite.jpg';
            window.document.body.style.background = 'linear-gradient(to left, #243B55, #141E30)';
        }
}
/* 
Problemas
- O relógio precisa ser dinâmico
- O limite de horas precisa ser de 23:59:59
- Uma mensagem de interação com o usuario
*/