import React, { useState } from 'react'
import './App.scss'
import Nav from './Nav'
import ItemPage from './ItemPage'
import { items } from './static-data'

const Content = ({tab, onAddToCart}) =>{
    switch(tab) {
      default:
      case 'items':
        return <ItemPage items={items} onAddToCart={onAddToCart}/>
      case 'cart':
        return <span>Cart</span>
    }
}

const App = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item])
  }

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div>
        {cart.length} items
      </div>
      <main className="App__content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
        />
      </main>
    </div>
  )
}

export default App