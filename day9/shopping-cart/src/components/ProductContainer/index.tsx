import { Grid2 } from "@mui/material";
import Product from "../Product";
type ProductContainerProps = {
    products: Product[]
}
type Product = {
    id: number,
    thumbnail: string,
    title: string,
    price: number,
}
// HOMEWORK 1: 
// Research the different between type/interface
// Product
// HOMEWORK 2: 
// Implement the ProductDetail page

// type Product = {
//     id: number,
//     string: "Essence Mascara Lash Princess",
// }
function ProductContainer({ products }: ProductContainerProps) {
    return <Grid2 size={{ xs: 12, md: 8 }} container spacing={2}>
        {products.map(({ title, id, thumbnail, price }) => {
            return <Grid2 size={{ xs: 12, md: 4 }}>
                <Product id={id} title={title} thumbnail={thumbnail} price={price} />
            </Grid2>
        })}
        {/* <Grid2 size={3}>
            <Product />
        </Grid2>
        <Grid2 size={3}>
            <Product />
        </Grid2>
        <Grid2 size={3}>
            <Product />
        </Grid2>
        <Grid2 size={3}>
            <Product />
        </Grid2>
        <Grid2 size={3}>
            <Product />
        </Grid2> */}
    </Grid2>
}

export default ProductContainer