import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import heder from './components/Header'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Body/>
      <Form/>
      <Footer/>

   </>
)
}

export default App
 

