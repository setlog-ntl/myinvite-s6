// ──────────────────────────────────────
// Invitation Config — auto-generated
// ──────────────────────────────────────

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

// ── 타입 ────────────────────────────

interface HostItem {
  name: string; nameEn?: string;
  role: string; roleEn?: string;
  phone?: string; avatarUrl?: string;
}

interface AccountItem {
  label: string; bankName: string;
  accountNumber: string; holder: string;
}

interface ContactItem {
  name: string; phone: string; role?: string;
}

// ── 헬퍼 ────────────────────────────

function parseJSON<T>(env: string | undefined, fallback: T): T {
  if (!env) return fallback;
  try { return JSON.parse(env) as T; } catch { return fallback; }
}

// ── 데모 데이터 ─────────────────────

const DEMO_HOSTS: HostItem[] = [
  {
    name: '홍길동',
    role: '주최',
  }
];

const DEMO_ACCOUNTS: AccountItem[] = [];

const DEMO_CONTACTS: ContactItem[] = [
  { name: '홍길동', phone: '010-1234-5678', role: '주최자' }
];

// ── config ──────────────────────────

export const siteConfig = {
  // hero
  eventType: process.env.NEXT_PUBLIC_EVENT_TYPE || 'gathering',
  designPreset: 'elegant-gold',
  title: process.env.NEXT_PUBLIC_TITLE || '함께해 주세요2',
  titleEn: 'You\'re Invited',
  subtitle: process.env.NEXT_PUBLIC_SUBTITLE || '소중한 자리에 초대합니다',
  subtitleEn: 'We warmly invite you to join us',
  heroImageUrl: '',
  gradientFrom: '#b8860b',
  gradientTo: '#d4a853',

  // dday
  eventDate: '2026-06-15',
  eventTime: '14:00',
  eventDateLabel: '2026년 6월 15일 토요일 오후 2시',
  eventDateLabelEn: 'Saturday, June 15, 2026 at 2:00 PM',
  showCountdown: true,
  countdownStyle: 'simple' as 'flip' | 'simple',

  // hosts
  hostsTitle: '초대하는 사람',
  hostsTitleEn: 'Hosted by',
  hosts: parseJSON<HostItem[]>(process.env.NEXT_PUBLIC_HOSTS, DEMO_HOSTS),

  // location
  venueName: '',
  venueNameEn: '',
  venueAddress: '',
  venueAddressEn: '',
  kakaoMapUrl: '',
  naverMapUrl: '',
  parkingInfo: '',
  transitInfo: '',

  // gallery
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY, []),
  galleryColumns: 3,

  // account
  accountTitle: '마음 전하기',
  accountTitleEn: 'Send Your Wishes',
  accounts: parseJSON<AccountItem[]>(process.env.NEXT_PUBLIC_ACCOUNTS, DEMO_ACCOUNTS),
  kakaoPayUrl: '',

  // contact
  contacts: parseJSON<ContactItem[]>(process.env.NEXT_PUBLIC_CONTACTS, DEMO_CONTACTS),
};
