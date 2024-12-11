# Actividad 8: MUSIC PLAYER

Comenzaremos a trabajar con arrays prácticando con los siguientes ejercicios. 


<!-- 1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción. -->
<!-- 2. Crear un array con 5 artistas que correspondan a cada canción del primer array. -->
<!-- 3. Mostrar en un HTML un DIV por cada canción y artista generado con JS a partir de la información del array. -->
<!-- 4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array. -->
<!-- 5. Agrega botones de "siguiente", "anterior", "play", "pausa" con ids únicos para cada uno, y agrega el siguiente código JS en tu archivo, pruebalo y comenta que hace el código: -->

```js
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});
```

<!-- 6. Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente. -->
<!-- 7. Actualiza el punto anterior para mostrar en el HTML un párrafo con el nombre de la canción y el artista de la canción correspondiente al hacer click en cada div. Te animas a agregar un tercer array con imágenes del artista y mostrar la imagen correspondiente al hacer click en cada div? -->
<!-- 8. Dale la funcionalidad necesaria a los botones Siguiente, Anterior para que pase de una canción a otra en el array de canciones mostrado en el HTML. -->










```js
// EJERCICIO 1, EJERCICIO 2
const lista_canciones = ["All I want for Christmas is you", "Last Christmas", "Holly Jolly Christmas", "It's the most wonderful time of the year", "Santa tell me"]
const lista_artistas = ["Mariah Carey", "Wham!", "Michael Bublé", "Andy Williams", "Ariana Grande"]

const divListaCanciones = document.getElementById("ListaCanciones");
let idCancionActual = 0; // primera cancion

// EJERCICIO 3
lista_canciones.forEach((cancion, index) => {
    console.log(`${cancion} - id: ${index}`);

    const song = lista_canciones[index];
    const artist = lista_artistas[index];

    // innerHTML (usamos el + para agregar un nuevo elemento) apend, push, +=
    // divListaCanciones.innerHTML += `<div class="Lista-cancion">
    //                                   ${index}. ${song} <br> ${artist}
    //                            </div>`;

    divListaCanciones.innerHTML += `<div id="song_${index}" class="Lista-cancion">
                                      ${song} <br>
                                      ${artist}
                              </div>`
});

// EJERCICIO 4
const btnTema3 = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    // indice 2 es cancion num3 porque empieza de 0.
    console.log("Cancion: ", lista_canciones[2]);
    console.log(`Artista: ${lista_artistas[2]}`);
    imprimirReproduciendo(2); // Holly Jolly Christmas de MB
})

// EJERCICIO 5
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});

// EJERCICIO 6
// buscamos en nuestp HTML todos los divs con class = "Lista_caciones"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {

        // const id= event.target.id; // song_4
        idCancionActual = i;
        imprimirReproduciendo();

    });
});

function imprimirReproduciendo() {

    const song = lista_canciones[idCancionActual];
    const artist = lista_artistas[idCancionActual];
    console.log("Artista: " + artist + " - cancion: " + song);

    divPlayingSong.innerHTML = `<div> 
                                    cancion: ${song} <br/>
                                    artista: ${artist}
                                </div>`;
}


// EJERCICIO 8
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");


btnSig.addEventListener("click", ()=> {
    idCancionActual++;
    // revisar que no me pase de la ultima cancion (empiece x la 1a)
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", ()=> {
    idCancionActual--;
    // que si estoy en la primera, me voy a última
    imprimirReproduciendo();
});
```