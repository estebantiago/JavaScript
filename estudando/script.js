function carregar(){
    var diaSem = document.getElementById('dia-semana')
    var texto = document.getElementById('frase')

    var data = new Date()
    var dia = data.getDay()

    
    
    switch(dia){
        case 0:
            
            document.body.style.background='#f79b9b9a'
            diaSem.innerHTML='Domingo'
            texto.innerHTML=' Renove sua esperança e prepare seu coração para uma nova semana. Reflita sobre o que passou, agradeça pelo que tem e mantenha a fé no que está por vir'
            break
        case 1:
            
            document.body.style.background='#f1c18194'
            diaSem.innerHTML=' Segunda-feira'
            texto.innerHTML=' "Comece a semana com coragem e determinação. Não se prenda aos erros de ontem, use-os como lição. Cada passo dado hoje é um investimento no seu amanhã. "'
            break
        case 2:
            document.body.style.background='#f7a91a9a'
            diaSem.innerHTML='Terça-feira'
            texto.innerHTML='Você já superou dias difíceis antes, e vai superar de novo. Mantenha o foco e não se desvie do seu objetivo. O esforço que você coloca hoje será o combustível das suas conquistas.'
            break
        case 3:
            document.body.style.background='#eeee669c'
            diaSem.innerHTML='Quarta-feira'
            texto.innerHTML='O meio da semana é o teste da sua força. Respire fundo, olhe para frente e continue. Quem mantém o ritmo agora chega mais longe do que imagina.'

            break
        case 4:
            document.body.style.background='#6bf76b7a'
            diaSem.innerHTML='Quinta-feira'
            texto.innerHTML='A jornada ainda não acabou e cada esforço conta. Lembre-se: grandes vitórias são construídas pouco a pouco. Hoje é o dia perfeito para avançar sem medo.'
            break
        case 5: 
        document.body.style.background='#7777fa7c'
            diaSem.innerHTML='Sexta-feira'
            texto.innerHTML='Você chegou até aqui porque não desistiu. Celebre suas pequenas vitórias e aprenda com os desafios. O fim da semana é só mais um passo na sua caminhada.'
            break
        case 6:
            document.body.style.background='#f179f175'
            diaSem.innerHTML='Sábado'
            texto.innerHTML='Aproveite o dia para recarregar suas energias e alimentar sua mente com coisas boas. A vida é feita de equilíbrio entre trabalho e descanso. Você merece esse momento.'
            break
    }
    
}

