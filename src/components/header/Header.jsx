import React from 'react'
import './header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className='logo'>
        <h1>Axis</h1>
      </div>
      <div className="header-link">
        <div className='userimage'><Link to="/"><AccountCircleIcon fontSize='large' /></Link></div>
        <div className='username'>Welcome User</div>
      </div>
    </div >
  )
}

export default Header