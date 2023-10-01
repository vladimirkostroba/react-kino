import React from "react";
import { Link } from "react-router-dom";



export default function MoviesList({movies}){
    return(
        <ul>
            {movies.map(({title,name,id}) => 
                (<li key={id}>
                    <Link>{title?title:name}</Link>
                </li>)
            )}
        </ul>
        )
}