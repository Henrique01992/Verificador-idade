function 

    verificar() 
    {
        
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano  ) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
               img.setAttribute('src', 'menino.jpg')
            }else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'homemjovem.jpg')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }
            else {
                // idoso

                img.setAttribute('src', 'homemidoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            }else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }
            else {
                //idosa
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado, <strong>${genero}</strong> com <strong>${idade}</strong> anos. `
        res.appendChild(img)
        

    }
    

}
/* Adiciona o EventListener fora da função verificar(),
garantindo que ele seja executado assim que a página carregar.*/

document.getElementById('txtano').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificar(); // Chama a função verificar()
    }
});