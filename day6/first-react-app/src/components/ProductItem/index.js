import CommonContainer from '../CommonComponents';
import StarIcon from '../StarIcon'
import productItemStyle from './Product.module.css'

function ProductItem(props) {
    const star = [];



    for (let i = 0; i < props.rating; i++) {
        star.push(<StarIcon />)
    }

    // Todolist app:
    // Todo > Input Component
    //      > ListTodo > Todo (const todos = [{title:'abc', isDone: true/false, createdAt: time}])
    //                 > Depends on 'status', style the TOdo
    console.log('productItemStyle', productItemStyle)
    return <div className={productItemStyle['product-item']}>
        <h3>{props.title}</h3>
        <img src={props.img} />
        <CommonContainer>
            <p>price: {props.price}$</p>
        </CommonContainer>
        <p>Rating: {star} </p>
        {/* if stock>0 => show buy button => else: show label: out of stock */}
        {/* Conditional Rendering */}
        {props.stock > 0 ? <button>Buy</button> : <p style={{ color: 'lightcoral' }}>Out of stock!!</p>}
    </div>
}

/**
 * TODO: [20:30]
 * - Complete the props flow
 * - Style the component (optional)
 * - Show the rating as star image (1 ~ 1 star img)
 */

export default ProductItem