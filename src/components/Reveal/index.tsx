'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '@/lib/useReveal';
import styles from './Reveal.module.scss';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
};

export default function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${styles.reveal} ${shown ? styles.shown : ''} ${className ?? ''}`}
    >
      {children}
    </Tag>
  );
}
