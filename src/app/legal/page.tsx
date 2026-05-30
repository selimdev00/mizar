import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { contacts } from '@/data/site';
import styles from './page.module.scss';

export const metadata = {
  title: 'Юридическая информация - friend Lee',
  description:
    'Реквизиты, политика конфиденциальности и пользовательское соглашение friend Lee.',
};

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className="section">
          <div className="shell-narrow">
            <a className={styles.back} href="/">
              &lt;_ на главную
            </a>
            <h1 className={styles.title}>Юридическая информация</h1>
            <p className={styles.intro}>
              Это концепт-сайт. Реквизиты и документы ниже приведены как
              демонстрационные и не являются публичной офертой.
            </p>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Реквизиты</h2>
              <dl className={styles.req}>
                <div className={styles.reqRow}>
                  <dt>Организация</dt>
                  <dd>ООО &laquo;Френд Ли&raquo;</dd>
                </div>
                <div className={styles.reqRow}>
                  <dt>ИНН</dt>
                  <dd>7700000000</dd>
                </div>
                <div className={styles.reqRow}>
                  <dt>ОГРН</dt>
                  <dd>1207700000000</dd>
                </div>
                <div className={styles.reqRow}>
                  <dt>Юридический адрес</dt>
                  <dd>г. Москва, демонстрационный адрес</dd>
                </div>
              </dl>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Политика конфиденциальности</h2>
              <p className={styles.text}>
                Мы собираем только те данные, которые вы оставляете в формах
                связи: имя, контакты и текст обращения. Используем их
                исключительно чтобы ответить на ваш запрос и обсудить
                сотрудничество. Не передаём данные третьим лицам и не используем
                их для рекламных рассылок без вашего согласия.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>
                Пользовательское соглашение
              </h2>
              <p className={styles.text}>
                Материалы сайта носят информационный характер и могут меняться
                без предварительного уведомления. Условия конкретного проекта
                фиксируются отдельным договором. Используя сайт, вы соглашаетесь
                с обработкой оставленных вами данных в объёме, описанном в
                политике конфиденциальности.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Контакты для юр. вопросов</h2>
              <ul className={styles.contacts}>
                <li>
                  <a href={contacts.phoneHref}>{contacts.phone}</a>
                </li>
                <li>
                  <a href={contacts.emailHref}>{contacts.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
