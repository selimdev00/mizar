import type { CSSProperties } from 'react';
import styles from './PixelDecor.module.scss';

type Shape = 'bolt' | 'dollar' | 'smiley';

type Props = {
  shape: Shape;
  size?: number;
  /** inline positioning, e.g. { top: '10%', left: '5%' } */
  style?: CSSProperties;
  variant?: 'float' | 'glitch' | 'spin';
  className?: string;
};

// pixel-art paths drawn on a 10x10 grid of 1-unit squares
function Bolt() {
  return (
    <g shapeRendering="crispEdges">
      <rect x="5" y="0" width="2" height="2" />
      <rect x="4" y="2" width="2" height="2" />
      <rect x="3" y="4" width="3" height="2" />
      <rect x="5" y="4" width="3" height="1" />
      <rect x="4" y="6" width="2" height="2" />
      <rect x="3" y="8" width="2" height="2" />
    </g>
  );
}

function Dollar() {
  return (
    <g shapeRendering="crispEdges">
      <rect x="4" y="0" width="2" height="10" />
      <rect x="2" y="2" width="5" height="2" />
      <rect x="3" y="4" width="5" height="2" />
      <rect x="3" y="6" width="5" height="2" />
    </g>
  );
}

function MiniSmiley() {
  return (
    <g shapeRendering="crispEdges">
      <rect x="2" y="1" width="6" height="1" />
      <rect x="1" y="2" width="8" height="6" />
      <rect x="2" y="8" width="6" height="1" />
      <rect x="3" y="3" width="1" height="2" fill="#000" />
      <rect x="6" y="3" width="1" height="2" fill="#000" />
      <rect x="3" y="6" width="4" height="1" fill="#000" />
    </g>
  );
}

const SHAPES: Record<Shape, () => JSX.Element> = {
  bolt: Bolt,
  dollar: Dollar,
  smiley: MiniSmiley,
};

export default function PixelDecor({
  shape,
  size = 36,
  style,
  variant = 'float',
  className,
}: Props) {
  const Content = SHAPES[shape];
  const variantClass = variant === 'glitch' ? styles.glitch : variant === 'spin' ? styles.spin : '';

  return (
    <svg
      className={`${styles.decor} ${variantClass} ${className ?? ''}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <Content />
    </svg>
  );
}
