//import React from 'react';

export default function AddFullName() {
  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Alice',
      lastName: 'Smith',
    },
    {
      firstName: 'Ranu',
      lastName: 'Gupta',
    },
  ];

  const fullName = users.map((user) => {
    let fullname = `${user.firstName}  ${ user.lastName}`;
    return { ...user, fullname };
  });

//   const fullName = users.map((user) => {
//     let fullname = user.firstName + user.lastName;
//     return { ...user, fullname };
//   });

  console.log(fullName);
}
