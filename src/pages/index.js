import styles from './index.css';
import url from '../public/favicon.ico'

const Layout = () => {
  return (
    <div>
      <div className={styles.welcome} />
      <img src={url} alt=""/>
    </div>
  );
}

export default Layout;