import React, { Fragment } from "react";
import { useState } from "react";
import MoviesList from "components/moviesList";
  
  

    const searchMoviesApi = (serchValue,getData) => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjMwYmJjZGE0MWM2OWYwYmZmZGE1ZDNkNjRlYmNkNSIsInN1YiI6IjY1MDdjM2QxNDJkOGE1MDExYmQ3NDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxa75X3JVqtzgOHh5yPUmGQIUF4IZjqi2OkYakrysPk'
            }
          };

        return fetch(`https://api.themoviedb.org/3/search/movie?query=${serchValue}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(({results}) => getData(results))
            .catch(err => console.error(err));
    }

export default function SearchMovies(){

    const [serchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = e => {
          e.preventDefault();

          searchMoviesApi(serchValue,setMovies);

          setSearchValue('')

          console.log(movies);
    }


    
    
    return(
       

       <Fragment>
            <form onSubmit={getMovies}>
         <input
        value={serchValue}
        onChange={e=>setSearchValue(e.target.value)}/>
        <button type='submit'>Search</button>
       </form>

       <MoviesList movies={movies}/>
       </Fragment>


    )
}