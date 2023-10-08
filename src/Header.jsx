import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Header() {
  return (
    <header className='header' style={{ boxShadow: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px 10px',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
      >
        <BsSearch className='icon' style={{ color: 'white' }} />
        <input 
          type="text" 
          placeholder="Buscar" 
          style={{
            padding: '5px 10px',
            marginLeft: '10px',
            border: 'none',
            backgroundColor: 'transparent',
            outline: 'none',
            color: 'white', 
          }}
        />
      </div>
    </header>
  );
}

export default Header;






