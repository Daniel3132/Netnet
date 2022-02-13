const labelMain = document.getElementById('labelMain')
const seriesLabel = document.getElementById('seriesLabel')
const peliculasLabel = document.getElementById('peliculasLabel')
const populares = document.getElementById('populares')
const animes = document.getElementById('animes')
const crimenes = document.getElementById('crimenes')
const peliculasform = document.getElementById('peliculas')
const series = document.getElementById('series')


async function getVideos (){
  try {
      const resp = await fetch('http://localhost:3000/peliculas');
      const pelis = await resp.json()
      return pelis
  }catch (error){
      return console.log(error);
  }
}


//3 Scroll categorizados
async function showMovies(pelis) {

    if(pelis == undefined){
      pelis = await getVideos()
  }

    seriesLabel.style.display= "none";
    peliculasLabel.style.display= "none";
    labelMain.style.display= "block"; 

    pelis.forEach(element => {
        const {id, image, tipo} = element
        if (tipo=="popular"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            ` <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})" >  `
            populares.appendChild(pintarDiv)
        }
        else if (tipo=="anime"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            `  <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})" >    `
            animes.appendChild(pintarDiv)
        }  
        else if (tipo=="crimen"){
            const pintarDiv = document.createElement('div')
            pintarDiv.classList.add('movies')
            pintarDiv.innerHTML = 
            `  <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})">    `
            crimenes.appendChild(pintarDiv)
        }    
    });
}
showMovies()
//FILTRO Series y Peliculas
const seriesPrint = document.getElementById('seriesCall')
seriesPrint.addEventListener('click', async (e)=>{
    const pelis = await getVideos()
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
            
              const {formato,image, id} = element
              if (formato=="serie"){
                  const pintarDiv = document.createElement('div')
                  pintarDiv.classList.add('movies')
                  pintarDiv.innerHTML = 
                  `  <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})">    `
                  series.appendChild(pintarDiv)
              }    
          });
      }
      showMovies(pelis)
} )
//PELICULAS
const peliculasPrint = document.getElementById('peliculasCall')
peliculasPrint.addEventListener('click', async (e)=>{
  const pelis = await getVideos()
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
              const {formato,image, id} = element
              if (formato=="pelicula"){
                  const pintarDiv = document.createElement('div')
                  pintarDiv.classList.add('movies')
                  pintarDiv.innerHTML = 
                  `  <img src="${image}" alt="" class="imgMovie" onclick="verVideo(${id})">     `
                  peliculasform.appendChild(pintarDiv)
              }    
          });
      }
      showMovies(pelis)
} )
//GUARDAR ID EN LOCAL STORAGE
async function verVideo(id){
    const pelis = await getVideos()
    const result = pelis.filter((movie)=> movie.id === id)
    localStorage.setItem('video', JSON.stringify(result))
    window.location.href = './descarga.html'
}