import React from 'react'
import Row from './Components/Row/Row'
import requests from './Features/requests'
import './App.css'

export function App() {
  return (
    <div className="App">
      {/* Nav à créer */}
      {/* Banner à créer */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  )
}