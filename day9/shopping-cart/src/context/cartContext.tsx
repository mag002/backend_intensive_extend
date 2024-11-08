import { createContext, useEffect, useState } from "react";

// 
type CartContextType = {
    cart: any[],
    addToCart: (value: { item: any, quantity: number }) => void
    updateCart: (id: string, quantity: number) => void,
    deleteCart: (id: string) => void
}

// create a context with initial values
export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: (value: { item: any, quantity: number }) => { },
    updateCart: (id: string, quantity: number) => { },
    deleteCart: (id: string) => { }

})

export default function CartProvider(props: { children: any }) {
    const [cart, setCart] = useState<any[]>([]);

    // const addCart =()=>{
    //     if(availabeinCart)else{}
    // }

    // each scenarios, one function

    const addToCart = ({ item, quantity }: { item: any, quantity: number }) => {
        // Not available in cart
        // [{item:{id,title,stock,thumbnail,price}, quanitity}]
        // [{id,title,stock,thumbnail,price quanitity}]
        const newCart = [...cart];

        const cartItemIndex = newCart.findIndex((cartItem) => cartItem.id === item.id);
        if (cartItemIndex < 0) {
            newCart.push({ ...item, quantity })
        } else {
            newCart[cartItemIndex].quantity = Number(newCart[cartItemIndex].quantity) + Number(quantity)
        }


        setCart(newCart)
    }

    const updateCart = (id: string, quantity: number) => {
        if (quantity == 0) {
            return deleteCart(id)
        }
        // Not available in cart
        // [{item:{id,title,stock,thumbnail,price}, quanitity}]
        // [{id,title,stock,thumbnail,price quanitity}]
        const newCart = [...cart];

        const cartItemIndex = newCart.findIndex((cartItem) => cartItem.id == id);
        newCart[cartItemIndex].quantity = Number(quantity)

        setCart(newCart)
    }

    const deleteCart = (id: string) => {
        // Not available in cart
        // [{item:{id,title,stock,thumbnail,price}, quanitity}]
        // [{id,title,stock,thumbnail,price quanitity}]
        const newCart = [...cart].filter(item => item.id !== id);
        setCart(newCart)
    }
    // const updateCart = (id, quantity) => {

    // }

    return <CartContext.Provider value={{
        cart,
        addToCart,
        updateCart,
        deleteCart
    }} >
        {props.children}
    </CartContext.Provider>
}
