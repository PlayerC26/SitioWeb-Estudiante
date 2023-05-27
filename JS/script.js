const historia = [
{ 
    name: "2000 A.C ",
    description: "En un bajorrelieve egipcio se ven dos personas utilizado palos con una pelota entre ellos."
},
{
    name:"500 A.C",
    description:"hay otra prueba más reciente pero que corresponde a la Antigua Grecia, concretamente al 500 a. C. En esta imagen en mármol, que se puede ver en el ‘National Archaeological Museum de Atenas’, se puede ver a varios hombres desnudos jugando a empujar una pelota con bastones curvos algunos expertos señalan que estos ‘palos’ o lo que hoy conoce como stick podrían ser cuernos de algún animal cazado"
},
{
    name:"1527",
    description:"En Irlanda se menciona el juego hockie: 'El lanzamiento de una pequeña bola con palos o varas de hockey'. Debido a estos antecedentes, es poco posible que varios siglos después, cuando los británicos invadieron la India en 1757, hayan adoptado un juego parecido al hockey y lo hayan llevado a Europa. Otros juegos parecidos al hockey son el hurling y el shinty."
},
{
    name:"Siglo XVI",
    description:"En el continente americano los mapuches practicaron un deporte con una bola que debían dominar con bastones, llamado «chueca» o «palín». Así mismo los primeros pobladores del occidente de México, los p'urhepecha, practicaron desde hace unos 3500 años un deporte similar de nombre Uarukua Chanakua o pasarutakua, un deporte muy similar a el hockey sobre césped, el cual se jugaba con bastones tallados en madera que recibian el nombre de uarukua"
},
{
    name:"Siglo XIX",
    description:"Un juego parecido al hockey moderno se practicó en escuelas públicas inglesas a principios del siglo XIX. El primer club de hockey fue el Blackheath Football and Hockey Club, en Londres, que se fundó alrededor de 1861."
},
{
    name:"1871 - 1875",
    description:"En 1871 se formó el Teddington Hockey Club y en 1875 la Asociación Inglesa de Hocke. El creador de hockey sobre césped fue James Creighton, se registra en Montreal en el Victoria Skating Rink el tres de marzo de 1875, con dos equipos de nueve jugadores cada uno. James Creighton organizó el juego e incluso capitaneó a uno de los equipos."
},
{
    name:"1876",
    description:"En 1876 se creó en el Reino Unido la primera Asociación de Hockey, que estableció el primer reglamento oficial. La asociación sólo duró seis años, pero fue reactivada una década más tarde por nueve clubes miembros fundadores."
},
{
    name:"1880",
    description:"El juego se asentó definitivamente y las mujeres comenzaron a practicarlo con entusiasmo."
},
{
    name:"1886 - 1895",
    description:"El actual organismo rector del deporte en su modalidad masculina, la Asociación de Hockey, se fundó en 1886 y la Asociación Inglesa Femenina de Hockey en 1895, un año después de que lo hiciera la Unión Irlandesa de Hockey de Mujeres"
},
{
    name:"1890 - 1908",
    description:"Durante la década de 1890 se jugaron partidos internacionales y el hockey fue incluido en los Juegos Olímpicos de 1908."
},
{
    name:"1924 – 1990",
    description:"En 1924 se creó la Federación Internacional de Hockey (FIH). En 1982 se unificaron los juegos masculinos y femeninos bajo los auspicios de la FIH, que en la década de 1990 cuenta con más de cien países miembros."
},
{
    name:"1971 - 1974",
    description:"La Copa del Mundo de la FIH se celebró por primera vez en 1971 para hombres, y en 1974 para mujeres."
},
{
    name:"1978",
    description:"El Trofeo de Campeones se celebró por primera vez en la ciudad pakistaní Lahore en 1978 y compiten anualmente los seis mejores equipos masculinos del mundo"
},
{
    name:"1990-1991",
    description:"También se celebra la Copa de Europa de Equipos Campeones, organizada por primera vez en 1990 para hombres y 1991 para mujeres."
},
{
    name:"1994",
    description:"En 1994 la Copa del Mundo masculina se celebró en la ciudad australiana de Sídney y fue ganada por Pakistán, que es el único país que la ha ganado cuatro veces. La Copa del Mundo femenina se celebró el mismo año en Dublín y ganó por primera vez Australia. "
},
{
    name:"En la actualidad",
    description:"Actualmente el hockey sobre césped está dominado por países como Alemania, Argentina, Australia, Países Bajos y Reino Unido."
}

]

// render en el html

var html = "";
historia.forEach(e=>{
    html +="<section class='child'><section class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></section></section>";

})
timeLine.innerHTML = html

//animacion TimeLine

var _items = document.querySelectorAll(".child")

_items.forEach(element => {
    if(element.offsetTop < 300){
        element.classList.add('_show')
    }
})

window.addEventListener("scroll", e=>{
    var scroll = document.documentElement.scrollTop
    var item = document.querySelectorAll(".child")
    item.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }   
    })
})

//Carrusel

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });