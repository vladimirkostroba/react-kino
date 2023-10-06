import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";


const Home = lazy(() => import("../pages/Home"));
const SearchMovies = lazy(() => import("../pages/SearchMovies"));
const MoviesDetails = lazy(() => import("../pages/MovieDetails"));

const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));





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