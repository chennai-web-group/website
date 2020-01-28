import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '../assets/icons/menu.svg';

const links = [
  {
    href: 'https://forms.gle/2JQ9MuXLagXb61Q3A',
    label: 'Submit a Proposal',
    external: true
  },
  { href: '/talks', label: 'Previous Talks' },
  { href: '/about', label: 'About' }
  // { href: '/team', label: 'Team' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-center">
      <ul className="flex justify-between p-4 items-center">
        <li>
          <Link href="/">
            <a>
              <img
                src='./logo.png'
                alt="CWG logo"
                className="inline-block mx-4"
                style={{ height: '50px' }}
              />
            </a>
          </Link>
        </li>

        <span
          className="flex sm:hidden cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon />
        </span>

        <span className="hidden sm:flex">
          {links.map(link => (
            <li key={link.key} className="px-4 hover:underline">
              <GenerateLink link={link} />
            </li>
          ))}
        </span>
      </ul>

      <div className={`border-b ${isOpen ? 'block' : 'hidden'}`}>
        {links.map(link => (
          <div key={link.key} className="px-4 py-2">
            <GenerateLink link={link} />
          </div>
        ))}
      </div>
    </nav>
  );
};

let GenerateLink = ({ link }) => {
  let { href, label, external } = link;
  return (
    <>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={href}>
          <a>{label}</a>
        </Link>
      )}
    </>
  );
};

export default Nav;
