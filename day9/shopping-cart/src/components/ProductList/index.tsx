import { Box, Container, Grid2 } from "@mui/material"
import ProductContainer from "../ProductContainer"
import { useEffect, useState } from "react";
import axios from 'axios';
import ProductContainerSkeleton from "../ProductContainerSkeleton";
import ErrorMessage from "../ErrorMessage";
function ProductList(): JSX.Element {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [number, setNumber] = useState(0)
    const [toggle, setToggle] = useState(false)

    //  BTVN1: Build a pagination for this page
    //  use query param for pagination

    // BTVN2: Complete ProductDetails page with axios, useEffect

    // BTVN3: Create Cart page, add cart component to navbar

    // BTVN4: Research about global state management 

    const getProductData = async () => {
        setIsError(false)
        setIsLoading(true)
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setIsLoading(false)
            setProducts(res.data.products)
            console.log(res)
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
    }, [])
    // Chay lan dau luc component vua duoc render (mount)
    // Chi chay 1 lan
    const logNumber = () => {
        console.log(number)
    }
    useEffect(() => {
        logNumber()
    }, [toggle])



    return <Container maxWidth={false}>

        <button onClick={() => setToggle(!toggle)}>
            Update another state
        </button>
        <button onClick={() => setNumber(number + 1)}>
            Increase
        </button>
        <Box mt={2}>
            <Grid2 container spacing={2}>
                {/* // SIdebar */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    ok
                </Grid2>
                {
                    isError ? <ErrorMessage handleRetry={getProductData} /> :
                        isLoading ? <ProductContainerSkeleton /> : <ProductContainer products={products} />}
            </Grid2>
        </Box>
    </Container>
}
// 16:31 | 20:31
export default ProductList