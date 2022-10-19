import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LINKS } from './constants';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
    <div
      className={`navContainer navChange-mobile ${changeNavColor ? 'navChange' : ''
        }`}
    >
      <Navbar collapseOnSelect expand="xl">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand as="a" className="logo">
              <img
                src="https://icccsp.com/img/ssn1.png"
                alt="SSN"
                loading="lazy"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {LINKS.map(link => (
                <Link href={'#' + link.href} key={link.href} passHref>
                  <Nav.Link className={`${changeNavColor ? 'navChange' : ''}`}>
                    {link.name}
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
