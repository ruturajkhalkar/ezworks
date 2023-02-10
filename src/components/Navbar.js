import React from 'react'
import "./Navbar.css"
import {FaMicrosoft,FaExpand,FaQuestion,} from 'react-icons/fa'
export default function Navbar() {
  return (
    <div className='navbar'>

    <div class="subNav1">
    <FaMicrosoft  class="icon"/>
      <span> Frontend Test 21 Oct 2022  <b>Client Details - Entities</b></span>
    </div>

      <div class="subNav2" style={{padding:20}}>
       <select name="number" id="cars">
         <option value="100">100%</option>
         <option value="75">75%</option>
         <option value="50">50%</option>
         <option value="25">25%</option>
       </select>
       <FaExpand style={{padding:10}}/>
       <FaQuestion style={{padding:10}}/>
      <span style={{padding:10}}>Sign in</span>
      </div>
    </div>
  )
}
