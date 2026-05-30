import type { Metadata, Viewport } from 'next';
import { unbounded, inter } from './fonts';
import './globals.scss';

export const metadata: Metadata = {
  title: 'friend Lee - дружелюбный production, который хочется обнять',
  description:
    'friend Lee - студия веб-разработки с отзывчивым подходом. Проектирование, разработка под ключ, техподдержка и развитие. 5 лет на рынке, 200+ проектов.',
  keywords: ['веб-разработка', 'студия', 'дизайн', 'разработка под ключ', 'friend Lee'],
  authors: [{ name: 'friend Lee' }],
  openGraph: {
    title: 'friend Lee - дружелюбный production',
    description: 'Создаем современные web-продукты. 5 лет на рынке, 200+ проектов.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const themeInit = `(function(){var d=document.documentElement;d.classList.add('js');setTimeout(function(){d.classList.add('entered');},2600);try{var t=localStorage.getItem('theme');if(t==='light'){d.setAttribute('data-theme','light');}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
