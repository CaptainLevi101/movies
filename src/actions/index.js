// {
//     //express an intent to modify the state
//     type:'' //neccessary  

// }
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = ' ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
//action creators 
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFavourite(movie) {

    return {
        type: ADD_FAVOURITE,
        movie
    }
}
export function removeFromFavourite(movie) {

    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}
export function setShowFavourites(val) {

    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}
export function addMovieToList(movie) {
   
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}
export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=256b5c1e&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json()) // <-- Added parentheses here
            .then(movie => {
                console.log(movie);
                //dispatch an action
               dispatch(addMovieSearchResult(movie));
            });
    }

}
export function addMovieSearchResult(movie) {
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}