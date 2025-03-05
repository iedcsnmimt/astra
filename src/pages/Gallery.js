import styles from '../styles/Gallery.module.scss'; 
import cx from 'classnames';
import { motion } from 'framer-motion';

const Gallery = ({ user }) => {
  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>March 7-9</h2>
          <div>Astra'25 Photo Collection</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <div className={cx(styles['gallery'], styles['drive-gallery'])}>
          <h1>Google Drive Photo Gallery</h1>
          <p>Click below to view the full gallery of event photos on Google Drive.</p>
          <a href="https://drive.google.com/drive/folders/YOUR_DRIVE_FOLDER_ID" target="_blank" rel="noopener noreferrer" className={cx(styles['drive-button'])}>
            <button className={cx(styles['cool-button'])}>📸 Open Drive Gallery</button>
          </a>
        </div>
      </main>
    </motion.div>
  )
}

export default Gallery;