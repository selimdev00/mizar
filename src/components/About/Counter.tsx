'use client';

import { useCountUp } from '@/lib/useCountUp';
import styles from './About.module.scss';

type Props = {
  to: number;
  suffix?: string;
  caption: string;
};

export default function Counter({ to, suffix = '', caption }: Props) {
  const { ref, value } = useCountUp(to);

  return (
    <div className={styles.counter}>
      <div className={styles.value}>
        <span ref={ref}>{value}</span>
        {suffix}
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
}
