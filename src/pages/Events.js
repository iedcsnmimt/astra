import { NavLink } from 'react-router-dom';
import styles from '../styles/Events.module.scss';
import cx from 'classnames';
import { events } from '../data/data';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SupportLink from '../components/SupportLink';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Mentors from '../components/mentors';

const parseTime = (timeStr) => {
  if (!timeStr) return new Date(0); // Handle missing time
  const [time, modifier] = timeStr.split(' '); // e.g., "4:00 PM" → ["4:00", "PM"]
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  return new Date(2025, 2, 7, hours, minutes); // March 7, 2025
};

const timeCompare = (a, b) => {
  return parseTime(events[a].time) - parseTime(events[b].time);
};

const Events = ({ user }) => {
  const eventFigureWrapper = useRef(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [activeEventId, setActiveEventId] = useState(null);

  useEffect(() => {
    const stickEventFigure = () => {
      const wrapper = eventFigureWrapper.current;
      if (!wrapper) return;
      
      const figures = document.querySelectorAll(`.${styles['current-figure']}`);

      figures.forEach((figure) => {
        const el = wrapper.getBoundingClientRect();
        const fig = figure.getBoundingClientRect();

        if (el.top > window.innerHeight - fig.width) {
          figure.style.position = 'absolute';
          figure.style.top = '0';
        } else if (el.bottom > window.innerHeight) {
          figure.style.position = 'fixed';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        } else {
          figure.style.position = 'absolute';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        }
      });
    };

    window.addEventListener('scroll', stickEventFigure);
    return () => window.removeEventListener('scroll', stickEventFigure);
  }, [currentDay]);

  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Event</span>
          <span>Schedule</span>
        </h1>
        <div className={cx(styles['header-btn-wrapper'])}>
          <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>Astra 2025 in reels</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
            <LinkIcon />
          </NavLink>
        </div>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>March 7-9</h2>
          <div>2025</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <nav className={styles['schedule-nav']}>
          <ul className={styles.tabs}>
            {['Fri.', 'Sat.', 'Sun.'].map((day, i) => (
              <ScheduleNavBtn key={day} currentDay={currentDay} day={i} label={day} handleDayChange={setCurrentDay} />
            ))}
          </ul>
        </nav>
        <section ref={eventFigureWrapper} className={styles['event-list-wrapper']}>
          <ul className={styles['event-list']}>
            {Object.keys(events)
              .filter(id => events[id].day === currentDay)
              .sort(timeCompare)
              .map(id => <EventLI key={id} {...events[id]} handleHover={setActiveEventId} />)}
          </ul>
          <div className={styles['event-figures']}>
            <div className={styles.figures}>
              {Object.keys(events)
                .filter(id => events[id].day === currentDay)
                .map(id => <EventFigure key={id} {...events[id]} isActive={activeEventId === id} />)}
            </div>
          </div>
        </section>
      </main>
      <div className='container'>
        <Mentors/>
        <SupportLink />
      </div>
    </motion.div>
  );
};

const ScheduleNavBtn = ({ day, currentDay, handleDayChange, label }) => (
  <li className={cx(styles.tab, { [styles.active]: currentDay === day })}>
    <button
      onClick={(e) => { e.preventDefault(); handleDayChange(day); }}
      className={styles['tab-btn']}
      type='button'
    >{label}</button>
  </li>
);

const EventLI = ({ id, title, type, isRegistrationOpen, venue, time, handleHover }) => {
  return (
    <li className={cx(styles['event-li'])}>
      <article className={styles['event-li-inner']}
        onMouseEnter={() => handleHover(id)}
        onMouseLeave={() => setTimeout(() => handleHover(null), 200)}
      >
        <div className={styles.title}>
          {type === 'Contest'
            ? <p className={cx({ [styles.closed]: !isRegistrationOpen })}>{isRegistrationOpen ? 'Registrations open!' : 'Registrations closed!'}</p>
            : <p>{type} </p>}
          <h4>{title}</h4>
        </div>
        <div className={styles.venue}>
          <p>{venue}</p>
        </div>
        <div className={styles.time}>
          <p>{time}</p>
        </div>
      </article>
    </li>
  );
};

const EventFigure = ({ id, title, figureSrc, isActive }) => (
  figureSrc && (
    <article key={id} className={cx(styles['current-figure'], { [styles.active]: isActive })}>
      <figure className={styles['img-wrapper']}>
        <img alt={title} src={figureSrc} loading="lazy" />
      </figure>
    </article>
  )
);

export default Events;
