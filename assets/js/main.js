/* ============================================================
   PHAROS CONSULTORIA — interações
   Vanilla JS, sem dependências. Progressivo e acessível.
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer compartilhado (injeta nas páginas internas) ---------- */
  const footerSlot = document.querySelector("[data-include-footer]");
  if (footerSlot) {
    footerSlot.outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html" aria-label="Pharos Consultoria">
            <img class="brand__mark" src="assets/img/logo-farol.svg" alt="" width="40" height="40" loading="lazy" />
            <span class="brand__name">PHAROS</span>
          </a>
          <p>Consultoria empresarial em gestão, finanças, estratégia e processos.</p>
          <p style="margin-top:var(--space-4)"><strong style="color:#cfd3ca">Fortaleza</strong><br>R. Monsenhor Bruno, 1153, Aldeota<br>Fortaleza, CE</p>
          <p style="margin-top:var(--space-3)"><strong style="color:#cfd3ca">Rio de Janeiro</strong><br>Av. Emb. Abelardo Bueno, 1300, Barra Olímpica<br>Rio de Janeiro, RJ</p>
          <div class="socials">
            <a href="https://wa.me/5500000000000" aria-label="WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 000-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.9 4.9 0 001 2.6 11 11 0 004.3 3.8c2 .8 2 .5 2.4.5a2.5 2.5 0 001.6-1.2 2 2 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg></a>
            <a href="https://www.linkedin.com/company/pharosconsultoria" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05a4.2 4.2 0 013.77-2.07c4 0 4.75 2.63 4.75 6.05v6.38h-4v-5.66c0-1.35 0-3.08-1.88-3.08s-2.17 1.47-2.17 3v5.74H9v-12z"/></svg></a>
            <a href="https://www.instagram.com/pharosconsultoria" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="0"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          </div>
        </div>
        <nav class="footer-col" aria-label="Empresa">
          <h5>A Pharos</h5>
          <a href="sobre.html">Nós</a><a href="metodologia.html">Metodologia</a><a href="cases.html">Cases</a><a href="blog.html">Artigos</a><a href="contato.html">Contato</a>
        </nav>
        <nav class="footer-col" aria-label="Soluções">
          <h5>Soluções</h5>
          <a href="servicos.html#planejamento-estrategico">Planejamento Estratégico</a><a href="servicos.html#gestao-comercial">Gestão Comercial</a><a href="servicos.html#gestao-financeira">Gestão Financeira</a><a href="servicos.html#valuation">Valuation</a><a href="servicos.html">Ver todas</a>
        </nav>
        <div class="footer-col footer-news">
          <h5>Newsletter</h5>
          <p>Receba conteúdos de gestão e estratégia no seu&nbsp;e-mail.</p>
          <form class="news-form" data-mock aria-label="Assinar newsletter">
            <label class="sr-only" for="nl-email">Seu e-mail</label>
            <input id="nl-email" type="email" name="email" placeholder="Seu melhor e-mail" required autocomplete="email" />
            <button type="submit" aria-label="Assinar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          </form>
          <p data-form-note hidden style="color:var(--gold-400); margin-top:var(--space-3)">Pronto. Você vai receber nossos próximos conteúdos.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span data-year>2026</span> Pharos Consultoria. Todos os direitos reservados.</p>
        <p class="slogan">Você define o destino. Nós mostramos o caminho.</p>
      </div>
    </div>
  </footer>`;
  }

  /* ---------- Header: estado ao rolar ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    nav.classList.add("is-mobile");
    toggle.setAttribute("aria-expanded", "false");
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Contadores animados ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && !prefersReduced && "IntersectionObserver" in window) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        el.textContent = prefix + val.toLocaleString("pt-BR") + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = prefix + target.toLocaleString("pt-BR") + suffix;
      };
      requestAnimationFrame(step);
    };
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((el) => {
      const t = parseFloat(el.dataset.count);
      el.textContent = (el.dataset.prefix || "") + t.toLocaleString("pt-BR") + (el.dataset.suffix || "");
    });
  }

  /* ---------- Marquee: duplica itens para loop contínuo ---------- */
  document.querySelectorAll("[data-marquee]").forEach((track) => {
    track.innerHTML += track.innerHTML;
    track.setAttribute("aria-hidden", "false");
  });

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Formulários (feedback de rascunho) ---------- */
  document.querySelectorAll("form[data-mock]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("[type=submit]");
      // no rodape o aviso vive fora do <form> (irmao), entao procura tambem no pai
      const note =
        form.querySelector("[data-form-note]") ||
        (form.parentElement && form.parentElement.querySelector("[data-form-note]"));
      if (btn) { btn.disabled = true; }
      if (note) {
        if (!note.textContent.trim()) note.textContent = "Recebido. Em breve entramos em contato.";
        note.hidden = false;
        note.classList.add("is-visible");
      }
      form.reset();
      setTimeout(() => { if (btn) btn.disabled = false; }, 2500);
    });
  });

  /* ---------- Modal de artigo (blog) ---------- */
  const artModal = document.getElementById("article-modal");
  if (artModal) {
    const scroller = artModal.querySelector(".modal__scroll");
    const elTitle  = artModal.querySelector("[data-article-title]");
    const elMeta   = artModal.querySelector("[data-article-meta]");
    const elBody   = artModal.querySelector("[data-article-body]");
    const cards    = Array.from(document.querySelectorAll(".post-card[data-article]"));
    let lastFocus = null;
    let pageY = 0;
    let isOpen = false;

    const fill = (card) => {
      elTitle.textContent = card.querySelector("h3").textContent.trim();

      // meta: categoria · data · tempo de leitura (só o que existir)
      elMeta.textContent = "";
      const partes = [card.dataset.category, card.dataset.date, card.dataset.readtime].filter(Boolean);
      partes.forEach((txt, i) => {
        const s = document.createElement("span");
        s.textContent = txt;
        elMeta.appendChild(s);
        if (i < partes.length - 1) {
          const sep = document.createElement("span");
          sep.className = "sep";
          sep.textContent = "·";
          elMeta.appendChild(sep);
        }
      });

      elBody.textContent = "";
      // imagem de destaque, se o card declarar uma
      if (card.dataset.image) {
        const fig = document.createElement("figure");
        fig.className = "article__figure";
        const img = document.createElement("img");
        img.src = card.dataset.image;
        img.alt = "";
        img.loading = "lazy";
        fig.appendChild(img);
        elBody.appendChild(fig);
      }
      const tpl = card.querySelector(".post-card__body");
      if (tpl) elBody.appendChild(tpl.content.cloneNode(true));
      scroller.scrollTop = 0;
    };

    const open = (card) => {
      if (!card) return;
      if (!isOpen) {
        lastFocus = document.activeElement;
        pageY = window.scrollY;
        document.body.style.top = "-" + pageY + "px";
        document.body.classList.add("modal-open");
      }
      fill(card);
      artModal.hidden = false;
      isOpen = true;
      requestAnimationFrame(() => artModal.classList.add("is-open"));
      scroller.focus({ preventScroll: true });
    };

    const finish = () => {
      artModal.hidden = true;
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      window.scrollTo(0, pageY);
      isOpen = false;
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };

    const close = () => {
      if (!isOpen) return;
      artModal.classList.remove("is-open");
      if (prefersReduced) finish();
      else setTimeout(finish, 260);
    };

    // abrir: clique em qualquer ponto do card
    cards.forEach((card) => {
      card.addEventListener("click", () => open(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.target === card) open(card);
      });
    });

    // fechar: X, overlay
    artModal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", close);
    });

    // fechar: ESC + armadilha de foco
    document.addEventListener("keydown", (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      const foco = artModal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!foco.length) return;
      const primeiro = foco[0];
      const ultimo = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    });

    // links internos entre artigos ("Leia também")
    elBody.addEventListener("click", (e) => {
      const link = e.target.closest("[data-open-article]");
      if (!link) return;
      e.preventDefault();
      const alvo = cards.find((c) => c.dataset.article === link.dataset.openArticle);
      if (alvo) open(alvo);
    });
  }
})();
