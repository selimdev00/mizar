'use client';

import { useEffect, useState } from 'react';
import PixelSmiley from '@/components/PixelSmiley';
import styles from './Intro.module.scss';

export default function Intro() {
  const [phase, setPhase] = useState<'init' | 'leaving' | 'done'>('init');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem('fl_intro') === '1';
    } catch {
      /* ignore */
    }
    if (seen || reduce) {
      document.documentElement.classList.add('entered');
      setPhase('done');
      return;
    }
    try {
      sessionStorage.setItem('fl_intro', '1');
    } catch {
      /* ignore */
    }
    const t1 = window.setTimeout(() => {
      setPhase('leaving');
      document.documentElement.classList.add('entered');
    }, 1100);
    const t2 = window.setTimeout(() => setPhase('done'), 1800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`${styles.intro} ${phase === 'leaving' ? styles.leaving : ''}`}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <div className={styles.smiley}>
          <PixelSmiley animated={false} />
        </div>
        <p className={styles.word}>
          <span className={styles.prompt}>&gt;_</span> friend lee
        </p>
      </div>
    </div>
  );
}
