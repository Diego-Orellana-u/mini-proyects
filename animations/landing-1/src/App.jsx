import { gsap } from 'gsap';
import { useLayoutEffect, useState } from 'react';

import { useGSAP } from '@gsap/react';
import Menu from './Menu';

export default function App() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1 });
    const movements = [-100, 250, 100, -180, -90, 100, 0, -120, -260];

    gsap.set('h1', { y: 100 });
    gsap.set('.counter p', { y: 35 });

    tl.to('h1', {
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
    });

    tl.to(
      '.counter p',
      {
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    tl.to('.counter p', {
      y: -35,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.5,
    });

    tl.to('.counter p', {
      y: -70,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.5,
    });

    tl.to('.counter p', {
      y: -105,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.75,
    });

    tl.to('h1', {
      fontSize: '15vw',
      duration: 1,
      ease: 'power3.out',
    });

    tl.to('.header-item', {
      clipPath: 'none',
      duration: 0.1,
    });

    tl.to(
      '.block',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.5,
        stagger: {
          amount: 0.5,
          from: 'random',
          ease: 'power3.out',
        },
      },
      '<'
    );

    movements.forEach((move, index) => {
      tl.to(
        `.h-${index + 1}`,
        {
          y: move,
          duration: 1,
          ease: 'power3.out',
        },
        '<'
      );
    });
  }, []);

  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(true);
  };

  return (
    <div className="container" style={{ overflow: activeMenu ? 'hidden' : '' }}>
      <nav>
        <div>
          <a href="#">FACTORIAL</a>
        </div>
        <div className="links">
          <div className="link">
            <a href="#">Contact Us</a>
          </div>
          <div className="link">
            <a href="#" onClick={handleMenu}>
              Menu
            </a>
          </div>
        </div>
      </nav>
      <footer>
        <p>Scroll to explore</p>
      </footer>

      <div className="hero-video"></div>
      <div className="blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
      <div className="header">
        <div className="header-item">
          <div className="header-item-wrapper h-1">
            <h1>F</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-2">
            <h1>A</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-3">
            <h1>C</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-4">
            <h1>T</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-5">
            <h1>O</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-6">
            <h1>R</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-7">
            <h1>I</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-8">
            <h1>A</h1>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-wrapper h-9">
            <h1>L</h1>
          </div>
        </div>
      </div>

      <div className="counter">
        <p>
          3 <br />
          2 <br />
          1 <br />
        </p>
      </div>
      <Menu setMenu={setActiveMenu} menu={activeMenu} />
    </div>
  );
}
