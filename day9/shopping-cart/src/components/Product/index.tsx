import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ProductProps = {
    id: number,
    thumbnail: string,
    title: string,
    price: number,
}

export default function Product({ id, thumbnail, title, price }: ProductProps) {
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
                <Button size="small" onClick={() => console.log("PRODUCT_ID", id)}>Add To Cart</Button>
                <Button size="small">Details</Button>
            </CardActions>
        </Card>
    );
}

// 17:18 | 21:18

// ProductList
// ProductDetail

