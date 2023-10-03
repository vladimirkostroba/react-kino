import React, { Fragment } from "react";

export default function MoviePage({movie}){
      return(
        <Fragment>
            <section>
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
            </section>

        </Fragment>
      )
}