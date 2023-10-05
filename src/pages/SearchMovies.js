import React, { Fragment } from "react";
import { useState } from "react";
import MoviesList from "components/moviesList";
import { useSearchParams } from "react-router-dom";
  
  

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

    const [searchValue, setSearchValue] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const movie = searchValue.get("query")  ?? ''; 


    const getMovies = e => {
          e.preventDefault();

          searchMoviesApi(movie,setMovies);

          
    }

    const updateQueryString = (name) => {
      const nextParams = name !== '' ? {query:name} : {};
      setSearchValue(nextParams);
    }
    
    // добавить функцию очистки параметра (вебинар 2 , 14 мин)


    
    
    return(
       

       <Fragment>
            <form onSubmit={getMovies}>
         <input
         
         value={movie}
        onChange={e=>updateQueryString(e.target.value)}/>
        <button type='submit'>Search</button>
       </form>

       <MoviesList movies={movies}/>
       </Fragment>


    )
}