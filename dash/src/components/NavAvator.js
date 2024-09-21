import React from 'react'
import profileImg from '../images/user.jpg'

function NavAvator  ()  {
  return (
    <div>
      <li className='nav-item dropdown pe-3'>
        <a 
        className='nav-links nav-profile d-flex align-items-center pe-0'
         href='#'
         data-bs-toggle='dropdown'
        >
        <img src={profileImg} alt='profile' className='rounded-circle' />
         <span className='d-none d-md-block dropdown-toggle ps-2'>P.Praveen</span>
        </a>

        
        <ul className='dropdown-menu dropdown-menu-end dropdown-end dropdown-menu-arrow profile'>
          <li className='dropdown-header'>
            <h6>Praveen</h6>
            <span>Web Developer</span>
          </li>
          <li>
            <hr className='dropdown-divider'/>
          </li>
          <li>
            <a className='dropdown-item d-flex align-items-center'
            href='user-profile.html'
            >  
            <i className='bi bi-person'></i>
             <span>My Profile</span>
            </a>
          </li>


          <li>
           <hr className='dropdown-divider'/>
          </li>
          <li>
            <a className='dropdown-item d-flex align-items-center'
            href='user-profile.html'
            >  
            <i className='bi bi-gear'></i>
             <span>Account Setting</span>
            </a>
          </li>

          <li>
           <hr className='dropdown-divider'/>
          </li>
          <li>
            <a className='dropdown-item d-flex align-items-center'
            href='user-profile.html'
            >  
            <i className='bi bi-Question-circle'></i>
             <span>Need Help?</span>
            </a>
          </li>

          <li>
           <hr className='dropdown-divider'/>
          </li>
          <li>
            <a className='dropdown-item d-flex align-items-center'
            href='user-profile.html'
            >  
            <i className='bi bi-arrow-right'></i>
             <span>Sign Out</span>
            </a>
          </li>

        </ul>
      </li>
    </div>
  )
}

export default NavAvator
