import React from 'react'
import Row from './Components/Row/Row'
import requests from './Features/requests'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/NavBar'

export function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  )
}