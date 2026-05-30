import styles from './PixelSmiley.module.scss';

type Props = {
  /** Set false to disable the build-in / breathing animation. */
  animated?: boolean;
  className?: string;
  label?: string;
};

// friend Lee's own brand mark (their happyFace smiley), recoloured to the lime token.
export default function PixelSmiley({ animated = true, className, label }: Props) {
  return (
    <svg
      className={`${styles.face} ${animated ? styles.animated : ''} ${className ?? ''}`}
      viewBox="0 0 80 80"
      fill="none"
      role="img"
      aria-label={label ?? 'Смайлик friend Lee'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM19.6747 53.419C18.569 50.7499 18 47.8891 18 45H14C14 48.4144 14.6725 51.7953 15.9791 54.9498C17.2858 58.1042 19.2009 60.9705 21.6152 63.3848C24.0295 65.7991 26.8958 67.7142 30.0502 69.0209C33.2047 70.3275 36.5856 71 40 71C43.4144 71 46.7953 70.3275 49.9498 69.0209C53.1042 67.7142 55.9705 65.7991 58.3848 63.3848C60.7991 60.9705 62.7142 58.1042 64.0209 54.9498C65.3275 51.7953 66 48.4144 66 45H62C62 47.8891 61.431 50.7499 60.3253 53.419C59.2197 56.0882 57.5992 58.5135 55.5564 60.5564C53.5135 62.5992 51.0882 64.2197 48.419 65.3253C45.7499 66.431 42.8891 67 40 67C37.1109 67 34.2501 66.431 31.581 65.3253C28.9118 64.2197 26.4865 62.5992 24.4436 60.5563C22.4008 58.5135 20.7803 56.0882 19.6747 53.419ZM36 29C36 35.0751 33.3137 40 30 40C26.6863 40 24 35.0751 24 29C24 22.9249 26.6863 18 30 18C33.3137 18 36 22.9249 36 29ZM50 40C53.3137 40 56 35.0751 56 29C56 22.9249 53.3137 18 50 18C46.6863 18 44 22.9249 44 29C44 35.0751 46.6863 40 50 40Z"
        fill="currentColor"
      />
    </svg>
  );
}
