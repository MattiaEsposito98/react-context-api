import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Info from './pages/Info'
import List from './pages/List'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/NotFound'
import BlankLayout from './layouts/BlankLayout'
import Index from './pages/posts/Index'
import Show from "./pages/posts/Show"
import Create from './pages/posts/Create'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/info" Component={Info} />
          <Route path="/list" Component={List} />
          <Route path='posts'>
            <Route index Component={Index} />
            <Route path=':id' Component={Show} />
            <Route path='create' Component={Create} />
          </Route>
        </Route>
        <Route Component={BlankLayout}>
          <Route path='*' Component={NotFound} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
