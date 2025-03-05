import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from '../styles/Home.module.scss';

import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Carousel from '../components/Carousel';
import HighlightCard from '../components/HighlightCard';

import { clubs, events } from '../data/data';
import { guest } from '../data/data';

import Hero from '../components/Hero';
import { motion } from 'framer-motion'
import Guest from '../components/guest';


const tags = [
  'bootcamp', 'innovation', 'entrepreneurship', 'startup', 'pitching', 'business',  
  'networking', 'team building', 'mentorship', 'problem-solving', 'creativity',  
  'design thinking', 'product development', 'prototyping', 'funding',  
  'leadership', 'strategy', 'workshop', 'growth mindset', 'market research',  
  'branding', 'public speaking'
];


const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section className={cx(styles["intro-section"], styles['home-section'])}>
        <div className={styles['intro-bg']}>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
        </div>
        <header className={cx(styles.introContent, styles.sectionHeader, 'container')}>
        <h2 className={styles.heading}>
  <span style={{ marginRight: '3ch', letterSpacing: '0.3ch' }}>
    <strong>ASTRA</strong>
  </span>  
  <span className={styles._ar}>2025</span>
</h2>

<p className={styles.subtitle}>
  <strong>ASTRA</strong> is a three-day bootcamp designed to take ideas from concept to prototype through hands-on learning, collaboration, and innovation.  
  Join us as we foster a creative community, empowering aspiring entrepreneurs to turn ideas into reality.
</p>


          <div className={styles['header-btn-wrapper']}>
            <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
              <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>ASTRA 2025 in reels</span>
              <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
              <LinkIcon />
            </NavLink>
          </div>
        </header>
      </section>

      <section className={cx(styles['home-section'], 'container', styles.highlights)}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>Highlights</span>
          </h2>
        </header>

        <main>
        <div className={styles.hlgallery}>
  {Object.values(events)
    .filter(event => event.day === 0) // Filter only Day 0 events
    .sort((a, b) => new Date(`07/03/2035 ${a.time}`) - new Date(`09/03/2025 ${b.time}`)) // Sort by time
    .map(event => (
      <HighlightCard user={user} key={event.id} {...event} />
    ))
  }
  <div className={styles['btn-wrapper']}>
    <NavLink to='/events' className='btn'>
      <span className='btn-subtitle'>Events</span>
      <span className='btn-text'>Full Event<br />Schedule</span>
      <ScheduleIcon />
    </NavLink>
  </div>
</div>


        </main>
      </section>

      <section className={cx(styles['home-section'], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, 'container')}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: '3ch' }}>Our</span>
            <span className={styles._ar}>Clubs</span>
          </h2>
        
        </header>
        <main>
          <Carousel cardsList={clubs} />
        </main>
      </section>


      <section className={cx(styles['home-section'], styles.guest)}>
        <header className={cx(styles.sectionHeader, 'container')}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: '3ch' }}>Our</span>
            <span className={styles._ar}>Guest</span>
          </h2>
        
        </header>
        <main>
        <Guest cardsList={guest || []} />

        </main>
      </section>
    </motion.div>
  )
}

export default Home;