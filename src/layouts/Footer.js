import styles from '../styles/Footer.module.scss';
import cx from 'classnames';
import { useState } from 'react';

const Footer = () => {
  const [devTeam, setDevTeam] = useState(false);

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={cx(styles.footerItems)} id="footerContent">
          <div className={styles.QuotesContainer}>
            <div className={styles.quotes}>
              Our innovation bootcamp fosters creativity, builds entrepreneurial skills, and transforms ideas into reality.
            </div>
          </div>

          <div>
            <div className={styles.LogoContainer}>
              {/* <img src={logo} alt="Astra Logo"></img> */}
              <div className={styles.title}>Astra</div>
            </div>
          </div>

          <div className={styles['sponsor-wrapper']}>
            {/* <div className={styles.sponsor}>
              <p style={{ textAlign: "center", fontSize: '1.2rem' }}>Our Sponsors</p>
              <div className={styles.sponsorImgs}>
                <img className={styles.sponsors} src={echoOfArunachal} alt="Echo of Arunachal"></img>
                <img className={styles.sponsors} src={hotelObsidianBlue} alt="Hotel Obsidian Blue"></img>
              </div>
            </div> */}
          </div>
        </div>

        <div className={styles.footerItems}>
          <div>
           {/* <p>Contact us</p> */}
            <ul className={styles.SocialHandles}>
              {/* <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="mailto:astra@bootcamp.com">
                  <MailIcon />
                </a>
              </li> */}
              {/* <li className={cx(styles['handle-wrapper'])}>
                 <a className={styles.handle} target='_blank' rel='noreferrer' href="https://chat.whatsapp.com/HmcowbF1mbG7DRJxti4X4X">
                  <WAIcon />
                </a> 
              </li> */}
            </ul> 
          </div>

          <div className={styles.thanks}>
            <span>Thank you</span>
            <br />
            <span>for your support</span>
          </div>
          <div>
            {/* <img src={bye} style={{ height: "160px", width: "auto" }} alt="Bye"></img> */}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.team}>
          <span>
            Developed by <strong>Ecocee</strong>
          </span>
          <span className={styles.sep}>~</span>
          <span>&copy; 2025 Astra Bootcamp</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
