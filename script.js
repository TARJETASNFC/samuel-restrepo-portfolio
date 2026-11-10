/* ============================================================
   SAMUEL RESTREPO — PORTFOLIO SCRIPT
   ============================================================

   CÓMO AGREGAR / REEMPLAZAR PROYECTOS DE LA GALERÍA
   --------------------------------------------------
   1. Coloca tu imagen dentro de: assets/portfolio/
   2. Agrega (o edita) una línea en el arreglo PORTFOLIO de abajo con
      el nombre del archivo y su información. NO necesitas tocar el
      HTML ni el CSS — la galería, el masonry, los filtros y el
      lightbox se generan solos.
   3. La orientación (horizontal/vertical/cuadrada) se detecta
      automáticamente leyendo cada imagen — no hay que configurarla.
   4. Si solo quieres REEMPLAZAR una imagen existente sin agregar un
      proyecto nuevo, simplemente sobrescribe el archivo con el mismo
      nombre dentro de assets/portfolio/. Todo seguirá funcionando.
   ============================================================ */

const PORTFOLIO = [
  { file:'thumb-01.jpg', category:'Miniaturas', title:'Reaccionando — Real Madrid vs Bayern', client:'Canal de reacciones', goal:'Miniatura de alto CTR para video de reacción', software:'Photoshop' },
  { file:'thumb-02.jpg', category:'Miniaturas', title:'Reaccionando al álbum de Blessd', client:'Sisado', goal:'Miniatura para contenido musical', software:'Photoshop' },
  { file:'cover-01.jpg', category:'Portadas Musicales', title:'COSTO — Cover Art', client:'Artista urbano', goal:'Portada para plataformas de streaming', software:'Photoshop' },
  { file:'flyer-01.jpg', category:'Flyers', title:'Kick — Stream con Pablo Sierra', client:'Amigos FC', goal:'Flyer promocional para transmisión en vivo', software:'Photoshop' },
  { file:'flyer-02.jpg', category:'Flyers', title:'Hablando de la Kings League', client:'West Santos FC', goal:'Flyer para anuncio de transmisión', software:'Photoshop' },
  { file:'thumb-03.jpg', category:'Miniaturas', title:'Futbolista Profesional', client:'Canal deportivo', goal:'Miniatura narrativa para YouTube', software:'Photoshop' },
  { file:'thumb-04.jpg', category:'Miniaturas', title:'House Tour — Mansión West Santos', client:'West Santos FC', goal:'Miniatura para contenido de entretenimiento', software:'Photoshop' },
  { file:'thumb-05.jpg', category:'Miniaturas', title:'Día de Partido — Kings League Américas', client:'West Santos FC', goal:'Miniatura para cobertura de partido', software:'Photoshop' },
  { file:'thumb-06.jpg', category:'Miniaturas', title:'¿Me quedo en Colombia?', client:'Canal personal', goal:'Miniatura con narrativa personal', software:'Photoshop' },
  { file:'thumb-07.jpg', category:'Miniaturas', title:'Hablando con West de la Kings League', client:'West Santos FC', goal:'Miniatura para entrevista', software:'Photoshop' },
  { file:'thumb-08.jpg', category:'Miniaturas', title:'Among Us — Sesión con el equipo', client:'PDesign', goal:'Miniatura para gameplay grupal', software:'Photoshop' },
  { file:'banner-01.jpg', category:'Branding', title:'SI TE VE — Banner de canción', client:'Artista urbano', goal:'Arte gráfico para lanzamiento musical', software:'Photoshop' },
];

const IMG_BASE = 'assets/portfolio/';

/* ============================================================
   LOADER
   ============================================================ */
(function loader(){
  const loaderEl = document.getElementById('loader');
  const barFill = document.getElementById('loaderBarFill');
  const pct = document.getElementById('loaderPct');
  const nameEl = document.querySelector('.loader-name');

  let p = 0;
  requestAnimationFrame(()=> loaderEl.classList.add('is-filled'));

  const iv = setInterval(()=>{
    p += Math.random()*18;
    if(p>=100){ p=100; clearInterval(iv); }
    barFill.style.width = p+'%';
    pct.textContent = String(Math.floor(p)).padStart(2,'0')+'%';
    if(p===100){
      setTimeout(()=>{
        loaderEl.classList.add('is-done');
        document.body.style.overflow = '';
      }, 380);
    }
  }, 90);

  document.body.style.overflow = 'hidden';
  window.addEventListener('load', ()=>{
    setTimeout(()=>{ document.body.style.overflow=''; }, 1600);
  });
})();

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
(function cursor(){
  const cursorEl = document.getElementById('cursor');
  if(window.matchMedia('(hover: none)').matches) return;
  let mx=0,my=0, rx=0, ry=0;
  window.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; });
  function loop(){
    rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
    cursorEl.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  const hoverTargets = 'a, button, .masonry-item, .service-card, .filter-btn';
  document.addEventListener('mouseover', e=>{
    if(e.target.closest(hoverTargets)) cursorEl.classList.add('is-hover');
  });
  document.addEventListener('mouseout', e=>{
    if(e.target.closest(hoverTargets)) cursorEl.classList.remove('is-hover');
  });
  document.addEventListener('mousedown', ()=> cursorEl.classList.add('is-click'));
  document.addEventListener('mouseup', ()=> cursorEl.classList.remove('is-click'));
})();

/* ============================================================
   SCROLL PROGRESS + NAV STATE + BACK TO TOP
   ============================================================ */
(function scrollFx(){
  const fill = document.getElementById('scrollFill');
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');

  function onScroll(){
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    fill.style.width = scrolled + '%';
    nav.classList.toggle('is-scrolled', h.scrollTop > 40);
    backToTop.classList.toggle('is-visible', h.scrollTop > 600);
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  backToTop.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth' }));
})();

/* ============================================================
   MOBILE MENU
   ============================================================ */
(function mobileMenu(){
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', ()=>{
    burger.classList.toggle('is-open');
    menu.classList.toggle('is-open');
  });
  menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    burger.classList.remove('is-open'); menu.classList.remove('is-open');
  }));
})();

/* ============================================================
   LIVE CLOCK (HUD)
   ============================================================ */
(function clock(){
  const el = document.getElementById('hudClock');
  function tick(){
    const d = new Date();
    el.textContent = d.toLocaleTimeString('es-CO', { hour12:false });
  }
  tick(); setInterval(tick, 1000);
})();

/* ============================================================
   ROLE ROTATOR
   ============================================================ */
(function roleRotator(){
  const roles = ['Diseñador Gráfico','Visual Designer','Brand Designer','Thumbnail Designer','Creative Director'];
  const el = document.getElementById('roleRotator');
  let i = 0;
  setInterval(()=>{
    i = (i+1) % roles.length;
    el.style.opacity = 0;
    setTimeout(()=>{ el.textContent = roles[i]; el.style.opacity = 1; }, 260);
  }, 2400);
  el.style.transition = 'opacity .26s ease';
})();

/* ============================================================
   GLITCH ON HERO NAME (periodic)
   ============================================================ */
(function glitch(){
  const wraps = document.querySelectorAll('.glitch-wrap');
  function fire(){
    const el = wraps[Math.floor(Math.random()*wraps.length)];
    el.classList.add('is-glitching');
    setTimeout(()=> el.classList.remove('is-glitching'), 360);
  }
  setInterval(fire, 3200);
})();

/* ============================================================
   HERO IMAGE STACK — MOUSE PARALLAX
   ============================================================ */
(function heroParallax(){
  const stack = document.getElementById('heroStack');
  const cards = document.querySelectorAll('.hero-stack-card');
  const hero = document.getElementById('hero');
  if(!stack) return;
  hero.addEventListener('mousemove', e=>{
    const { innerWidth:w, innerHeight:h } = window;
    const dx = (e.clientX - w/2) / w;
    const dy = (e.clientY - h/2) / h;
    cards.forEach(card=>{
      const depth = parseFloat(card.dataset.depth);
      card.style.transform = `translate(${dx*30*depth}px, ${dy*30*depth}px)`;
    });
  });
})();

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
(function reveal(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
  items.forEach(i=> io.observe(i));
})();

/* ============================================================
   ANIMATED COUNTERS
   ============================================================ */
(function counters(){
  const nums = document.querySelectorAll('.counter-num');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1400;
      const start = performance.now();
      function step(now){
        const t = Math.min((now-start)/dur, 1);
        const eased = 1 - Math.pow(1-t, 3);
        el.textContent = Math.floor(eased*target);
        if(t<1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold:0.5 });
  nums.forEach(n=> io.observe(n));
})();

/* ============================================================
   PROCESS LINE FILL
   ============================================================ */
(function processLine(){
  const track = document.querySelector('.process-track');
  const fillEl = document.getElementById('processFill');
  if(!track) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        fillEl.style.width = '100%';
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.4 });
  io.observe(track);
})();

/* ============================================================
   CLIENTS MARQUEE — duplicate content for seamless loop
   ============================================================ */
(function marquee(){
  const track = document.getElementById('clientsTrack');
  if(!track) return;
  track.innerHTML += track.innerHTML;
})();

/* ============================================================
   MASONRY GALLERY + FILTERS + LIGHTBOX
   ============================================================ */
(function gallery(){
  const grid = document.getElementById('masonryGrid');
  const filtersWrap = document.getElementById('galleryFilters');
  if(!grid) return;

  const categories = ['Todo', ...new Set(PORTFOLIO.map(p=>p.category))];

  categories.forEach(cat=>{
    if(cat==='Todo') return;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = cat;
    btn.textContent = cat;
    filtersWrap.appendChild(btn);
  });

  PORTFOLIO.forEach((proj, idx)=>{
    const item = document.createElement('figure');
    item.className = 'masonry-item';
    item.dataset.category = proj.category;
    item.dataset.index = idx;

    const img = document.createElement('img');
    img.src = IMG_BASE + proj.file;
    img.alt = proj.title;
    img.loading = 'lazy';
    item.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'masonry-overlay';
    overlay.innerHTML = `
      <span class="masonry-cat">${proj.category}</span>
      <h3 class="masonry-title">${proj.title}</h3>
      <span class="masonry-view">Ver proyecto →</span>
    `;
    item.appendChild(overlay);

    item.addEventListener('click', ()=> openLightbox(idx));
    grid.appendChild(item);

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ item.classList.add('is-visible'); io.unobserve(item); }
      });
    }, { threshold:0.1 });
    io.observe(item);
  });

  filtersWrap.addEventListener('click', e=>{
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    filtersWrap.querySelectorAll('.filter-btn').forEach(b=> b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.masonry-item').forEach(item=>{
      const show = filter==='all' || filter==='Todo' || item.dataset.category === filter;
      item.style.display = show ? '' : 'none';
    });
  });

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCat = document.getElementById('lightboxCat');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbClient = document.getElementById('lightboxClient');
  const lbGoal = document.getElementById('lightboxGoal');
  const lbSoftware = document.getElementById('lightboxSoftware');
  const lbDesc = document.getElementById('lightboxDesc');
  let current = 0;

  function openLightbox(idx){
    current = idx;
    renderLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function renderLightbox(){
    const proj = PORTFOLIO[current];
    lbImg.src = IMG_BASE + proj.file;
    lbImg.alt = proj.title;
    lbCat.textContent = proj.category;
    lbTitle.textContent = proj.title;
    lbClient.textContent = proj.client;
    lbGoal.textContent = proj.goal;
    lbSoftware.textContent = proj.software;
    lbDesc.textContent = `Proyecto de ${proj.category.toLowerCase()} desarrollado para ${proj.client}, enfocado en ${proj.goal.toLowerCase()}.`;
  }
  function next(){ current = (current+1) % PORTFOLIO.length; renderLightbox(); }
  function prev(){ current = (current-1+PORTFOLIO.length) % PORTFOLIO.length; renderLightbox(); }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', next);
  document.getElementById('lightboxPrev').addEventListener('click', prev);
  lightbox.addEventListener('click', e=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e=>{
    if(!lightbox.classList.contains('is-open')) return;
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowRight') next();
    if(e.key==='ArrowLeft') prev();
  });
})();

/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   SMOOTH ANCHOR SCROLL (with nav offset)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length<2) return;
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top:y, behavior:'smooth' });
  });
});
