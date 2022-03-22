import React, { useState } from 'react'
import './App.scss'
import Nav from './Nav'
import ItemPage from './ItemPage'
import { items } from './static-data'
import CartPage from './CartPage'

const Content = ({tab, onAddToCart, cart, onRemoveItem}) =>{
    switch(tab) {
      default:
      case 'items':
        return <ItemPage items={items} onAddToCart={onAddToCart}/>
      case 'cart':
        return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>
    }
}

const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {...item, count: 0}
    summary[item.id].count +=1
    return summary
  }, [])
  return groupItems
}

const App = () => {
  const [activeTab, setActiveTab] = useState("items")
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item])
  }

  const removeFromCart = (item) =>{
    const index = cart.findIndex(i => i.id === item.id)
    if (index >= 0) {
      setCart(cart =>{
        const copy = [...cart]
        copy.splice(index, 1)
        return copy
      })
    }
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
          onRemoveItem={removeFromCart}
          cart={summarizeCart(cart)}
        />
      </main>
    </div>
  )
}

export default App