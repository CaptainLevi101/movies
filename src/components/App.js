import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies,setShowFavourites } from "../actions";
import { StoreContext } from "../index";
import { connect } from "../index";
import '../css/App.css'
class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(addMovies(data.results));
        // console.log('STAtE',store.getState());
    }
    onChangeTab=(val)=>{
        this.props.dispatch(setShowFavourites(val));
    }
    render() {
        console.log(this.props);
        const {movies,search}=this.props;
        // console.log(movies);
        const {list,favourites,showFavourites} = movies;
        // console.log(list);
        // console.log(favourites);
        // console.log(showFavourites);
         //list[]+fav[]
        const displayMovies=showFavourites?favourites:list;
        // console.log(list);
        return (<>
            <Navbar/>
            <div className="main">
                <div className="tabs">
                    <div className={`tab ${showFavourites?'':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                    <div className={`tab ${showFavourites?'active-tab' :''}`}  onClick={()=>this.onChangeTab(true)}>Favourites</div>
                </div>
                
                <div className="list">
                    {displayMovies.map(movie => (<MovieCard movie={movie} key={movie.id} dispatch={this.props.dispatch} favourites={favourites}/>))}
                </div>

                {displayMovies.length===0 ? <div className="no-movies">No Movies to display</div>:null}
              
            </div>
        </>);
    }
}
// class AppWrapper extends React.Component {
//     render(){
//         return(
//         <StoreContext.Consumer>
//             {(store)=><App store={store}/>}
//         </StoreContext.Consumer>
//         );
//     }
// }
function callback(state){
    return{
        movies:state.movies,
        search:state.search
    };
}
const connectedAppComponent=connect(callback)(App);
export default connectedAppComponent;