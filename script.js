/* =====================================================================
   Edit the wedding details here. Everything on the page reads from this.
   ===================================================================== */
const CONFIG = {
  events: [
    {
      name: { ar: "حفل الزفاف", tr: "Düğün Töreni", en: "Wedding Reception" },
      // Date & time with the local UTC offset (Palestine: +02:00 winter, +03:00 summer)
      date: "2026-10-23T17:00:00+03:00",
      hours: 4,
      venue: { ar: "صالة عابدين للأفراح والمناسبات", tr: "Abdeen Düğün Salonu", en: "Abdeen Wedding Hall" },
      address: {
        ar: "شارع صلاح الدين، مدخل مخيم البريج — مقابل الحويحي للسيراميك",
        tr: "Salahaddin Caddesi, Bureyc Kampı girişi — Gazze",
        en: "Salah al-Din Street, entrance of Bureij Camp — Gaza",
      },
      // short versions printed on the card
      venueShort: { ar: "صالة عابدين", tr: "Abdeen Salonu", en: "Abdeen Hall" },
      addressShort: { ar: "شارع صلاح الدين – البريج", tr: "Salahaddin Cd. – Bureyc", en: "Salah al-Din St. – Bureij" },
      photo: "",      // optional venue photo next to index.html, e.g. "hall.jpg"
    },
    // Add more events (henna night, etc.) by copying the block above — tabs appear automatically.
  ],

  // RSVP replies arrive on this WhatsApp number (digits only, e.g. "970599123456"). "" hides RSVP.
  whatsapp: "",

  // The music always plays (no off switch). Leave "" for the built-in music box melody, or put a file next to index.html, e.g. "music.mp3"
  music: "",

  defaultLang: "ar",

  // the site's maker, shown when the credit line at the bottom is tapped
  maker: {
    phone: "+972 59 992 4216",      // international format, e.g. "+970 59 123 4567" — "" hides the call/WhatsApp buttons
  },
};

const I18N = {
  ar: {
    code: "AR", dir: "rtl", locale: "ar-u-nu-latn", label: "العربية", weekStart: 6,
    introHint: "اضغط على الختم أو اسحب للأعلى لفتح الدعوة",
    cardTitle: "أفراح آل السيد",
    cardPoem: "في العُمرِ أيامٌ يزيّنها السرورُ\nوسرورُ هذا اليومِ مختلفُ",
    cardHonor: "من قلبٍ تغمره السعادة والحب يتشرّف",
    hostTitle: "السيد/",
    groomFather: "نهاد جاسر السيد", groomFatherKunya: "",
    brideFather: "مجدي إبراهيم البلعاوي", brideFatherKunya: "",
    cardInvite: "بدعوتكم لحضور حفل زفاف",
    groomRel: "نجله", groomTitle: "الأستاذ",
    brideRel: "كريمته", brideTitle: "الدكتورة",
    cardDay: "وذلك بمشيئة الله تعالى يوم {day}",
    cardEnd: "وبحضوركم تتمّ الأفراح والمسرّات",
    cardNote: "يُمنع منعاً باتاً التصوير بالجوال",
    saveCard: "حفظ كرت الدعوة على الجوال",
    madeWith: "صُنع بحب", madeBy: "من المهندس وسام مجدي البلعاوي",
    makerName: "المهندس وسام مجدي البلعاوي",
    makerRole: "تصميم وتطوير المواقع والدعوات الإلكترونية",
    makerNote: "بدك دعوة مثل هاي لمناسبتك؟ تواصل معي",
    makerWhatsapp: "واتساب", makerCall: "اتصال",
    cardFile: "دعوة-زفاف-محمد-وهبة",
    guestTo: "إلى {name}",
    verse: "﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً﴾",
    verseRef: "سورة الروم · 21",
    withLove: "بكل حبٍّ وودّ",
    inviteHost: "يتشرّف السيد نهاد جاسر السيد",
    lead: "بدعوتكم لحضور حفل زفاف نجله",
    groomName: "محمد نهاد السيد", brideName: "هبة مجدي البلعاوي",
    tail: "وبحضوركم تكتمل فرحتنا",
    brideFirst: "هبة", groomFirst: "محمد", and: "و", onBride: "على",
    brideFull: "الدكتورة هبة مجدي البلعاوي",
    groomFull: "الأستاذ محمد نهاد السيد",
    shortNames: "محمد وهبة",
    saveTitle: "احفظوا التاريخ",
    addCalendar: "أضف إلى التقويم",
    detailsTitle: "تفاصيل الزفاف",
    openMap: "افتح الموقع في الخرائط",
    dateLabel: "التاريخ", timeLabel: "الوقت", placeLabel: "المكان", evening: "مساءً", daytime: "ظهراً",
    countdownTitle: "باقي على يوم العمر",
    countdownSub: "ويبدأ أجمل فصول الحكاية — {date}",
    days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية",
    countdownDone: "تمّ الزفاف بحمد الله، بارك الله لهما وبارك عليهما وجمع بينهما في خير",
    rsvpTitle: "تأكيد الحضور",
    rsvpText: "نرجو التكرّم بتأكيد حضوركم ليكتمل استعدادنا لاستقبالكم",
    rsvpName: "الاسم",
    rsvpYes: "سأحضر بإذن الله",
    rsvpNo: "أعتذر عن الحضور",
    rsvpGuests: "عدد الحضور",
    rsvpMessage: "رسالة للعروسين (اختياري)",
    rsvpError: "فضلاً اكتب اسمك",
    rsvpSend: "إرسال عبر واتساب",
    waYes: "السلام عليكم، أنا {name}، يسعدني تأكيد حضوري لحفل زفاف محمد وهبة. عدد الحضور: {guests}.",
    waNo: "السلام عليكم، أنا {name}، أعتذر عن حضور حفل زفاف محمد وهبة، مع أطيب الأمنيات بالسعادة.",
    closing: "حضوركم يُكمل فرحتنا، ومشاركتكم شرفٌ لنا",
    families: "المحتفي: السيد نهاد جاسر السيد وعائلته",
    music: "الموسيقى",
    calTitle: "زفاف محمد وهبة",
  },
  tr: {
    code: "TR", dir: "ltr", locale: "tr-TR", label: "Türkçe", weekStart: 1,
    introHint: "Açmak için mühre dokunun ya da yukarı kaydırın",
    cardTitle: "Alsayed Ailesinin Mutlu Günü",
    cardPoem: "Ömürde sevinçle süslenen günler vardır,\nama bu günün sevinci bambaşka.",
    cardHonor: "Mutluluk ve sevgiyle dolu kalplerle",
    hostTitle: "Sayın",
    groomFather: "Nihad Jaser Alsayed", groomFatherKunya: "",
    brideFather: "Majdi Ibrahim Albalawi", brideFatherKunya: "",
    cardInvite: "sizleri çocuklarının düğün törenine davet etmekten onur duyarlar",
    groomRel: "Oğlu", groomTitle: "",
    brideRel: "Kızı", brideTitle: "Dr.",
    cardDay: "Allah'ın izniyle, {day} günü",
    cardEnd: "Katılımınızla sevincimiz tamamlanacak",
    cardNote: "Cep telefonuyla fotoğraf çekmek kesinlikle yasaktır",
    saveCard: "Davetiye kartını telefona kaydet",
    madeWith: "Sevgiyle hazırlandı", madeBy: "Müh. Wesam Majdi Albalawi",
    makerName: "Müh. Wesam Majdi Albalawi",
    makerRole: "Web siteleri ve dijital davetiye tasarımı",
    makerNote: "Kendi davetiniz için benzerini mi istiyorsunuz? Bana ulaşın",
    makerWhatsapp: "WhatsApp", makerCall: "Ara",
    cardFile: "Mohammed-Heba-Davetiye",
    guestTo: "Sayın {name}",
    verse: "“Kendileriyle huzur bulasınız diye size kendi cinsinizden eşler yaratması ve aranıza sevgi ve merhamet koyması da O'nun ayetlerindendir.”",
    verseRef: "Rûm Suresi · 21",
    withLove: "Sevgi ve muhabbetle",
    inviteHost: "Sayın Nihad Jaser Alsayed",
    lead: "oğlu",
    groomName: "Mohammed Nihad Alsayed", brideName: "Heba Majdi Albalawi",
    tail: "düğün törenine sizleri davet etmekten onur duyar.",
    brideFirst: "Heba", groomFirst: "Mohammed", and: "&", onBride: "ile",
    brideFull: "Dr. Heba Majdi Albalawi",
    groomFull: "Mohammed Nihad Alsayed",
    shortNames: "Mohammed & Heba",
    saveTitle: "Tarihi Kaydedin",
    addCalendar: "Takvime ekle",
    detailsTitle: "Düğün Detayları",
    openMap: "Haritada aç",
    dateLabel: "Tarih", timeLabel: "Saat", placeLabel: "Mekân", evening: "Akşam", daytime: "Gündüz",
    countdownTitle: "Büyük güne kalan",
    countdownSub: "Hikâyemizin en güzel bölümü başlıyor — {date}",
    days: "Gün", hours: "Saat", minutes: "Dakika", seconds: "Saniye",
    countdownDone: "Düğünümüz gerçekleşti. Bu mutlu günü bizimle paylaştığınız için teşekkür ederiz.",
    rsvpTitle: "Katılım Bildirimi",
    rsvpText: "Sizi en güzel şekilde ağırlayabilmemiz için lütfen katılım durumunuzu bildirin",
    rsvpName: "Adınız Soyadınız",
    rsvpYes: "Katılacağım",
    rsvpNo: "Katılamayacağım",
    rsvpGuests: "Kişi sayısı",
    rsvpMessage: "Gelin ve damada mesajınız (isteğe bağlı)",
    rsvpError: "Lütfen adınızı yazın",
    rsvpSend: "WhatsApp ile gönder",
    waYes: "Merhaba, ben {name}. Mohammed ve Heba'nın düğününe katılacağımı bildirmek isterim. Kişi sayısı: {guests}.",
    waNo: "Merhaba, ben {name}. Maalesef Mohammed ve Heba'nın düğününe katılamayacağım, mutluluklar dilerim.",
    closing: "Varlığınız mutluluğumuzu tamamlayacak",
    families: "Nihad Jaser Alsayed ve Ailesi",
    music: "Müzik",
    calTitle: "Mohammed & Heba Düğünü",
  },
  en: {
    code: "EN", dir: "ltr", locale: "en-GB", label: "English", weekStart: 1,
    introHint: "Tap the seal or swipe up to open",
    cardTitle: "The Alsayed Family Celebrates",
    cardPoem: "Some days in life are adorned with joy,\nbut the joy of this day is like no other.",
    cardHonor: "With hearts full of happiness and love,",
    hostTitle: "Mr.",
    groomFather: "Nihad Jaser Alsayed", groomFatherKunya: "",
    brideFather: "Majdi Ibrahim Albalawi", brideFatherKunya: "",
    cardInvite: "request the honour of your presence at the wedding of",
    groomRel: "His son", groomTitle: "Mr.",
    brideRel: "His daughter", brideTitle: "Dr.",
    cardDay: "God willing, on {day}",
    cardEnd: "Your presence will complete our joy",
    cardNote: "Mobile phone photography is strictly prohibited",
    saveCard: "Save the invitation card",
    madeWith: "Made with love", madeBy: "by Eng. Wesam Majdi Albalawi",
    makerName: "Eng. Wesam Majdi Albalawi",
    makerRole: "Websites & digital invitations",
    makerNote: "Want an invitation like this for your occasion? Get in touch",
    makerWhatsapp: "WhatsApp", makerCall: "Call",
    cardFile: "Mohammed-Heba-Wedding-Invitation",
    guestTo: "For {name}",
    verse: "“And among His signs is that He created for you spouses from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.”",
    verseRef: "Surah Ar-Rum · 21",
    withLove: "With love & joy",
    inviteHost: "Mr. Nihad Jaser Alsayed",
    lead: "requests the pleasure of your company at the wedding of his son",
    groomName: "Mohammed Nihad Alsayed", brideName: "Heba Majdi Albalawi",
    tail: "God willing, your presence will complete our joy.",
    brideFirst: "Heba", groomFirst: "Mohammed", and: "&", onBride: "to",
    brideFull: "Dr. Heba Majdi Albalawi",
    groomFull: "Mr. Mohammed Nihad Alsayed",
    shortNames: "Mohammed & Heba",
    saveTitle: "Save the Date",
    addCalendar: "Add to calendar",
    detailsTitle: "Wedding Details",
    openMap: "Open in Maps",
    dateLabel: "Date", timeLabel: "Time", placeLabel: "Venue", evening: "Evening", daytime: "Afternoon",
    countdownTitle: "Until our big day",
    countdownSub: "The most beautiful chapter begins — {date}",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    countdownDone: "Our day has come — thank you for sharing it with us.",
    rsvpTitle: "RSVP",
    rsvpText: "Kindly let us know whether you will join us, so we can welcome you properly",
    rsvpName: "Your name",
    rsvpYes: "Joyfully attending",
    rsvpNo: "Regretfully decline",
    rsvpGuests: "Number of guests",
    rsvpMessage: "A note for the couple (optional)",
    rsvpError: "Please enter your name",
    rsvpSend: "Send via WhatsApp",
    waYes: "Hello, this is {name}. I'm delighted to confirm I will attend Mohammed & Heba's wedding. Guests: {guests}.",
    waNo: "Hello, this is {name}. Unfortunately I can't attend Mohammed & Heba's wedding — wishing you both every happiness.",
    closing: "Your presence will make our joy complete",
    families: "Mr. Nihad Jaser Alsayed & family",
    music: "Music",
    calTitle: "Wedding of Mohammed & Heba",
  },
};

/* ===================================================================== */

const $ = (id) => document.getElementById(id);
const root = document.documentElement;
const params = new URLSearchParams(location.search);
const guestName = (params.get("guest") || params.get("to") || "").trim().slice(0, 60);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const mainEvent = CONFIG.events[0];
const mainDate = new Date(mainEvent.date);
let lang = pickLang();
let activeEvent = 0;

function pickLang() {
  const q = params.get("lang");
  if (q && I18N[q]) return q;
  return CONFIG.defaultLang;
}
function t(key, vars = {}) {
  let s = I18N[lang][key] ?? I18N.en[key] ?? "";
  for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
  return s;
}
function fmt(date, opts) { return new Intl.DateTimeFormat(I18N[lang].locale, opts).format(date); }

/* ---------------------------------------------------------------------
   Embossed roses — drawn once as SVG, used as paper texture
   --------------------------------------------------------------------- */
const ROSE = [
  "M-28 4C-30-18-10-30 6-28C24-26 32-8 26 10C20 26 0 32-14 24C-24 18-27 10-28 4Z",
  "M-19 6C-21-10-8-20 5-19C17-18 23-7 19 5C15 16 3 21-7 17",
  "M-10 3C-11-6-2-11 5-9C11-7 12 1 8 6C4 10-3 9-4 3C-4-1 0-3 3-2",
  "M-28 4C-21 1-16 9-14 24",
  "M26 10C18 7 13 14 10 23",
  "M6-28C3-21 9-15 17-14",
  "M-24-13C-16-13-12-7-12 0",
  "M19 5C22-3 18-12 10-17",
  "M-30-2C-38-20-22-38-2-36",
  "M28-6C38 8 30 28 12 34",
  "M-18 28C-30 34-40 22-34 10",
  "M-4-36C14-40 32-28 34-10",
];
const LEAF = ["M0 0C10-10 27-11 40-4C29 7 12 9 0 0Z", "M0 0C14-3 26-4 40-4", "M14-2L19-7M24-3L29-7M14-2L18 3M24-3L28 2"];
const p = (d) => `<path d="${d}" vector-effect="non-scaling-stroke"/>`;
const rose = (x, y, s, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">${ROSE.map(p).join("")}</g>`;
const leaf = (x, y, s, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">${LEAF.map(p).join("")}</g>`;
const stem = (d) => p(d);

function emboss(inner, w, h) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<g transform="translate(1.2 1.4)" stroke="rgba(25,0,6,.5)">${inner}</g>
<g transform="translate(-.9 -1)" stroke="rgba(255,205,205,.17)">${inner}</g>
<g stroke="rgba(255,230,230,.06)" fill="rgba(255,235,235,.028)">${inner}</g>
</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function paintPaper() {
  const doorTile = [
    rose(80, 88, 1.45, 12), leaf(118, 112, 1, 25), leaf(42, 132, .9, 150), leaf(66, 40, .8, -115),
    stem("M118 112C150 130 170 150 182 176"), leaf(156, 140, .6, -40),
    rose(222, 222, 1.1, -25), leaf(196, 262, .9, 140), leaf(258, 196, .9, -45),
    rose(246, 70, .55, 30), stem("M246 86C244 110 236 128 220 140"), leaf(238, 120, .6, -165),
    rose(110, 252, .62, 5), stem("M110 270C112 282 118 290 128 296"), leaf(80, 270, .55, 160),
    leaf(170, 30, .55, 20), leaf(290, 140, .55, 100), leaf(20, 220, .6, -80),
  ].join("");

  const edge = [
    rose(34, 70, 1.75, 15), leaf(78, 118, 1.15, 38), leaf(-2, 142, 1, 100), leaf(60, 18, .8, -20),
    stem("M78 118C96 150 108 176 112 200"), rose(116, 214, .58, -20), leaf(92, 180, .55, -150),
    rose(22, 310, 1.25, -30), leaf(64, 346, 1, 30), leaf(8, 386, .9, 120), leaf(54, 268, .7, -40),
    rose(64, 476, 1.55, 40), leaf(108, 524, 1, 22), leaf(18, 560, 1, 140), leaf(104, 440, .7, -60),
    rose(126, 606, .5, 10), stem("M126 620C120 630 112 636 104 638"),
  ].join("");
  const mirror = (inner, w) => `<g transform="translate(${w} 0) scale(-1 1)">${inner}</g>`;

  root.style.setProperty("--tile-door", emboss(doorTile, 300, 300));
  root.style.setProperty("--edge-left", emboss(edge, 170, 640));
  root.style.setProperty("--edge-right", emboss(mirror(edge, 170), 170, 640));
}

/* ---------------------------------------------------------------------
   Gatefold doors with scalloped inner edges
   --------------------------------------------------------------------- */
function lobedPath(w, h, d, y0, mirror) {
  const X = (x) => (mirror ? w - x : x).toFixed(1);
  const lobes = Math.max(4, Math.round(h / 140));
  const lh = h / lobes;
  const base = w - d;
  let y = y0;
  let path = `M${X(0)} ${y0 - 2} L${X(base)} ${y0 - 2} L${X(base)} ${y}`;
  let i = 0;
  while (y < h + 2) {
    const y2 = y + lh;
    const b = d * (i % 2 ? .8 : 1) * 1.33;
    path += ` C${X(base + b)} ${y.toFixed(1)} ${X(base + b)} ${y2.toFixed(1)} ${X(base)} ${y2.toFixed(1)}`;
    y = y2; i++;
  }
  path += ` L${X(0)} ${y.toFixed(1)} Z`;
  return `path("${path}")`;
}

function layoutGate() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const d = Math.round(Math.min(46, Math.max(26, vw * .07)));
  const doorW = Math.ceil(vw / 2 + d * .55);
  root.style.setProperty("--door-w", `${doorW}px`);
  root.style.setProperty("--clip-left", lobedPath(doorW, vh, d, 0, false));
  root.style.setProperty("--clip-right", lobedPath(doorW, vh, d, -vh / Math.max(4, Math.round(vh / 140)) / 2, true));
  const scale = Math.min(1.25, Math.max(.8, Math.min(vw, vh * .7) / 390));
  root.style.setProperty("--seal-w", `${Math.round(104 * scale)}px`);
  root.style.setProperty("--bow-w", `${Math.round(280 * scale)}px`);
  root.style.setProperty("--band-h", `${Math.round(38 * scale)}px`);
}

function drawSeal() {
  // irregular wax blob
  const pts = [];
  const n = 28;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 54 + Math.sin(i * 2.7) * 2.2 + Math.cos(i * 1.3) * 1.6 + (i % 5 === 0 ? 2.5 : 0);
    pts.push([60 + Math.cos(a) * r, 60 + Math.sin(a) * r]);
  }
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
    d += ` Q${a[0].toFixed(1)} ${a[1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  $("sealBlob").setAttribute("d", d + "Z");
  document.querySelectorAll(".seal-blob").forEach((el) => el.setAttribute("d", d + "Z"));
}

/* ---------------------------------------------------------------------
   Gold baby's-breath sprigs for the printed card
   --------------------------------------------------------------------- */
function sprigs(stems, seed) {
  let x = seed;
  const rnd = () => ((x = (x * 16807) % 2147483647) / 2147483647);
  const rad = (a) => (a * Math.PI) / 180;
  const flower = (cx, cy, r) => {
    let out = "";
    for (let k = 0; k < 5; k++) {
      const a = rad(k * 72 + rnd() * 20);
      out += `<circle cx="${(cx + Math.cos(a) * r * .55).toFixed(1)}" cy="${(cy + Math.sin(a) * r * .55).toFixed(1)}" r="${(r * .5).toFixed(2)}" fill="#FFFDF6" stroke="#D2B47A" stroke-width=".5"/>`;
    }
    return out + `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(r * .32).toFixed(2)}" fill="#C9A25E"/>`;
  };
  let lines = "", blooms = "";
  for (const st of stems) {
    const bend = (rnd() - .5) * 30;
    const ex = st.x + Math.cos(rad(st.ang)) * st.len, ey = st.y + Math.sin(rad(st.ang)) * st.len;
    const mx = st.x + Math.cos(rad(st.ang + bend)) * st.len * .55, my = st.y + Math.sin(rad(st.ang + bend)) * st.len * .55;
    lines += `<path d="M${st.x} ${st.y}Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}"/>`;
    blooms += flower(ex, ey, 5 + rnd() * 2.5);
    for (let tt = .3; tt < .98; tt += .12 + rnd() * .1) {
      const px = (1 - tt) ** 2 * st.x + 2 * (1 - tt) * tt * mx + tt * tt * ex;
      const py = (1 - tt) ** 2 * st.y + 2 * (1 - tt) * tt * my + tt * tt * ey;
      const a = st.ang + (rnd() < .5 ? -1 : 1) * (22 + rnd() * 35);
      const l = 8 + rnd() * 22;
      const tx = px + Math.cos(rad(a)) * l, ty = py + Math.sin(rad(a)) * l;
      lines += `<path d="M${px.toFixed(1)} ${py.toFixed(1)}L${tx.toFixed(1)} ${ty.toFixed(1)}"/>`;
      if (rnd() < .82) blooms += flower(tx, ty, 3.6 + rnd() * 3);
      else blooms += `<circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="1.8" fill="#E2C690"/>`;
      if (rnd() < .4) {
        const la = a + 40;
        blooms += `<ellipse cx="${(px + Math.cos(rad(la)) * 4).toFixed(1)}" cy="${(py + Math.sin(rad(la)) * 4).toFixed(1)}" rx="3.2" ry="1.2" transform="rotate(${la.toFixed(0)} ${(px + Math.cos(rad(la)) * 4).toFixed(1)} ${(py + Math.sin(rad(la)) * 4).toFixed(1)})" fill="#CBA868"/>`;
      }
    }
  }
  return `<g fill="none" stroke="#BF9A5C" stroke-width=".9" stroke-linecap="round">${lines}</g>${blooms}`;
}

function paintCard() {
  $("flowersSide").innerHTML = sprigs([
    { x: 160, y: 30, ang: 205, len: 100 }, { x: 160, y: 120, ang: 222, len: 120 },
    { x: 160, y: 200, ang: 196, len: 92 }, { x: 160, y: 290, ang: 172, len: 50 },
    { x: 160, y: 380, ang: 150, len: 55 }, { x: 160, y: 80, ang: 185, len: 70 },
    { x: 160, y: 160, ang: 240, len: 85 }, { x: 160, y: 250, ang: 212, len: 70 }, { x: 160, y: 330, ang: 188, len: 42 },
  ], 7);
  $("flowersCorner").innerHTML = sprigs([
    { x: 0, y: 200, ang: -52, len: 150 }, { x: 0, y: 200, ang: -76, len: 120 },
    { x: 0, y: 200, ang: -28, len: 130 }, { x: 40, y: 200, ang: -62, len: 90 },
    { x: 0, y: 170, ang: -40, len: 100 }, { x: 20, y: 200, ang: -88, len: 100 }, { x: 0, y: 190, ang: -12, len: 90 },
  ], 19);
}

/* ---------------------------------------------------------------------
   Music — an original music-box waltz synthesised in the browser
   --------------------------------------------------------------------- */
const Music = (() => {
  const BPM = 66, BEAT = 60 / BPM, BAR = BEAT * 3;
  // [bass root, chord tones] per bar  (D major)
  const CH = {
    D: [50, [62, 66, 69]], Bm: [47, [59, 62, 66]], G: [43, [55, 59, 62]], A: [45, [57, 61, 64]],
    Em: [40, [55, 59, 64]], Fsm: [42, [57, 61, 66]],
  };
  const PROG = ["D", "Bm", "G", "A", "D", "Bm", "Em", "A", "G", "A", "Fsm", "Bm", "G", "A", "D", "D"];
  // melody per bar: [midi, beats]
  const MEL = [
    [[78, 2], [81, 1]], [[83, 2], [81, 1]], [[79, 1], [78, 1], [76, 1]], [[76, 3]],
    [[78, 2], [81, 1]], [[86, 2], [85, .5], [83, .5]], [[83, 1], [79, 1], [76, 1]], [[81, 3]],
    [[83, 1], [86, 1], [83, 1]], [[81, 2], [76, 1]], [[78, 1], [81, 1], [85, 1]], [[83, 3]],
    [[79, 1], [83, 1], [86, 1]], [[85, 1.5], [83, .5], [81, 1]], [[78, 2], [76, 1]], [[74, 3]],
  ];
  let ctx, master, dry, wet, timer, nextBar = 0, bar = 0, pass = 0, on = false;
  const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

  function init() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    master.connect(comp).connect(ctx.destination);
    dry = ctx.createGain(); dry.gain.value = .75; dry.connect(master);
    const rev = ctx.createConvolver();
    const len = ctx.sampleRate * 3.4;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.8);
    }
    rev.buffer = buf;
    wet = ctx.createGain(); wet.gain.value = .5;
    rev.connect(wet).connect(master);
    wet.input = rev;
    return true;
  }

  function bell(time, midi, vel, dur) {
    const f = mtof(midi);
    const out = ctx.createGain();
    out.gain.setValueAtTime(0, time);
    out.gain.linearRampToValueAtTime(.2 * vel, time + .005);
    out.gain.exponentialRampToValueAtTime(.0006, time + dur);
    out.connect(dry); out.connect(wet.input);
    [[1, 1], [2, .3], [3.01, .1], [4.17, .05], [5.43, .025]].forEach(([r, a], i) => {
      const o = ctx.createOscillator();
      o.frequency.value = f * r;
      const g = ctx.createGain();
      g.gain.setValueAtTime(a, time);
      if (i) g.gain.exponentialRampToValueAtTime(.0001, time + dur * (.45 / i));
      o.connect(g).connect(out);
      o.start(time); o.stop(time + dur + .05);
    });
  }

  function pad(time, notes, dur) {
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(.028, time + dur * .4);
    g.gain.linearRampToValueAtTime(0, time + dur + .8);
    lp.connect(g); g.connect(dry); g.connect(wet.input);
    notes.forEach((m) => [-6, 6].forEach((det) => {
      const o = ctx.createOscillator();
      o.type = "triangle"; o.frequency.value = mtof(m); o.detune.value = det;
      o.connect(lp); o.start(time); o.stop(time + dur + .9);
    }));
  }

  function bass(time, midi) {
    const o = ctx.createOscillator();
    o.frequency.value = mtof(midi);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(.14, time + .01);
    g.gain.exponentialRampToValueAtTime(.001, time + BAR * 1.1);
    o.connect(g); g.connect(dry); g.connect(wet.input);
    o.start(time); o.stop(time + BAR * 1.2);
  }

  function scheduleBar(i, time) {
    const [root, tones] = CH[PROG[i]];
    bass(time, root);
    pad(time, tones, BAR);
    const arp = [tones[0], tones[1], tones[2], tones[0] + 12, tones[2], tones[1]];
    arp.forEach((m, k) => bell(time + k * BEAT / 2, m + (pass % 2 ? 12 : 0), .32, 1.6));
    let at = 0;
    for (const [m, beats] of MEL[i]) {
      bell(time + at * BEAT, m, .95, 2.8);
      at += beats;
    }
  }

  function loop() {
    while (nextBar < ctx.currentTime + 1.2) {
      scheduleBar(bar, nextBar);
      nextBar += BAR;
      bar = (bar + 1) % PROG.length;
      if (bar === 0) pass++;
    }
  }

  function chime() {
    const t0 = ctx.currentTime + .05;
    [62, 66, 69, 74, 78, 81, 86, 90].forEach((m, i) => bell(t0 + i * .085, m, .7 - i * .04, 3));
  }

  return {
    ring() {
      if (!ctx && !init()) return;
      ctx.resume();
      if (!on) {
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(.9, ctx.currentTime);
      }
      chime();
    },
    wake() {
      if (ctx && on && ctx.state !== "running") ctx.resume();
    },
    async tryAutoRing() {
      if (!ctx && !init()) return false;
      try { await Promise.race([ctx.resume(), new Promise((r) => setTimeout(r, 400))]); } catch (e) {}
      if (ctx.state !== "running") return false;
      master.gain.setValueAtTime(.9, ctx.currentTime);
      chime();
      return true;
    },
    start(withChime) {
      if (!ctx && !init()) return false;
      ctx.resume();
      if (withChime) chime();
      if (!nextBar) nextBar = ctx.currentTime + (withChime ? 1.1 : .1);
      else nextBar = Math.max(nextBar, ctx.currentTime + .1);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(.9, ctx.currentTime + 2.5);
      clearInterval(timer);
      timer = setInterval(loop, 200);
      loop();
      on = true;
      return true;
    },
    stop() {
      if (!ctx) return;
      on = false;
      clearInterval(timer);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + .5);
      setTimeout(() => { if (!on) ctx.suspend(); }, 600);
    },
    get on() { return on; },
  };
})();

const fileAudio = $("musicFile");
const sound = {
  play(first) {
    if (!CONFIG.music) return Music.start(first);
    if (first) Music.ring();
    if (!fileAudio.getAttribute("src")) fileAudio.src = CONFIG.music;
    fileAudio.volume = .8;
    fileAudio.play().catch(() => {});
  },
};

// A bell rings as soon as the page may make sound: right away if the browser allows it,
// otherwise on the guest's very first touch anywhere. Opening the seal rings it again.
function setupWelcomeRing() {
  let done = false;
  Music.tryAutoRing().then((ok) => { if (ok) done = true; });
  const first = (e) => {
    if (done) return;
    done = true;
    if (!$("seal").contains(e.target)) Music.ring();
  };
  ["pointerdown", "touchstart", "keydown"].forEach((ev) => document.addEventListener(ev, first, { passive: true, capture: true }));
}

/* ---------------------------------------------------------------------
   Rendering
   --------------------------------------------------------------------- */
function renderLangMenu() {
  $("langCode").textContent = I18N[lang].code;
  $("langMenu").replaceChildren(...Object.entries(I18N).map(([code, d]) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.lang = code;
    b.setAttribute("role", "menuitem");
    b.setAttribute("aria-current", code === lang ? "true" : "false");
    const name = document.createElement("span");
    name.textContent = d.label;
    const sm = document.createElement("small");
    sm.textContent = d.code;
    b.append(name, sm);
    b.addEventListener("click", () => { setLang(code); toggleMenu(false); });
    li.append(b);
    return li;
  }));
}

function renderCalendar() {
  const d = I18N[lang];
  const y = mainDate.getFullYear(), m = mainDate.getMonth();
  $("calTitle").textContent = fmt(mainDate, { month: "long", year: "numeric" });
  const cells = [];
  // weekday headers
  for (let i = 0; i < 7; i++) {
    const wd = (d.weekStart + i) % 7;
    const ref = new Date(2024, 0, 7 + wd); // 7 Jan 2024 is a Sunday
    const el = document.createElement("span");
    el.className = "cal__wd";
    el.textContent = fmt(ref, { weekday: lang === "ar" ? "narrow" : "short" }).slice(0, lang === "ar" ? 2 : 2);
    cells.push(el);
  }
  const first = new Date(y, m, 1).getDay();
  const lead = (first - d.weekStart + 7) % 7;
  for (let i = 0; i < lead; i++) cells.push(document.createElement("span"));
  const days = new Date(y, m + 1, 0).getDate();
  const nf = new Intl.NumberFormat(d.locale);
  for (let day = 1; day <= days; day++) {
    const el = document.createElement("span");
    el.className = "cal__d" + (day === mainDate.getDate() ? " cal__d--on" : "");
    el.textContent = nf.format(day);
    cells.push(el);
  }
  $("calGrid").replaceChildren(...cells);
}

function renderEvent() {
  const ev = CONFIG.events[activeEvent];
  const date = new Date(ev.date);
  const card = $("eventCard");
  const parts = [];
  const make = (tag, cls, text) => { const el = document.createElement(tag); el.className = cls; if (text) el.textContent = text; return el; };

  const ICONS = {
    date: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    time: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    place: '<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  };
  const info = (kind, label, value, sub) => {
    const box = make("div", `info info--${kind}`);
    const ic = make("span", "info__icon");
    ic.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[kind]}</svg>`;
    box.append(ic, make("span", "info__label", label), make("span", "info__value", value));
    if (sub) box.append(make("span", "info__sub", sub));
    return box;
  };

  const grid = make("div", "infos");
  grid.append(
    info("date", t("dateLabel"), fmt(date, { day: "numeric", month: "long", year: "numeric" }), fmt(date, { weekday: "long" })),
    info("time", t("timeLabel"), fmt(date, { hour: "numeric", minute: "2-digit" }), t(date.getHours() >= 17 || date.getHours() < 4 ? "evening" : "daytime")),
    info("place", t("placeLabel"), (ev.venueShort || ev.venue)[lang], (ev.addressShort || ev.address)[lang]),
  );
  parts.push(grid);
  card.replaceChildren(...parts);

  const tabs = $("tabs");
  tabs.hidden = CONFIG.events.length < 2;
  if (!tabs.hidden) {
    tabs.replaceChildren(...CONFIG.events.map((e, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === activeEvent ? "true" : "false");
      b.textContent = e.name[lang];
      b.addEventListener("click", () => { activeEvent = i; renderEvent(); });
      return b;
    }));
  }
}

function render() {
  const d = I18N[lang];
  root.lang = lang;
  root.dir = d.dir;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });

  const gg = $("gateGuest");
  gg.hidden = !guestName;
  if (guestName) gg.textContent = t("guestTo", { name: guestName });

  $("dbWeekday").textContent = fmt(mainDate, { weekday: "long" });
  $("dbDay").textContent = fmt(mainDate, { day: "numeric" });
  $("dbYear").textContent = fmt(mainDate, { year: "numeric" });
  $("dbMonth").textContent = fmt(mainDate, { month: "long" });
  const pad = (n) => String(n).padStart(2, "0");
  $("cardDay").textContent = t("cardDay", { day: fmt(mainDate, { weekday: "long" }) });
  $("cardDate").textContent = `${pad(mainDate.getDate())}-${pad(mainDate.getMonth() + 1)}-${mainDate.getFullYear()}`;
  $("cardTime").textContent = fmt(mainDate, { hour: "2-digit", minute: "2-digit" });
  $("cardVenue").textContent = (mainEvent.venueShort || mainEvent.venue)[lang];
  $("cardAddr").textContent = (mainEvent.addressShort || mainEvent.address)[lang];
  $("countSub").textContent = t("countdownSub", { date: fmt(mainDate, { day: "numeric", month: "long", year: "numeric" }) });

  renderLangMenu();
  renderCalendar();
  renderEvent();
  tick();
}

function setLang(next) {
  lang = next;
  cardCache = null;
  render();
  prepareCardImage();
}

function toggleMenu(open) {
  $("langMenu").hidden = !open;
  $("langBtn").setAttribute("aria-expanded", open ? "true" : "false");
}

/* ---------------------------------------------------------------------
   Countdown, calendar file, RSVP
   --------------------------------------------------------------------- */
function tick() {
  const diff = mainDate - Date.now();
  if (diff <= 0) { $("count").hidden = true; $("countSub").hidden = true; $("countDone").hidden = false; return false; }
  const nf = new Intl.NumberFormat(I18N[lang].locale);
  const s = Math.floor(diff / 1000);
  $("cdD").textContent = nf.format(Math.floor(s / 86400));
  $("cdH").textContent = nf.format(Math.floor((s % 86400) / 3600));
  $("cdM").textContent = nf.format(Math.floor((s % 3600) / 60));
  $("cdS").textContent = nf.format(s % 60);
  return true;
}

function downloadIcs() {
  const z = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const esc = (s) => String(s).replace(/[\\,;]/g, "\\$&");
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Mohammed & Heba//Wedding//EN", "CALSCALE:GREGORIAN"];
  CONFIG.events.forEach((ev, i) => {
    const start = new Date(ev.date);
    const end = new Date(start.getTime() + (ev.hours || 4) * 3600e3);
    lines.push(
      "BEGIN:VEVENT",
      `UID:mohammed-heba-${i}-${z(start)}@wedding`,
      `DTSTAMP:${z(new Date())}`,
      `DTSTART:${z(start)}`,
      `DTEND:${z(end)}`,
      `SUMMARY:${esc(CONFIG.events.length > 1 ? `${t("calTitle")} — ${ev.name[lang]}` : t("calTitle"))}`,
      `LOCATION:${esc([ev.venue[lang], ev.address[lang]].filter(Boolean).join(", "))}`,
      "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", `DESCRIPTION:${esc(t("calTitle"))}`, "END:VALARM",
      "END:VEVENT",
    );
  });
  lines.push("END:VCALENDAR");
  const url = URL.createObjectURL(new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url; a.download = "mohammed-heba-wedding.ics";
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function setupRsvp() {
  if (!CONFIG.whatsapp) { $("rsvp").hidden = true; return; }
  if (guestName) $("rsvpName").value = guestName;
  const form = $("rsvpForm");
  const attending = () => form.querySelector("input[name=attend]:checked").value === "yes";
  form.addEventListener("change", () => { $("guestsField").hidden = !attending(); });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("rsvpName").value.trim();
    $("rsvpError").hidden = !!name;
    if (!name) { $("rsvpName").focus(); return; }
    let text = attending() ? t("waYes", { name, guests: $("rsvpGuests").value }) : t("waNo", { name });
    const note = $("rsvpMessage").value.trim();
    if (note) text += `\n\n${note}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}

/* ---------------------------------------------------------------------
   Downloadable card image (PNG) — drawn on a canvas so it saves to the phone
   --------------------------------------------------------------------- */
let cardCache = null; // { lang, promise }

function svgToImage(el, w, h, strip) {
  const clone = el.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", w);
  clone.setAttribute("height", h);
  if (strip) clone.querySelectorAll(strip).forEach((n) => n.remove());
  const url = URL.createObjectURL(new Blob([clone.outerHTML], { type: "image/svg+xml" }));
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = reject;
    img.src = url;
  });
}

async function drawCard() {
  const isAr = lang === "ar";
  const SCRIPT = isAr ? '"Aref Ruqaa"' : '"Great Vibes"';
  const BODY = isAr ? "Amiri" : '"Cormorant Garamond"';
  await Promise.all([
    `700 60px "Aref Ruqaa"`, `400 60px "Aref Ruqaa"`, `400 40px Amiri`, `700 40px Amiri`,
    `400 60px "Great Vibes"`, `400 40px "Cormorant Garamond"`, `600 40px "Cormorant Garamond"`,
    `italic 400 40px "Cormorant Garamond"`, `italic 600 40px "Cormorant Garamond"`,
  ].map((f) => document.fonts.load(f).catch(() => {})));

  const W = 1080, PAD = 200, MAXW = W - PAD * 2;
  const WINE = "#E2C27E", INK = "#F3E4CF", DARK = "#FFF4E2", MUTED = "rgba(233,211,163,.85)", GOLD = "#D9B979";

  // ---- text layer: items are measured first, then spread evenly over a 1080×1920 story card ----
  const tc = document.createElement("canvas");
  tc.width = W; tc.height = 2400;
  const c = tc.getContext("2d");
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.direction = isAr ? "rtl" : "ltr";

  const wrap = (text, maxW) => {
    const out = [];
    for (const para of String(text).split("\n")) {
      let line = "";
      for (const word of para.split(" ")) {
        const test = line ? `${line} ${word}` : word;
        if (line && c.measureText(test).width > maxW) { out.push(line); line = word; } else line = test;
      }
      out.push(line);
    }
    return out;
  };
  const fit = (text, weight, size, family, maxW) => {
    let s = size;
    do { c.font = `${weight} ${s}px ${family}`; s -= 2; } while (c.measureText(text).width > maxW && s > 12);
  };
  const put = (text, x, yy, weight, size, family, color, maxW) => {
    if (!text) return;
    fit(text, weight, size, family, maxW);
    c.fillStyle = color;
    c.fillText(text, x, yy);
  };

  const items = []; // { h, gap (space before, as a weight), draw(top) }
  const block = (text, font, color, lh, gap, maxW = MAXW) => {
    if (!text) return;
    c.font = font;
    const lines = wrap(text, maxW);
    items.push({ h: lines.length * lh, gap, draw(top) {
      c.font = font; c.fillStyle = color;
      lines.forEach((l, i) => c.fillText(l, W / 2, top + lh * (i + .5)));
    } });
  };
  const divider = (gap) => items.push({ h: 20, gap, draw(top) {
    const m = top + 10;
    c.strokeStyle = "rgba(217,185,121,.6)"; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(W / 2 - 150, m); c.lineTo(W / 2 - 18, m); c.moveTo(W / 2 + 18, m); c.lineTo(W / 2 + 150, m); c.stroke();
    c.save(); c.translate(W / 2, m); c.rotate(Math.PI / 4); c.fillStyle = GOLD; c.fillRect(-6, -6, 12, 12); c.restore();
  } });

  const side = isAr ? 1 : -1;            // groom side: right in Arabic, left otherwise
  const colX = [W / 2 + side * 185, W / 2 - side * 185];
  const colW = 345;

  block("بسم الله الرحمن الرحيم", `700 58px "Aref Ruqaa"`, WINE, 76, 0);
  block(t("verse"), isAr ? `400 29px Amiri` : `italic 400 30px "Cormorant Garamond"`, MUTED, isAr ? 48 : 40, .5, MAXW - 30);
  divider(1);
  block(t("cardTitle"), isAr ? `700 98px "Aref Ruqaa"` : `400 84px "Great Vibes"`, WINE, isAr ? 124 : 96, 1);
  block(t("cardPoem"), isAr ? `400 50px "Aref Ruqaa"` : `italic 400 42px "Cormorant Garamond"`, WINE, isAr ? 78 : 56, .7);
  divider(1);
  block(t("cardHonor"), `400 42px ${BODY}`, INK, 62, 1);

  const hosts = [[t("groomFather"), t("groomFatherKunya")], [t("brideFather"), t("brideFatherKunya")]];
  const hasKunya = hosts.some((h) => h[1]);
  items.push({ h: hasKunya ? 150 : 104, gap: .8, draw(top) {
    hosts.forEach(([name, kunya], i) => {
      put(t("hostTitle"), colX[i], top + 18, 400, 32, BODY, MUTED, colW);
      put(name, colX[i], top + 76, isAr ? 700 : 600, 46, BODY, DARK, colW);
      put(kunya, colX[i], top + 128, 400, 30, BODY, MUTED, colW);
    });
  } });

  block(t("cardInvite"), `400 42px ${BODY}`, INK, 62, .9);

  const couple = [[t("groomRel"), t("groomTitle"), t("groomFirst")], [t("brideRel"), t("brideTitle"), t("brideFirst")]];
  items.push({ h: isAr ? 236 : 210, gap: .8, draw(top) {
    couple.forEach(([rel, title, name], i) => {
      const label = [rel, title].filter(Boolean).join(isAr ? " " : ", ");
      put(label, colX[i], top + 20, 400, 34, BODY, MUTED, colW);
      put(name, colX[i] + (isAr ? 0 : (i ? 12 : -12)), top + (isAr ? 158 : 128), isAr ? 700 : 400, isAr ? 136 : 104, SCRIPT, WINE, isAr ? colW - 30 : 230);
    });
    c.strokeStyle = GOLD; c.lineWidth = 4;
    [W / 2 - 15, W / 2 + 15].forEach((x) => { c.beginPath(); c.arc(x, top + (isAr ? 150 : 128), 25, 0, Math.PI * 2); c.stroke(); });
  } });

  block(t("cardDay", { day: fmt(mainDate, { weekday: "long" }) }), `400 42px ${BODY}`, INK, 62, .8);

  // date | venue | time
  const pad2 = (n) => String(n).padStart(2, "0");
  const dateTxt = `${pad2(mainDate.getDate())}-${pad2(mainDate.getMonth() + 1)}-${mainDate.getFullYear()}`;
  const timeTxt = fmt(mainDate, { hour: "2-digit", minute: "2-digit" });
  const icon = (kind, x, yy) => {
    c.save(); c.strokeStyle = GOLD; c.lineWidth = 3.2; c.lineCap = "round"; c.lineJoin = "round"; c.beginPath();
    if (kind === "cal") { c.rect(x - 20, yy - 16, 40, 36); c.moveTo(x - 20, yy - 4); c.lineTo(x + 20, yy - 4); c.moveTo(x - 10, yy - 24); c.lineTo(x - 10, yy - 10); c.moveTo(x + 10, yy - 24); c.lineTo(x + 10, yy - 10); }
    if (kind === "pin") { c.moveTo(x, yy + 24); c.bezierCurveTo(x - 30, yy - 2, x - 18, yy - 26, x, yy - 26); c.bezierCurveTo(x + 18, yy - 26, x + 30, yy - 2, x, yy + 24); c.moveTo(x + 7, yy - 6); c.arc(x, yy - 6, 7, 0, Math.PI * 2); }
    if (kind === "clock") { c.arc(x, yy, 21, 0, Math.PI * 2); c.moveTo(x, yy - 11); c.lineTo(x, yy); c.lineTo(x + 9, yy + 6); }
    c.stroke(); c.restore();
  };
  items.push({ h: 220, gap: .9, draw(top) {
    const xDate = W / 2 + side * 290, xTime = W / 2 - side * 290;
    c.strokeStyle = "rgba(217,185,121,.55)"; c.lineWidth = 2;
    c.beginPath();
    c.moveTo(PAD - 40, top); c.lineTo(W - PAD + 40, top); c.moveTo(PAD - 40, top + 220); c.lineTo(W - PAD + 40, top + 220);
    c.moveTo(W / 2 - 165, top + 34); c.lineTo(W / 2 - 165, top + 186); c.moveTo(W / 2 + 165, top + 34); c.lineTo(W / 2 + 165, top + 186);
    c.stroke();
    icon("cal", xDate, top + 70);
    icon("pin", W / 2, top + 66);
    icon("clock", xTime, top + 70);
    c.direction = "ltr";
    put(dateTxt, xDate, top + 140, 700, 40, "Amiri", DARK, 220);
    c.direction = isAr ? "rtl" : "ltr";
    put(timeTxt, xTime, top + 140, 700, 40, "Amiri", DARK, 220);
    put((mainEvent.venueShort || mainEvent.venue)[lang], W / 2, top + 132, 700, 38, BODY, DARK, 300);
    c.font = `400 25px ${BODY}`; c.fillStyle = MUTED;
    wrap((mainEvent.addressShort || mainEvent.address)[lang], 290).slice(0, 2).forEach((l, i) => c.fillText(l, W / 2, top + 174 + i * 30));
  } });

  block(t("cardEnd"), isAr ? `400 62px "Aref Ruqaa"` : `400 62px "Great Vibes"`, WINE, isAr ? 92 : 78, 1);
  block(t("cardNote"), `400 29px ${BODY}`, MUTED, 46, .3);

  // spread the free space over the gaps so the card is evenly balanced
  const TOP = 150, BOTTOM = 150;
  let H = 1920;
  const content = items.reduce((s, it) => s + it.h, 0);
  const weights = items.reduce((s, it) => s + it.gap, 0);
  let unit = (H - TOP - BOTTOM - content) / weights;
  if (unit < 22) { unit = 22; H = Math.ceil(TOP + BOTTOM + content + unit * weights); }
  unit = Math.min(unit, 70);
  const used = content + unit * weights;
  let y = TOP + (H - TOP - BOTTOM - used) / 2;
  for (const it of items) { y += it.gap * unit; it.draw(y); y += it.h; }

  // ---- compose the card (burgundy paper like the site) ----
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const g = cv.getContext("2d");
  const bg = g.createRadialGradient(W / 2, H * .42, 60, W / 2, H * .45, H * .75);
  bg.addColorStop(0, "#741A2B"); bg.addColorStop(.55, "#5B0F1D"); bg.addColorStop(1, "#3A0711");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);

  const src = document.querySelector(".card-source");
  try {
    // embossed roses all over, same as the site's paper
    const tileCss = getComputedStyle(root).getPropertyValue("--tile-door").trim();
    const tileUrl = tileCss.slice(tileCss.indexOf('"') + 1, tileCss.lastIndexOf('"'));
    const tile = new Image();
    await new Promise((res, rej) => { tile.onload = res; tile.onerror = rej; tile.src = tileUrl; });
    const pat = g.createPattern(tile, "repeat");
    pat.setTransform(new DOMMatrix().scale(1.35));
    g.globalAlpha = .5; g.fillStyle = pat; g.fillRect(0, 0, W, H); g.globalAlpha = 1;
    const veil = g.createRadialGradient(W / 2, H * .48, 80, W / 2, H * .48, W * .6);
    veil.addColorStop(0, "rgba(91,15,29,.75)"); veil.addColorStop(1, "rgba(91,15,29,0)");
    g.fillStyle = veil; g.fillRect(0, 0, W, H);

    // satin drapes recoloured to deep burgundy velvet
    const satinEl = src.querySelector(".icard__satin").cloneNode(true);
    const tones = {
      silkV: ["#3A0610", "#8C2C3D", "#4C0B18", "#7A2132", "#42081A"],
      silkH: ["#40071A", "#8A2A3B", "#4A0A17"],
    };
    for (const [id, cols] of Object.entries(tones)) {
      satinEl.querySelectorAll(`#${id} stop`).forEach((s, i) => s.setAttribute("stop-color", cols[i] || cols[cols.length - 1]));
    }
    satinEl.querySelectorAll("feDropShadow").forEach((f) => { f.setAttribute("flood-color", "#000"); f.setAttribute("flood-opacity", ".55"); });
    satinEl.querySelectorAll('g[stroke="#FFFFFF"]').forEach((n) => { n.setAttribute("stroke", "#E9C98A"); n.setAttribute("opacity", ".38"); });
    satinEl.querySelectorAll('g[stroke="#B89A66"]').forEach((n) => { n.setAttribute("stroke", "#1E0207"); n.setAttribute("opacity", ".5"); });
    g.drawImage(await svgToImage(satinEl, W, H), 0, 0, W, H);

    // thin gold frame inside the drapes
    g.strokeStyle = "rgba(217,185,121,.55)"; g.lineWidth = 2;
    g.strokeRect(118, 92, W - 236, H - 184);
    g.strokeStyle = "rgba(217,185,121,.25)"; g.lineWidth = 1.2;
    g.strokeRect(130, 104, W - 260, H - 208);

    // gold line-art roses in two corners
    const gold = g.createLinearGradient(0, 0, W, H);
    gold.addColorStop(0, "#F3DDA6"); gold.addColorStop(.5, "#C9A25E"); gold.addColorStop(1, "#EBD29A");
    const rosePaths = ROSE.map((d) => new Path2D(d));
    const leafPaths = LEAF.map((d) => new Path2D(d));
    const drawSet = (paths, x, yy, s, rot) => {
      g.save(); g.translate(x, yy); g.rotate((rot * Math.PI) / 180); g.scale(s, s);
      g.lineWidth = 1.7 / s; g.strokeStyle = gold; g.fillStyle = "rgba(217,185,121,.10)";
      paths.forEach((p, i) => { if (i === 0) g.fill(p); g.stroke(p); });
      g.restore();
    };
    const cluster = (pts) => pts.forEach(([kind, x, yy, s, r]) => drawSet(kind === "r" ? rosePaths : leafPaths, x, yy, s, r));
    cluster([
      ["l", 170, 120, 1.7, 20], ["l", 90, 200, 1.6, 100], ["l", 150, 50, 1.3, -40],
      ["r", 105, 105, 2.1, 10], ["r", 225, 62, 1.05, -25], ["r", 70, 240, .9, 40],
    ]);
    cluster([
      ["l", W - 170, H - 120, 1.7, 200], ["l", W - 90, H - 200, 1.6, 280], ["l", W - 150, H - 50, 1.3, 140],
      ["r", W - 105, H - 105, 2.1, 190], ["r", W - 225, H - 62, 1.05, 155], ["r", W - 70, H - 240, .9, 220],
    ]);

    // gold baby's-breath sprigs on the other two corners
    const fw = W * .34, fh = fw * 420 / 160;
    g.drawImage(await svgToImage($("flowersSide"), fw, fh), W - fw + W * .02, -fh * .08, fw, fh * .8);
    const cw = W * .38;
    g.drawImage(await svgToImage($("flowersCorner"), cw, cw), -W * .03, H - cw + H * .01, cw, cw);

    // burgundy wax seal with a gold monogram
    const sw = W * .14, sx = W - sw - 16, sy = H * .16;
    g.drawImage(await svgToImage($("seal").querySelector("svg"), sw, sw, "g[font-family], text"), sx, sy, sw, sw);
    g.fillStyle = gold; g.textAlign = "center";
    const k = sw / 120;
    g.font = `italic 600 ${36 * k}px "Cormorant Garamond"`;
    g.fillText("M", sx + 40 * k, sy + 73 * k);
    g.fillText("H", sx + 81 * k, sy + 73 * k);
    g.font = `italic 600 ${15 * k}px "Cormorant Garamond"`;
    g.fillText("&", sx + 60.5 * k, sy + 58 * k);
  } catch (e) { /* artwork failed: the card still has its text */ }

  g.drawImage(tc, 0, 0, W, H, 0, 0, W, H);
  return new Promise((resolve) => cv.toBlob(resolve, "image/png"));
}

function prepareCardImage() {
  if (!cardCache || cardCache.lang !== lang) {
    const forLang = lang;
    cardCache = { lang: forLang, promise: document.fonts.ready.then(drawCard).catch(() => null) };
  }
  return cardCache.promise;
}

async function saveCardImage() {
  const blob = await prepareCardImage();
  if (!blob) return;
  const name = `${t("cardFile")}.png`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* ---------------------------------------------------------------------
   Opening sequence
   --------------------------------------------------------------------- */
function openInvitation() {
  const gate = $("gate");
  if (gate.classList.contains("is-opening")) return;
  sound.play(true);
  saveCardImage();
  window.scrollTo({ top: 0, behavior: "instant" });
  gate.classList.add("is-opening");
  // the paper comes forward while the doors swing open; the page stays still until they're done
  requestAnimationFrame(() => document.body.classList.remove("is-locked"));
  setTimeout(() => {
    gate.classList.add("is-done");
    window.scrollTo({ top: 0, behavior: "instant" });
    root.classList.remove("is-held");
  }, reduceMotion ? 0 : 2800);
}

function setupStack() {
  if (reduceMotion) return;
  const blocks = [...document.querySelectorAll(".paper > section, .paper > footer")];
  blocks.forEach((el, i) => { el.style.zIndex = String(i + 1); });
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of blocks) {
      const r = el.getBoundingClientRect();
      // starts fading only once its last part is leaving the top, so nothing being read is dimmed
      const edge = vh * .45;
      const p = r.bottom < edge ? Math.min(1, (edge - r.bottom) / edge) : 0;
      el.style.setProperty("--out", p.toFixed(3));
    }
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { threshold: .12 });
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------
   Boot
   --------------------------------------------------------------------- */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo({ top: 0, behavior: "instant" });
paintPaper();
paintCard();
drawSeal();
layoutGate();
render();
setupRsvp();
setupReveal();
setupStack();
setupWelcomeRing();

window.addEventListener("resize", layoutGate);
$("seal").addEventListener("click", openInvitation);

// scrolling or swiping up on the closed card opens it too
(() => {
  const gate = $("gate");
  let startY = null;
  gate.addEventListener("wheel", (e) => { e.preventDefault(); if (Math.abs(e.deltaY) > 8) openInvitation(); }, { passive: false });
  gate.addEventListener("touchstart", (e) => { startY = e.touches[0].clientY; }, { passive: true });
  gate.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  gate.addEventListener("touchend", (e) => {
    if (startY === null) return;
    const dy = startY - e.changedTouches[0].clientY;
    startY = null;
    if (Math.abs(dy) > 30) openInvitation();
  });
  document.addEventListener("keydown", (e) => {
    if (["ArrowDown", "PageDown", " ", "Enter"].includes(e.key) && !gate.classList.contains("is-opening")) openInvitation();
  });
  // a mouse-wheel scroll can't start sound by itself; the first click or touch afterwards does
  ["pointerdown", "touchend", "keydown"].forEach((ev) => document.addEventListener(ev, () => Music.wake(), { passive: true }));
})();
$("calBtn").addEventListener("click", downloadIcs);

// credit line -> maker details
(() => {
  const dlg = $("makerDialog");
  const phone = CONFIG.maker.phone.trim();
  const digits = phone.replace(/[^\d]/g, "");
  $("makerPhone").textContent = phone;
  $("makerPhone").hidden = !phone;
  $("makerActions").hidden = !phone;
  if (phone) {
    $("makerWa").href = `https://wa.me/${digits}`;
    $("makerNote").href = `https://wa.me/${digits}`;
    $("makerCall").href = `tel:+${digits}`;
  }
  $("makerBtn").addEventListener("click", () => dlg.showModal());
  $("makerClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
})();
prepareCardImage();
$("langBtn").addEventListener("click", (e) => { e.stopPropagation(); toggleMenu($("langMenu").hidden); });
document.addEventListener("click", (e) => { if (!$("lang").contains(e.target)) toggleMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });
// keep the music going: if the phone pauses it in the background, pick it up again on return
document.addEventListener("visibilitychange", () => {
  if (document.hidden || !$("gate").classList.contains("is-opening")) return;
  sound.play(false);
});
const timer = setInterval(() => { if (!tick()) clearInterval(timer); }, 1000);
