import React, {useState, useContext} from 'react'

import {MovieContext} from './MovieContext';

function AddMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [movies, setMoies] = useContext(MovieContext);

  const addMovie = (e) =>{
    e.preventDefault();
    setMoies(prevMovies=>[...prevMovies, {
      name,
      price,
    }])
  }
  return (

    <form>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <button type="submit" onClick={(e)=>addMovie(e)}> Submit</button>
    </form>
  )
}

export default AddMovie
