import Reveal from '@/components/Reveal';
import { services } from '@/data/site';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services" aria-labelledby="services-title">
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className={styles.kicker}>Что мы делаем</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className={styles.title} id="services-title">
              Услуги
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Reveal as="div" key={service.title} delay={i * 90}>
              <article className={styles.card} data-i={i}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
