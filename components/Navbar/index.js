import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LINKS } from './constants';

export default function NavBar() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 50) setChangeNavColor(true);
      else setChangeNavColor(false);
    };
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', changeNavbarColor);
    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('scroll', changeNavbarColor);
    };
  });

  return (
    <div className={`navContainer ${changeNavColor ? 'navChange' : ''}`}>
      <Link href="/">
        <a>
          <Image
            src="https://icccsp.com/img/ssn1.png"
            alt="SSN"
            width={130}
            height={65}
          />
        </a>
      </Link>
      <ul>
        {LINKS.map(link => (
          <li key={link.href}>
            <Link href={'#' + link.href}>
              <a className={`${changeNavColor ? 'navChange' : ''}`}>
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
