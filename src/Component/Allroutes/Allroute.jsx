import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import SingleCardPage from '../Page/SingleCardPage'

export default function Allroute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/property/:id" element={<SingleCardPage/>}/>
    </Routes>
  )
}
