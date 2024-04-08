import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

export default function Menu({ setMenu, menu }) {
  const handleToggle = () => {
    setMenu(false);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set('.menu-container', { y: 700 });

    tl.to('.menu-container', { y: 0, duration: 1, ease: 'power3.out' });
    if (!menu) {
      tl.to('.menu-container', { y: 700, duration: 1, ease: 'power3.out' });
    }
  }, [menu]);

  return (
    <div className="menu-container">
      <div className="toggle-menu">
        <a onClick={handleToggle}>Menu</a>
      </div>
      <div className="menu-links">
        <a href="#" className="rolling-text link">
          HOME
        </a>
        <a href="#" className="rolling-text link">
          PROJECTS
        </a>
        <a href="#" className="rolling-text link">
          ABOUT
        </a>
        <a href="#" className="rolling-text link">
          CONTACT
        </a>
      </div>
    </div>
  );
}
