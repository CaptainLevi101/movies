import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
class App extends React.Component {

    componentDidMount() {
        const {store}=this.props;
        store.subscribe(()=>{
            console.log('Updating');
            this.forceUpdate();
        })
        // console.log(data.results);
        //dispatch action in here
        store.dispatch({
            type: 'ADD_MOVIES',
            movies: data.results
        })
        console.log('STAtE',this.props.store.getState());
    }
    render() {
        const data = this.props.store.getState();
       console.log(data);
        return (<>
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div className="tab">Movies</div>
                    <div className="tab">Favourites</div>
                </div>
                <div className="list">
                    {data.map(movie => (<MovieCard movie={movie} key={movie.id} />))}
                </div>
            </div>
        </>);
    }
}
export default App;