import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";


function SharedLayout(){
    return(
       <Container>
        <Header>
            <nav>
                <Link to="/" end>
                    Home
                </Link>
                <Link to="/searchMovies">
                    Movies
                </Link>
            </nav>
        </Header>

        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      
       </Container>

    )
}

export default SharedLayout;