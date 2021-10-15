import React, { Component } from "react";
import Card from "./Card";
import "./Movies.css";

class Movies extends Component {

  render() {
    const movieCards = this.props.allMovies.map(movie => {
      return (<Card key={movie.id} backdrop={movie.backdrop_path} title={movie.title} rating={movie.average_rating.toFixed(1)} />)
    })
    return (
      <section className="movies-container">
        <h3 className="view-title">All Movies</h3>
        {/* <Card className="movie-card" /> */}
       <div className="card-holder"> {movieCards}</div>
      </section>
    );
  }
}

export default Movies;