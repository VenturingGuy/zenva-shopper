import React, { useState } from 'react'
import './App.scss'
import Nav from './Nav'
import ItemPage from './ItemPage'
import { items } from './static-data'

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
        onTabChange={setActiveTab}
      />
      <main className="App__content">
        <Content tab={activeTab}/>
      </main>
      

    </div>
  )
}

export default App