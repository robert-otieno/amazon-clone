import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue()

  const RemoveFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
