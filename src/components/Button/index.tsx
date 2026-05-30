import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
};

export default function Button({ variant = 'primary', children, className, ...rest }: Props) {
  return (
    <a className={`${styles.btn} ${styles[variant]} ${className ?? ''}`} {...rest}>
      <span className={styles.label}>{children}</span>
    </a>
  );
}
