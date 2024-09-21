import React from 'react'

function NavItems  ({nav})  {
  return (
    
      <li className='nav-item' >
              <a className='nav-link collasped' href='#'>
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
              </a>
            </li>
    
  )
}

export default NavItems
