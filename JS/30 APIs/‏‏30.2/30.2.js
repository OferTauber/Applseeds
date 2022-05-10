const getMovie = async (movieName) => {
  try {
    const fetchdJson = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=c77e3672`
    );
    const data = await fetchdJson.json();
    displayMovieInfo(data);
  } catch (err) {
    console.warn(err);
  }
};

const displayMovieInfo = (data) => {
  console.log(data.Ratings);
  const main = document.querySelector('main');
  main.innerHTML = '';
  const movie = document.createElement('div');
  movie.classList.add('movie');
  main.appendChild(movie);
  movie.innerHTML = ` <div class="left">
  <img
    src="${data.Poster}"
    alt="${data.Title} poster"
  />
  <div class="flex">
    <h5>Title:</h5>
    <h2>${data.Title}</h2>
  </div>
  <div class="flex">
    <h5>Year:</h5>
    <h5>${data.Year}</h5>
  </div>
  <div class="flex">
    <h5>Genre:</h5>
    <h5>${data.Genre}</h5>
  </div>
  <div class="flex">
    <h5>Director:</h5>
    <h3>${data.Director}</h3>
  </div>
</div>
<div class="right">
  <div class="flex">
    <h5>Actors:</h5>
    <h4>>${data.Actors}</h4>
  </div>
  <div>
  <h5>Plot:</h5>
  <p>
  ${data.Plot}
  </p>
  </div>
  <div class="rating">    
  </div>
</div>
  `;

  const ratingsEl = document.querySelector('.rating');
  for (const rating of data.Ratings) {
    const ratingEl = document.createElement('div');
    ratingEl.classList.add('flex');
    ratingEl.innerHTML = `<h5>Ratung by ${rating.Source}: </h5><h5>${rating.Value}</h5>`;
    ratingsEl.appendChild(ratingEl);
  }
};

document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault();
  getMovie(document.querySelector('.user-input').value);
});

getMovie('run');
