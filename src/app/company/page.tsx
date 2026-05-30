import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import styles from './page.module.scss';

export const metadata = {
  title: 'Аккредитованная IT-Компания - friend Lee',
  description:
    'friend Lee - аккредитованная IT-компания и дружелюбный production. 5 лет на рынке, 200+ реализованных проектов.',
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className="section">
          <div className="shell-narrow">
            <a className={styles.back} href="/">
              &lt;_ на главную
            </a>
            <h1 className={styles.title}>Аккредитованная IT-Компания</h1>

            <p className={styles.lead}>
              friend Lee - аккредитованная IT-компания, дружелюбный production,
              который хочется обнять. Делаем сайты, сервисы и порталы и доводим
              их до результата, а не до сдачи макета.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statFigure}>5 лет</span>
                <span className={styles.statLabel}>на рынке</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statFigure}>200+</span>
                <span className={styles.statLabel}>
                  реализованных проектов
                </span>
              </div>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Подход</h2>
              <p className={styles.text}>
                Мы работаем по дружелюбному циклу: ставим себя на место
                пользователей, делаем user friend Lee, анализируем, что
                получилось, и так по кругу.
              </p>
              <ul className={styles.loop}>
                <li className={styles.loopStep}>
                  <span className={styles.loopNum}>01</span>
                  Ставим себя на место пользователей
                </li>
                <li className={styles.loopStep}>
                  <span className={styles.loopNum}>02</span>
                  Делаем user friend Lee
                </li>
                <li className={styles.loopStep}>
                  <span className={styles.loopNum}>03</span>
                  Анализируем, что получилось
                </li>
                <li className={styles.loopStep}>
                  <span className={styles.loopNum}>04</span>и так по кругу
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>С кем работаем</h2>
              <ul className={styles.tags}>
                <li className={styles.tag}>Прямые клиенты</li>
                <li className={styles.tag}>Агентства</li>
                <li className={styles.tag}>Крупные интеграторы</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Аккредитация</h2>
              <p className={styles.text}>
                friend Lee - аккредитованная IT-компания с государственной
                аккредитацией Минцифры. Это подтверждает, что мы профильная
                команда и работаем по прозрачным правилам, а для наших
                специалистов и клиентов открыты меры поддержки IT-отрасли.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
