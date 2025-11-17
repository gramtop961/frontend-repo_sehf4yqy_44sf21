import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AsSeenOn from './components/AsSeenOn'
import Products from './components/Products'
import Tech from './components/Tech'
import UVPuck from './components/UVPuck'
import Testimonials from './components/Testimonials'
import Cart from './components/Cart'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart((prev) => [...prev, product])
    setCartOpen(true)
  }

  const handleRemove = (product) => {
    setCart((prev) => prev.filter((p, i) => !(p.id === product.id && i === prev.findIndex(x => x === p))) )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />
      <Hero onShop={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
      <AsSeenOn />
      <Products onAdd={handleAdd} />
      <Tech />
      <UVPuck />
      <Testimonials />

      {cartOpen && (
        <Cart items={cart} onRemove={handleRemove} onClose={() => setCartOpen(false)} />
      )}

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} FluxPatch — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
