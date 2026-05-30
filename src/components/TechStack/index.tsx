import Reveal from '@/components/Reveal';
import { techStack } from '@/data/site';
import styles from './TechStack.module.scss';

export default function TechStack() {
  return (
    <section className={`section ${styles.tech}`} id="tech" aria-labelledby="tech-title">
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className={styles.kicker}>Технологии</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className={styles.title} id="tech-title">
              Технический стек
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {techStack.map((card, i) => (
            <Reveal as="div" key={card.title} delay={i * 90}>
              <article className={styles.card} data-i={i}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.body}>{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
