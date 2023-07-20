import React from "react";
import '../css/moviecard.css';
import { addFavourite } from "../actions";
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

    }
    render() {
    const {movie}=this.props;
      const x=movie.release_date.split('-').reverse().join('-');
        // const {title,genre,year,rating,runtime}=this.movie;
        return (
            <>
                <div className="movie-container">
                    <div className="movie-image">
                        {<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Movie Poster" />}
                    </div>
                    <div className="movie-details">
                        <h2>{movie.original_title}</h2>
                        <p>release date:{x}</p>
                        <p>Rating:{movie.vote_average}</p>
                        <p>{movie.overview}</p>
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
export default MovieCard