import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import SearchMovies from "pages/SearchMovies";
import SharedLayout from "./SharedLayout";

function App(){
    return(
        <Routes>
         <Route path="/" element={<SharedLayout/>}>
           <Route index element={<Home/>}/>
           <Route path="/searchMovies" element={<SearchMovies/>}/>
         </Route>
        </Routes>
   )
}

export default App