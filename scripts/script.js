import { peliculas } from "./peliculas.js";

const labelMain = document.getElementById('labelMain')
const seriesLabel = document.getElementById('seriesLabel')
const peliculasLabel = document.getElementById('peliculasLabel')
const populares = document.getElementById('populares')
const animes = document.getElementById('animes')
const crimenes = document.getElementById('crimenes')
const peliculasform = document.getElementById('peliculas')
const series = document.getElementById('series')

//3 Scroll categorizados
const showMovies = (pelis) =>{
    seriesLabel.style.display= "none";
    peliculasLabel.style.display= "none";
    labelMain.style.display= "block"; 

    pelis.forEach(element => {
        const {name, image, tipo} = element
        if (tipo=="popular"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            `  <img src="${image}" alt="" class="imgMovie">    `
            populares.appendChild(pintarDiv)
        }
        else if (tipo=="anime"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            `  <img src="${image}" alt="" class="imgMovie">    `
            animes.appendChild(pintarDiv)
        }  
        else if (tipo=="crimen"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            `  <img src="${image}" alt="" class="imgMovie">    `
            crimenes.appendChild(pintarDiv)
        }    
    });
}
showMovies(peliculas)
//FILTRO Series y Peliculas
const seriesPrint = document.getElementById('seriesCall')
seriesPrint.addEventListener('click', (e)=>{
    populares.innerHTML = ``;
    animes.innerHTML = ``;
    crimenes.innerHTML = ``;
    series.innerHTML = ``;   
    peliculasform.innerHTML = ``; 
    seriesLabel.style.display= "block";
    peliculasLabel.style.display= "none"; 
    labelMain.style.display= "none";

    const showMovies = (pelis) =>{
          pelis.forEach(element => {
              const {formato,image} = element
              if (formato=="serie"){
                  const pintarDiv = document.createElement('div')
                  pintarDiv.classList.add('movies')
                  pintarDiv.innerHTML = 
                  `  <img src="${image}" alt="" class="imgMovie">    `
                  series.appendChild(pintarDiv)
              }    
          });
      }
      showMovies(peliculas)
} )
const peliculasPrint = document.getElementById('peliculasCall')
peliculasPrint.addEventListener('click', (e)=>{
    populares.innerHTML = ``;
    animes.innerHTML = ``;
    crimenes.innerHTML = ``;
    series.innerHTML = ``;   
    peliculasform.innerHTML = ``; 
    labelMain.style.display= "none";  
    seriesLabel.style.display= "none";
    peliculasLabel.style.display= "block";
     
    const showMovies = (pelis) =>{
          pelis.forEach(element => {
              const {formato,image} = element
              if (formato=="pelicula"){
                  const pintarDiv = document.createElement('div')
                  pintarDiv.classList.add('movies')
                  pintarDiv.innerHTML = 
                  `  <img src="${image}" alt="" class="imgMovie">    `
                  peliculasform.appendChild(pintarDiv)
              }    
          });
      }
      showMovies(peliculas)
} )