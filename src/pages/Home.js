import  { useEffect,useState } from "react";
import React from "react";
import MoviesList from "components/moviesList";

const moviesApi = (exportedData) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjMwYmJjZGE0MWM2OWYwYmZmZGE1ZDNkNjRlYmNkNSIsInN1YiI6IjY1MDdjM2QxNDJkOGE1MDExYmQ3NDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxa75X3JVqtzgOHh5yPUmGQIUF4IZjqi2OkYakrysPk',
        }
      };
      
      return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => response.json())
        .then(({results}) => 
        exportedData(results)
            )
        .catch(err => console.error(err));
    
}

export default function Home(){

    const [movies, setMovies] = useState();
    // const [isLoading, setIsLoading] = useState(true);

 
    


    useEffect(() => {
        moviesApi(setMovies);
    },[])

    return(
      <MoviesList movies={movies}/>
    )
}

// https://ru.stackoverflow.com/questions/1511283/react-fetch-%D0%B8-useeffect-%D0%A0%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%80%D0%B0%D0%B7

// сделать список фильмов в отдельном компоненте в компоненте