(function(){
  'use strict';

  /* ── Guard ── */
  if(document.getElementById('oc-sidebar')) return;

  /* ── CSS ── */
  var style = document.createElement('style');
  style.id = 'oc-sidebar-style';
  style.textContent = [

    /* ── Sidebar wrapper ── */
    '#oc-sidebar{',
      'position:fixed;',
      'right:0;',
      'top:50%;',
      'transform:translateY(-50%);',
      'z-index:99995;',
      'display:flex;',
      'flex-direction:column;',
      'align-items:center;',
      'gap:2px;',
      'background:#0d47a1;',
      'border-radius:14px 0 0 14px;',
      'box-shadow:-4px 0 24px rgba(13,71,161,0.25);',
      'padding:8px 0;',
      'overflow:visible;',
    '}',

    /* ── Each tool button ── */
    '#oc-sidebar .sb-btn{',
      'position:relative;',
      'width:46px;',
      'height:46px;',
      'display:flex;',
      'align-items:center;',
      'justify-content:center;',
      'background:transparent;',
      'border:none;',
      'cursor:pointer;',
      'color:#fff;',
      'font-size:19px;',
      'transition:background .2s,transform .15s;',
      '-webkit-tap-highlight-color:transparent;',
      'touch-action:manipulation;',
      'border-radius:10px;',
      'margin:2px 4px;',
    '}',
    '#oc-sidebar .sb-btn:hover{',
      'background:rgba(255,255,255,0.15);',
      'transform:scale(1.1);',
    '}',
    '#oc-sidebar .sb-btn:active{transform:scale(.92);}',

    /* Active state */
    '#oc-sidebar .sb-btn.active{',
      'background:rgba(255,255,255,0.2);',
    '}',

    /* ── Divider ── */
    '#oc-sidebar .sb-div{',
      'width:28px;',
      'height:1px;',
      'background:rgba(255,255,255,0.2);',
      'margin:4px auto;',
    '}',

    /* ── Tooltip ── */
    '#oc-sidebar .sb-btn::after{',
      'content:attr(data-tip);',
      'position:absolute;',
      'right:54px;',
      'top:50%;',
      'transform:translateY(-50%);',
      'background:#1a1a2e;',
      'color:#fff;',
      'font-size:12px;',
      'font-weight:700;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'padding:5px 12px;',
      'border-radius:8px;',
      'white-space:nowrap;',
      'opacity:0;',
      'pointer-events:none;',
      'transition:opacity .2s;',
      'box-shadow:0 4px 12px rgba(0,0,0,0.2);',
    '}',
    '#oc-sidebar .sb-btn:hover::after{opacity:1;}',

    /* ── Font size indicator ── */
    '#sb-font-size-indicator{',
      'font-size:9px;',
      'font-weight:800;',
      'color:rgba(255,255,255,0.6);',
      'font-family:system-ui,-apple-system,sans-serif;',
      'text-align:center;',
      'line-height:1;',
      'margin-top:-4px;',
      'margin-bottom:2px;',
    '}',

    /* ── Progress ring ── */
    '#oc-sidebar .sb-progress{',
      'position:relative;',
      'width:46px;',
      'height:46px;',
      'display:flex;',
      'align-items:center;',
      'justify-content:center;',
      'margin:2px 4px;',
      'cursor:default;',
    '}',
    '#oc-sidebar .sb-progress svg{',
      'position:absolute;',
      'top:0;left:0;',
      'transform:rotate(-90deg);',
      'width:46px;height:46px;',
    '}',
    '#oc-sidebar .sb-progress-circle{',
      'fill:none;',
      'stroke:rgba(255,255,255,0.15);',
      'stroke-width:3;',
    '}',
    '#oc-sidebar .sb-progress-fill{',
      'fill:none;',
      'stroke:#d50000;',
      'stroke-width:3;',
      'stroke-linecap:round;',
      'stroke-dasharray:120;',
      'stroke-dashoffset:120;',
      'transition:stroke-dashoffset .1s linear;',
    '}',
    '#oc-sidebar .sb-progress-text{',
      'font-size:9px;',
      'font-weight:800;',
      'color:#fff;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'z-index:1;',
    '}',

    /* ── QR Popup ── */
    '#oc-sb-qr-popup{',
      'display:none;',
      'position:fixed;',
      'inset:0;',
      'background:rgba(0,0,0,.55);',
      'z-index:99999;',
      'align-items:center;',
      'justify-content:center;',
    '}',
    '#oc-sb-qr-popup.show{display:flex;}',
    '#oc-sb-qr-box{',
      'background:#fff;',
      'border-radius:20px;',
      'padding:32px;',
      'text-align:center;',
      'max-width:260px;',
      'width:90%;',
      'box-shadow:0 20px 60px rgba(0,0,0,.25);',
      'font-family:system-ui,-apple-system,sans-serif;',
    '}',
    '#oc-sb-qr-box h4{',
      'font-size:16px;font-weight:800;',
      'color:#0d47a1;margin:0 0 6px;',
    '}',
    '#oc-sb-qr-box p{',
      'font-size:12px;color:#556677;',
      'margin:0 0 16px;',
    '}',
    '#oc-sb-qr-box img{',
      'width:150px;height:150px;',
      'border-radius:10px;',
      'border:1px solid #dde3ee;',
    '}',
    '#oc-sb-qr-close{',
      'margin-top:16px;',
      'padding:8px 24px;',
      'background:#0d47a1;color:#fff;',
      'border:none;border-radius:8px;',
      'font-size:13px;font-weight:700;',
      'cursor:pointer;font-family:inherit;',
      'transition:background .2s;',
    '}',
    '#oc-sb-qr-close:hover{background:#1565c0;}',

    /* ── Toast ── */
    '#oc-sb-toast{',
      'position:fixed;',
      'bottom:30px;left:50%;',
      'transform:translateX(-50%) translateY(20px);',
      'background:#0d47a1;color:#fff;',
      'padding:10px 24px;border-radius:30px;',
      'font-size:13px;font-weight:700;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'opacity:0;pointer-events:none;',
      'transition:opacity .3s,transform .3s;',
      'z-index:99998;white-space:nowrap;',
    '}',
    '#oc-sb-toast.show{',
      'opacity:1;',
      'transform:translateX(-50%) translateY(0);',
    '}',

    /* ── Mobile — bottom bar ── */
    '@media(max-width:768px){',
      '#oc-sidebar{',
        'top:auto;bottom:0;',
        'right:0;left:0;',
        'transform:none;',
        'flex-direction:row;',
        'justify-content:center;',
        'border-radius:14px 14px 0 0;',
        'box-shadow:0 -4px 24px rgba(13,71,161,0.25);',
        'padding:0 8px;',
        'width:100%;',
      '}',
      '#oc-sidebar .sb-btn{',
        'width:48px;height:48px;',
        'font-size:20px;',
        'margin:4px 2px;',
      '}',
      '#oc-sidebar .sb-div{',
        'width:1px;height:28px;',
        'margin:0 4px;',
      '}',
      '#oc-sidebar .sb-progress{',
        'width:48px;height:48px;',
        'margin:4px 2px;',
      '}',
      '#oc-sidebar .sb-btn::after{',
        'right:auto;',
        'bottom:54px;',
        'top:auto;',
        'transform:translateX(-50%);',
        'left:50%;',
      '}',
      '#sb-font-size-indicator{display:none;}',
    '}'

  ].join('');
  document.head.appendChild(style);

  /* ── Toast ── */
  var toast = document.createElement('div');
  toast.id = 'oc-sb-toast';
  document.body.appendChild(toast);

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function(){ toast.classList.remove('show'); }, 2500);
  }

  /* ── QR Popup ── */
  var qrPopup = document.createElement('div');
  qrPopup.id = 'oc-sb-qr-popup';
  qrPopup.setAttribute('role','dialog');
  qrPopup.setAttribute('aria-modal','true');
  qrPopup.innerHTML = [
    '<div id="oc-sb-qr-box">',
      '<h4>📱 Scan to Share</h4>',
      '<p>Open this page on your phone</p>',
      '<img id="oc-sb-qr-img" src="" alt="QR Code" width="150" height="150" loading="lazy">',
      '<br>',
      '<button id="oc-sb-qr-close" aria-label="Close">Close</button>',
    '</div>'
  ].join('');
  document.body.appendChild(qrPopup);

  document.getElementById('oc-sb-qr-close').addEventListener('click',function(){
    qrPopup.classList.remove('show');
  });
  qrPopup.addEventListener('click',function(e){
    if(e.target === qrPopup) qrPopup.classList.remove('show');
  });
  document.addEventListener('keydown',function(e){
    if(e.key === 'Escape') qrPopup.classList.remove('show');
  });

  /* ── Build Sidebar ── */
  var sidebar = document.createElement('div');
  sidebar.id = 'oc-sidebar';
  sidebar.setAttribute('role','toolbar');
  sidebar.setAttribute('aria-label','Page tools');

  /* Helper — create button */
  function mkBtn(id, emoji, tip){
    var btn = document.createElement('button');
    btn.className = 'sb-btn';
    btn.id = id;
    btn.setAttribute('data-tip', tip);
    btn.setAttribute('aria-label', tip);
    btn.textContent = emoji;
    return btn;
  }

  /* Helper — create divider */
  function mkDiv(){
    var d = document.createElement('div');
    d.className = 'sb-div';
    d.setAttribute('aria-hidden','true');
    return d;
  }

  /* ── Reading Progress Ring ── */
  var progressWrap = document.createElement('div');
  progressWrap.className = 'sb-progress';
  progressWrap.setAttribute('aria-label','Reading progress');
  progressWrap.setAttribute('role','progressbar');
  progressWrap.setAttribute('aria-valuemin','0');
  progressWrap.setAttribute('aria-valuemax','100');
  progressWrap.setAttribute('aria-valuenow','0');
  var R = 18;
  var CIRC = 2 * Math.PI * R;
  progressWrap.innerHTML = [
    '<svg viewBox="0 0 46 46" aria-hidden="true">',
      '<circle class="sb-progress-circle" cx="23" cy="23" r="'+R+'"/>',
      '<circle class="sb-progress-fill" id="sb-prog-fill"',
        ' cx="23" cy="23" r="'+R+'"',
        ' stroke-dasharray="'+CIRC.toFixed(1)+'"',
        ' stroke-dashoffset="'+CIRC.toFixed(1)+'"/>',
    '</svg>',
    '<span class="sb-progress-text" id="sb-prog-text">0%</span>'
  ].join('');

  /* Font size indicator */
  var fontIndicator = document.createElement('div');
  fontIndicator.id = 'sb-font-size-indicator';
  fontIndicator.textContent = '16px';

  /* Buttons */
  var btnDark   = mkBtn('sb-dark',   '🌙', 'Dark Mode');
  var btnFontUp = mkBtn('sb-font-up','A+', 'Larger Text');
  var btnFontDn = mkBtn('sb-font-dn','A-', 'Smaller Text');
  var btnTop    = mkBtn('sb-top',    '⬆️', 'Back to Top');
  var btnShare  = mkBtn('sb-share',  '📤', 'Share Page');
  var btnCopy   = mkBtn('sb-copy',   '🔗', 'Copy Link');
  var btnQR     = mkBtn('sb-qr',     '📱', 'QR Code');
  var btnPrint  = mkBtn('sb-print',  '🖨️', 'Print Page');

  /* Assemble */
  sidebar.appendChild(progressWrap);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnDark);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnFontUp);
  sidebar.appendChild(fontIndicator);
  sidebar.appendChild(btnFontDn);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnTop);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnShare);
  sidebar.appendChild(btnCopy);
  sidebar.appendChild(btnQR);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnPrint);

  document.body.appendChild(sidebar);

  /* ── Reading Progress ── */
  var progFill = document.getElementById('sb-prog-fill');
  var progText = document.getElementById('sb-prog-text');
  var lastScroll = 0;
  var ticking = false;

  function updateProgress(){
    var scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    var pct        = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    pct = Math.min(100, Math.max(0, pct));

    var offset = CIRC - (CIRC * pct / 100);
    progFill.style.strokeDashoffset = offset.toFixed(1);
    progText.textContent = pct + '%';
    progressWrap.setAttribute('aria-valuenow', pct);
  }

  window.addEventListener('scroll', function(){
    var now = Date.now();
    if(now - lastScroll < 16) return;
    lastScroll = now;
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      ticking = false;
      updateProgress();
    });
  }, { passive: true });

  updateProgress();

  /* ── Dark Mode ── */
  var isDark = false;

  function applyDark(dark){
    isDark = dark;
    if(dark){
      document.body.classList.add('oc-dark');
      btnDark.textContent = '☀️';
      btnDark.setAttribute('data-tip','Light Mode');
      btnDark.setAttribute('aria-label','Light Mode');
    } else {
      document.body.classList.remove('oc-dark');
      btnDark.textContent = '🌙';
      btnDark.setAttribute('data-tip','Dark Mode');
      btnDark.setAttribute('aria-label','Dark Mode');
    }
    try { localStorage.setItem('oc-dark', dark ? '1' : '0'); } catch(e){}
  }

  /* Restore dark mode */
  (function(){
    var saved = null;
    try { saved = localStorage.getItem('oc-dark'); } catch(e){}
    if(saved === '1') applyDark(true);
    else if(saved === null && window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches){
      applyDark(true);
    }
  })();

  btnDark.addEventListener('click', function(){
    applyDark(!isDark);
  });

  /* ── Font Size ── */
  var MIN_FONT = 14, MAX_FONT = 22, STEP_FONT = 2;
  var FONT_KEY = 'oc-font-size';
  var currentFont = 16;
  var FONT_SELECTORS = [
    '.zyro-text','article','.blog-post__content',
    '[class*="blog-post"]','[class*="vc-art"]',
    '.grid-text-box','main'
  ];

  function getFontTargets(){
    for(var i = 0; i < FONT_SELECTORS.length; i++){
      var els = document.querySelectorAll(FONT_SELECTORS[i]);
      if(els.length) return Array.prototype.slice.call(els);
    }
    return [];
  }

  function applyFont(size){
    currentFont = Math.min(MAX_FONT, Math.max(MIN_FONT, size));
    getFontTargets().forEach(function(el){
      el.style.fontSize = currentFont + 'px';
    });
    fontIndicator.textContent = currentFont + 'px';
    btnFontUp.style.opacity = currentFont >= MAX_FONT ? '0.4' : '1';
    btnFontDn.style.opacity = currentFont <= MIN_FONT ? '0.4' : '1';
    try { localStorage.setItem(FONT_KEY, currentFont); } catch(e){}
  }

  /* Restore font size */
  (function(){
    var saved = null;
    try { saved = localStorage.getItem(FONT_KEY); } catch(e){}
    var size = saved ? parseInt(saved,10) : 16;
    if(isNaN(size) || size < MIN_FONT || size > MAX_FONT) size = 16;
    applyFont(size);
  })();

  btnFontUp.addEventListener('click', function(){ applyFont(currentFont + STEP_FONT); });
  btnFontDn.addEventListener('click', function(){ applyFont(currentFont - STEP_FONT); });

  /* ── Back to Top ── */
  btnTop.addEventListener('click', function(){
    try { window.top.scrollTo({ top:0, behavior:'smooth' }); }
    catch(e){ window.scrollTo({ top:0, behavior:'smooth' }); }
  });

  /* ── Get URL ── */
  function getURL(){
    try { return window.top.location.href; } catch(e){ return window.location.href; }
  }

  /* ── Share ── */
  btnShare.addEventListener('click', function(){
    var url = getURL();
    if(navigator.share){
      navigator.share({
        title: document.title,
        text: 'Check this oil guide on OilChoices',
        url: url
      }).catch(function(){});
    } else {
      if(navigator.clipboard){
        navigator.clipboard.writeText(url).then(function(){
          showToast('✅ Link copied!');
        }).catch(function(){
          showToast('❌ Could not copy');
        });
      }
    }
  });

  /* ── Copy Link ── */
  btnCopy.addEventListener('click', function(){
    var url = getURL();
    if(navigator.clipboard){
      navigator.clipboard.writeText(url).then(function(){
        showToast('✅ Link copied to clipboard!');
      }).catch(function(){
        showToast('❌ Could not copy link');
      });
    } else {
      showToast('❌ Not supported on this browser');
    }
  });

  /* ── QR Code ── */
  btnQR.addEventListener('click', function(){
    var url = getURL();
    var qrImg = document.getElementById('oc-sb-qr-img');
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
              + encodeURIComponent(url);
    qrPopup.classList.add('show');
  });

  /* ── Print ── */
  btnPrint.addEventListener('click', function(){
    try { window.top.print(); } catch(e){ window.print(); }
  });

})();
