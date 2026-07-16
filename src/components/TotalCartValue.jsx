//import React from 'react';

export default function TotalCartValue() {
  const cart = [
    {
      id: 1,
      price: 1000,
      quantity: 2,
    },
    {
      id: 2,
      price: 500,
      quantity: 4,
    },
  ];

  const totalCartPrice = cart.reduce((sum, item) => {
    if (item.price === null || typeof item.price !== 'number') {
      return;
    }
    return sum + item.price;
  }, 0);
  console.log(totalCartPrice);
}
