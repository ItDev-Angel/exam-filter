import React from 'react'

import './productCart.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'
import "./productCart.css"

const ProductCard = (props) => {
  const { id, title, price , category,desc} = props.item;
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({id, title,category,desc, price}))
  }

  return (
      <div className="product__item">
      <div className="product__content">
        <h1>{title}</h1>
        <div className="d-flex align-items-center justify-content-between">
          <p>{desc}</p>
          <p>{category} {price}</p>
          <button className="addToCart__btn btn" onClick={addToCart}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard