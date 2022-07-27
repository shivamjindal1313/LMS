import React from 'react'
import classnames from 'clsx'

const SOCIAL_LINKS = [
  {
    name: `Facebook`,
    url: `https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2FSrujna%2F`,
    svg: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#000000" /></svg>`,
  },
  {
    name: `Google`,
    url: `https://www.srujna.org/`,
    svg: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path
    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#000000" /></svg>`,
  },
]

export function SocialLinks({ className }) {
  return (
    <ul className={classnames('list-reset', className)}>
      {SOCIAL_LINKS.map((link) => (
        <SocialLinkItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

export function SocialLinkItem({ link }) {
  const { name, url, svg } = link

  return (
    <li className="ml-4" >
      <a href={url} >
        <span className="sr-only" >{name}</span>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </a>
    </li>
  )
}
