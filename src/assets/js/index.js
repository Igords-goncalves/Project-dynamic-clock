"use strict";
function carregar() {
    const msg = document.querySelector('#msg');
    const img = document.querySelector('#image');
    const greetings = document.querySelector('#greetings');
    const data = new Date();
    let hora = data.getHours() + 3;
    let min = data.getMinutes();
    min < 10 ? min = '0' + min : 0;
    hora < 10 ? hora = '0' + hora : 0;
    msg.innerHTML = `${hora}:${min}`;
    if (hora >= 0 && hora < 12) {
        img.src = '../img/manha.jpg';
        document.body.style.background =
            `linear-gradient(to right, #d7e060d0, #e9d736d0),
        url()`;
        greetings.innerHTML = 'Bom Dia!';
    }
    else if (hora >= 12 && hora < 18) {
        img.src = '../img/tarde.jpg';
        document.body.style.background =
            `linear-gradient(to right, #ffc500dc, #c21500dc),
            url(../img/bgafternoon.jpg)`;
        greetings.innerHTML = 'Boa Tarde!';
    }
    else {
        img.src = '../img/noite.jpg';
        document.body.style.background =
            `linear-gradient(to right, #072530d0, #111129d0),
            url(../img/bgnight.jpg)`;
        greetings.innerHTML = 'Boa Noite!';
    }
}
//# sourceMappingURL=index.js.map