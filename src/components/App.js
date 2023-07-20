import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
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
        console.log('STAtE',store.getState());
    }
    render() {
        console.log(this.props.store.getState());
        const {list} = this.props.store.getState();
        const {favourites} = this.props.store.getState(); //list[]+fav[]
        console.log(list);
        return (<>
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div className="tab">Movies</div>
                    <div className="tab">Favourites</div>
                </div>
                <div className="list">
                    {list.map(movie => (<MovieCard movie={movie} key={movie.id} dispatch={this.props.store.dispatch} favourites={favourites}/>))}
                </div>
            </div>
        </>);
    }
}
export default App;