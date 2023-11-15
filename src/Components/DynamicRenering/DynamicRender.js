import React from 'react'
import UserB from './UserB'
import UserA from './UserA'
import Login from './UserC'

const compnent={
usera:UserA,
userb :UserB,  
userc:Login

}
export default function Dynamicrender(props) {
    const SelectUser=compnent[props.user] 
  return (
    <SelectUser/>
  )
}