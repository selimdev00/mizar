import styles from './PixelSmiley.module.scss';

// 8x8 pixel-art smiley. 1 = lit (lime), 0 = empty.
const MAP: number[] = [
  0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0,
];

type Props = {
  /** Set false to disable staggered build-in animation (e.g. small decorative use). */
  animated?: boolean;
  className?: string;
  label?: string;
};

export default function PixelSmiley({ animated = true, className, label }: Props) {
  return (
    <div
      className={`${styles.grid} ${className ?? ''}`}
      role="img"
      aria-label={label ?? 'Пиксельный смайлик friend Lee'}
    >
      {MAP.map((v, i) => (
        <span
          key={i}
          className={`${styles.cell} ${v ? styles.on : ''}`}
          style={
            animated
              ? { animationDelay: `${(i % 8) * 0.03 + Math.floor(i / 8) * 0.04}s` }
              : undefined
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
