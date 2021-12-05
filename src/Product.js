import  './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({id, title, image, price, rating}) => {
  const [{}, dispatch] = useStateValue()

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id, title, image, price, rating,
      }
    })
  }

  return (
    <div className='product'>
      <div className="product__info">
      <p>{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating).fill().map((_, i) => (
          <p key={i}>⭐</p>
        ))}
      </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
