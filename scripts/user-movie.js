import { movieData, userMovieData } from '../data/data.js';

export {
  renderUserList,
  removeButtonEvent,
  userMovieAppend
};

function renderUserList() {
  let HTML = '';

  userMovieData.forEach(movie => {
    HTML += `
        <div class="user-movie" data-movie-id="${movie.id}" >
          <img class="play-img" src="style/images/play.png">
          <button class="remove-button" data-button-id=${movie.id}>REMOVE</button>
          <img class="movie-img" src="${movie.image}">
        </div>
      `;
  });
  document.querySelector('.list-container-main').innerHTML = HTML;
  removeButtonEvent();
};

function removeButtonEvent() {
  document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', () => {

      const buttonId = button.dataset.buttonId;
      userMovieData.forEach((movie, i) => {

        if (buttonId === movie.id) {
          userMovieData.splice(i, 1);
          renderUserList();

        };

      });

    });

  });

};

function userMovieAppend(id) {
  let bool = false;

  movieData.forEach(movie => {
    bool = userMovieData.some(userMovie => userMovie.id === movie.id);

    if (id === movie.id && userMovieData.length < 16 && !bool) {
      userMovieData.push({ id: movie.id, name: movie.name, image: movie.image });
    };
  });
};



