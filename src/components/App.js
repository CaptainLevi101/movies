import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies,setShowFavourites } from "../actions";
class App extends React.Component {

    componentDidMount() {
        const {store}=this.props;
        store.subscribe(()=>{
            console.log('Updating');
            this.forceUpdate();
        })
        // console.log(data.results);
        //dispatch action in here
        store.dispatch(addMovies(data.results));
        // console.log('STAtE',store.getState());
    }
    onChangeTab=(val)=>{
        this.props.store.dispatch(setShowFavourites(val));
    }
    render() {
        const {movies,search}=this.props.store.getState();
        // console.log(movies);
        const {list,favourites,showFavourites} = movies;
        console.log(list);
        console.log(favourites);
        console.log(showFavourites);
         //list[]+fav[]
        const displayMovies=showFavourites?favourites:list;
        // console.log(list);
        return (<>
            <Navbar dispatch={this.props.store.dispatch} search={search}/>
            <div className="main">
                <div className="tabs">
                    <div className={`tab ${showFavourites?'':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                    <div className={`tab ${showFavourites?'active-tab' :''}`}  onClick={()=>this.onChangeTab(true)}>Favourites</div>
                </div>
                <div className="list">
                    {displayMovies.map(movie => (<MovieCard movie={movie} key={movie.id} dispatch={this.props.store.dispatch} favourites={favourites}/>))}
                </div>

                {displayMovies.length===0 ? <div className="no-movies">No Movies to display</div>:null}

            </div>
        </>);
    }
}
export default App;