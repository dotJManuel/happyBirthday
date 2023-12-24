

document.addEventListener("DOMContentLoaded", function () {
    const mostrarImagenBtn = document.getElementById("btn-gift");
    const overlay = document.getElementById("overlay");
    const imgGift = document.getElementById("imgGift");

    mostrarImagenBtn.addEventListener("click", function () {
        overlay.style.display = "flex";

        setTimeout(function () {
            imgGift.classList.add("ampliada");
        }, 50);
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
            imgGift.classList.remove("ampliada");
        }
    });

    imgGift.addEventListener("click", function () {
        overlay.style.display = "none";
        imgGift.classList.remove("ampliada");

        setTimeout(function () {
            imgGift.classList.add("reducir");
        }, 50);
    });

    const valorURL = obtenerValorParametro('id');
    insertarTexto(valorURL);
    cambiarImgGift(valorURL);

});

document.addEventListener('click', startAudio);
document.addEventListener('scroll', startAudio);

function startAudio() {
    const audio = document.getElementById('myAudio');
    audio.play();
}

function obtenerValorParametro(nombreParametro) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombreParametro);
}

function insertarTexto(valorURL){
    const textId = document.getElementById("textId");

    if(valorURL === 'dani'){
        textId.innerText = '"Que esta Navidad sea el inicio de un nuevo capítulo lleno de éxitos y alegrías. Eres una persona increíble, y mereces todo lo maravilloso que la vida tiene para ofrecer. ¡Feliz Navidad!" 🎅🙌';
    }
    else if(valorURL === 'carolina' ){
        textId.innerText = '"En esta Navidad, quiero enviarte mis mejores deseos. Que tengas unas fiestas llenas de alegría y momentos especiales. ¡Feliz Navidad!" 🎆🎆🍾🍾';
    }
    else if(valorURL === 'camargo' ){
        textId.innerText = '"Aunque ya no nos veamos, quiero desearte una Navidad llena de amor y felicidad. Que tengas un tiempo maravilloso con tus seres queridos. ¡Feliz Navidad!" 👌☃️';
    }
    else if(valorURL === 'tapia' ){
        textId.innerText = '"Que la Navidad te agarre con las manos llenas de regalos y la panza llena de comida rica. ¡Que disfrutes a lo grande! ¡Feliz Navidad!" 🤣🍾🍾';
    }
    else if(valorURL === 'enrique' ){
        textId.innerText = '" En esta Navidad, que tus líneas de código sean eficientes, tus bugs sean mínimos y tus proyectos se desplieguen sin complicaciones. Que el espíritu navideño no tenga "bugs" y que tu Año Nuevo compile con éxito. ¡Felices fiestas! 🎄💻"';
    }
    else if(valorURL === 'luz' ){
        textId.innerText = '"Que esta Navidad esté llena de alegría, amor y paz. ¡Felices fiestas para ti y tu familia! Que el próximo año traiga aún más bendiciones." 😁🎅🙌';
    }
    else if(valorURL === 'dulce' ){
        textId.innerText = '"Querida amiga, creo que nuestra amistad está teniendo una dieta de palabras últimamente. Menos charla, más misterio. 😄 ¡Felices fiestas! Que esta Navidad nos traiga la capacidad de comunicarnos telepáticamente y resolver este enigma."';
    }
    else if(valorURL === 'mom' ){
        textId.innerText = '"Que la luz de la temporada ilumine tus caminos y que encuentren paz en medio de las dificultades. ¡Feliz Navidad! 🎆☃️🎅🎄🙌🫶"';
    }
    else if(valorURL === 'code' ){
        textId.innerText = '"En esta Navidad, espero que encuentres la paz que nunca has tenido al tratar de solucionar ese bug persistente. ¡Que la magia de la temporada finalmente resuelva tus problemas de código!" 💻😅';
    }
    else{
        textId.innerText = '"Espero que esta temporada navideña esté llena de alegría, amor y felicidad para ti y tu familia. Que la magia de la Navidad te llene de esperanza y te inspire a alcanzar tus sueños." 🎅';
    }
}

function cambiarImgGift(valorURL){
    const imgGift = document.getElementById("imgGift");

    if(valorURL === 'dani'){
        imgGift.src = "./xmas/dani.gif";
        imgGift.alt = "xmas-anime";
    }
    else if(valorURL === 'carolina' ){
        imgGift.src = "./xmas/carolina.gif";
        imgGift.alt = "messi";
    }
    else if(valorURL === 'camargo' ){
        imgGift.src = "./xmas/camargo.gif";
        imgGift.alt = "santa claus";
    }
    else if(valorURL === 'tapia' ){
        imgGift.src = "./xmas/tapia.webp";
        imgGift.alt = "santa claus";
    }
    else if(valorURL === 'enrique' ){
        imgGift.src = "./xmas/code.gif";
        imgGift.alt = "dinosaurio";
    }
    else if(valorURL === 'luz' ){
        imgGift.src = "./xmas/mom.gif";
        imgGift.alt = "feliz navidad";
    }
    else if(valorURL === 'mom' ){
        imgGift.src = "./xmas/mom.gif";
        imgGift.alt = "feliz navidad";
    }
    else if(valorURL === 'code' ){
        imgGift.src = "./xmas/code.gif";
        imgGift.alt = "dinosaurio";
    }
}