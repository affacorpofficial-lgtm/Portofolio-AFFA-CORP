"use strict";
/* =========================================================
   AFFA CORP — script.js
   BAGIAN 1 (CONFIG + novels) adalah satu-satunya yang perlu
   kamu edit untuk mengganti teks, tautan, dan data novel.
   ========================================================= */

/* ================= KONFIGURASI UTAMA ================= */
const CONFIG = {
  company: "AFFA CORP",
  slogan: "Create Beyond Boundaries",
  heroDesc: "An independent creative company exploring stories, imagination, and digital innovation.",

  visionIntro: "Every story begins with an idea. Every idea has the potential to become something greater.",
  vision: "Menjadi perusahaan kreatif independen yang mengembangkan karya cerita dan inovasi digital dengan identitas yang kuat, imajinasi tanpa batas, serta nilai yang mampu meninggalkan kesan bagi setiap penikmatnya.",
  mission: [
    "Mengembangkan novel dan cerita orisinal dengan karakter, konflik, serta dunia yang memiliki kedalaman.",
    "Membangun ekosistem kreatif yang menghubungkan novel, komik, animasi, dan teknologi digital.",
    "Menghasilkan karya yang tidak hanya menghibur, tetapi juga menyampaikan gagasan, pemikiran, dan perspektif baru.",
    "Memanfaatkan teknologi sebagai sarana untuk memperluas jangkauan dan pengalaman menikmati karya.",
    "Mengembangkan identitas AFFA CORP melalui konsistensi, kreativitas, dan eksplorasi ide."
  ],
  purpose: "Menciptakan ruang bagi ide-ide kreatif untuk berkembang menjadi karya nyata, sekaligus membangun identitas yang dapat terus bertumbuh melalui cerita, seni, dan teknologi.",

  projectsIntro: "Stories are more than words. They are worlds waiting to be explored.",

  founderIntro: "Behind every creative vision is a mind willing to turn ideas into reality.",
  founder: {
    name: "Galih Dwifadhika Yusuf",
    role: "Founder & Creative Director",
    photo: "assets/images/founder.jpg", // GANTI FOTO PENDIRI: timpa file ini (rasio 3:4)
    description: [
      "Seorang kreator muda yang memiliki ketertarikan pada dunia penulisan, pengembangan cerita, desain kreatif, dan teknologi digital. Berawal dari ketertarikan terhadap imajinasi dan proses penciptaan karya, AFFA CORP dikembangkan sebagai wadah untuk menghubungkan berbagai gagasan kreatif menjadi proyek nyata.",
      "Dengan fokus pada eksplorasi ide, pengembangan karakter, dan pembangunan dunia cerita, ia berupaya menciptakan karya yang memiliki identitas serta ruang untuk terus berkembang."
    ],
    focus: ["Creative Writing", "Story Development", "Digital Innovation", "Creative Direction"],
    // Isi url untuk mengaktifkan tombol. Kosongkan ("") jika belum ada → tombol tampil nonaktif.
    // Email: gunakan format "mailto:nama@email.com"
    social: [
      { label: "Instagram", url: "" },
      { label: "TikTok", url: "" },
      { label: "Email", url: "" }
    ]
  },

  // Informasi tambahan di halaman detail (bisa ditimpa per novel lewat properti `extra`)
  defaultExtra: [["Penulis", "Isi nama penulis"], ["Format", "Novel"], ["Bahasa", "Indonesia"]]
};

/* ================= DATA DELAPAN NOVEL =================
   Edit judul, genre, status, gambar, sinopsis, deskripsi, dan tautan di sini.
   - poster : gambar kartu di galeri (rasio 3:4)  → assets/images/novel-N.jpg
   - cover  : gambar besar di halaman detail (3:4) → assets/images/novel-N-cover.jpg
   - status : "Ongoing" | "Completed" | "Coming Soon"
   - link   : tautan "Read More" (kosongkan "" jika belum ada)
   - extra  : (opsional) [["Label","Isi"], ...] untuk informasi tambahan khusus novel ini
   - Pakai \n\n di dalam teks untuk membuat paragraf baru. */
const novels = [
  { id: 1, title: "Novel One", genre: "Fantasy / Adventure", status: "Ongoing", poster: "assets/images/novel-1.jpg", cover: "assets/images/novel-1-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 2, title: "Novel Two", genre: "Sci-Fi / Drama", status: "Ongoing", poster: "assets/images/novel-2.jpg", cover: "assets/images/novel-2-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 3, title: "Novel Three", genre: "Mystery / Thriller", status: "Coming Soon", poster: "assets/images/novel-3.jpg", cover: "assets/images/novel-3-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 4, title: "Novel Four", genre: "Romance / Slice of Life", status: "Completed", poster: "assets/images/novel-4.jpg", cover: "assets/images/novel-4-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 5, title: "Novel Five", genre: "Action / Fantasy", status: "Ongoing", poster: "assets/images/novel-5.jpg", cover: "assets/images/novel-5-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 6, title: "Novel Six", genre: "Psychological / Drama", status: "Coming Soon", poster: "assets/images/novel-6.jpg", cover: "assets/images/novel-6-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 7, title: "Novel Seven", genre: "Historical / Adventure", status: "Completed", poster: "assets/images/novel-7.jpg", cover: "assets/images/novel-7-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" },
  { id: 8, title: "Novel Eight", genre: "Comedy / Adventure", status: "Coming Soon", poster: "assets/images/novel-8.jpg", cover: "assets/images/novel-8-cover.jpg", description: "Tulis sinopsis novel di sini.", details: "Tulis deskripsi lengkap novel di sini.", link: "" }
];

/* =========================================================
   BAGIAN 2 — KODE PROGRAM (tidak perlu diedit)
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const state = { savedScroll: 0, lastY: 0, navLockUntil: 0 };

/* Kotak gambar 3:4 dengan placeholder otomatis jika file tidak ditemukan */
function imageBox(src, alt, label) {
  return `<div class="ph" data-label="${esc(label)}"><img src="${esc(src)}" alt="${esc(alt)}" decoding="async"></div>`;
}
function bindImageFallbacks(root) {
  $$("img", root).forEach(img => {
    const fail = () => img.parentElement.classList.add("missing");
    img.addEventListener("error", fail, { once: true });
    if (img.complete && img.naturalWidth === 0) fail();
  });
}

/* ---------- Render konten ---------- */
function renderStatic() {
  $$("[data-bind]").forEach(el => { el.textContent = CONFIG[el.dataset.bind] ?? ""; });
  document.title = `${CONFIG.company} — ${CONFIG.slogan}`;
}

function renderVision() {
  const items = [
    ["Vision", `<p>${esc(CONFIG.vision)}</p>`],
    ["Mission", `<ul>${CONFIG.mission.map(m => `<li>${esc(m)}</li>`).join("")}</ul>`],
    ["Purpose", `<p>${esc(CONFIG.purpose)}</p>`]
  ];
  $("#visionCards").innerHTML = items.map(([t, body], i) =>
    `<article class="card reveal" style="--d:${i * 110}ms"><h3>${t}</h3>${body}</article>`).join("");
}

function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = novels.map((n, i) =>
    `<article class="novel reveal" style="--d:${(i % 2) * 100}ms">
      <button class="novel-btn" data-id="${n.id}" aria-label="Buka detail ${esc(n.title)}">
        ${imageBox(n.poster, "Poster " + n.title, n.title)}
        <span class="n-title">${esc(n.title)}</span>
        <span class="n-genre">${esc(n.genre)}</span>
      </button>
    </article>`).join("");
  bindImageFallbacks(grid);
  $$(".novel-btn", grid).forEach(b => b.addEventListener("click", () => openNovelDetail(Number(b.dataset.id))));
}

function renderFounder() {
  const f = CONFIG.founder, wrap = $("#founderWrap");
  const social = f.social.map(s => s.url
    ? `<a class="btn btn-ghost" href="${esc(s.url)}"${s.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a>`
    : `<span class="btn btn-ghost" aria-disabled="true" title="Tautan belum diisi">${esc(s.label)}</span>`).join("");
  wrap.innerHTML = `
    <div class="reveal">${imageBox(f.photo, "Foto " + f.name, "Foto Pendiri")}</div>
    <div class="f-info reveal" style="--d:140ms">
      <h3>${esc(f.name)}</h3>
      <p class="role">${esc(f.role)}</p>
      ${f.description.map(p => `<p>${esc(p)}</p>`).join("")}
      <h4>Creative Focus</h4>
      <ul class="chips">${f.focus.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="social">${social}</div>
    </div>`;
  bindImageFallbacks(wrap);
}

/* ---------- Detail novel ---------- */
function renderNovelDetail(n) {
  $("#dCover").innerHTML = imageBox(n.cover || n.poster, "Cover " + n.title, n.title);
  bindImageFallbacks($("#dCover"));
  $("#dGenre").textContent = n.genre;
  $("#dTitle").textContent = n.title;
  $("#dStatus").textContent = n.status;
  $("#dDesc").textContent = n.description;
  $("#dDetails").textContent = n.details;
  $("#dExtra").innerHTML = (n.extra || CONFIG.defaultExtra)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#dReadSlot").innerHTML = n.link
    ? `<a class="btn btn-primary" href="${esc(n.link)}" target="_blank" rel="noopener">Read More</a>`
    : `<span class="btn btn-primary" aria-disabled="true" title="Tautan belum tersedia">Read More (belum tersedia)</span>`;
}

function openNovelDetail(id) {
  const n = novels.find(x => x.id === id);
  if (!n) return;
  state.savedScroll = window.scrollY;
  $("#page").classList.add("fading");
  setTimeout(() => {
    renderNovelDetail(n);
    document.body.classList.add("detail-open");
    window.scrollTo({ top: 0, behavior: "instant" });
    $("#backBtn").focus({ preventScroll: true });
  }, 280);
}

function closeNovelDetail() {
  if (!document.body.classList.contains("detail-open")) return;
  document.body.classList.remove("detail-open");
  window.scrollTo({ top: state.savedScroll, behavior: "instant" }); // kembali ke posisi galeri Projects
  state.lastY = state.savedScroll;
  $("#navbar").classList.remove("hide");
  requestAnimationFrame(() => $("#page").classList.remove("fading"));
}

/* ---------- Navigasi ---------- */
function navigateToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  state.navLockUntil = Date.now() + 1200; // navbar tidak disembunyikan saat scroll otomatis
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(id) {
  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.go === id));
}

function initializeNavbar() {
  const nav = $("#navbar");
  window.addEventListener("scroll", () => {
    if (document.body.classList.contains("detail-open")) return;
    const y = window.scrollY;
    nav.classList.toggle("solid", y > 30);
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 6) setActiveNav("founder");
    if (y < 120) { nav.classList.remove("hide"); state.lastY = y; return; }
    const d = y - state.lastY;
    if (Math.abs(d) < 8) return; // abaikan gerakan kecil agar tidak berkedip
    if (d > 0 && Date.now() > state.navLockUntil) nav.classList.add("hide");
    else if (d < 0) nav.classList.remove("hide");
    state.lastY = y;
  }, { passive: true });

  $$("[data-go]").forEach(b => b.addEventListener("click", () => navigateToSection(b.dataset.go)));
  $("#backBtn").addEventListener("click", closeNovelDetail);
  $("#dBack").addEventListener("click", closeNovelDetail);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeNovelDetail(); });
}

function initializeSectionSpy() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setActiveNav(e.target.id); });
  }, { rootMargin: "-45% 0px -45% 0px" });
  $$("#hero, #vision, #projects, #founder").forEach(s => io.observe(s));
}

/* ---------- Scroll reveal ---------- */
function initializeScrollReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target: t, isIntersecting: visible, boundingClientRect: r }) => {
      if (visible) { t.classList.add("in"); t.classList.remove("out"); }
      else if (r.top < 0) { t.classList.remove("in"); t.classList.add("out"); } // keluar lewat atas
      else t.classList.remove("in", "out");                                      // di bawah layar: siap muncul lagi
    });
  }, { rootMargin: "-8% 0px -8% 0px", threshold: 0 });
  els.forEach(e => io.observe(e));
}

/* ---------- Animasi pembuka ---------- */
function initializePreloader() {
  const pre = $("#preloader");
  setTimeout(() => {
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
    pre.classList.add("done");
    setTimeout(() => pre.remove(), 700);
  }, 2200);
}

/* ---------- Mulai ---------- */
document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  renderStatic();
  renderVision();
  renderProjects();
  renderFounder();
  bindImageFallbacks(document);
  initializeNavbar();
  initializeSectionSpy();
  initializeScrollReveal();
  initializePreloader();
});
