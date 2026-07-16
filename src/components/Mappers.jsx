//import React, {useState} from 'react';

export default function Mappers (){
const users = [
  { id: 1, name: "Alice", active: true, age:23 },
  { id: 2, name: "Bob", active: false, age:32 },
  { id: 3, name: "Charlie", active: true, age:32 }
];


const mappedFunction = users.map((user) =>{
  if(user.age === 23){
    console.log({...users, age:24});
    //return users;
  }
  // return users;
});
const filterFunction = users.filter((user) =>{
  if(user.age === 32){
    console.log({...users, age:33});
    //return users;
  }
  // return users;
});





  return (
    <> <p>Mappers Introduced</p>
 {mappedFunction}
 {filterFunction}
    </>
  )
}