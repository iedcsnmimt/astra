import styles from './SupportLink.module.scss';
import cx from 'classnames';

const SupportLink = () => (
  <div className={styles.support}>
  For queries and technical support, contact us at 
  <a className={cx('link', styles.link)} href="mailto:ceoiedcsnmimt@gmail.com">
    ceoiedcsnmimt@gmail.com
  </a>
</div>

)

export default SupportLink;