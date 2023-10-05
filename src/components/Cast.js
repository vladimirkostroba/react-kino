import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const getCast = (id,getData) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjMwYmJjZGE0MWM2OWYwYmZmZGE1ZDNkNjRlYmNkNSIsInN1YiI6IjY1MDdjM2QxNDJkOGE1MDExYmQ3NDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxa75X3JVqtzgOHh5yPUmGQIUF4IZjqi2OkYakrysPk'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(({cast}) => getData(cast))
        .catch(err => console.error(err));
}

export default function Cast(){

    const {id} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => getCast(id,setCast),[id]);

    console.log(cast);


    return(
        <ul>
            {cast.map(({name,character,profile_path,id}) => (
                <li key={id}>
                    <img src={profile_path} alt="img"/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
    
}