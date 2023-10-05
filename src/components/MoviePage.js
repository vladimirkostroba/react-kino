import { Link, Outlet } from "react-router-dom";
import Leyout from "./Layout";

export default function MoviePage({movie}){
      return(
        <Leyout>
            <Link to="/searchMovies">Back</Link>
            <section>
            <div>
            <img src={movie.poster_path} alt="img"/>
            <div>
                <h2>{movie.title? movie.title : movie.name}</h2>
                <p>User Score: {Math.ceil(movie.popularity)}%</p>
                
                <h3>Overview</h3>
                <p>{movie.overview}</p>

                <h3>Generes</h3>
                <ul>
                    {/* {movie.genres.map(({name}) => 
                       ( <li>{name}</li>)
                    )} */}
                </ul>
                

            </div>
            </div>

            <div>
                <h2>Aditional information</h2>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>

                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
            </section>

        </Leyout>
      )
}