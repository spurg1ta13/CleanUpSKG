// reCAPTCHA v3 helper
// Site key is public — safe to hardcode in client code.
export const RECAPTCHA_SITE_KEY = "6LdDQgEtAAAAACXXs_at4hN4RwMmmDgFu00mI8iI";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

const loadScript = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.grecaptcha) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha="v3"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("recaptcha load failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.dataset.recaptcha = "v3";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("recaptcha load failed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
};

export const executeRecaptcha = async (action: string): Promise<string> => {
  await loadScript();
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) return reject(new Error("grecaptcha unavailable"));
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
};
