const url = 'https://rickandmortyapi.com/api/character';

fetch(url)
  .then(response => response.json())
  .then(data => {

    const personajes = data.results;
    
    //Cargando todas las cards
    const cardContainer = document.querySelector('.card-container');

    data.results.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const title = document.createElement('h2');
        title.textContent = item.name;
        card.appendChild(title);
    
        const image = document.createElement('img');
        image.src = item.image;
        card.appendChild(image);
    
        cardContainer.appendChild(card);
      });

      //Filtrando los nombres
      const escogeNombre = document.querySelector("#select-names");

    personajes.forEach(personaje => {
        let option = document.createElement("option");
        option.value = personaje.name;
        option.textContent = personaje.name;
        escogeNombre.appendChild(option);
      });

    escogeNombre.addEventListener('change', (event) => {
        const nombreEscogido = event.target.value;

        //Encontrar el personaje con el nombre escogido
        const personajeEscogido = personajes.find(personaje => personaje.name === nombreEscogido);
        
        
        // Crea una nueva card
        
        const card = document.createElement('div');
        card.classList.add('card', 'big-card');

        const title = document.createElement('h2');
        title.textContent = personajeEscogido.name;
        card.appendChild(title);
      
        const image = document.createElement('img');
        image.src = personajeEscogido.image;
        card.appendChild(image);
      
        // Agregar la card
        cardContainer.innerHTML = '';
        cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));
