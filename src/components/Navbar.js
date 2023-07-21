import React from "react";
import '../css/navbar.css';
import logo from "../images/logo.png";
import { addMovieToList, handleMovieSearch } from "../actions";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    handleAddtoMovies = (movie,e) => {
      
        this.props.dispatch(addMovieToList(movie));
        console.log('handle',movie)
        this.setState({
            showSearchResults: false
        })
    }
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });

    }
    handleSearch = (e) => {
        e.preventDefault();
        const { searchText } = this.state;
        console.log(searchText);
        this.props.dispatch(handleMovieSearch(searchText));

    }
    render() {
        const { result,showSearchResults} = this.props.search;
        return (<>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#" className="logo"><img src={logo} /></a>
                </div>
                
                <div className="navbar-right">
                    <div className="search-form">
                        <input type="text" placeholder="Search" onChange={this.handleChange} />
                        <button type="submit" onClick={this.handleSearch}>Search</button>
                        {showSearchResults &&
                    <div className="search-results">
                        <div className="search-result">
                            <img src={result.Poster} alt="search-pic"/>
                            <div className="movie-info">
                                <span>{result.Title}</span>
                                <button onClick={(e)=>this.handleAddtoMovies(result)}>
                                    Add to movies
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                    </div>
                </div>
            </nav>
        </>);
    }
}
export default Navbar;