import React from "react";
import '../css/navbar.css';
import logo from "../images/logo.png";
import { addMovieToList, handleMovieSearch } from "../actions";
import { StoreContext } from "..";
import '../css/moviecard.css';
import { connect } from "../index";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    handleAddtoMovies = (movie, e) => {

        this.props.dispatch(addMovieToList(movie));
        console.log('handle', movie)
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
        const { result, showSearchResults } = this.props.search;
        return (<>
        <div className="wrap">
            <div className="navbar">
                <div className="navbar-left">
                    <a href="#" className="logo"><img src={logo} /></a>
                </div>

                <div className="navbar-right">
                    <div className="search-form">
                        <input type="text" placeholder="Search" onChange={this.handleChange} />
                        <button type="submit" onClick={this.handleSearch}>Search</button>
                                </div>
                            </div>
            </div>
            <div className="cont-2">
            {showSearchResults &&
                            <div className="movie-container">
                                <div className="movie-image">
                                    {<img src={result.Poster} alt="Movie Poster" />}
                                </div>
                                <div className="movie-details" style={{color:"white"}}>
                                    <h2 >{result.Title}</h2>
                                    <p >{result.Plot}</p>
                                                <button  styles={{color:"white"}}onClick={(e) => this.handleAddtoMovies(result)}>
                                                    Add to movies
                                                </button>
                                            </div>
                                        </div>
                               
                    }
            </div>
             </div>   
                </>);
    }
}
// class NavbarWrapper extends React.Component{
                    //     render(){
                    //         return (<StoreContext.Consumer>
                    //             {(store)=><Navbar store={store}/>}
                    //         </StoreContext.Consumer>);
                    //     }
                    // }
                    function callback(state) {
                        return {
                            movies: state.movies,
                            search: state.search
                        };
                    }
const connectedNavbarComponent=connect(callback)(Navbar);
                export default connectedNavbarComponent;
// export default NavbarWrapper;