import { Button } from '@mui/material'
import NavigationBar from './components/NavigationBar'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'


function App() {
  return (
    <>

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} ></Route>
          <Route path="/product" element={<ProductList />} ></Route>
          <Route path="/product/:productId" element={<ProductDetail />} ></Route>
          <Route path="/cart" element={<h1>Cart page </h1>} ></Route>
          <Route path="*" element={<h1>404 Not found!</h1>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
// npm i @emotion/react @emotion/styled @mui/styled-engine-sc styled-components
export default App