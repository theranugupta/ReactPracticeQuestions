//import React from 'react';

export default function GetProductsAndPrice() {
  const response = {
    success: true,
    data: [
      {
        id: 1,
        product: 'Laptop',
        price: 70000,
      },
      {
        id: 2,
        product: 'Phone',
        price: 25000,
      },
    ],
  };

  // const products = response?.data.map((data) => {
  //   return (
  //     <li>
  //       {data.product} : {data.price}{' '}
  //     </li>
  //   );
  // });

  // console.log(products);

  // return (
  //   <>
  //     <p>{products}</p>
  //   </>
  // );


  // REACT WAY:
  const products = response.data.map((item) => (
    <li key={item.id}>
      {item.product} - ₹{item.price}
    </li>
  ));

  return <ul>{products}</ul>;
}
