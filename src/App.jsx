import React,{useState} from 'react'
import Home from './componentes/Home'
import Services from './componentes/Services'
import Unices from './componentes/Unices'
import Navbar from './componentes/Navbar'


const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const handletheme = (() => {
    setDarkMode(!darkMode)
  })
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar handletheme={handletheme} darkMode={darkMode}/>
      <Home/>
      <Services/>
      <Unices/>
    </div>
  )
}

export default App