import React from "react";
import Navbar from "./Navbar";
import {data} from "../data"; 
import MovieCard from "./MovieCard";
function App (){
    console.log(data.results);
    return (<>
    <Navbar/>
    <div className="main">
     <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favourites</div>
        </div> 
        <div className="list">
            {data.results.map(movie=>(<MovieCard movie={movie} key={movie.id}/>))}
            </div>  
    </div>
    </>);
}
export default App;