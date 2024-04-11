import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

export default function Menu({ setMenu, menu }) {
  const handleToggle = () => {
    setTimeout(() => {
      setMenu(false);
    }, 300);

    gsap.to('.menu-container', {
      opacity: 0,
      duration: 0.8,
      ease: 'power3.inOut',
    });

    gsap.to('.block-menu', {
      y: '100vh',
      duration: 0.4,
      stagger: -0.1,
      ease: 'power3.inOut',
    });
  };

  const tl = gsap.timeline();
  useLayoutEffect(() => {
    if (menu) {
      tl.to('.menu-container', {
        y: '-100vh',
        duration: 0,
        ease: 'power3.inOut',
      });

      tl.to('.block-menu', {
        y: '-100vh',
        duration: 0.4,
        stagger: -0.1,
        ease: 'power3.inOut',
      });

      tl.to(
        '.menu-container',
        {
          opacity: 100,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '-=0.5'
      );
    }
  }, [menu]);

  let elements = document.querySelectorAll('.rolling-text');

  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.remove('play');
    });
  });

  return (
    <div>
      <div className="blocks-menu">
        <div
          className="block-menu block-menu-1"
          style={{ background: '#F2F2F2' }}
        ></div>
        <div
          className="block-menu block-menu-2"
          style={{ background: '#F2F2F2' }}
        ></div>
        <div
          className="block-menu block-menu-3"
          style={{ background: '#F2F2F2' }}
        ></div>
        <div
          className="block-menu block-menu-4"
          style={{ background: '#F2F2F2' }}
        ></div>
        <div
          className="block-menu block-menu-5"
          style={{ background: '#F2F2F2' }}
        ></div>
        <div
          className="block-menu block-menu-6"
          style={{ background: '#F2F2F2' }}
        ></div>
      </div>
      <div
        className="menu-container"
        style={{ top: menu ? '100vh' : '-100vh' }}
      >
        <div className="toggle-menu">
          <a onClick={handleToggle}>Menu</a>
        </div>
        <div className="menu-links">
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// let elements = document.querySelectorAll('.rolling-text');

// elements.forEach((element) => {
//   let innerText = element.innerText;
//   element.innerHTML = '';

//   let textContainer = document.createElement('div');
//   textContainer.classList.add('blockm');

//   for (let letter of innerText) {
//     let span = document.createElement('span');
//     span.innerText = letter.trim() === '' ? '\xa0' : letter;
//     span.classList.add('letter');
//     textContainer.appendChild(span);
//   }

//   element.appendChild(textContainer);
//   element.appendChild(textContainer.cloneNode(true));
// });
