import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import PixelDecor from '@/components/PixelDecor';
import { contacts } from '@/data/site';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contacts" aria-labelledby="contacts-title">
      <PixelDecor shape="dollar" size={36} variant="glitch" style={{ top: '10%', right: '8%' }} />
      <PixelDecor shape="bolt" size={30} style={{ bottom: '18%', right: '16%' }} />

      <div className="container">
        <Reveal>
          <h2 className={styles.cta} id="contacts-title">
            Дружелюбный <span className={styles.accent}>production</span>, который хочется обнять
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.actions}>
            <Button href={contacts.emailHref}>Написать нам</Button>
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
                <span>Аккредитованная IT-Компания</span>
              </li>
              <li>
                <a href="#">Юридическая информация</a>
              </li>
              <li>
                <a href="#projects">Проекты</a>
              </li>
              <li>
                <a href="#services">Услуги</a>
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

        <div className={styles.bottom}>
          <span className={styles.logo}>
            <span className={styles.prompt}>&gt;_</span> friend lee
          </span>
          <span>© {year} friend Lee. Концепт-редизайн.</span>
        </div>
      </div>
    </footer>
  );
}
