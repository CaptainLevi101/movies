import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITES } from "../actions";
const initialMovieState = {
   list: [],
   favourites: [],
   showFavourites: false
}
export default function movies(state = initialMovieState, action) {

   // if (action.type ==ADD_MOVIES) {
   //    return {
   //       ...state,
   //       list:[action.movies]
   //    };
   // }
   // return state;
   switch (action.type) {
      case ADD_MOVIES:
         return {
            ...state,
            list: [...action.movies]
         }
      case ADD_FAVOURITE:
         return {
            ...state,
            favourites: [action.movie, ...state.favourites]
         }
      case SET_SHOW_FAVOURITES:
            return {
               ...state,
               showFavourites:action.val
            }
      case REMOVE_FROM_FAVOURITE:
         const filteredArray=state.favourites.filter(
            movie=>movie.original_title!=action.movie.title
         );
         return {
            ...state,
            favourites: filteredArray
         }
      default:
         return state
   }
}
//action type variables
// const ADD_MOVIES = 'ADD_MOVIES';