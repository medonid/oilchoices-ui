/* ═══════════════════════════════════════════════════
   OILCHOICES.COM — Slide-out Panel v1.0
   Left side · Oil drop icon · Responsive
   Features: Save · Share · Copy · Progress · QR
═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  var D = document, W = window;

  /* ── CSS ── */
  var css = `
  /* ════════════════════════════════
     PANEL BASE
  ════════════════════════════════ */
  #oc-sb {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99990;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  /* ── Tab trigger (oil drop icon) ── */
  #oc-sb-tab {
    width: 28px;
    min-height: 80px;
    background: #0d47a1;
    border-radius: 0 12px 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 3px 0 16px rgba(13,71,161,0.35);
    transition: width .2s, background .2s;
    padding: 10px 0;
    gap: 6px;
    border: none;
    outline: none;
  }

  #oc-sb-tab:hover {
    width: 32px;
    background: #1565c0;
  }

  #oc-sb-tab svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  #oc-sb-tab .tab-txt {
    writing-mode: vertical-rl;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
  }

  /* ── Drawer ── */
  #oc-sb-drawer {
    width: 0;
    overflow: hidden;
    background: #0d47a1;
    border-radius: 0 14px 14px 0;
    box-shadow: 4px 0 24px rgba(13,71,161,0.3);
    transition: width .3s cubic-bezier(.4,0,.2,1);
    display: flex;
    flex-direction: column;
  }

  #oc-sb.open #oc-sb-drawer {
    width: 200px;
  }

  #oc-sb-inner {
    width: 200px;
    padding: 14px 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* ── Title ── */
  .sb-title {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    padding: 0 6px 6px;
    border-bottom: 1px solid rgba(255,255,255,0.12);
    margin-bottom: 4px;
  }

  /* ── Buttons ── */
  .sb-btn {
    width: 100%;
    padding: 10px 10px;
    background: transparent;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background .18s;
    text-align: left;
    color: #fff;
    font-family: inherit;
  }

  .sb-btn:hover {
    background: rgba(255,255,255,0.15);
  }

  .sb-btn:active {
    background: rgba(255,255,255,0.25);
  }

  .sb-btn .sb-ico {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
    transition: background .18s;
  }

  .sb-btn:hover .sb-ico {
    background: rgba(255,255,255,0.25);
  }

  .sb-btn .sb-lbl {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .sb-btn .sb-main {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
  }

  .sb-btn .sb-sub {
    font-size: 10px;
    color: rgba(255,255,255,0.6);
    white-space: nowrap;
  }

  /* ── Copy done state ── */
  .sb-btn.copied .sb-ico {
    background: #2e7d32 !important;
  }

  .sb-btn.copied .sb-main {
    color: #a5d6a7 !important;
  }

  /* ── Divider ── */
  .sb-div {
    height: 1px;
    background: rgba(255,255,255,0.12);
    margin: 4px 6px;
  }

  /* ── Progress circle ── */
  .sb-prog-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
  }

  .sb-prog-circle {
    position: relative;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .sb-prog-circle svg {
    width: 42px;
    height: 42px;
    transform: rotate(-90deg);
  }

  .sb-prog-circle .track {
    fill: none;
    stroke: rgba(255,255,255,0.15);
    stroke-width: 3;
  }

  .sb-prog-circle .fill {
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 113;
    stroke-dashoffset: 113;
    transition: stroke-dashoffset .2s;
  }

  .sb-prog-circle .pct-txt {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
    color: #fff;
  }

  .sb-prog-lbl {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .sb-prog-lbl .sb-main {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  .sb-prog-lbl .sb-sub {
    font-size: 10px;
    color: rgba(255,255,255,0.6);
  }

  /* ── Overlay ── */
  #oc-sb-overlay {
    position: fixed;
    inset: 0;
    z-index: 99989;
    display: none;
  }

  #oc-sb.open #oc-sb-overlay {
    display: block;
  }

  /* ── Toast ── */
  #oc-sb-toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: #0d47a1;
    color: #fff;
    padding: 9px 20px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 700;
    font-family: 'Segoe UI', system-ui, sans-serif;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s, transform .3s;
    z-index: 99999;
    white-space: nowrap;
  }

  #oc-sb-toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* ── QR Modal ── */
  #oc-sb-qr {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99999;
    display: none;
    align-items: center;
    justify-content: center;
  }

  #oc-sb-qr.show {
    display: flex;
  }

  #oc-sb-qr-box {
    background: #fff;
    border-radius: 20px;
    padding: 28px;
    text-align: center;
    max-width: 240px;
    width: 90%;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  #oc-sb-qr-box h4 {
    font-size: 16px;
    font-weight: 800;
    color: #0d47a1;
    margin-bottom: 4px;
  }

  #oc-sb-qr-box p {
    font-size: 12px;
    color: #556677;
    margin-bottom: 14px;
  }

  #oc-sb-qr-box img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: 1px solid #dde3ee;
  }

  #oc-sb-qr-cls {
    margin-top: 14px;
    padding: 8px 22px;
    background: #0d47a1;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
  }

  /* ── Responsive Mobile ── */
  @media (max-width: 600px) {
    #oc-sb {
      top: auto;
      bottom: 80px;
      transform: none;
    }

    #oc-sb-tab {
      min-height: 60px;
      width: 24px;
      border-radius: 0 10px 10px 0;
    }

    #oc-sb-tab svg {
      width: 15px;
      height: 15px;
    }

    #oc-sb-tab .tab-txt {
      font-size: 8px;
    }

    #oc-sb.open #oc-sb-drawer {
      width: 180px;
    }

    #oc-sb-inner {
      width: 180px;
      padding: 10px 8px;
    }

    .sb-btn .sb-main {
      font-size: 11px;
    }

    .sb-btn .sb-sub {
      font-size: 9px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #oc-sb-drawer,
    #oc-sb-toast {
      transition: none !important;
    }
  }
  `;

  /* ── Inject CSS ── */
  var style = D.createElement('style');
  style.textContent = css;
  D.head.appendChild(style);

  /* ── HTML ── */
  var wrap = D.createElement('div');
  wrap.id = 'oc-sb';
  wrap.innerHTML =
    '<div id="oc-sb-overlay"></div>' +
    '<button id="oc-sb-tab" aria-label="Open page tools">' +
      /* Oil drop SVG icon */
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M12 2C8.5 2 6 5 6 8c0 4 4 8 6 12 2-4 6-8 6-12 0-3-2.5-6-6-6z"/>' +
      '</svg>' +
      '<span class="tab-txt">Tools</span>' +
    '</button>' +
    '<div id="oc-sb-drawer" role="dialog" aria-label="Page tools">' +
      '<div id="oc-sb-inner">' +
        '<div class="sb-title">⚙ Page Tools</div>' +

        /* Progress */
        '<div class="sb-prog-wrap">' +
          '<div class="sb-prog-circle">' +
            '<svg viewBox="0 0 42 42">' +
              '<circle class="track" cx="21" cy="21" r="18"/>' +
              '<circle class="fill" id="oc-prog-fill" cx="21" cy="21" r="18"/>' +
            '</svg>' +
            '<div class="pct-txt" id="oc-prog-pct">0%</div>' +
          '</div>' +
          '<div class="sb-prog-lbl">' +
            '<span class="sb-main">Progress</span>' +
            '<span class="sb-sub">Reading progress</span>' +
          '</div>' +
        '</div>' +

        '<div class="sb-div"></div>' +

        /* Share */
        '<button class="sb-btn" id="oc-sb-share">' +
          '<span class="sb-ico">📤</span>' +
          '<span class="sb-lbl">' +
            '<span class="sb-main">Share</span>' +
            '<span class="sb-sub">All apps</span>' +
          '</span>' +
        '</button>' +

        /* Copy Link */
        '<button class="sb-btn" id="oc-sb-copy">' +
          '<span class="sb-ico">🔗</span>' +
          '<span class="sb-lbl">' +
            '<span class="sb-main">Copy Link</span>' +
            '<span class="sb-sub">Copy URL</span>' +
          '</span>' +
        '</button>' +

        /* QR */
        '<button class="sb-btn" id="oc-sb-qr-btn">' +
          '<span class="sb-ico">📱</span>' +
          '<span class="sb-lbl">' +
            '<span class="sb-main">QR Code</span>' +
            '<span class="sb-sub">Open on phone</span>' +
          '</span>' +
        '</button>' +

        '<div class="sb-div"></div>' +

        /* Save */
        '<button class="sb-btn" id="oc-sb-save">' +
          '<span class="sb-ico">💾</span>' +
          '<span class="sb-lbl">' +
            '<span class="sb-main">Save Page</span>' +
            '<span class="sb-sub">Add to favorites</span>' +
          '</span>' +
        '</button>' +

      '</div>' +
    '</div>' +

  /* Toast */
  '<div id="oc-sb-toast"></div>' +

  /* QR Modal */
  '<div id="oc-sb-qr" role="dialog" aria-modal="true">' +
    '<div id="oc-sb-qr-box">' +
      '<h4>📱 Scan to Share</h4>' +
      '<p>Open this page on your phone</p>' +
      '<img id="oc-sb-qr-img" src="" alt="QR Code" width="150" height="150" loading="lazy">' +
      '<br>' +
      '<button id="oc-sb-qr-cls">Close</button>' +
    '</div>' +
  '</div>';

  D.body.appendChild(wrap);

  /* ── Toggle ── */
  var panel = D.getElementById('oc-sb');
  var tab   = D.getElementById('oc-sb-tab');
  var overlay = D.getElementById('oc-sb-overlay');

  function openPanel()  { panel.classList.add('open'); }
  function closePanel() { panel.classList.remove('open'); }

  tab.addEventListener('click', function () {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  overlay.addEventListener('click', closePanel);

  D.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePanel();
      D.getElementById('oc-sb-qr').classList.remove('show');
    }
  });

  /* ── Toast ── */
  var toast = D.getElementById('oc-sb-toast');
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2500);
  }

  /* ── Get URL ── */
  function getURL() {
    try { return W.top.location.href; } catch (e) { return W.location.href; }
  }

  /* ── Share ── */
  D.getElementById('oc-sb-share').addEventListener('click', function () {
    var url = getURL();
    if (navigator.share) {
      navigator.share({ title: D.title, url: url }).catch(function () {});
    } else {
      navigator.clipboard && navigator.clipboard.writeText(url).then(function () {
        showToast('✅ Link copied!');
      });
    }
  });

  /* ── Copy Link — يبدل لون بعد الكليك ── */
  D.getElementById('oc-sb-copy').addEventListener('click', function () {
    var btn = this;
    navigator.clipboard && navigator.clipboard.writeText(getURL()).then(function () {
      btn.classList.add('copied');
      btn.querySelector('.sb-main').textContent = 'Copied!';
      showToast('✅ Link copied!');
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.querySelector('.sb-main').textContent = 'Copy Link';
      }, 2500);
    }).catch(function () {
      showToast('❌ Could not copy');
    });
  });

  /* ── QR ── */
  D.getElementById('oc-sb-qr-btn').addEventListener('click', function () {
    D.getElementById('oc-sb-qr-img').src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      encodeURIComponent(getURL());
    D.getElementById('oc-sb-qr').classList.add('show');
  });

  D.getElementById('oc-sb-qr-cls').addEventListener('click', function () {
    D.getElementById('oc-sb-qr').classList.remove('show');
  });

  D.getElementById('oc-sb-qr').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('show');
  });

  /* ── Save — force navigator ── */
  D.getElementById('oc-sb-save').addEventListener('click', function () {
    var ua = navigator.userAgent || '';
    if (/iphone|ipad|ipod/i.test(ua)) {
      showToast('📱 Tap Share → Add to Home Screen');
    } else if (/android/i.test(ua)) {
      showToast('📱 Tap ⋮ → Add to Home Screen');
    } else {
      try {
        W.external.AddFavorite(getURL(), D.title);
      } catch (e) {
        showToast('⌨ Press Ctrl+D to bookmark');
      }
    }
  });

  /* ── Progress Circle ── */
  var progFill = D.getElementById('oc-prog-fill');
  var progPct  = D.getElementById('oc-prog-pct');
  var CIRC = 2 * Math.PI * 18; /* r=18 → circumference ≈ 113.1 */

  function updateProgress() {
    var scrollTop = W.pageYOffset || D.documentElement.scrollTop;
    var docH = D.documentElement.scrollHeight - W.innerHeight;
    var pct = docH > 0 ? Math.min(Math.round(scrollTop / docH * 100), 100) : 0;
    var offset = CIRC - (pct / 100) * CIRC;
    progFill.style.strokeDashoffset = offset;
    progPct.textContent = pct + '%';
  }

  var ticking = false;
  W.addEventListener('scroll', function () {
    if (!ticking) {
      W.requestAnimationFrame(function () {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateProgress();

})();
