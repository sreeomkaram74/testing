import React, { useState } from 'react'

export default function Movie() {
    const [search,setSearch]=useState("");
    const[data,setData]=useState([]);
    const submitHandler = e=>{
        e.preventDefault();
        // console.log(search)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=49e17f19`)
  .then(response => response.json())
  .then(value =>setData(value.search))
}
  return (
    <div>
     <form onSubmit={submitHandler}>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}></input> <br></br>
      <input type="submit" value="search" ></input>
     </form>
     {
        data.map(movie=><li>{movie.title}</li>)
     }
     {/* <h1>{search}</h1> */}
    </div>
  )
}
