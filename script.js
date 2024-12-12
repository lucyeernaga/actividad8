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
        url:"https://ia803101.us.archive.org/0/items/mariahcareyalliwantforchristmasisyou_201912/Mariah%20Carey%20-%20All%20I%20Want%20For%20Christmas%20Is%20You.mp3",
        img: "./img/MariahCarey.webp",
        titulo: "All I want for Christmas is you"
    },{ 
        artista: "Wham!",
        url:"https://ia904602.us.archive.org/4/items/wham-last-christmas-extended-version-of-original-45-mix-m-128s-re-creation/Wham%21%20-%20Last%20Christmas%20%28Extended%20Version%20of%20Original%2045%20Mix%29%20%5BM128%27s%20Re-creation%5D.mp3",
        img: "./img/Wham.jpg",
        titulo: "Last Christmas"
    },{ 
        artista: "Michael Bublé",
        url:"https://ia800307.us.archive.org/20/items/ChristmasMichael/Holly%20Jolly%20Christmas.mp3",
        img: "./img/MichaelBuble.jpg",
        titulo: "Holly Jolly Christmas"
    },{ 
        artista: "Andy Williams",
        url:"./img/Andy_Williams_-_The_Most_Wonderful_Time_Of_The_Year_CeeNaija.com_.mp3",
        img: "./img/AndyWilliams.jpg",
        titulo: "It's the most wonderful time of the year"
    },{ 
        artista: "Ariana Grande",
        url:"https://ia601503.us.archive.org/0/items/ariana-grande-santa-tell-me-official-video-128-kbps.lite/Ariana%20Grande%20-%20Santa%20Tell%20Me%20%28Official%20Video%29%20%28128%20kbps%29.lite.mp3",
        img:"./img/ArianaGrande.jpg",
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
    const img = lista_canciones[idCancionActual].img; 
    const imgId = `imagenReproduciendo_${idCancionActual}`; // he creado un id único
    
    console.log("Artista: " +artist+ " - cancion: "+song);

    divPlayingSong.innerHTML = `<div class="playingSong"> 
                                  Cancion Actual: ${idCancionActual} <br/>
                                  Cancion: ${song} <br/>
                                  Artista: ${artist} <br/>
                                  <img class="imagenReproduciendo" id="${imgId}" src='${img}' alt="${song}" />
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
    const img = cancion.img;

    // innerHTML (usamos el + para agregar un nuevo elemento) apend, push, +=
    
    // divListaCanciones.innerHTML += `<div class="Lista-cancion">
    //                                   ${index}. ${song} <br> ${artist}
    //                            </div>`;

    divListaCanciones.innerHTML += `<div id="song_${index}" class="Lista-cancion">
                                      <img class="Lista-cancion--img" src="${img}" alt="${song}"/>
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