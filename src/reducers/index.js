import {combineReducers} from 'redux';
import { 
   ADD_MOVIES,
    ADD_FAVOURITE,
     REMOVE_FROM_FAVOURITE,
     SET_SHOW_FAVOURITES
    } from "../actions";
const initialMovieState = {
   list: [],
   favourites: [],
   showFavourites: false
}
function movies(state = initialMovieState, action) {

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
const initialSearchState ={
   result:{}
};
function search(state=initialSearchState,action){
   return state;
}
const initialRootState={
   movies:initialMovieState,
   search:initialSearchState
}
// export default function rootReducer(state=initialRootState,action){
//    return {
//       movies:movies(state.movies,action),
//       search:search(state.search,action)
//    }
// }
export default combineReducers({
  movies,
  search
});