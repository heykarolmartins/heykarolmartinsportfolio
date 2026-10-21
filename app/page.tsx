'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowDownRight, Play, Menu, X, Plus, Check, Sun, Moon } from 'lucide-react';
import { site, hero, ticker, problem, offer, pillars, work, process, pricing, faq, closing } from './content';

const SECTIONS: [string, string, string][] = [
  ['top', '00', 'Intro'],
  ['problem', '01', 'Problem'],
  ['offer', '02', 'Offer'],
  ['why', '03', 'Why me'],
  ['work', '04', 'Work'],
  ['process', '05', 'Process'],
  ['pricing', '06', 'Pricing'],
  ['faq', '07', 'FAQ'],
  ['start', '08', 'Start'],
];

const CAPTION_LINES = [
  ['STOP', 'POSTING', 'RAW', 'FOOTAGE'],
  ['YOUR', 'LOOK.', 'EVERY', 'WEEK.'],
  ['HOOK', 'THEM', 'IN', 'THREE'],
];

const TIMELINE_SECONDS = 150; // the page is "a 2:30 timeline"
const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
const timecode = (p: number) => {
  const t = (p / 100) * TIMELINE_SECONDS;
  const frames = Math.floor((t % 1) * 24);
  return `00:${pad(t / 60)}:${pad(t % 60)}:${pad(frames)}`;
};

function Lines({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split('\n').map((line, i) => (
        <span className="line-mask" key={i}>
          <span className="line-inner" style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadPct, setLoadPct] = useState(0);
  const [active, setActive] = useState('top');
  const [line, setLine] = useState(0);
  const [word, setWord] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    if (t === 'dark' || t === 'light') setTheme(t);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('hkm-theme', next); } catch {}
    setTheme(next);
  };

  const barRef = useRef<HTMLDivElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // ── Preloader ───────────────────────────────────────────
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try { seen = sessionStorage.getItem('km-loaded') === '1'; } catch {}
    if (reduce || seen) { setLoadPct(100); setLoaded(true); return; }
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setLoadPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => { setLoaded(true); try { sessionStorage.setItem('km-loaded', '1'); } catch {} }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-loading', !loaded);
  }, [loaded]);

  // ── Caption cycler in hero phone ─────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setWord((w) => {
        if (w >= 3) { setLine((l) => (l + 1) % CAPTION_LINES.length); return 0; }
        return w + 1;
      });
    }, 520);
    return () => clearInterval(id);
  }, []);

  // ── Scroll timeline, reveals, counters, cursor, magnetic, tilt ──
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p / 100})`;
      if (tcRef.current) tcRef.current.textContent = timecode(p);
      if (pctRef.current) pctRef.current.textContent = `${String(Math.round(p)).padStart(3, '0')}%`;
      let current = 'top';
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        const el = e.target as HTMLElement;
        if (el.dataset.count) {
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          if (reduce) { el.textContent = target + suffix; }
          else {
            const t0 = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / 1100);
              el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
        io.unobserve(e.target);
      }),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('.rv, .split, [data-count]').forEach((el) => io.observe(el));

    const cleanups: (() => void)[] = [];

    if (fine && !reduce) {
      document.documentElement.classList.add('has-cursor');
      let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, raf = 0;
      const move = (e: MouseEvent) => {
        mx = e.clientX; my = e.clientY;
        if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
        const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
        const ring = ringRef.current;
        if (ring) {
          ring.classList.toggle('big', !!target);
          ring.classList.toggle('link', !target && !!(e.target as HTMLElement).closest('a,button,summary,input,select,textarea'));
          if (labelRef.current) labelRef.current.textContent = target?.dataset.cursor || '';
        }
      };
      const loop = () => {
        rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
        if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      window.addEventListener('mousemove', move);
      cleanups.push(() => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); document.documentElement.classList.remove('has-cursor'); });

      document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
        const mm = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
        };
        const ml = () => { el.style.transform = ''; };
        el.addEventListener('mousemove', mm); el.addEventListener('mouseleave', ml);
        cleanups.push(() => { el.removeEventListener('mousemove', mm); el.removeEventListener('mouseleave', ml); });
      });

      document.querySelectorAll<HTMLElement>('.tilt').forEach((el) => {
        const mm = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
          el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
          el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
        };
        const ml = () => { el.style.transform = ''; };
        el.addEventListener('mousemove', mm); el.addEventListener('mouseleave', ml);
        cleanups.push(() => { el.removeEventListener('mousemove', mm); el.removeEventListener('mouseleave', ml); });
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Channel / footage link: ${f.get('link')}`,
      `What I post: ${f.get('kind')}`,
      `Posting frequency: ${f.get('freq')}`,
      '',
      `${f.get('notes') || ''}`,
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Free sample edit request')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const close = () => setMenuOpen(false);
  const caption = CAPTION_LINES[line];

  return (
    <>
      {/* Preloader */}
      <div className={`loader ${loaded ? 'done' : ''}`} aria-hidden={loaded}>
        <div className="loader-top"><span>KM—EDIT SUITE</span><span>LOADING TIMELINE</span></div>
        <div className="loader-num">{String(loadPct).padStart(3, '0')}<small>%</small></div>
        <div className="loader-bar"><i style={{ transform: `scaleX(${loadPct / 100})` }} /></div>
        <div className="loader-bottom"><span>{timecode(loadPct)}</span><span>24 FPS · 9:16</span></div>
      </div>

      {/* Cursor */}
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"><span ref={labelRef} /></div>

      {/* Scroll timeline */}
      <div className="timeline" aria-hidden="true">
        <div className="timeline-ticks" />
        <div className="timeline-fill" ref={barRef} />
      </div>
      <div className="tc-readout" aria-hidden="true">
        <span className="rec" /> <span ref={tcRef}>00:00:00:00</span> <b ref={pctRef}>000%</b>
      </div>

      <aside className="rail" aria-label="Page sections">
        {SECTIONS.map(([id, no, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-label={label}>
            <em>{label}</em><span>{no}</span><i />
          </a>
        ))}
      </aside>

      <header className="nav">
        <a className="wordmark" href="#top" aria-label={`${site.name} home`}><span className="wordmark-h">h</span>KM<sup>®</sup></a>
        <div className="nav-end">
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={close}>Work</a>
          <a href="#process" onClick={close}>Process</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#start" className="btn btn-ink magnetic" onClick={close}><span>Free sample</span><ArrowUpRight size={15} /></a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          {theme === 'dark' ? <Sun size={16} strokeWidth={1.6} /> : <Moon size={16} strokeWidth={1.6} />}
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero pad" id="top">
          <div className="hero-grid">
            <div className="hero-main">
              <p className={`eyebrow ${loaded ? 'in' : ''}`}><span className="live" /> {hero.eyebrow}</p>
              <h1 className={`hero-title ${loaded ? 'in' : ''}`}>
                {hero.title.map((l, i) => (
                  <span className="line-mask" key={i}>
                    <span className="line-inner" style={{ transitionDelay: `${150 + i * 110}ms` }}>
                      {i === hero.title.length - 1 ? <>{l.replace('.', '')}<em className="dot">.</em></> : l}
                    </span>
                  </span>
                ))}
              </h1>
              <div className={`hero-foot ${loaded ? 'in' : ''}`}>
                <p className="hero-copy">{hero.copy}</p>
                <div className="hero-ctas">
                  <a href="#start" className="btn btn-lime btn-lg magnetic"><span>{hero.primary}</span><ArrowUpRight size={18} /></a>
                  <a href="#work" className="btn btn-ghost magnetic"><span>{hero.secondary}</span><ArrowDownRight size={16} /></a>
                </div>
              </div>
            </div>

            <div className={`hero-visual ${loaded ? 'in' : ''}`} aria-hidden="true">
              <div className="phone">
                <div className="phone-screen">
                  <div className="footage"><i className="f1" /><i className="f2" /><i className="f3" /></div>
                  <div className="phone-top"><span><b className="rec" /> REC</span><span>{timecode(((line * 4 + word) / 12) * 100).slice(3)}</span></div>
                  <div className="safe-zone" />
                  <div className="caption" key={line}>
                    {caption.map((w, i) => (
                      <span key={i} className={i === word ? 'hl' : i < word ? 'past' : ''}>{w}</span>
                    ))}
                  </div>
                  <div className="phone-ui"><span>@yourbrand</span><span>♥ ⟳ ↗</span></div>
                </div>
              </div>
              <div className="editor">
                <div className="editor-head"><span>SEQ 01 · SHORT_v3</span><span>00:42</span></div>
                <div className="tracks">
                  <div className="track"><em>V2</em><div className="track-in"><i style={{ left: '8%', width: '18%' }} className="c-lime" /><i style={{ left: '52%', width: '22%' }} className="c-lime" /></div></div>
                  <div className="track"><em>V1</em><div className="track-in"><i style={{ left: '0%', width: '30%' }} /><i style={{ left: '31%', width: '24%' }} /><i style={{ left: '56%', width: '20%' }} /><i style={{ left: '77%', width: '23%' }} /></div></div>
                  <div className="track wave"><em>A1</em>{Array.from({ length: 34 }).map((_, i) => <b key={i} style={{ animationDelay: `${(i % 7) * 90}ms` }} />)}</div>
                  <div className="playhead" />
                </div>
              </div>
              <div className="float-tag t1">CAPTIONS · BRAND KIT</div>
              <div className="float-tag t2">CUT ON THE BEAT ✳</div>
            </div>
          </div>

          <div className="stats">
            {hero.stats.map((s) => (
              <div className="stat rv" key={s.label}>
                <strong data-count={parseFloat(s.value)} data-suffix={s.value.replace(/[0-9.]/g, '')}>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}<b>✳</b></span>)}
          </div>
        </div>

        {/* PROBLEM */}
        <section className="section pad" id="problem">
          <div className="head">
            <p className="kicker rv">{problem.kicker}</p>
            <h2 className="split"><Lines text={problem.title} /></h2>
          </div>
          <div className="pains">
            {problem.pains.map((p, i) => (
              <div className="pain rv" key={p.k} style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="pain-k">{String(i + 1).padStart(2, '0')} — {p.k}</span>
                <p>{p.t}</p>
                <X size={18} className="pain-x" />
              </div>
            ))}
          </div>
        </section>

        {/* OFFER */}
        <section className="section pad dark" id="offer">
          <div className="head">
            <p className="kicker rv">{offer.kicker}</p>
            <h2 className="split"><Lines text={offer.title} /></h2>
          </div>
          <div className="offer-grid">
            <article className="offer-card main tilt rv">
              <div className="glow" />
              <span className="tag">{offer.main.tag}</span>
              <h3>{offer.main.name}</h3>
              <p>{offer.main.text}</p>
              <ul>{offer.main.bullets.map((b) => <li key={b}><Check size={14} />{b}</li>)}</ul>
              <a href="#pricing" className="btn btn-lime magnetic"><span>See the monthly plan</span><ArrowUpRight size={16} /></a>
            </article>
            <article className="offer-card tilt rv">
              <div className="glow" />
              <span className="tag">{offer.second.tag}</span>
              <h3>{offer.second.name}</h3>
              <p>{offer.second.text}</p>
              <ul>{offer.second.bullets.map((b) => <li key={b}><Check size={14} />{b}</li>)}</ul>
              <a href="#start" className="btn btn-outline-light magnetic"><span>Ask for a quote</span><ArrowUpRight size={16} /></a>
            </article>
          </div>
        </section>

        {/* WHY ME */}
        <section className="section pad" id="why">
          <div className="head">
            <p className="kicker rv">{pillars.kicker}</p>
            <h2 className="split"><Lines text={pillars.title} /></h2>
          </div>
          <div className="pillars">
            {pillars.items.map((p, i) => (
              <article className="pillar rv" key={p.no} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="pillar-top"><span>{p.no}</span><strong>{p.stat}</strong></div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="pillar-bar"><i /></div>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="section pad tinted" id="work">
          <div className="head head-row">
            <div>
              <p className="kicker rv">{work.kicker}</p>
              <h2 className="split"><Lines text={work.title} /></h2>
            </div>
            <p className="aside rv">{work.aside}</p>
          </div>
          <div className="work-grid">
            {work.items.map((w, i) => (
              <article className="work-item rv" key={w.no} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={`work-frame tone-${w.tone} tilt`} data-cursor="PLAY">
                  {w.video ? (
                    <video src={w.video} muted loop playsInline preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
                  ) : (
                    <div className="placeholder"><i className="p1" /><i className="p2" /><span className="ph-note">Sample in production</span></div>
                  )}
                  <div className="work-top"><span>{w.status}</span><span>{w.no} / 0{work.items.length}</span></div>
                  <div className="work-play"><Play size={18} fill="currentColor" /></div>
                  <div className="work-bar"><i /></div>
                </div>
                <div className="work-meta"><h3>{w.title}</h3><p>{w.meta}</p></div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section pad" id="process">
          <div className="head head-row">
            <div>
              <p className="kicker rv">{process.kicker}</p>
              <h2 className="split"><Lines text={process.title} /></h2>
            </div>
            <p className="aside rv">{process.note}</p>
          </div>
          <ol className="steps">
            {process.steps.map((s, i) => (
              <li className="step rv" key={s.no} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="step-line"><i /></div>
                <span className="step-time">{s.time}</span>
                <span className="step-no">{s.no}</span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PRICING */}
        <section className="section pad dark" id="pricing">
          <div className="head">
            <p className="kicker rv">{pricing.kicker}</p>
            <h2 className="split"><Lines text={pricing.title} /></h2>
          </div>
          <div className="plans">
            {pricing.plans.map((p, i) => (
              <article className={`plan rv ${p.featured ? 'featured' : ''}`} key={p.name} style={{ transitionDelay: `${i * 90}ms` }}>
                {p.featured && <span className="badge">MOST CHOSEN</span>}
                <h3>{p.name}</h3>
                <div className="price"><strong>{p.price}</strong><span>{p.unit}</span></div>
                <p>{p.text}</p>
                <ul>{p.items.map((it) => <li key={it}><Check size={14} />{it}</li>)}</ul>
                <a href="#start" className={`btn magnetic ${p.featured ? 'btn-lime' : 'btn-outline-light'}`}><span>{p.cta}</span><ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
          <p className="footnote rv">{pricing.footnote}</p>
        </section>

        {/* FAQ */}
        <section className="section pad" id="faq">
          <div className="faq-grid">
            <div>
              <p className="kicker rv">{faq.kicker}</p>
              <h2 className="split"><Lines text={faq.title} /></h2>
            </div>
            <div className="faq-list">
              {faq.items.map((f, i) => (
                <div className={`faq-item rv ${openFaq === i ? 'open' : ''}`} key={f.q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{f.q}</span><Plus size={18} />
                  </button>
                  <div className="faq-a"><div><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* START / CTA */}
        <section className="start pad" id="start">
          <div className="start-top"><p className="kicker">{closing.kicker}</p><span>FREE · NO COMMITMENT ↘</span></div>
          <h2 className="split"><Lines text={closing.title} /></h2>
          <div className="start-grid">
            <div>
              <p className="start-copy">{closing.copy}</p>
              <ul className="start-list">
                <li><Check size={14} />Edited from your own footage</li>
                <li><Check size={14} />Up to 60 seconds, delivered in up to 72h</li>
                <li><Check size={14} />Everything by email — no calls</li>
              </ul>
            </div>
            <form className="form" onSubmit={submit}>
              <div className="row2">
                <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
                <label><span>Email</span><input name="email" type="email" required placeholder="you@brand.com" /></label>
              </div>
              <label><span>Channel or footage link</span><input name="link" required placeholder="youtube.com/@you or a Drive link" /></label>
              <div className="row2">
                <label><span>What you post</span>
                  <select name="kind" defaultValue="Talking-head / personal brand">
                    <option>Talking-head / personal brand</option><option>Podcast / interviews</option><option>Business / educational</option><option>Other</option>
                  </select>
                </label>
                <label><span>How often</span>
                  <select name="freq" defaultValue="2–3 videos / week">
                    <option>1 video / week</option><option>2–3 videos / week</option><option>4+ videos / week</option><option>Just starting</option>
                  </select>
                </label>
              </div>
              <label><span>Anything I should know? (optional)</span><textarea name="notes" rows={3} placeholder="References you like, deadlines, goals…" /></label>
              <button className="btn btn-lime btn-lg magnetic" type="submit"><span>{sent ? 'Opening your email…' : closing.cta}</span><ArrowUpRight size={18} /></button>
              <p className="form-note">Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </form>
          </div>
          <div className="start-links">
            {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>)}
            <span>{site.location} · REMOTE WORLDWIDE</span>
          </div>
        </section>
      </main>

      <footer className="footer pad">
        <a className="wordmark" href="#top"><span className="wordmark-h">h</span>KM<sup>®</sup></a>
        <span>{site.name.toUpperCase()} · {site.role.toUpperCase()} · 2026</span>
        <a href="#top">BACK TO 00:00 ↑</a>
      </footer>
    </>
  );
}
