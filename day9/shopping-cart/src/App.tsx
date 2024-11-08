import { Button } from '@mui/material'
import NavigationBar from './components/NavigationBar'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'
import { createContext } from 'react';
import CartProvider, { CartContext } from './context/cartContext'
import ProductDetailPage from './components/ProductDetail'
import MemoziedExample from './components/MemoziedExample'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />.
          <Route path="/product/:productId" element={<ProductDetailPage />} ></Route>
          <Route path="*" element={<MemoziedExample />} ></Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>)
}
// npm i @emotion/react @emotion/styled @mui/styled-engine-sc styled-components
export default App
