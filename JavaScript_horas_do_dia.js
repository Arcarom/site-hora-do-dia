function confirmar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = window.document.getElementById('hora')
    
    msg.innerHTML = `agora são ${hora.value} horas.`
    if (hora.value >= 6 && hora.value <= 12){
        //Bom Dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora.value > 12 && hora.value < 18){
        // boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        // boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
    }   

}
//document.body.style.background (mudar o background do site usando js com style de css)