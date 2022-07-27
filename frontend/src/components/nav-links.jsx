import React from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'Contact', to: '/contact' },
  { name: 'About Us', to: '/about' },
]
export function NavLinks({ className }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'border-b text-black' : 'text-black hover:border-b'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
