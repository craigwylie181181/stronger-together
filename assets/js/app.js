// ============================================================
// STRONGER TOGETHER — Shared app JS
// - In-memory cart + wishlist state (persisted with sessionStorage
//   fallback-safe so the drawer survives navigation in a browser
//   session even if artifact restrictions apply to the pages)
// - Cart drawer open/close + render
// - Wishlist toggle
// - Announcement bar rotation
// - Mobile menu toggle
// - Product card renderer (used by home + shop)
// - Accordion component
// - Toast notifications
// ============================================================

(function () {
  const SS_KEY_CART = "st_cart_v1";
  const SS_KEY_WISH = "st_wish_v1";

  function safeGet(key) {
    try { return JSON.parse(sessionStorage.getItem(key) || "null"); }
    catch { return null; }
  }
  function safeSet(key, val) {
    try { sessionStorage.setItem(key, JSON.stringify(val)); } catch {}
  }

  const STATE = {
    cart: safeGet(SS_KEY_CART) || [],
    wish: safeGet(SS_KEY_WISH) || []
  };

  function persist() {
    safeSet(SS_KEY_CART, STATE.cart);
    safeSet(SS_KEY_WISH, STATE.wish);
    updateBadges();
  }

  function updateBadges() {
    const count = STATE.cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
    document.querySelectorAll("[data-wish-count]").forEach(el => {
      el.textContent = STATE.wish.length;
      el.style.display = STATE.wish.length > 0 ? "flex" : "none";
    });
  }

  function formatAED(n) {
    return "AED " + n.toLocaleString("en-AE");
  }

  // ---------- Cart ----------
  function cartAdd(product, size, color) {
    const key = product.id + "::" + size + "::" + color;
    const existing = STATE.cart.find(i => i.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      STATE.cart.push({
        key,
        id: product.id,
        slug: product.slug,
        name: product.name,
        line: product.line,
        price: product.price,
        size,
        color,
        img: product.img,
        qty: 1
      });
    }
    persist();
    renderCart();
    openCart();
    toast(`Added — ${product.name} · ${size}`);
  }

  function cartRemove(key) {
    STATE.cart = STATE.cart.filter(i => i.key !== key);
    persist();
    renderCart();
    renderCartPage();
  }
  function cartSetQty(key, qty) {
    const item = STATE.cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, qty));
    persist();
    renderCart();
    renderCartPage();
  }

  function cartSubtotal() {
    return STATE.cart.reduce((s, i) => s + i.price * i.qty, 0);
  }

  function colourSwatch(colorKey) {
    const c = (window.ST_COLORS || {})[colorKey] || { hex: "#999" };
    const border = c.border ? `border:1px solid ${c.border};` : "";
    return `<span style="width:14px;height:14px;border-radius:50%;background:${c.hex};${border}display:inline-block;vertical-align:middle;"></span>`;
  }

  function renderCart() {
    const body = document.getElementById("cart-body");
    const foot = document.getElementById("cart-foot");
    if (!body || !foot) return;
    if (!STATE.cart.length) {
      body.innerHTML = `<div class="cart-empty">
        <h4>Your bag is empty.</h4>
        <p>Start with the Friday Legging — the product the community was built to wear.</p>
        <a href="shop.html" class="btn btn-primary" style="margin-top:20px;">Shop the drop</a>
      </div>`;
      foot.style.display = "none";
      return;
    }
    foot.style.display = "block";
    body.innerHTML = STATE.cart.map(i => {
      const c = (window.ST_COLORS || {})[i.color] || {};
      return `<div class="cart-item">
        <img src="${i.img}" alt="${i.name}">
        <div class="cart-item-info">
          <h5>${i.name}</h5>
          <div class="meta">${i.line} · ${c.name || i.color} · Size ${i.size}</div>
          <div class="qty">
            <button onclick="ST.cartSetQty('${i.key}', ${i.qty - 1})" aria-label="Decrease">−</button>
            <span>${i.qty}</span>
            <button onclick="ST.cartSetQty('${i.key}', ${i.qty + 1})" aria-label="Increase">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <span class="price">${formatAED(i.price * i.qty)}</span>
          <button class="remove" onclick="ST.cartRemove('${i.key}')">Remove</button>
        </div>
      </div>`;
    }).join("");

    const sub = cartSubtotal();
    const toFree = Math.max(0, 200 - sub);
    document.getElementById("cart-subtotal").textContent = formatAED(sub);
    const noteEl = document.getElementById("cart-ship-note");
    if (noteEl) {
      noteEl.innerHTML = toFree > 0
        ? `Add <strong>${formatAED(toFree)}</strong> to qualify for free UAE shipping.`
        : `✓ Free UAE shipping unlocked.`;
    }
  }

  function renderCartPage() {
    const wrap = document.getElementById("cart-page-grid");
    if (!wrap) return;
    if (!STATE.cart.length) {
      wrap.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
        <h2 style="margin-bottom:14px;">Your bag is empty.</h2>
        <p style="max-width:48ch;margin:0 auto 28px;">Friday 6am is coming. Start with the legging the run club built.</p>
        <a href="shop.html" class="btn btn-primary">Shop the drop</a>
      </div>`;
      return;
    }
    const items = STATE.cart.map(i => {
      const c = (window.ST_COLORS || {})[i.color] || {};
      return `<div class="cart-row">
        <img src="${i.img}" alt="${i.name}">
        <div>
          <h4><a href="product.html?slug=${i.slug}">${i.name}</a></h4>
          <div class="meta">${i.line} · ${c.name || i.color} · Size ${i.size}</div>
          <a href="#" class="remove" onclick="event.preventDefault();ST.cartRemove('${i.key}')">Remove</a>
        </div>
        <div class="qty">
          <button onclick="ST.cartSetQty('${i.key}', ${i.qty - 1})">−</button>
          <span>${i.qty}</span>
          <button onclick="ST.cartSetQty('${i.key}', ${i.qty + 1})">+</button>
        </div>
        <div style="text-align:right;font-weight:500;">${formatAED(i.price)}</div>
        <div style="text-align:right;font-weight:500;min-width:100px;">${formatAED(i.price * i.qty)}</div>
      </div>`;
    }).join("");
    const sub = cartSubtotal();
    const ship = sub >= 200 ? 0 : 25;
    const total = sub + ship;
    wrap.innerHTML = `
      <div>
        <div class="cart-table">${items}</div>
      </div>
      <aside class="cart-summary">
        <h3>Order summary</h3>
        <div class="row"><span>Subtotal</span><span>${formatAED(sub)}</span></div>
        <div class="row"><span>Shipping (UAE)</span><span>${ship === 0 ? "Free" : formatAED(ship)}</span></div>
        <div class="row"><span>VAT (included)</span><span>5%</span></div>
        <div class="row total"><span>Total</span><span>${formatAED(total)}</span></div>
        <button class="btn btn-terracotta btn-lg btn-block" onclick="alert('Checkout is a demo. The real site uses Shopify.')">Checkout</button>
        <p class="note">Secure payment · Cards · Apple Pay · Tabby · Tamara</p>
      </aside>
    `;
  }

  function openCart() {
    const d = document.getElementById("cart-drawer");
    const b = document.getElementById("cart-backdrop");
    if (!d) return;
    renderCart();
    d.classList.add("open");
    b.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    const d = document.getElementById("cart-drawer");
    const b = document.getElementById("cart-backdrop");
    if (!d) return;
    d.classList.remove("open");
    b.classList.remove("open");
    document.body.style.overflow = "";
  }

  // ---------- Wishlist ----------
  function wishToggle(productId) {
    const i = STATE.wish.indexOf(productId);
    if (i === -1) { STATE.wish.push(productId); toast("Saved to wishlist"); }
    else { STATE.wish.splice(i, 1); }
    persist();
    document.querySelectorAll(`[data-wish-for="${productId}"]`).forEach(el => {
      el.classList.toggle("on", STATE.wish.includes(productId));
    });
  }
  function wishHas(productId) { return STATE.wish.includes(productId); }

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    let t = document.getElementById("st-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "st-toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  // ---------- Product Card Renderer ----------
  function productCardHTML(p) {
    const swatches = (p.colors || []).map(k => {
      const c = (window.ST_COLORS || {})[k] || { hex: "#999" };
      const border = c.border ? `border:1px solid ${c.border};` : "";
      return `<span class="sw" style="background:${c.hex};${border}"></span>`;
    }).join("");
    const badge = p.badge
      ? `<span class="pcard-badge ${p.badge === "NEW" ? "new" : ""}">${p.badge}</span>`
      : "";
    const wished = wishHas(p.id) ? "on" : "";
    return `<article class="pcard" data-id="${p.id}">
      ${badge}
      <button class="pcard-wish ${wished}" data-wish-for="${p.id}" onclick="ST.wishToggle('${p.id}')" aria-label="Save">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <a href="product.html?slug=${p.slug}" class="pcard-media">
        <img class="main-img" src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.imgHover ? `<img class="hover-img" src="${p.imgHover}" alt="" loading="lazy">` : ""}
        <div class="pcard-quick">Quick view</div>
      </a>
      <div class="pcard-body">
        <div class="pcard-line">${p.line}</div>
        <h4 class="pcard-title"><a href="product.html?slug=${p.slug}">${p.name}</a></h4>
        <div class="pcard-meta">
          <span class="pcard-price">${formatAED(p.price)}</span>
          <span class="pcard-swatches">${swatches}</span>
        </div>
      </div>
    </article>`;
  }

  function renderProductGrid(selector, products) {
    const wrap = document.querySelector(selector);
    if (!wrap) return;
    wrap.innerHTML = products.map(productCardHTML).join("");
  }

  // ---------- Announcement rotation ----------
  function startAnnounceRotation() {
    const bar = document.querySelector(".announce");
    if (!bar) return;
    const spans = bar.querySelectorAll("span");
    if (spans.length < 2) return;
    let i = 0;
    spans.forEach(s => s.style.display = "none");
    spans[0].style.display = "inline";
    setInterval(() => {
      spans[i].style.display = "none";
      i = (i + 1) % spans.length;
      spans[i].style.display = "inline";
    }, 4200);
  }

  // ---------- Mobile menu ----------
  function toggleMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.body.style.overflow =
      document.getElementById("mobile-menu").classList.contains("open") ? "hidden" : "";
  }

  // ---------- Accordion ----------
  function bindAccordion() {
    document.querySelectorAll(".accordion-head").forEach(h => {
      h.addEventListener("click", () => {
        h.parentElement.classList.toggle("open");
      });
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    updateBadges();
    renderCart();
    renderCartPage();
    startAnnounceRotation();
    bindAccordion();
    const bd = document.getElementById("cart-backdrop");
    if (bd) bd.addEventListener("click", closeCart);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });
  });

  // ---------- Expose ----------
  window.ST = {
    state: STATE,
    cartAdd, cartRemove, cartSetQty,
    openCart, closeCart,
    wishToggle, wishHas,
    renderProductGrid, productCardHTML,
    toggleMobileMenu,
    formatAED
  };
})();
