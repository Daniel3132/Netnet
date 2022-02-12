const elegido = JSON.parse(localStorage.getItem('video'));
console.log(elegido);
const titulo = document.getElementById('titulo')
const imagen = document.getElementById('contImg')
const info = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const cartas = document.getElementById('similares')

//PONER IMAGEN E INFO DESDE ID TRAIDO DE LOCAL STORAGE
function pintarVentana(){
    elegido.forEach(element => {
        const {name, info1, image2, elenco, director, id, tipo } = element;
        globalThis.aidi = id;
        globalThis.tipoo = tipo;
        titulo.innerHTML=` ${name} `
        imagen.innerHTML=`<img class="imagen" src="${image2}" >  `
        info.innerHTML=`${info1}`
        info2.innerHTML=`${elenco}`
        info3.innerHTML=`${director}`
    });
}
window.addEventListener('DOMContentLoaded', pintarVentana());
//////////////////////////////////////////////////////////////////////////
import {peliculas} from "./peliculas.js"

peliculas.forEach(element =>{
    const {image, id, tipo} = element
    if (id !== aidi && tipo == tipoo){
        const pintarDiv = document.createElement('div')
        pintarDiv.classList.add('movies')
        pintarDiv.innerHTML = 
        `<img src="${image}" alt="" class="imgMovie" id="${id}")">  `
        cartas.appendChild(pintarDiv)
    }
})
//////////////////////////////////////////////////////////////////////
import {verVideo} from "./peliculas.js"
let imgMovie = document.querySelectorAll('imgMovie')
const pintarId = imgMovie.target.getAttribute('id');
document.addEventListener('click',verVideo(pintarId))






    