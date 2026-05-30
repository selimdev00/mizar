import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import ContactButton from '@/components/ContactButton';
import { contacts } from '@/data/site';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contacts" aria-labelledby="contacts-title">
      <div className="container">
        <Reveal>
          <h2 className={styles.cta} id="contacts-title">
            Дружелюбный <span className={styles.accent}>production</span>, который хочется обнять
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.actions}>
            <ContactButton>Написать нам</ContactButton>
            <Button href={contacts.phoneHref} variant="ghost">
              {contacts.phone}
            </Button>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href={contacts.phoneHref}>{contacts.phone}</a>
              </li>
              <li>
                <a href={contacts.emailHref}>{contacts.email}</a>
              </li>
              <li>
                <a href={contacts.telegram}>Telegram</a>
              </li>
              <li>
                <a href={contacts.whatsapp}>WhatsApp</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Компания</h4>
            <ul>
              <li>
                <a href="/company">Аккредитованная IT-Компания</a>
              </li>
              <li>
                <a href="/legal">Юридическая информация</a>
              </li>
              <li>
                <a href="/projects">Проекты</a>
              </li>
              <li>
                <a href="/services">Услуги</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>О подходе</h4>
            <ul>
              <li>
                <span className={styles.muted}>
                  Сотрудничаем с прямыми клиентами, агентствами и крупными интеграторами.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Reveal delay={120}>
          <p className={styles.terminal} aria-label="friend lee: npm run обнял">
            <span className={styles.prompt} aria-hidden="true">
              &gt;_
            </span>
            <span aria-hidden="true">npm run обнял</span>
            <span className={styles.cursor} aria-hidden="true" />
          </p>
        </Reveal>

        <div className={styles.bottom}>
          <span className={styles.logo}>
            <span className={styles.prompt}>&gt;_</span> friend lee
          </span>
          <span className={styles.author}>
            концепт-редизайн -{' '}
            <a href="https://selim.services" target="_blank" rel="noopener">
              Selim
            </a>
            <span aria-hidden="true"> · </span>
            <a href="https://github.com/selimdev00" target="_blank" rel="noopener">
              github
            </a>
          </span>
          <span>© {year} friend Lee</span>
        </div>
      </div>
    </footer>
  );
}
