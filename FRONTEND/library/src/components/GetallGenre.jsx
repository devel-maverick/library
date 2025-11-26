import React from 'react'
import axiosInstance from '../axios/axios.js'
import { useEffect, useState } from 'react'

function GetallGenre() {
  const [result, setResult] = useState([])
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axiosInstance.get("/api/genre")
        setResult(response.data)
      } catch(error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchGenres()
  }, [])

  return (
    <>
      <div>
        <h1>All Genres</h1>
        {result.map(el => (
          <div key={el.id}>{el.name}</div>
        ))}
      </div>
    </>
  )
}

export default GetallGenre