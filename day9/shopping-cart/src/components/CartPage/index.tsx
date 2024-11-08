import { Container, Box, Button, Modal, Input } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { ChangeEvent, useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
// BT1: Update cart logic on ProductList and list all in CartPage (Create/Read)
// BT2: Add logic to update cart from ProductDetail and CartPage (Update/Delete)
function CartPage() {
    // useReducer 
    // action, reducer, dispatch aciton
    // Update cart
    // Delete cart
    // const onChangeQuantity = (newQuantity) => {
    //     dispatch({ type: 'UPDATE_CART', payload: { id, newQuantity } })
    // }
    const { cart, updateCart, deleteCart } = useContext(CartContext)

    return <Container>
        {cart.length ? cart.map(({ id, title, thumbnail, price, quantity }: any) => {
            return <CartItem key={id} id={id} updateCart={updateCart} handleDelete={deleteCart} img={thumbnail} title={title} price={price} quantity={quantity} />
        }) : <h1>Your cart is empty</h1>}
    </Container>
}


function CartItem({ title, price, img, id, quantity, handleDelete, updateCart }: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Func | (Props|state) | Layout

    const handleChange = (e: any) => {
        updateCart(id, e.target.value)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Box mt={2}>
            <Card orientation="horizontal" variant="outlined">
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                            src={img}
                            srcSet={img}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
                        {title}
                    </Typography>
                    <Typography level="body-sm">{price}</Typography>
                </CardContent>
                <Input type="number" defaultValue={quantity} onChange={handleChange} />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                        px: 0.2,
                        writingMode: 'vertical-rl',
                        justifyContent: 'center',
                        fontSize: 'xs',
                        fontWeight: 'xl',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Button onClick={handleOpen}>Remove</Button>
                </CardOverflow>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography >
                        Are you sure to delete the item <b>{title}</b> from the cart?
                    </Typography>
                    <Button color="error" onClick={() => handleDelete(id)} >
                        Yes
                    </Button>
                    <Button color="primary" onClick={handleClose}>
                        No
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default CartPage

// 17:00 ~ 21:00 