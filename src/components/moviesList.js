import React from "react";
import { Link, useLocation} from "react-router-dom";



export default function MoviesList({movies}){
    const location = useLocation();

    return(
        <ul>
            {movies.map(({title,name,id}) => 
                (<li key={id}>
                    <Link to={`/searchMovies/${id}`} state={{from:location}}>{title?title:name}</Link>
                </li>)
            )}
        </ul>
        )
}