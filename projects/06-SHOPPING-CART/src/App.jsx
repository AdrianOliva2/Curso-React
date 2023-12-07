import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx';
import { useFilters } from './hooks/useFilters.js';
import { Footer } from './components/Footer.jsx';
import { IS_DEVELOPMENT } from './config.js';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App
