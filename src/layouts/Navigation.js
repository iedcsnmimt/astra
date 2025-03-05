import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';
import cx from 'classnames';

const links = [
  { link: '/', name: 'Home', onlyMobile: true },
  { link: '/events', name: "Events" },
  { link: '/gallery', name: 'Gallery' },
  { link: '/register', name: 'Register' },
];

const NavItem = ({ name, link, handleClick }) => (
  <NavLink 
    to={link} 
    onClick={handleClick} 
    className={({ isActive }) => cx(styles['router-link'], 'link', { [styles.active]: isActive })}
  >
    {name}
  </NavLink>
);

const Navigation = () => {
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(`.${styles.mobile}`);
    const mobileNavBtns = document.querySelectorAll(`.${styles['mobile-hamburger-btn']}`);

    mobileNavBtns.forEach(btn => btn.classList.toggle(styles.active));
    mobileNav.classList.toggle(styles.active);

    document.body.style.overflow = mobileNav.classList.contains(styles.active) ? 'hidden' : 'auto';
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <NavLink to="/">ASTRA</NavLink>
        </div>
        <div className={cx(styles["router-links"], styles.desktop)}>
          {links.map(link => <NavItem key={link.name} {...link} />)}
        </div>
        <button 
          aria-label="Menu" 
          className={styles['mobile-hamburger-btn']} 
          type="button" 
          onClick={toggleMobileNav}
        >
          Menu
        </button>
      </nav>
      
      <nav className={styles.mobile}>
        <button 
          aria-label="Close Menu" 
          className={styles['mobile-hamburger-btn']} 
          type="button" 
          onClick={toggleMobileNav}
        >
          Close
        </button>
        <ul className={styles["router-links"]}>
          {links.map(link => (
            <li key={link.name}>
              <NavItem handleClick={toggleMobileNav} {...link} />
            </li>
          ))}
        </ul>
        <div className={styles['nav-footer']}>
          &copy; 2024 ASTRA
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
