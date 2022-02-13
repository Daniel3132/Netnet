const elegido = JSON.parse(localStorage.getItem('video'));
console.log(elegido);
const titulo = document.getElementById('titulo')
const imagen = document.getElementById('contImg')
const info = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const cartas = document.getElementById('similares')

//PONER IMAGEN E INFO DESDE ID TRAIDO DE LOCAL STORAGE
async function pintarVentana(){
    //AWAIT DE PRIMERO
    const pelis = await getVideos()
    //PINTAR LEAD INFO
    elegido.forEach(element => {
        const {name, info1, image2, elenco, director, id, tipo } = element;
        globalThis.aidi = id;
        globalThis.tipoo = tipo;
        titulo.innerHTML=` ${name} `
        imagen.innerHTML=`<img class="imagen" src="${image2}") > `
        info.innerHTML=`${info1}`
        info2.innerHTML=`${elenco}`
        info3.innerHTML=`${director}`
//PINTAR CARTAS
        pelis.forEach(async element =>{
            const {image, id, tipo} = element
            if (id !== aidi && tipo == tipoo){
                const pintarDiv = document.createElement('div')
                pintarDiv.classList.add('movies')
                pintarDiv.innerHTML = 
                `<img src="${image}" alt="" class="imgMovie" id="${id}"   onclick="verVideo(${id})"       >  `
                cartas.appendChild(pintarDiv)
            }
        })
    });
}
window.addEventListener('DOMContentLoaded', pintarVentana());
//////////////////////////////////////////////////////////////////////////

async function getVideos (){
    try {
        const resp = await fetch('http://localhost:3000/peliculas');
        const pelis = await resp.json()
        return pelis
    }catch (error){
        return console.log(error);
    }
}
//GUARDAR ID EN LS
async function verVideo(id){
    const pelis = await getVideos()
    const result = pelis.filter((movie)=> movie.id === id)
    localStorage.setItem('video', JSON.stringify(result))
    window.location.href = './descarga.html'
}

//////////////////////////////////////////////////////////////////////







    