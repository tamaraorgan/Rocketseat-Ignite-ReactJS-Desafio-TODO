import logo from '../assets/logo.svg';
import styles from './Header.module.css';

function Header() {
   return (
      <header className={styles.header}>
         <img src={logo} alt="Um foguete subindo e TODO escrito ao lado" />
      </header>
   );
}

export { Header };
