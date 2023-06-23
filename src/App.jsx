import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './component/Header'
import Meme from './component/Meme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
      <div className='all'>
        <Header />
        <Meme />
      </div>
   
   
      
  )
}

export default App
