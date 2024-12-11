// ---------------------------------------------------------------
// 1. Nuestros datos 
// ---------------------------------------------------------------

// const lista_canciones = ["All I want for Christmas is you", "Last Christmas", "Holly Jolly Christmas", "It's the most wonderful time of the year", "Santa tell me"]
// const lista_artistas = ["Mariah Carey", "Wham!", "Michael Bublé", "Andy Williams", "Ariana Grande"]
// const lista_mp3 = [
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"];


const lista_canciones = [
    { 
        artista: "Mariah Carey",
        url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://mi-imagen1.png",
        titulo: "All I want for Christmas is you"
    },{ 
        artista: "Wham!",
        url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://mi-imagen2.png",
        titulo: "Last Christmas"
    },{ 
        artista: "Michael Bublé",
        url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://mi-imagen13png",
        titulo: "Holly Jolly Christmas"
    },{ 
        artista: "Andy Williams",
        url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://mi-imagen4.png",
        titulo: "It's the most wonderful time of the year"
    },{ 
        artista: "Ariana Grande",
        url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://mi-imagen5.png",
        titulo: "Santa tell me"
    }
];

// primer elemento de mi lista, leo su artista.
console.log(lista_canciones[0].artista);






// ---------------------------------------------------------------
// 2. Constantes, Variables y QuerySelectors
// ---------------------------------------------------------------

const divListaCanciones = document.getElementById("ListaCanciones");


// obtener nuestro audios HTML
// usando querySelector para agarrar una etiqueta HTML
const audioPlayer = document.querySelector("audio");
// buscamos en nuestp HTML todos los divs con class = "Lista_caciones"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

// botones
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
const btnplay = document.querySelector("#btnPlay");
const btnpausa = document.querySelector("#btnPausa");
const btnTema3 = document.querySelector("#btnTema3");

let idCancionActual = 0; // primera cancion






// ---------------------------------------------------------------
// 3. Funciones y event listeners
// ---------------------------------------------------------------

function imprimirReproduciendo() {

    const song = lista_canciones[idCancionActual].titulo;
    const artist = lista_canciones[idCancionActual].artista;
    const url = lista_canciones[idCancionActual].url;
    
    console.log("Artista: " +artist+ " - cancion: "+song);

    divPlayingSong.innerHTML = `<div> 
                                    idCancionActual: ${idCancionActual} <br/>
                                    cancion: ${song} <br/>
                                    artista: ${artist}
                                </div>`;

    // cambiar el src de nuestro audio HTML
    console.log(audioPlayer);
    audioPlayer.src = url;
}

const handleReproducir = ()=> {
    audioPlayer.play();
}

const handlePausar = ()=> {
    audioPlayer.pause();
}

btnTema3.addEventListener("click", ()=>{
    idCancionActual = 2;
    // indice 2 es cancion num3 porque empieza de 0.
    // console.log("Cancion: ", lista_canciones[2]);
    // console.log(`Artista: ${lista_artistas[2]}`);
    imprimirReproduciendo(2); // Holly Jolly Christmas de MB
})

document.addEventListener('click', (event)=>{
    console.log(event.target.id);
});

btnSig.addEventListener("click", ()=> {
    idCancionActual++;

    // preguntar algo.. que si es la ultima cancion 
        if(idCancionActual == lista_canciones.length -1) {
            idCancionActual = 0; // si es cierto, idCancion = 0
        } else {
            idCancionActual++; // si no es cierto, idCancion va a sumar 1 
        }

    // revisar que no me pase de la ultima cancion (empiece x la 1a)
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", ()=> {
    idCancionActual--;

    // preguntar si estoy en la primera cancion
    if(idCancionActual == 0){
        idCancionActual = lista_canciones.length -1; // 4
    } else {
        idCancionActual--;
    }




    // que si estoy en la primera, me voy a última
    imprimirReproduciendo();
});


// en vez de poner la funcion flecha sin nombre, se puede poner el nombre directam., pero es lo mismo (hayque escribir las dos funciones de arriba).
btnPlay.addEventListener("click", handleReproducir); 
btnPausa.addEventListener("click", handlePausar);




// ---------------------------------------------------------------
// 4. Nuestro código una vez cargado todo lo demás
// ---------------------------------------------------------------

lista_canciones.forEach((cancion, index)=>{
    console.log(`${cancion} - id: ${index}`);

    console.log(cancion);

    const song = cancion.titulo;
    const artist = cancion.artista;

    // innerHTML (usamos el + para agregar un nuevo elemento) apend, push, +=
    
    // divListaCanciones.innerHTML += `<div class="Lista-cancion">
    //                                   ${index}. ${song} <br> ${artist}
    //                            </div>`;

    divListaCanciones.innerHTML += `<div id="song_${index}" class="Lista-cancion">
                                      ${song} <br>
                                      ${artist}
                              </div>`
});

divsCanciones.forEach((divCancion, i)=>{
    divCancion.addEventListener("click", (event) => {
        idCancionActual= i;
        imprimirReproduciendo();

    });
});
