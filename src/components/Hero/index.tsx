import PixelSmiley from '@/components/PixelSmiley';
import ContactButton from '@/components/ContactButton';
import styles from './Hero.module.scss';

const MARQUEE_ITEMS = ['Дружелюбный production', '5 лет на рынке', '200+ проектов'];

export default function Hero() {
  // repeat the set enough that one half of the track exceeds the widest
  // viewport, then the -50% translate loops seamlessly with no gap
  const loop = Array.from({ length: 6 }, () => MARQUEE_ITEMS).flat();

  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.smileyWrap}>
          <PixelSmiley animated={false} label="Смайлик friend Lee" />
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title} id="hero-title">
            Дружелюбный <span className={styles.accent}>production</span>
          </h1>
          <p className={styles.subtitle}>
            Создаем современные web-продукты - от идеи и прототипа до запуска и развития.
          </p>
          <div className={styles.cta}>
            <ContactButton>Обсудить проект</ContactButton>
          </div>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {loop.map((text, i) => (
            <span className={styles.item} key={i}>
              {text}
              <span className={styles.dot} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
