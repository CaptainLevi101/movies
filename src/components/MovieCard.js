import React from "react";
import '../css/moviecard.css';
class MovieCard extends React.Component {
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
                        <button className="favorite-button">Add to Favorites</button>
                    </div>
                </div>
            </>
        );
    }
}
export default MovieCard