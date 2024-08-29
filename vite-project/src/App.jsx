
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import  Layout  from './Pages/Layout'
import  {Home}  from './Pages/Home'
import {Artist} from "./Pages/Artist"
function App() {
 

  return (
<div>
  <BrowserRouter>
  
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:data" element={<Artist />} />
      </Route>
    </Routes>
  
  </BrowserRouter>
</div>
  )
}

export default App
