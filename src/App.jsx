import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Component/Movie/MovieList';
import Nav from './Component/Nav/Nav';
import './App.css'
import Hero from './Component/Hero Section/Hero';


const App = () => {

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated',
          {
            params: {
              api_key: '5cf3c964b29511cf54b78b804780e0e2',
              language: 'en-US',
              page: 1,
            },
          }
        );
        setTopMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching top movies:', error);    
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <div className='flex gap-[700px] mx-auto ml-[60px] mt-10 mb-10'>
      <h1 className='font-medium text-[30px]  mr-auto'>Featured Movies</h1>
      <h1 className='font-medium text-[30px] text-red-600 cursor-pointer ml-auto'>See more &gt; </h1>
      </div>
      <MovieList movies={topMovies} /> 
    </div>
  );
};

export default App;