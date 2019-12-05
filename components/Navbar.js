import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/talks', label: 'Talks' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="text-center">
    <ul className="flex justify-between p-4">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <span className="flex">
        {links.map(({ key, href, label }) => (
          <li key={key} className="px-4 hover:underline">
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </span>
    </ul>
  </nav>
);

export default Nav;
