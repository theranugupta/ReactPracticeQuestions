import React from 'react';

//Return users without password and token.
export default function JsonWork() {
  const users = [
    {
      id: 1,
      name: 'John',
      email: 'john@test.com',
      password: '123',
      token: 'abc',
    },
  ];

  const newUser = users.map((user) => {
    const copy = { ...user };//We are creating copy so that we don't mutate the original object. We can also use Object.assign({}, user) to create a copy of the object.
    Object.keys(copy ).map((key) => {
      if (key === 'password' || key === 'token') {
        delete copy[key];
      }
    });
    return copy;
  });
  console.log(users);
  //console.log(newUser);
}
