import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PokemonDetail from './pages/PokemonDetail'
import GlobalStyle from './global/style'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/:name" element={<PokemonDetail/>}/>
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>
)
