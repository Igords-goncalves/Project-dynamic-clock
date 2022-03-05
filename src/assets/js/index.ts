function carregar(): any {
    const msg:any  = document.querySelector('#msg')
    const img: any = document.querySelector('#image')
    const greetings: any = document.querySelector('#greetings')

    const data: any = new Date()
    let hora: any = data.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'})
    
    const newHora: number = parseInt(hora)

    const sec = setInterval(carregar ,1000)
    msg.innerHTML = hora
    function mudancaDeHorario (): void  {
        
            if (newHora == 0 && newHora < 12) {
                img.src = './assets/img/manha.jpg';
                
        
                document.body.style.background = 
                `linear-gradient(to right, #d7e060d0, #e9d736d0),
                url(./assets/img/bgmorning.jpg)`
        
                greetings.innerHTML = 'Bom Dia!'
                
            } else if (newHora >= 12 && newHora < 18) {
                    img.src = './assets/img/tarde.jpg'
                    
                    document.body.style.background = 
                    `linear-gradient(to right, #ffc500dc, #c21500dc),
                    url(./assets/img/bgafternoon.jpg)`
        
                    greetings.innerHTML = 'Boa Tarde!'
        
                } else {
                    img.src = './assets/img/noite.jpg'
        
                    document.body.style.background = 
                    `linear-gradient(to right, #072530d0, #111129d0),
                    url(./assets/img/bgnight.jpg)`
        
                    greetings.innerHTML = 'Boa Noite!'
                }
            }
    mudancaDeHorario()
}