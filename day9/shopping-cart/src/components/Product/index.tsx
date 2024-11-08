import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

type ProductProps = {
    id: number,
    thumbnail: string,
    title: string,
    price: number,
    stock: number
}

export default function Product({ id, thumbnail, title, price, stock }: ProductProps) {

    const { addToCart } = useContext(CartContext);

    return (
        <Card sx={{ height: "100%" }}>
            <CardMedia
                sx={{ height: 140, minHeight: 200 }}
                image={thumbnail}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: {price}$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addToCart({ item: { id, title, thumbnail, price, stock }, quantity: 1 })}>Add To Cart</Button>
                <Button size="small"><Link to={`/product/${id}`}>
                    Details
                </Link></Button>            </CardActions>
        </Card>
    );
}

// 17:18 | 21:18

// ProductList
// ProductDetail

