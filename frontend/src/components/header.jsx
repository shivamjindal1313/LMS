import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.png'

export function Header({ title = '' }) {
  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline">
              <img src={Logo} className='mr-5'></img>  SRUJNA CHARITABLE TRUST
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}
