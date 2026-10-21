// ─────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No need to touch page.tsx.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Karol Martins',
  email: 'hello@karolmartins.com', // TODO: replace with your real professional email
  role: 'Short-form Video Editor',
  location: 'Brazil · GMT-3',
  handle: '@heykarolmartins',
  spotsOpen: 3, // founding-client spots still open — keep this honest (0 → switch pricing to "from $450")
  socials: [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/heykarolmartins/' },
    // Add back only with real profile URLs:
    // { label: 'YT JOBS', href: 'https://ytjobs.co/...' },
    // { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/...' },
    // { label: 'X / TWITTER', href: 'https://x.com/...' },
  ],
};

export const hero = {
  eyebrow: `${site.spotsOpen} founding-client spots open · Signature Shorts`,
  title: ['Cut to', 'keep them', 'watching.'],
  copy:
    'Short-form editing for coaches, consultants and educators who sell through video. Eight shorts a month in one consistent brand style, delivered every week — no calls.',
  primary: 'Get a free sample edit',
  secondary: 'See the work',
  stats: [
    { value: '5+', label: 'years in visual design' },
    { value: '72h', label: 'to your free sample' },
    { value: '1', label: 'brand video kit, built in week 1' },
    { value: '0', label: 'calls required — fully async' },
  ],
};

export const ticker = [
  'SIGNATURE SHORTS',
  'your brand video kit',
  'WEEKLY DELIVERY',
  'late video? it’s free',
  'HOOK NOTES EVERY DELIVERY',
  'fully async',
];

export const problem = {
  kicker: '01 / THE PROBLEM',
  title: 'You’re great on camera.\nThe footage still sits\nin a folder.',
  pains: [
    { k: 'TIME', t: 'Editing eats the hours you should spend coaching, selling or resting.' },
    { k: 'LOOK', t: 'Your videos don’t look like they come from the same brand.' },
    { k: 'TRUST', t: 'Editors ghost, miss deadlines, or need you to explain everything twice.' },
    { k: 'SAMENESS', t: 'Same captions, same zooms, same template pack as everyone else in your niche.' },
  ],
};

export const offer = {
  kicker: '02 / THE OFFER',
  title: 'One editor.\nA weekly rhythm.\nA look that’s yours.',
  main: {
    tag: 'SIGNATURE SHORTS',
    name: 'Your shorts, in one brand style',
    text: 'Eight short videos a month, edited in one consistent brand style and delivered every week. You film and teach — every video looks like it came from the same brand.',
    bullets: ['Week 1: your Brand Video Kit', '2 videos a week, on a written schedule', 'A hook note with every delivery', 'Up to 2 unused videos roll over', 'Late video? That one is free'],
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
      text: 'Delivery dates are agreed in writing. If anything could slip, you hear it from me first. And if a video misses its date, that video is free.',
    },
  ],
};

// Replace `video` with a real file in /public (e.g. '/work/sample-01.mp4') when ready.
// `status`: 'DEMO EDIT' for self-made samples, 'CLIENT' only for real paid work.
export const work = {
  kicker: '04 / SELECTED WORK',
  title: 'Edits built\nto be watched\nto the end.',
  aside: 'Demo edits, labelled as demos. Each one shows a skill a weekly client gets: retention pacing, clean reframing, and motion that carries a brand.',
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
    { no: '01', time: 'DAY 0', name: 'Send your footage', text: 'Drop a folder link and fill a 5-minute written brief: references, brand assets, posting days.' },
    { no: '02', time: 'WEEK 1', name: 'Get your Brand Video Kit', text: 'Caption style, colors, fonts, motion and cover — defined, documented and used in every video after.' },
    { no: '03', time: '2 ROUNDS', name: 'Comment, don’t meet', text: 'Leave timestamped notes. I apply them, confirm each one in writing and send the final.' },
    { no: '04', time: 'WEEKLY', name: 'Receive on schedule', text: 'Ready-to-post files land on the agreed day, with a short note on the hook for your next recording.' },
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
      name: 'Signature Shorts',
      price: '$390',
      unit: '/ month · founding',
      text: `Founding-client price, locked for 6 months. ${site.spotsOpen} spots — after that, new clients start from $450.`,
      items: ['8 vertical videos, up to 60s each', 'Brand Video Kit in week 1', '2 videos a week, on a written schedule', 'Hook note with every delivery', '2 revision rounds per video', 'Up to 2 unused videos roll over', 'Late video? That one is free'],
      cta: 'Claim a founding spot',
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
  footnote: 'Paid monthly, upfront. Not included: videos over 60s, complex motion, scripting or posting — quoted separately, in writing, within 24 hours. A late video is credited in full on your next invoice.',
};

export const faq = {
  kicker: '07 / FAQ',
  title: 'Before you ask.',
  items: [
    { q: 'Who is this for?', a: 'Coaches, consultants and educators who post short-form video at least 2–3 times a week, film their own footage and use video to win clients.' },
    { q: 'What does “founding client” mean?', a: `The first ${site.spotsOpen} clients pay $390/month, locked for 6 months. Once those spots are taken, new clients start from $450/month.` },
    { q: 'What if a video is late?', a: 'Every delivery date is agreed in writing. If a video misses its date, that video is free — it comes off your next invoice.' },
    { q: 'Do we need to get on calls?', a: 'No. Everything runs async: a written brief, timestamped feedback and a shared delivery calendar. It’s faster for you and keeps every decision documented.' },
    { q: 'How fast is the turnaround?', a: 'Your free sample arrives within 72 hours. Your Brand Video Kit is ready in week 1, and then 2 videos land every week on the days we agree.' },
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
