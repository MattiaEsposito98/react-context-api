import React, { createContext, useState } from 'react'
import axios from 'axios'
import { BASE_URI } from '../config'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${BASE_URI}/posts`)
      .then(res => {
        setPosts(res.data.results);
      })
      .catch(err => {
        console.error("Errore durante il fetch dei post:", err)
      })
  }

  return (
    <GlobalContext.Provider value={{ posts, setPosts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext

