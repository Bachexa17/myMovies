import { movieData } from '../data/list.js';

renderHTML()

function renderHTML() {
  let HTML = ''

  movieData.forEach(movie => {
    HTML += `
      <div class="movie js-movie" data-movie-id="${movie.id}">
        <img class="hover-img" src="style/images/play.png">
        <img class="movie-img" src="${movie.image}">
        <div class="movie-info">
          <span class="movie-name">${adjustNameLength(movie.name)}</span>
        </div>        
      </div>
    `;
  });
  document.querySelector('.main').innerHTML = HTML;
};
function adjustNameLength(name) {
  if (name.length > 20) {
    return name.slice(0, 17).trim() + '..';
  } else {
    return name;
  };
};