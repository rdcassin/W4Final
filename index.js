// API 1: "https://www.omdbapi.com/?apikey=5f082e4e&s=${searchTitle}&type=movie" TO SEARCH BY KEYWORD IN TITLE
// API 2: "https://www.omdbapi.com/?apikey=5f082e4e&i=${sTypeSearchImdbId}" TO SEARCH BY IMDBID FOR ADDITIONAL DETAILS AFTER THE PREVIOUS SEARCH

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu () {
    document.body.classList.remove('menu--open')
}

function newSearch(){
    window.location.href = `${window.location.origin}/results.html`;
    const searchedTitle = document.getElementById("home__searchfield").value;
    localStorage.setItem("title", searchedTitle);
}