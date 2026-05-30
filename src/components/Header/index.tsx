import { contacts } from '@/data/site';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} aria-label="friend Lee - на главную">
          <span className={styles.prompt} aria-hidden="true">
            &gt;
          </span>
          <span className={styles.brand}>friend lee</span>
        </a>

        <div className={styles.right}>
          <nav className={styles.contacts} aria-label="Контакты">
            <a className={styles.contactLink} href={contacts.phoneHref}>
              {contacts.phone}
            </a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a className={styles.contactLink} href={contacts.emailHref}>
              {contacts.email}
            </a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a className={styles.contactLink} href={contacts.telegram}>
              Telegram
            </a>
            <a className={styles.contactLink} href={contacts.whatsapp}>
              WhatsApp
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
