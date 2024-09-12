import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo-img"/>
      </div>
      <div className={`${styles.navLinkSection}`}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar;