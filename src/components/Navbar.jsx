import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import Logo from '../components/Logo';

import { MAX_MEDIUM_DEVICES, MIN_MEDIUM_DEVICES } from '../../styles/constants';

import { useRouter } from 'next/router';

import routes from '../routes';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const { asPath } = useRouter();
  const currentPath = useRef(asPath);

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
    const pathChanged = currentPath.current !== asPath;

    if (showLinks && !pathChanged) {
      linksContainerRef.current.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      linksContainerRef.current.style.height = '0px';
      document.body.style.overflow = 'unset';
    }
    console.log(asPath);
    currentPath.current = asPath;
  }, [showLinks, asPath, currentPath]);

  return (
    <StyledNavbar colorChange={colorChange}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef} onClick={toggleLinks}>
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
  background-color: ${props => (props.colorChange ? 'var(--chem-color-light-gray)' : 'var(--chem-color-transparent)')};
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: var(--chem-index-navbar);
  margin: 0 auto;
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
    /* height: 100%; */
    align-items: center;
    font-weight: 500;
    border-bottom: 1px solid var(--chem-color-transparent);

    &:hover,
    &:focus {
      border-bottom: 1px solid var(--chem-color-main);
    }

    ${MIN_MEDIUM_DEVICES} {
      height: 90px;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    ${MIN_MEDIUM_DEVICES} {
      width: auto;
    }
  }
  .nav-center {
    width: 100%;
    ${MIN_MEDIUM_DEVICES} {
      height: 100px;
    }
  }
  .nav-toggle {
    font-size: 1.5rem;
    background: var(--chem-color-transparent);
    border-color: var(--chem-color-transparent);
    cursor: pointer;
    margin: 0 1.2rem;

    &:hover,
    &:focus {
      color: var(--chem-color-main);
    }

    &:focus-visible {
      outline: 2px solid var(--chem-color-main);
      outline-offset: 4px;
    }
  }
  .links-container {
    height: 0;
    background-color: var(--chem-color-white);
    a {
      text-align: center;
    }
    ${MAX_MEDIUM_DEVICES} {
      background-color: var(--chem-color-light-gray);
      overflow: hidden;
    }
  }

  .show-container {
    height: 10rem;
  }

  .links-container {
    height: 0;
    ${MAX_MEDIUM_DEVICES} {
      overflow: hidden;
    }
  }
  .show-container {
    height: 10rem;
  }
  ${MIN_MEDIUM_DEVICES} {
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
      height: auto;
      display: flex;
      align-items: center;
      background-color: var(--chem-color-transparent);
    }
    .links {
      display: flex;
    }
  }
`;

export default Navbar;
