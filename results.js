const resultsListEl = document.querySelector(".results__container");
const searchedTitle = localStorage.getItem("title");
document.getElementById("results-page__searchfield").value = searchedTitle;

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu () {
  document.body.classList.remove('menu--open')
}

async function nextSearch() {
  const searchedTitle = document.getElementById("results-page__searchfield").value;
  renderMovies(searchedTitle);
}

async function renderMovies(title) {
  const resultsList = await sTypeSearch(title);
  //if you want to slice the list for fewer results, add .slice(0,#) to limit the results.  Max results of 10.
  const finalList = resultsList;
  resultsListEl.innerHTML = finalList.map((movie) => movieHTML(movie)).join("");
}

async function sTypeSearch(searchTitle) {
  const sTypeSearchMovies = await fetch(`https://www.omdbapi.com/?apikey=5f082e4e&s=${searchTitle}&type=movie`);
  const sTypeSearchMoviesData = await sTypeSearchMovies.json();
  const movieList = await Promise.all(sTypeSearchMoviesData.Search.map((movie) => iTypeSearch(movie.imdbID)));
  return (movieList);
}

async function iTypeSearch(sTypeSearchImdbId) {
  const iTypeSearch = await fetch(`https://www.omdbapi.com/?apikey=5f082e4e&i=${sTypeSearchImdbId}`);
  const iTypeSearchData = await iTypeSearch.json();
  return iTypeSearchData;
}

function movieHTML(movie) {
  return `<div class="result">
  <figure>
    <img
      class="movie__poster"
      src="${movie.Poster}"
      alt=""
    />
  </figure>
  <div class="movie__text--wrapper">
    <p class="movie__details movie__title">
      ${movie.Title}
    </p>
    <p class="movie__details movie__genre">
      Genre: ${movie.Genre}
    </p>
    <p class="movie__details movie__content-rating">Rated: PG-13</p>
    <p class="movie__details movie__actors">
      Cast: ${movie.Actors}
    </p>
    <p class="movie__details movie__runtime">Runtime: ${movie.Runtime}</p>
  </div>
</div>`;
}

nextSearch();