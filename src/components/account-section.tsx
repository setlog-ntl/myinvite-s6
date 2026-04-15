'use client';

import { useState } from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface AccountItem { label: string; bankName: string; accountNumber: string; holder: string; }
interface Props { config: { accountTitle: string; accounts: AccountItem[]; kakaoPayUrl: string; } }

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        window.prompt('복사해주세요:', text);
        return;
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('복사해주세요:', text);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 btn-press"
      style={{
        background: copied ? 'var(--inv-accent)' : 'var(--inv-accent-glow)',
        color: copied ? '#fff' : 'var(--inv-accent)',
      }}
    >
      {copied ? '\u2713 복사됨' : '복사'}
    </button>
  );
}

export function AccountSection({ config }: Props) {
  if (!config.accounts?.length && !config.kakaoPayUrl) return null;

  return (
    <AnimatedReveal>
      <section className="py-12 px-6" style={{ background: 'var(--inv-bg-alt)' }}>
        <h2 className="text-xl font-semibold text-center mb-6" style={{ fontSize: 'var(--inv-text-section)', color: 'var(--inv-text-primary)' }}>
          {config.accountTitle}
        </h2>
        <div className="max-w-md mx-auto space-y-3">
          {config.accounts.map((acc, i) => (
            <div key={i} className="rounded-2xl p-4 inv-card">
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--inv-text-secondary)' }}>{acc.label}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: 'var(--inv-text-primary)' }}>{acc.bankName} {acc.accountNumber}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--inv-text-secondary)' }}>{acc.holder}</p>
                </div>
                <CopyButton text={acc.accountNumber} />
              </div>
            </div>
          ))}
          {config.kakaoPayUrl && (
            <a
              href={config.kakaoPayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl font-medium text-sm transition-transform btn-press"
              style={{ background: '#FEE500', color: '#191919', boxShadow: 'var(--inv-shadow-sm)' }}
            >
              {/* Kakao icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#191919">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.5 6.6-.2.73-.72 2.65-.82 3.06-.13.5.18.49.38.36.16-.11 2.5-1.7 3.51-2.39.47.07.95.1 1.43.1 5.52 0 10-3.58 10-7.73C22 6.58 17.52 3 12 3z"/>
              </svg>
              카카오페이로 송금하기
            </a>
          )}
        </div>
      </section>
    </AnimatedReveal>
  );
}
