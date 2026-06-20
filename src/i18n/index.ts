import type { Lang, LocaleKey } from '../types';
import { locales } from './locales';

function detectLang(): Lang {
  const preferred = navigator.languages ?? [navigator.language];
  for (const lang of preferred) {
    const code = lang.slice(0, 2) as Lang;
    if (['en', 'zh', 'ja', 'ko'].includes(code)) return code;
  }
  return 'en';
}

const currentLang = detectLang();

export function t(key: LocaleKey, params?: Record<string, string | number>): string {
  let text = locales[currentLang]?.[key] ?? locales.en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}
