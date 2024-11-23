

import React, { useEffect, useState } from 'react';
import MovieList from './movies/Movies'


function HomePage() {

  return (
    <>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <h1 style={{ backgroundColor: "white", color: "black", padding: "20px", textAlign: "center" }}>
          HomePage
        </h1>
        <MovieList></MovieList>
      </div>
    </>
  );
}
export default HomePage;

