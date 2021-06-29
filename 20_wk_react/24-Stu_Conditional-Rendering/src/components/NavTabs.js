import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// Using object destructuring

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a
          href='#home'
          onClick={() => handlePageChange('Home')}
          // TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // Ternary operator: checks if the currentPage state (value) is equivalent to value on the right of ===
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          // TODO: Add a comment explaining what this logic is doing
          // Sets the class as an active or non-active link based on if the currentPage state matches the tab name
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#blog'
          onClick={() => handlePageChange('Blog')}
          // TODO: Add a comment explaining what this logic is doing
          // Sets the class as an active or non-active link based on if the currentPage state matches the tab name
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          // TODO: Add a comment explaining what this logic is doing
          // Adds a function call to the button when clicked (event listener)
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
