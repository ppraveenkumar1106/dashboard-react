import React from 'react'

function NavMessage  ()  {
  return (
    <div>
      <li className='nav-item dropdown'>
       <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
       </a>

       <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
          <li className='dropdown-header'>
             You have 3 new messages
             <a href='#'>
              <span className='badge rounded-pill bg-primary p-2 ms-2'>
                 View all
              </span>
             </a>
          </li>
          <li>
            <hr className='dropdown-divider' />
          </li>

          <li className='message-item'>
           <a href='#'>
            <img 
            src='/images/assets/img/message-1.jpg'
            alt=''
            className='rounded-circle'
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                velit asperiores et discusess come to my office..
              </p>
              <p>4 hrs. ago</p>
            </div>
           </a>
          </li>


           <li>
            <hr className='dropdown-divider' />
          </li>

          <li className='message-item'>
           <a href='#'>
            <img 
            src='/images/assets/img/message-2.jpg'
            alt=''
            className='rounded-circle'
            />
            <div>
              <h4>Amar </h4>
              <p>
               Your deal was nice quickly we meet arranged..
              </p>
              <p>6 hrs. ago</p>
            </div>
           </a>
          </li>

           

          <li>
            <hr className='dropdown-divider' />
          </li>

          <li className='message-item'>
           <a href='#'>
            <img 
            src='assets/img/message-3.jpg'
            alt=''
            className='rounded-circle'
            />
            <div>
              <h4>Nelson </h4>
              <p>
               Your Project was nice to few days to get another projects
              </p>
              <p>8 hrs. ago</p>
            </div>
           </a>
          </li>


       </ul>
      </li>
    </div>
  )
}

export default NavMessage
