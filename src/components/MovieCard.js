import React from "react";
import '../css/moviecard.css';
import { addFavourite, removeFromFavourite } from "../actions";
import { StoreContext } from "..";
class MovieCard extends React.Component {
    handleFavourite=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
        console.log('Added favourite');
    } 
    isMovieFavourite=()=>{
        const {favourites}=this.props;
        const index=favourites.indexOf(this.props.movie);
        if(index!=-1){
            console.log('index Found');
            return true;
        }
        return false;
    }
    handleUnFavourite=()=>{
       const {movie}=this.props;
       this.props.dispatch(removeFromFavourite(movie));
    }
    render() {
    const {movie}=this.props;
    
        // const {title,genre,year,rating,runtime}=this.movie;
        return (
            <>
                <div className="movie-container">
                    <div className="movie-image">
                        {<img src={movie.Poster} alt="Movie Poster" />}
                    </div>
                    <div className="movie-details">
                        <h2>{movie.Title}</h2>
                        <p>release :{movie.Year}</p>
                        <p>Genre:{movie.Genre[0]+','+movie.Genre[1]}</p>
                        <p>{movie.Plot}</p>
                        {
                            this.isMovieFavourite()
                            ?<button className="Unfavorite-button" onClick={this.handleUnFavourite}>Remove from Favorites</button>:
                             <button className="favorite-button" onClick={this.handleFavourite}>Add to Favorites</button>
                           
                        }
                       
                    </div>
                </div>
            </>
        );
    }
}

export default MovieCard;