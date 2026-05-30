'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { contacts } from '@/data/site';
import btn from '@/components/Button/Button.module.scss';
import styles from './ContactButton.module.scss';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
};

export default function ContactButton({ children, variant = 'primary' }: Props) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 240);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const channels = [
    { label: 'Telegram', value: '@ivaniush', href: contacts.telegram, external: true },
    { label: 'WhatsApp', value: contacts.phone, href: contacts.whatsapp, external: true },
    { label: 'Позвонить', value: contacts.phone, href: contacts.phoneHref, external: false },
    { label: 'Почта', value: contacts.email, href: contacts.emailHref, external: false },
  ];

  return (
    <>
      <button
        type="button"
        className={`${btn.btn} ${btn[variant]}`}
        onClick={() => setOpen(true)}
      >
        <span className={btn.label}>{children}</span>
      </button>

      {open && mounted &&
        createPortal(
          <div
            className={`${styles.overlay} ${closing ? styles.closing : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Связаться с friend Lee"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className={styles.dialog}>
            <button
              type="button"
              className={styles.close}
              aria-label="Закрыть"
              onClick={close}
            >
              ×
            </button>

            <p className={styles.kicker}>
              <span className={styles.prompt}>&gt;_</span> давайте обсудим
            </p>
            <h3 className={styles.heading}>Свяжитесь удобным способом</h3>
            <p className={styles.sub}>Отвечаем быстро. Выберите канал:</p>

            <div className={styles.channels}>
              {channels.map((c) => (
                <a
                  key={c.label}
                  className={styles.channel}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
                >
                  <span className={styles.channelLabel}>{c.label}</span>
                  <span className={styles.channelValue}>{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
