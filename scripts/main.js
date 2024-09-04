import { movieData } from '../data/data.js';
import * as userMovie from './user-movie.js';

funcHub()

function funcHub() {
  renderHTML();
  addButtonEvent();
  userListButton();
};

function renderHTML() {
  let HTML = ''

  movieData.forEach(movie => {
    HTML += `
      <div class="movie" data-movie-id="${movie.id}">
        <img class="play-img" src="style/images/play.png">
        <button class="add-button" data-button-id=${movie.id}>ADD</button>
        <img class="movie-img" src="${movie.image}">
      </div>
      `;
  });
  document.querySelector('.container-main').innerHTML = HTML;
};

function addButtonEvent() {
  document.querySelectorAll('.add-button').forEach(button => {

    const buttonId = button.dataset.buttonId;
    button.addEventListener('click', () => {
      userMovie.userMovieAppend(buttonId);

    });

  });

};

function userListButton() {
  const listElementId = document.querySelector('.list-container');
  const mainElement = document.querySelector('.container-main');

  document.querySelector('.list-open-button').addEventListener('click', () => {
    if (listElementId.style.display === 'grid') {
      listElementId.style.display = 'none';

      mainElement.style.filter = 'none';
      mainElement.style.pointerEvents = 'auto';
      return;
    };
    userMovie.renderUserList();

    listElementId.style.display = 'grid';

    mainElement.style.filter = 'blur(0.2px)';
    mainElement.style.pointerEvents = 'none';
  });
};