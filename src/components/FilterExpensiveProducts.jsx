//import React from 'react';

export default function FilterExpensiveProducts() {
  const products = [
    { id: 1, name: 'Laptop', price: 70000 },
    { id: 2, name: 'Mouse', price: 800 },
    { id: 3, name: 'Monitor', price: 12000 },
  ];

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
  const expensiveProducts = products.filter((item) => item.price > 1000);
  return (
    <ul>
      {expensiveProducts.map((item) => (
        <li>
          {' '}
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
