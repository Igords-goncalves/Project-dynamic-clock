"use strict";
function carregar() {
    const msg = document.querySelector('#msg');
    const img = document.querySelector('#image');
    const greetings = document.querySelector('#greetings');
    const data = new Date();
    let hora = data.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const newHora = parseInt(hora);
    const sec = setInterval(carregar, 1000);
    msg.innerHTML = hora;
    function mudancaDeHorario() {
        if (newHora == 0 && newHora < 12) {
            img.src = './assets/img/manha.jpg';
            document.body.style.background =
                `linear-gradient(to right, #d7e060d0, #e9d736d0),
                url(./assets/img/bgmorning.jpg)`;
            greetings.innerHTML = 'Bom Dia!';
        }
        else if (newHora >= 12 && newHora < 18) {
            img.src = './assets/img/tarde.jpg';
            document.body.style.background =
                `linear-gradient(to right, #ffc500dc, #c21500dc),
                    url(./assets/img/bgafternoon.jpg)`;
            greetings.innerHTML = 'Boa Tarde!';
        }
        else {
            img.src = './assets/img/noite.jpg';
            document.body.style.background =
                `linear-gradient(to right, #072530d0, #111129d0),
                    url(./assets/img/bgnight.jpg)`;
            greetings.innerHTML = 'Boa Noite!';
        }
    }
    mudancaDeHorario();
}
//# sourceMappingURL=index.js.map