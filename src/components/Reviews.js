import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const getReviews = (id,getData) =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjMwYmJjZGE0MWM2OWYwYmZmZGE1ZDNkNjRlYmNkNSIsInN1YiI6IjY1MDdjM2QxNDJkOGE1MDExYmQ3NDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxa75X3JVqtzgOHh5yPUmGQIUF4IZjqi2OkYakrysPk'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(({results}) => getData(results))
        .catch(err => console.error(err));
}

export default function Reviews(){
    const [reviews, setReviwes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getReviews(id,setReviwes)
    },[id]);

    return(
        <ul>
            {reviews.map(({author,id,content}) => (
                <li key={id}>
                    <h2>{author}</h2>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
    
}