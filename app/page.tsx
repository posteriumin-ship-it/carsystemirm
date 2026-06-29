import type { CSSProperties } from "react";
import { ComingSoonProgress } from "./ComingSoonProgress";

const features = [
  "Kvalitet bez kompromisa",
  "Profesionalni materijali",
  "Napredna tehnologija",
  "Pouzdan partner za vaš biznis",
] as const;

const mistParticles = [
  [7, 8, 3, 0.3, 12],
  [14, 17, 5, 1.5, 15],
  [22, 6, 2, 2.1, 11],
  [28, 25, 4, 0.8, 17],
  [35, 12, 3, 3.2, 14],
  [41, 31, 6, 1.1, 19],
  [48, 18, 2, 4.3, 13],
  [54, 42, 4, 2.6, 16],
  [61, 27, 3, 0.4, 20],
  [68, 51, 5, 3.8, 18],
  [75, 35, 2, 2.2, 12],
  [82, 62, 4, 1.7, 17],
  [89, 44, 3, 4.8, 15],
  [96, 73, 6, 0.9, 21],
  [31, 54, 2, 5.2, 13],
  [45, 66, 5, 2.9, 19],
  [58, 76, 3, 1.3, 16],
  [72, 84, 4, 4.1, 18],
] as const;

type ParticleStyle = CSSProperties & {
  "--particle-x": string;
  "--particle-y": string;
  "--particle-size": string;
  "--particle-delay": string;
  "--particle-duration": string;
};

export default function Home() {
  return (
    <main className="hero relative isolate grid min-h-[100svh] overflow-hidden">
      <div className="scene" aria-hidden="true">
        <div className="technical-grid" />
        <div className="spotlight spotlight-primary" />
        <div className="spotlight spotlight-secondary" />
        <div className="spray-cone" />

        <div className="mist-field">
          {mistParticles.map(([x, y, size, delay, duration], index) => {
            const style: ParticleStyle = {
              "--particle-x": `${x}%`,
              "--particle-y": `${y}%`,
              "--particle-size": `${size}px`,
              "--particle-delay": `${delay}s`,
              "--particle-duration": `${duration}s`,
            };

            return <span className="mist-particle" style={style} key={index} />;
          })}
        </div>

        <div className="orbital-mark">
          <span />
          <span />
          <span />
        </div>

        <div className="wave-wrap">
          <svg
            className="paint-wave paint-wave-back"
            viewBox="0 0 1600 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="silverPaint" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.2 0.01 25)" />
                <stop offset="38%" stopColor="oklch(0.76 0.018 25)" />
                <stop offset="63%" stopColor="oklch(0.31 0.014 25)" />
                <stop offset="100%" stopColor="oklch(0.16 0.01 25)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#silverPaint)"
              d="M-120 215C130 146 278 240 530 182C782 124 954 70 1192 134C1408 192 1522 175 1720 88V330H-120Z"
            />
          </svg>

          <svg
            className="paint-wave paint-wave-front"
            viewBox="0 0 1600 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="redPaint" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.29 0.11 25)" />
                <stop offset="35%" stopColor="oklch(0.56 0.23 26)" />
                <stop offset="68%" stopColor="oklch(0.4 0.18 25)" />
                <stop offset="100%" stopColor="oklch(0.2 0.07 24)" />
              </linearGradient>
              <linearGradient id="paintGloss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.98 0.006 25)" stopOpacity=".42" />
                <stop offset="100%" stopColor="oklch(0.98 0.006 25)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#redPaint)"
              d="M-110 231C112 181 302 276 510 231C738 182 847 92 1085 145C1323 198 1447 259 1710 157V330H-110Z"
            />
            <path
              fill="none"
              stroke="url(#paintGloss)"
              strokeWidth="3"
              d="M-110 231C112 181 302 276 510 231C738 182 847 92 1085 145C1323 198 1447 259 1710 157"
            />
          </svg>
        </div>
      </div>

      <div className="content-shell relative z-10 grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
        <header className="brand-header reveal reveal-1 flex items-center justify-between">
          <a className="brand-mark" href="#main-content" aria-label="Carsystem RM, početna">
            <span className="brand-symbol" aria-hidden="true">
              <span />
            </span>
            <span className="brand-name">
              Carsystem <strong>RM</strong>
            </span>
          </a>

          <div className="brand-meta" aria-hidden="true">
            <span>Automotive refinishing</span>
            <span className="brand-meta-index">RM / 01</span>
          </div>
        </header>

        <section
          id="main-content"
          className="hero-copy self-center text-center"
          aria-labelledby="page-title"
        >
          <p className="eyebrow reveal reveal-2">Pripremamo nešto vredno</p>
          <h1 id="page-title" className="hero-title reveal reveal-3">
            Sajt je u pripremi
          </h1>
          <p className="hero-subtitle reveal reveal-4">
            Uskoro novo digitalno iskustvo
          </p>

          <ComingSoonProgress />
        </section>

        <section className="features-wrap reveal reveal-6" aria-label="Naše vrednosti">
          <ul className="features-grid">
            {features.map((feature, index) => (
              <li
                className="feature-item"
                key={feature}
                style={{ "--feature-index": index } as CSSProperties}
              >
                <span className="feature-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
