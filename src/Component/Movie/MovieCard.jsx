import React from 'react';

const MovieCard = ({ title, releaseDate, poster }) => {
  return (
    <div data-testid="movie-card" className='flex flex-col gap-4' >
      <img src={poster} alt={title} data-testid="movie-poster" />
      <div>
        <p data-testid="movie-title" className='text-[20px]'>{title}</p>
        <p data-testid="movie-release-date">Release Date: {releaseDate}</p>
      </div>           
    </div>
  );
};

export default MovieCard;
