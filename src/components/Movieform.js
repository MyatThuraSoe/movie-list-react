import React from 'react';
import { useState, useRef } from 'react';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToMoviesListState } from "../redux.js";

function Movieform() {
  const dispatch = useDispatch();

  const name = useRef(0);
  const ratings = useRef(0);
  const duration = useRef(0);
  
  function checkRatings(){
    let r = parseInt(ratings.current.value);
    if(r > 0 && r < 100){
      return true;
    }
    else{
      return false;
    }
  }

  function submitFunction(){
    console.log(name.current.value, ' ', ratings.current.value, ' ', duration.current.value, ' ',)
    if(checkRatings()){
      dispatch(addToMoviesListState({ name : name.current.value, ratings : ratings.current.value, duration: duration.current.value}));
      name.current.value = '';
      ratings.current.value = '';
      duration.current.value = '';
    }else{
      window.alert('rating should be integer between 1 to 100');
    }

  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              ref={name}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              ref={ratings}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              ref={duration}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={submitFunction}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
