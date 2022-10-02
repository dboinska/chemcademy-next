import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import Logo from '../components/Logo';

import routes from '../routes';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = '100vh';

      document.body.style.overflow = 'hidden';
    } else {
      linksContainerRef.current.style.height = '0px';
      document.body.style.overflow = 'unset';
    }
  }, [showLinks]);
  return (
    <StyledNavbar className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {routes.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 999;
  margin: 0 auto;
  &.colorChange {
    background-color: var(--chem-color-light-gray);
  }
  li {
    list-style: none;
    display: block;
    text-align: center;
  }
  a {
    color: var(--chem-color-main);
    text-decoration: none;
    text-transform: uppercase;
    padding: 1.2rem;
    transition: all 0.3s linear;
    display: inline-flex;
    height: 100%;
    align-items: center;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid var(--chem-color-main);
    }

    @media screen and (min-width: 800px) {
      height: 100px;
    }
  }
  ul {
    list-style-type: none;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (min-width: 800px) {
      width: auto;
    }
  }
  .nav-center {
    width: 100%;
    @media screen and (min-width: 800px) {
      height: 100px;
    }
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin: 0 1.2rem;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    background-color: var(--chem-color-white);
    a {
      text-align: center;
    }
    @media screen and (max-width: 800px) {
      background-color: var(--chem-color-light-gray);
    }
  }
  .nav-toggle:hover {
    color: var(--chem-color-main);
  }

  .show-container {
    height: 10rem;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
      display: flex;
      align-items: center;
      background-color: transparent;
    }
    .links {
      display: flex;
    }
  }
`;

export default Navbar;
