// ============================================================
// STRONGER TOGETHER — Shared HTML partials
// Injects header, cart drawer, and footer into every page.
// Runs synchronously at top of <body>.
// ============================================================

(function () {
  const path = (location.pathname.split("/").pop() || "index.html").replace(".html", "");

  function isActive(name) {
    if (name === "home" && (path === "" || path === "index")) return "active";
    return path === name ? "active" : "";
  }

  const announce = `
    <div class="announce" role="banner">
      <span class="active">Free UAE shipping on orders over AED 200</span>
      <span>Friday 6am · Corniche · You in?</span>
      <span>The Club — free to join · women only</span>
      <span>Shipping across the GCC — Saudi, Qatar, Bahrain, Oman, Kuwait</span>
    </div>`;

  const header = `
    <header class="header">
      <div class="header-inner">
        <nav class="nav-primary" aria-label="Primary">
          <a href="shop.html" class="${isActive("shop")}">Shop</a>
          <a href="shop.html?line=friday" class="">The Friday Line</a>
          <a href="shop.html?line=foundation" class="">The Foundation</a>
          <a href="shop.html?line=crank" class="">The Crank</a>
          <a href="club.html" class="${isActive("club")}">The Club</a>
          <a href="story.html" class="${isActive("story")}">Our Story</a>
        </nav>

        <button class="hamburger" onclick="ST.toggleMobileMenu()" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>

        <a href="index.html" class="logo" aria-label="Stronger Together — home">
          Stronger <em>Together</em>
          <span class="logo-sub">Run · Gym · Cycle · Abu Dhabi</span>
        </a>

        <div class="nav-utility">
          <button class="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>
          <a href="club.html#join" class="util-text">Join the Club</a>
          <button class="icon-btn" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="cart-badge" data-wish-count style="display:none;">0</span>
          </button>
          <button class="icon-btn" aria-label="Bag" onclick="ST.openCart()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-badge" data-cart-count style="display:none;">0</span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-head">
        <div class="logo logo-small">Stronger <em>Together</em></div>
        <button onclick="ST.toggleMobileMenu()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <nav>
        <a href="index.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="shop.html?line=friday">The Friday Line</a>
        <a href="shop.html?line=foundation">The Foundation</a>
        <a href="shop.html?line=crank">The Crank</a>
        <a href="club.html">The Club</a>
        <a href="story.html">Our Story</a>
        <a href="cart.html">Bag</a>
      </nav>
    </div>`;

  const cartDrawer = `
    <div class="cart-backdrop" id="cart-backdrop"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping bag">
      <div class="cart-head">
        <h3>Your Bag</h3>
        <button onclick="ST.closeCart()" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="cart-body" id="cart-body"></div>
      <div class="cart-foot" id="cart-foot" style="display:none;">
        <div class="cart-subtotal"><span>Subtotal</span><span id="cart-subtotal">AED 0</span></div>
        <div class="cart-ship-note" id="cart-ship-note"></div>
        <a href="cart.html" class="btn btn-primary btn-block">Review bag</a>
        <button class="btn btn-terracotta btn-block" onclick="alert('Checkout is a demo. The real site uses Shopify.')">Checkout</button>
      </div>
    </aside>`;

  const footer = `
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span>Born in Abu Dhabi</span><span class="accent">·</span>
        <span>For the women who show up</span><span class="accent">·</span>
        <span>Run · Gym · Cycle</span><span class="accent">·</span>
        <span>Friday 6am · Corniche</span><span class="accent">·</span>
        <span>Community first. Brand second. Always.</span><span class="accent">·</span>
        <span>Est. 2026</span><span class="accent">·</span>
        <span>Born in Abu Dhabi</span><span class="accent">·</span>
        <span>For the women who show up</span><span class="accent">·</span>
        <span>Run · Gym · Cycle</span><span class="accent">·</span>
        <span>Friday 6am · Corniche</span><span class="accent">·</span>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">Stronger <em>Together</em></div>
            <p>Women's activewear, born in Abu Dhabi. Run, gym, cycle. The only activewear brand built inside a real community, not marketed at one.</p>
            <div class="socials" aria-label="Social links">
              <a href="https://www.instagram.com/strongertogetherrunclub" aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.1 2.6.1 3.8 1.3 3.9 3.9.1 1 .1 1.3.1 3.9 0 2.7 0 3-.1 4-.1 2.6-1.3 3.9-3.9 4-1 .1-1.3.1-4 .1s-3.1 0-4.1-.1c-2.6-.1-3.8-1.3-3.9-4 0-1-.1-1.3-.1-3.9 0-2.7 0-3 .1-4 .1-2.6 1.3-3.8 3.9-3.9 1 0 1.4-.1 4-.1zm0 2c-2.6 0-3 0-3.9.1-1.7.1-2.4.8-2.5 2.5 0 .9-.1 1.3-.1 3.9s0 3 .1 3.9c.1 1.7.8 2.4 2.5 2.5.9.1 1.3.1 3.9.1s3 0 3.9-.1c1.7-.1 2.4-.8 2.5-2.5.1-.9.1-1.3.1-3.9s0-3-.1-3.9c-.1-1.7-.8-2.4-2.5-2.5-.9-.1-1.3-.1-3.9-.1zm0 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 7.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>
              </a>
              <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16.5 2h-3v13a3 3 0 1 1-3-3v-3a6 6 0 1 0 6 6V9.5a7 7 0 0 0 4 1.3v-3a4 4 0 0 1-4-4V2z"/></svg></a>
              <a href="#" aria-label="Strava"><svg viewBox="0 0 24 24"><path d="M15.4 13.9h2.9L14.1 22l-4.2-8.1h2.9L14.1 17zM9.8 2l5.8 11.4h-3.3L9.8 8.2l-2.6 5.2H4z"/></svg></a>
              <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9.2-.8 1.1-4.7 1.1-4.7s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.1-.2.9.5 1.7 1.4 1.7 1.7 0 3-1.8 3-4.3 0-2.3-1.6-3.9-4-3.9-2.7 0-4.3 2-4.3 4.1 0 .8.3 1.7.7 2.2 0 .1.1.2 0 .2l-.3 1c0 .2-.1.2-.3.1-1-.5-1.7-2-1.7-3.3 0-2.7 2-5.2 5.7-5.2 3 0 5.3 2.1 5.3 5 0 3-1.9 5.4-4.5 5.4-.9 0-1.7-.5-2-1 0 0-.4 1.7-.5 2.1-.2.7-.7 1.6-1.1 2.2a10 10 0 1 0 2.2-19.7z"/></svg></a>
            </div>
          </div>

          <div class="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><a href="shop.html">All products</a></li>
              <li><a href="shop.html?line=friday">The Friday Line</a></li>
              <li><a href="shop.html?line=foundation">The Foundation</a></li>
              <li><a href="shop.html?line=crank">The Crank</a></li>
              <li><a href="shop.html?cat=legging">Leggings</a></li>
              <li><a href="shop.html?cat=bra">Sports Bras</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>The Club</h5>
            <ul>
              <li><a href="club.html">Friday Run</a></li>
              <li><a href="club.html#schedule">Weekly schedule</a></li>
              <li><a href="club.html#join">Join the club</a></li>
              <li><a href="story.html">Chloe's story</a></li>
              <li><a href="journal.html">Journal</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Shipping & returns</a></li>
              <li><a href="#">Size guide</a></li>
              <li><a href="#">Fabric & care</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="story.html">Our Story</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Studio partners</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Stronger Together · Abu Dhabi</p>
          <div class="payments">
            <span class="pay-chip">Visa</span>
            <span class="pay-chip">Mastercard</span>
            <span class="pay-chip">Apple Pay</span>
            <span class="pay-chip">Tabby</span>
            <span class="pay-chip">Tamara</span>
          </div>
          <p><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Cookies</a></p>
        </div>
      </div>
    </footer>`;

  // Inject via markers
  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }
  inject("st-announce", announce);
  inject("st-header", header);
  inject("st-cart", cartDrawer);
  inject("st-footer", footer);
})();
