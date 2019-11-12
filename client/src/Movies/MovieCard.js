import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <h2>{props.name.title}</h2>
      <div className="movie-director">
        Director: <em>{props.name.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.name.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.name.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
