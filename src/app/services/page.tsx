import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { services, techStack } from '@/data/site';
import styles from './page.module.scss';

export const metadata = {
  title: 'Услуги - friend Lee',
  description:
    'От проектирования и дизайна до разработки под ключ и поддержки.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className="section">
          <div className="shell-wide">
            <a className={styles.back} href="/">
              &lt;_ на главную
            </a>
            <h1 className={styles.title}>Услуги</h1>
            <p className={styles.intro}>
              От проектирования и дизайна до разработки под ключ и поддержки.
            </p>

            <div className={styles.grid}>
              {services.map((service) => (
                <article className={styles.card} key={service.title}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <ul className={styles.list}>
                    {service.items.map((item) => (
                      <li className={styles.item} key={item}>
                        <span className={styles.bullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <h2 className={styles.subtitle}>Технологии</h2>
            <div className={styles.techGrid}>
              {techStack.map((tech) => (
                <article className={styles.techCard} key={tech.title}>
                  <h3 className={styles.techTitle}>{tech.title}</h3>
                  <p className={styles.techBody}>{tech.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
