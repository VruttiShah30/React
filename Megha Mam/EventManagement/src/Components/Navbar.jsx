import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-900 py-8 px-20 text-white flex gap-20 justify-between'>

        <div className='logo'>
            <span className='text-3xl'>Event</span>
        </div>

        <div className='navitem flex gap-20'>
            <div>
                <NavLink to = {'/'}>Home</NavLink>
            </div>
            <div>
                <NavLink to = {'/event'}>Events</NavLink>
            </div>
        </div>
            </div>
  )
}

export default Navbar