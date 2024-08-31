import { useState } from 'react'
import './App.css'
// import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Home from './Component/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
    // it will change the value of opensidebartoggle if it is true it will change to
    //  false and if it is false it will change to true
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App

