import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,setMovies, search, rate}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",backgroundColor:"red"}}>
  {
    movies.filter((e)=>e.movieName.toLowerCase().includes(search.toLowerCase().trim()) && e.rating >= rate )
    .map((e)=> <MovieCard movie={e} key={e.id} />)
  }
    </div>
  )
}

export default MovieList