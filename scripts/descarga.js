const elegido = JSON.parse(localStorage.getItem('video'));
const titulo = document.getElementById('titulo')
const imagen = document.getElementById('contImg')
const info = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const cartas = document.getElementById('similares')




function pintarVentana(){

    elegido.forEach(element => {
        
        const { id, name, info1, image, image2, elenco, director } = element;
        titulo.innerHTML=` ${name} `
        imagen.innerHTML=`<img class="imagen" src="${image2}" >  `
        info.innerHTML=`${info1}`
        info2.innerHTML=`${elenco}`
        info3.innerHTML=`${director}`
    });
}



window.addEventListener('DOMContentLoaded', pintarVentana());


/* 
if (1 != id){
    const pintarDiv = document.createElement('div')
    pintarDiv.classList.add('movies')
    pintarDiv.innerHTML = 
    `          
    <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})" >  `
    cartas.appendChild(pintarDiv)
} */