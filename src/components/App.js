import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import SearchMovies from "pages/SearchMovies";
import SharedLayout from "./SharedLayout";
import MoviesDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";

function App(){

    return(
        <Routes>
         <Route path="/" element={<SharedLayout/>}>
           <Route index element={<Home/>}/>
           <Route path="/searchMovies" element={<SearchMovies />}/>
         </Route>
         <Route path="/searchMovies/:id" element={<MoviesDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
         </Route>
        </Routes>
   )
}

// прочитать Location, добавить функционал возврата к списку

export default App