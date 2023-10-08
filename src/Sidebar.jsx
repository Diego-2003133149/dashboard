import React from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import flechas from './flechas.png';

function Sidebar({ openSidebarToggle, OpenSidebar, setActiveSection }) {
  return (
    /* Imagen y texto de Smart UP */
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} style={{ textAlign: 'center' }}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h1>Smart Up</h1>  
                <img src={flechas} alt="Logo" className='icon_header' style={{ width: '200px', height: 'auto' }} />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        {/* Imagen y texto de Smaprt UP */}

 {/* Aqui empieza la lista de ipciones de Dashbord, Actividades y Calendario */}

        {/* Dashboard */}
        <ul className='sidebar-list' style={{ listStyleType: 'none', padding: 0 }}>
            <li className='sidebar-list-item' style={{ margin: '10px 0' }}>
                <a href="#" onClick={() => setActiveSection("Dashboard")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BsFillGrid3X3GapFill className='icon'/> {}
                    <span>Dashboard</span>
                </a>
            </li>
        {/* Dashboard */}

        {/* Actividades */}
            <li className='sidebar-list-item' style={{ margin: '10px 0' }}>
                <a href="#" onClick={() => setActiveSection("Actividades")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BsFillGrid3X3GapFill className='icon'/> 
                    <span>Actividades</span>
                </a>
            </li>
        {/* Actividades */}

        {/* Calendario */}
            <li className='sidebar-list-item' style={{ margin: '10px 0' }}>
                <a href="#" onClick={() => setActiveSection("Calendario")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaRegCalendarAlt className='icon'/> 
                    <span>Calendario</span>
                </a>
            </li>
        {/* Calendario */}
        </ul>
    {/* Aqui acaba la lista de ipciones de Dashbord, Actividades y Calendario */}
    </aside>

  )
}

export default Sidebar;




