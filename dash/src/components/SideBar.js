import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';
import NavItems from './NavItems';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-toggle='collapse'
            href='#components-nav'
            aria-expanded='false'
            aria-controls='components-nav'
          >
            <i className='bi bi-menu-button-wide'></i>
            <span>Documents</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='components-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-toggle='collapse'
            href='#form-nav'
            aria-expanded='false'
            aria-controls='form-nav'
          >
            <i className='bi bi-journal-text'></i>
            <span>Forms</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='form-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Release Form</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='bi bi-circle'></i>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-toggle='collapse'
            href='#tables-nav'
            aria-expanded='false'
            aria-controls='tables-nav'
          >
            <i className='bi bi-layout-text-window-reverse'></i>
            <span>Tables</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='tables-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              
              <a href='#ReportCharts'>
                <i className='bi bi-circle'></i>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href='#datatable'>
                <i className='bi bi-circle'></i>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-toggle='collapse'
            href='#charts-nav'
            aria-expanded='false'
            aria-controls='charts-nav'
          >
            <i className='bi bi-bar-chart-line'></i>
            <span>ECharts</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='charts-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#ReportCharts'>
               
                <i className='bi bi-circle'></i>
                <span>General Charts</span>
               
              </a>
            </li>
            <li>
              <a href='#budgetChart '>
                <i className='bi bi-circle'></i>
                <span>Data Charts</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-toggle='collapse'
            href='#icon-nav'
            aria-expanded='false'
            aria-controls='icon-nav'
          >
            <i className='bi bi-suit-diamond'></i>
            <span>Icons</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='icon-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='https://icons.getbootstrap.com/' rel="noopener noreferrer">
                <i className='bi bi-circle'></i>
                <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href='https://remixicon.com/' rel="noopener noreferrer">
                <i className='bi bi-circle'></i>
                <span>Remix Icons</span>
              </a>
            </li>
            <li>
              <a href='https://boxicons.com/' rel="noopener noreferrer">
                <i className='bi bi-circle'></i>
                <span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-heading'>Pages</li>
        {navList.map(nav => (
          <NavItems key={nav._id} nav={nav} />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
