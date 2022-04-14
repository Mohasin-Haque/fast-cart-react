import React from 'react'
import { createContext } from 'react';

const CartContext = createContext();

const ContextCart = () => {
  return (
    <div>
      <CartContext>
        <ContextCart />
      </CartContext>
    </div>
  )
}

export {ContextCart}