import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Catalogo } from "../Pages/Catalogo"

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  )
}