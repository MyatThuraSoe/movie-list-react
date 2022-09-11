import React from 'react'

import { useSelector } from "react-redux";



function Movieslist() {
  const moviesListState = useSelector((state) => {
    return state.moviesList.value;
  });
  console.log(moviesListState.moviesList);
  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
     { moviesListState.moviesList.map((movie, index)=>{
        return(
          <li 
            className='flex slide-up-fade-in justify-content-between'
            style={{borderBottom: '2px solid var(--primary-color)'}}
          >
            <div className='layout-column w-40'>
              {/* use this header for movie name */}
              <h3 className='my-3'>{movie.name}</h3>
              {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
              <p className='my-0'>{movie.ratings}</p>
            </div>
            <div className='layout-row my-auto mr-20'>
              {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
              <p className='justify-content-end'>{movie.duration}</p>
            </div>
          </li>
        )
      })
    }
      </ul>
    </section>
  )
}

export default Movieslist;
