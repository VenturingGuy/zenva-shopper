import React, { useState } from 'react'
import './App.scss'
import Nav from './Nav'

const Content = ({tab}) =>{
    switch(tab) {
      default:
      case 'items':
        return <span>Items</span>
      case 'cart':
        return <span>Cart</span>
    }
}

const App = () => {
  const [activeTab, setActiveTab] = useState(false)
  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="App__content">
        <span>Empty</span>
      </main>
      

    </div>
  )
}

export default App