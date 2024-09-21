import React from 'react'
import './logo.css'

function Logo  ()  {
  const handleToogleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='/SideBar' className='logo d-flex align-items-center'>
        {/* <img src='' alt='' /> */}
         <span className='d-none d-lg-block'>Admin Dashboard</span>
        </a>
        <i 
        className='bi bi-list toogle-sidebar-btn'
          onClick={handleToogleSidebar}
        ></i>
    </div>
  );
}

export default Logo
