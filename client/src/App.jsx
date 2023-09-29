import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import { Checkout, Confirmation, Home, ItemDetails, NavBar} from './scenes/'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar />
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='item/:itemId' element={<ItemDetails />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='checkout/success' element={<Confirmation />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
