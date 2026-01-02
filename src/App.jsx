import Nav from './Components/Nav'
import Home from './Components/Home'
import Product from './Components/Product'
import About from './Components/About'

import './App.css'
import './media-queries.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Contactus from './Components/Contactus'


function App() {

  return (
    <div>
    <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Contact' element={<Contactus/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
