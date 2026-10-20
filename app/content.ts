// ─────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No need to touch page.tsx.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Karol Martins',
  email: 'hello@karolmartins.com', // TODO: replace with your real professional email
  role: 'Short-form Video Editor',
  location: 'Brazil · GMT-3',
  spotsOpen: 2, // monthly client spots currently open — keep this honest
  socials: [
    { label: 'YT JOBS', href: 'https://ytjobs.co/' }, // TODO: your profile URL
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/heykarolmartins/' },
    { label: 'X / TWITTER', href: 'https://x.com/' }, // TODO
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/' }, // TODO
  ],
};

export const hero = {
  eyebrow: `${site.spotsOpen} monthly spots open · Short-form editing`,
  title: ['Cut to', 'keep them', 'watching.'],
  copy:
    'Short-form editing for creators, experts and brands that post every week. A designer’s eye, an editor’s rhythm — delivered on schedule, every single week.',
  primary: 'Get a free sample edit',
  secondary: 'See the work',
  stats: [
    { value: '5+', label: 'years in visual design' },
    { value: '72h', label: 'to your first edit' },
    { value: '2', label: 'revision rounds included' },
    { value: '0', label: 'calls required — fully async' },
  ],
};

export const ticker = [
  'HOOK IN 3 SECONDS',
  'DESIGNED CAPTIONS',
  'WEEKLY DELIVERY',
  'ZERO MISSED DEADLINES',
  'YOUR LOOK, NOT A PRESET',
  'FULLY ASYNC',
];

export const problem = {
  kicker: '01 / THE PROBLEM',
  title: 'You’re great on camera.\nThe footage still sits\nin a folder.',
  pains: [
    { k: 'TIME', t: 'Editing eats the hours you should spend creating, selling or resting.' },
    { k: 'LOOK', t: 'Your videos don’t look like they come from the same brand.' },
    { k: 'TRUST', t: 'Editors ghost, miss deadlines, or need you to explain everything twice.' },
    { k: 'SAMENESS', t: 'Same captions, same zooms, same template pack as everyone else in your niche.' },
  ],
};

export const offer = {
  kicker: '02 / THE OFFER',
  title: 'One editor.\nA weekly rhythm.\nA look that’s yours.',
  main: {
    tag: 'MAIN SERVICE',
    name: 'Short-form, every week',
    text: 'Your raw footage becomes ready-to-post Reels, TikToks and Shorts — paced for retention, captioned with intention and built on a visual system made for your brand.',
    bullets: ['Hook-first structure', 'Brand-designed captions', 'B-roll & simple motion graphics', 'Sound cleanup & music', '9:16 exports ready to post'],
  },
  second: {
    tag: 'ALSO AVAILABLE',
    name: 'Podcast & interview clips',
    text: 'Long conversations turned into tight vertical clips that stand on their own — clear start, strong middle, clean ending.',
    bullets: ['Best-moment selection', 'Vertical reframing', 'Speaker-aware captions'],
  },
};

export const pillars = {
  kicker: '03 / WHY ME',
  title: 'Three things you\nwon’t have to\nworry about.',
  items: [
    {
      no: '01',
      name: 'Designer first.',
      stat: '5+ yrs',
      text: 'Five years of visual design before the timeline: typography, composition, color. Your captions, titles and motion follow a real visual system — not a preset pack.',
    },
    {
      no: '02',
      name: 'Organized by default.',
      stat: '1 system',
      text: 'Shared folders, clean file names, versioned exports and a delivery calendar. You always know what’s in progress, what’s next and where every file lives.',
    },
    {
      no: '03',
      name: 'On time. Every time.',
      stat: '100%',
      text: 'Deadlines are agreed in writing and treated like a contract. If anything could slip, you hear it from me first — days before, never after.',
    },
  ],
};

// Replace `video` with a real file in /public (e.g. '/work/sample-01.mp4') when ready.
// `status`: 'DEMO EDIT' for self-made samples, 'CLIENT' only for real paid work.
export const work = {
  kicker: '04 / SELECTED WORK',
  title: 'Edits built\nto be watched\nto the end.',
  aside: 'Each piece shows one skill a weekly client gets: retention pacing, clean reframing, and motion that carries a brand.',
  items: [
    { no: '01', status: 'DEMO EDIT', title: 'Personal brand — hook & retention', meta: '0:42 · 9:16 · Captions · B-roll', tone: 'lime', video: '' },
    { no: '02', status: 'DEMO EDIT', title: 'Podcast clip — vertical reframe', meta: '0:58 · 9:16 · Two speakers', tone: 'stone', video: '' },
    { no: '03', status: 'DEMO EDIT', title: 'Business explainer — motion', meta: '0:51 · 9:16 · Motion graphics', tone: 'ink', video: '' },
  ],
};

export const process = {
  kicker: '05 / HOW IT WORKS',
  title: 'Fully async.\nNothing gets lost.',
  note: 'No calls, no timezone juggling. Every brief, decision and revision lives in writing — so nothing is forgotten and nothing is “I thought you said”.',
  steps: [
    { no: '01', time: 'DAY 0', name: 'Send your footage', text: 'Drop a folder link and fill a 5-minute brief: references, brand assets, posting days.' },
    { no: '02', time: '≤ 72H', name: 'Get your style frame', text: 'Your first edit plus the visual system — caption style, colors, type and pacing — locked for every video after.' },
    { no: '03', time: '2 ROUNDS', name: 'Comment, don’t meet', text: 'Leave timestamped notes. I apply them, confirm each one in writing and send the final.' },
    { no: '04', time: 'WEEKLY', name: 'Receive on schedule', text: 'Ready-to-post files land on the agreed day, every week. You film, I keep the line moving.' },
  ],
};

export const pricing = {
  kicker: '06 / PRICING',
  title: 'Clear scope.\nNo surprises.',
  plans: [
    {
      name: 'Sample edit',
      price: 'Free',
      unit: 'one clip',
      text: 'See the fit before you pay anything.',
      items: ['1 short video, up to 60s', 'From your own raw footage', 'Delivered in up to 72h', 'No commitment'],
      cta: 'Request a sample',
      featured: false,
    },
    {
      name: 'Short-form Monthly',
      price: 'from $390',
      unit: '/ month',
      text: 'The weekly engine for creators who post consistently.',
      items: ['8 vertical videos, up to 60s each', 'Brand-designed captions', 'B-roll & simple motion graphics', 'Sound cleanup & music', '2 revision rounds per video', 'Weekly delivery calendar'],
      cta: 'Start this month',
      featured: true,
    },
    {
      name: 'Podcast Clips',
      price: 'Custom',
      unit: 'per episode',
      text: 'For shows that want every episode working all week.',
      items: ['Best-moment selection', 'Vertical reframing', 'Speaker-aware captions', 'Volume quoted in writing in 24h'],
      cta: 'Get a quote',
      featured: false,
    },
  ],
  footnote: 'Paid monthly, upfront. Higher volume, longer videos or complex motion are quoted separately — in writing, within 24 hours.',
};

export const faq = {
  kicker: '07 / FAQ',
  title: 'Before you ask.',
  items: [
    { q: 'Do we need to get on calls?', a: 'No. Everything runs async: a written brief, timestamped feedback and a shared delivery calendar. It’s faster for you and keeps every decision documented.' },
    { q: 'How fast is the turnaround?', a: 'Your first edit and style frame arrive within 72 hours. After that, videos are delivered weekly on the day we agree.' },
    { q: 'What do I need to send?', a: 'Raw footage (a Drive or Dropbox link is fine), 2–3 reference videos you like, and your logo, fonts or colors if you have them.' },
    { q: 'What if I don’t like the edit?', a: 'Every video includes two revision rounds. And you can see a free sample from your own footage before paying for anything.' },
    { q: 'Which tools do you use?', a: 'Adobe Premiere Pro for editing, plus custom-built motion graphics and caption styles designed for your brand.' },
    { q: 'What about time zones?', a: 'I’m in Brazil (GMT-3), which overlaps with US and European working hours. Messages are answered within one business day.' },
  ],
};

export const closing = {
  kicker: '08 / START',
  title: 'Your next 8 videos\ncould already be\nin the edit.',
  copy: 'Send one raw clip. Get it back edited — free, in up to 72 hours. If you like it, we talk about the month.',
  cta: 'Get my free sample',
};
