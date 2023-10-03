import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviePage from "components/MoviePage";

const getMovieDetails = (id,getData) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjMwYmJjZGE0MWM2OWYwYmZmZGE1ZDNkNjRlYmNkNSIsInN1YiI6IjY1MDdjM2QxNDJkOGE1MDExYmQ3NDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxa75X3JVqtzgOHh5yPUmGQIUF4IZjqi2OkYakrysPk'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => getData(response))
        .catch(err => console.error(err));
}

export default function MoviesDetails(){
    const {id} = useParams();
    const [movie, setMovie] = useState({});


    useEffect(() => getMovieDetails(id,setMovie),[id])

    console.log(movie);

    

    return(
       <MoviePage movie={movie}/>
    )

}