import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default function Nav (){
  return(
    <ul>
      <li><NavLink to='/'>Home </NavLink></li>
      <li><NavLink to='/about'>About Us</NavLink></li>
    </ul>
  )
}
