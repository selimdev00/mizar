import Reveal from '@/components/Reveal';
import { loopSteps } from '@/data/site';
import Counter from './Counter';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <h2 className={styles.lede} id="about-title">
            friend Lee — это студия веб-разработки с <span className={styles.accent}>отзывчивым</span>{' '}
            подходом. Понимаем потребности клиента.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className={styles.note}>
            Успешно сотрудничаем с прямыми клиентами, агентствами и крупными интеграторами.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.loop}>
            {loopSteps.map((step) => {
              const [num, ...rest] = step.split(' ');
              return (
                <span className={styles.pill} key={step}>
                  <span className={styles.num}>{num}</span>
                  {rest.join(' ')}
                </span>
              );
            })}

            <span className={styles.cycle}>
              <svg
                className={styles.arrow}
                viewBox="0 0 200 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path
                  className={styles.arrowPath}
                  d="M6 40 C 40 4, 160 4, 192 34"
                />
                <path d="M192 34 l -10 -2 M192 34 l -3 10" />
              </svg>
              И так по кругу
            </span>
          </div>
        </Reveal>

        <div className={styles.counters}>
          <Reveal as="div">
            <Counter to={5} caption="лет на рынке" />
          </Reveal>
          <Reveal as="div" delay={100}>
            <Counter to={200} suffix="+" caption="реализованных проектов" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
