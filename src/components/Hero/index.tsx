import PixelSmiley from '@/components/PixelSmiley';
import PixelDecor from '@/components/PixelDecor';
import Button from '@/components/Button';
import styles from './Hero.module.scss';

const MARQUEE_ITEMS = ['Дружелюбный production', '5 лет на рынке', '200+ проектов'];

export default function Hero() {
  // duplicate items so the -50% translate loops seamlessly
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-title">
      <PixelDecor shape="bolt" size={42} variant="glitch" style={{ top: '12%', left: '6%' }} />
      <PixelDecor shape="dollar" size={34} style={{ top: '22%', right: '9%' }} />
      <PixelDecor shape="smiley" size={40} variant="spin" style={{ bottom: '24%', left: '12%' }} />
      <PixelDecor shape="bolt" size={28} variant="glitch" style={{ bottom: '30%', right: '14%' }} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.smileyWrap}>
          <PixelSmiley label="Пиксельный смайлик friend Lee" />
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title} id="hero-title">
            Дружелюбный <span className={styles.accent}>production</span>
          </h1>
          <p className={styles.subtitle}>
            Создаем современные web-продукты — от идеи и прототипа до запуска и развития.
          </p>
          <div className={styles.cta}>
            <Button href="#contacts">Обсудить проект</Button>
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
