import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductLits from './components/ProductLits'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState([])
  const Addtocart = ((title) => {
    setCount([...count, title])
  })
  return (
    <div className="App">
      <Header count={count} />
      <Banner />
      <ProductLits Addtocart={Addtocart} />
      <Footer />
    </div>
  )
}

export default App
