import React from 'react'
import { Link } from 'react-router-dom'

function Nevbar() {
  return (
    <div className='bg-amber-400 w-full'>
      <div className='mx-auto max-w-7xl px-4 py-3'>
        <ul>
          <li>
            <Link to='/shop'>shoppage</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nevbar
