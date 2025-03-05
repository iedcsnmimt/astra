import { useRef } from "react";
import styles from './Guests.module.scss';
import { ReactComponent as PointerIcon } from '../media/icons/right.svg';
import { ReactComponent as NarrowArrowIcon } from '../media/icons/narrow-arrow.svg';
import cx from 'classnames';

const GuestCard = ({ name, roles, imgSrc }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{roles}</p>
      <img src={imgSrc} alt={name} />
    </div>
  );
};

const Guest = ({ cardsList = [] }) => {
  const cursorRef = useRef(null);
  const parentRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  const handleCursorTransit = (type) => {
    if (cursorRef.current) {
      if (type === 'enter') {
        cursorRef.current.classList.add(styles['-visible']);
      } else {
        cursorRef.current.classList.remove(styles['-visible']);
      }
    }
  };

  const handleCursorMove = (posX, posY) => {
    if (cursorRef.current && parentRef.current) {
      const bounds = parentRef.current.getBoundingClientRect();
      cursorRef.current.style.transform = `translate3D(${posX - bounds.left}px, ${posY - bounds.top}px, 0)`;

      if (posX - bounds.left < bounds.width / 2) {
        cursorRef.current.classList.add(styles['-rotate']);
      } else {
        cursorRef.current.classList.remove(styles['-rotate']);
      }
    }
  };

  const slideCarousel = (e) => {
    e.preventDefault();
    if (!parentRef.current || !cardsWrapperRef.current) return;

    const bounds = parentRef.current.getBoundingClientRect();
    const transitDir = e.clientX - bounds.left < bounds.width / 2 ? 'prev' : 'next';
    const cardsContainer = cardsWrapperRef.current;

    cardsContainer.classList.add(styles['-sliding']);
    cardsContainer.classList.add(transitDir === 'next' ? styles['-transit-right'] : styles['-transit-left']);

    setTimeout(() => {
      cardsContainer.classList.remove(styles['-sliding']);

      if (transitDir === 'next') {
        cardsContainer.appendChild(cardsContainer.removeChild(cardsContainer.firstChild));
      } else {
        cardsContainer.prepend(cardsContainer.removeChild(cardsContainer.lastChild));
      }

      cardsContainer.classList.remove(transitDir === 'next' ? styles['-transit-right'] : styles['-transit-left']);
    }, 300);
  };

  return (
    <div className={styles.carousel}
      ref={parentRef}
      onMouseEnter={() => handleCursorTransit('enter')}
      onMouseLeave={() => handleCursorTransit('leave')}
      onMouseMove={(e) => handleCursorMove(e.clientX, e.clientY)}
    >
      <div className={styles['c-cards-wrapper']}
        ref={cardsWrapperRef}
        onClick={slideCarousel}
      >
        {cardsList.length > 0 ? (
          cardsList.map((card, i) => (
            <GuestCard key={i} {...card} />
          ))
        ) : (
          <p>No guests available</p>
        )}
      </div>

      {/* <div className={cx(styles['mobile-arrows'], 'container')}>
        <div className={styles.dir}><NarrowArrowIcon /></div>
        <div className={styles.dir}><NarrowArrowIcon /></div>
      </div>

      <div ref={cursorRef} className={styles['c-gallery-cursor']} aria-label="next/previous">
        <PointerIcon />
      </div> */}
    </div>
  );
};

export default Guest;
