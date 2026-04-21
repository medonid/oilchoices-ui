(function(){
  'use strict';

  if(document.getElementById('oc-sidebar')) return;

  var style = document.createElement('style');
  style.id = 'oc-sidebar-style';
  style.textContent = [

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
      'background:rgba(13,71,161,0.75);',
      'backdrop-filter:blur(10px);',
      '-webkit-backdrop-filter:blur(10px);',
      'border-radius:14px 0 0 14px;',
      'box-shadow:-4px 0 24px rgba(13,71,161,0.2);',
      'padding:8px 0;',
    '}',

    '#oc-sidebar .sb-btn{',
      'position:relative;',
      'width:46px;height:46px;',
      'display:flex;align-items:center;justify-content:center;',
      'background:transparent;border:none;',
      'cursor:pointer;color:#fff;',
      'font-size:19px;',
      'transition:background .2s,transform .15s;',
      '-webkit-tap-highlight-color:transparent;',
      'touch-action:manipulation;',
      'border-radius:10px;',
      'margin:2px 4px;',
    '}',
    '#oc-sidebar .sb-btn:hover{',
      'background:rgba(255,255,255,0.2);',
      'transform:scale(1.1);',
    '}',
    '#oc-sidebar .sb-btn:active{transform:scale(.92);}',

    '#oc-sidebar .sb-div{',
      'width:28px;height:1px;',
      'background:rgba(255,255,255,0.2);',
      'margin:4px auto;',
    '}',

    /* Tooltip */
    '#oc-sidebar .sb-btn::after{',
      'content:attr(data-tip);',
      'position:absolute;',
      'right:54px;top:50%;',
      'transform:translateY(-50%);',
      'background:rgba(13,71,161,0.95);',
      'color:#fff;font-size:12px;font-weight:700;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'padding:5px 12px;border-radius:8px;',
      'white-space:nowrap;opacity:0;pointer-events:none;',
      'transition:opacity .2s;',
      'box-shadow:0 4px 12px rgba(0,0,0,0.2);',
    '}',
    '#oc-sidebar .sb-btn:hover::after{opacity:1;}',

    /* Progress ring */
    '#oc-sidebar .sb-progress{',
      'position:relative;width:46px;height:46px;',
      'display:flex;align-items:center;justify-content:center;',
      'margin:2px 4px;',
    '}',
    '#oc-sidebar .sb-progress svg{',
      'position:absolute;top:0;left:0;',
      'transform:rotate(-90deg);width:46px;height:46px;',
    '}',
    '#oc-sidebar .sb-progress-circle{',
      'fill:none;stroke:rgba(255,255,255,0.15);stroke-width:3;',
    '}',
    '#oc-sidebar .sb-progress-fill{',
      'fill:none;stroke:#d50000;stroke-width:3;',
      'stroke-linecap:round;',
      'stroke-dasharray:113;stroke-dashoffset:113;',
      'transition:stroke-dashoffset .1s linear;',
    '}',
    '#oc-sidebar .sb-progress-text{',
      'font-size:9px;font-weight:800;color:#fff;',
      'font-family:system-ui,-apple-system,sans-serif;z-index:1;',
    '}',

    /* Save popup */
    '#oc-save-popup{',
      'display:none;position:fixed;inset:0;',
      'background:rgba(0,0,0,.55);z-index:99999;',
      'align-items:center;justify-content:center;',
    '}',
    '#oc-save-popup.show{display:flex;}',
    '#oc-save-box{',
      'background:#fff;border-radius:20px;padding:28px 24px;',
      'max-width:320px;width:90%;',
      'box-shadow:0 20px 60px rgba(0,0,0,.25);',
      'font-family:system-ui,-apple-system,sans-serif;',
    '}',
    '#oc-save-box h4{',
      'font-size:17px;font-weight:800;color:#0d47a1;',
      'margin:0 0 6px;',
    '}',
    '#oc-save-box .sv-sub{',
      'font-size:13px;color:#556677;margin:0 0 20px;',
    '}',
    '#oc-save-box .sv-step{',
      'display:flex;align-items:flex-start;gap:12px;',
      'padding:12px 0;border-bottom:1px solid #dde3ee;',
    '}',
    '#oc-save-box .sv-step:last-of-type{border-bottom:none;}',
    '#oc-save-box .sv-num{',
      'width:26px;height:26px;',
      'background:#0d47a1;color:#fff;',
      'border-radius:50%;font-size:13px;font-weight:800;',
      'display:flex;align-items:center;justify-content:center;',
      'flex-shrink:0;',
    '}',
    '#oc-save-box .sv-txt{font-size:13px;color:#1a1a2e;line-height:1.5;}',
    '#oc-save-box .sv-txt strong{color:#0d47a1;}',
    '#oc-save-box .sv-os{',
      'display:flex;gap:8px;margin-top:16px;',
    '}',
    '#oc-save-box .sv-os-btn{',
      'flex:1;padding:10px;',
      'border-radius:10px;border:1.5px solid #dde3ee;',
      'background:#f4f7fc;font-size:12px;font-weight:700;',
      'color:#0d47a1;cursor:pointer;font-family:inherit;',
      'transition:background .2s;text-align:center;',
    '}',
    '#oc-save-box .sv-os-btn.active{',
      'background:#0d47a1;color:#fff;border-color:#0d47a1;',
    '}',
    '#oc-save-box .sv-os-btn:hover{',
      'background:#0d47a1;color:#fff;border-color:#0d47a1;',
    '}',
    '#oc-save-steps{margin:12px 0;}',
    '#oc-save-close{',
      'width:100%;margin-top:16px;padding:12px;',
      'background:#0d47a1;color:#fff;border:none;',
      'border-radius:10px;font-size:14px;font-weight:700;',
      'cursor:pointer;font-family:inherit;transition:background .2s;',
    '}',
    '#oc-save-close:hover{background:#1565c0;}',

    /* QR Popup */
    '#oc-sb-qr-popup{',
      'display:none;position:fixed;inset:0;',
      'background:rgba(0,0,0,.55);z-index:99999;',
      'align-items:center;justify-content:center;',
    '}',
    '#oc-sb-qr-popup.show{display:flex;}',
    '#oc-sb-qr-box{',
      'background:#fff;border-radius:20px;padding:32px;',
      'text-align:center;max-width:260px;width:90%;',
      'box-shadow:0 20px 60px rgba(0,0,0,.25);',
      'font-family:system-ui,-apple-system,sans-serif;',
    '}',
    '#oc-sb-qr-box h4{font-size:16px;font-weight:800;color:#0d47a1;margin:0 0 6px;}',
    '#oc-sb-qr-box p{font-size:12px;color:#556677;margin:0 0 16px;}',
    '#oc-sb-qr-box img{width:150px;height:150px;border-radius:10px;border:1px solid #dde3ee;}',
    '#oc-sb-qr-close,#oc-save-close{',
      'margin-top:16px;padding:8px 24px;',
      'background:#0d47a1;color:#fff;border:none;',
      'border-radius:8px;font-size:13px;font-weight:700;',
      'cursor:pointer;font-family:inherit;transition:background .2s;',
    '}',
    '#oc-sb-qr-close:hover{background:#1565c0;}',

    /* Toast */
    '#oc-sb-toast{',
      'position:fixed;bottom:30px;left:50%;',
      'transform:translateX(-50%) translateY(20px);',
      'background:#0d47a1;color:#fff;',
      'padding:10px 24px;border-radius:30px;',
      'font-size:13px;font-weight:700;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'opacity:0;pointer-events:none;',
      'transition:opacity .3s,transform .3s;',
      'z-index:99998;white-space:nowrap;',
    '}',
    '#oc-sb-toast.show{opacity:1;transform:translateX(-50%) translateY(0);}',

    /* Mobile — bottom center */
    '@media(max-width:768px){',
      '#oc-sidebar{',
        'top:auto;bottom:16px;right:auto;',
        'left:50%;transform:translateX(-50%);',
        'flex-direction:row;',
        'border-radius:30px;',
        'padding:4px 8px;',
        'box-shadow:0 4px 24px rgba(13,71,161,0.3);',
      '}',
      '#oc-sidebar .sb-btn{width:44px;height:44px;font-size:18px;margin:2px;}',
      '#oc-sidebar .sb-div{width:1px;height:24px;margin:0 4px;}',
      '#oc-sidebar .sb-progress{width:44px;height:44px;margin:2px;}',
      '#oc-sidebar .sb-btn::after{',
        'right:auto;bottom:54px;top:auto;',
        'left:50%;transform:translateX(-50%);',
      '}',
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

  /* ── Save Popup ── */
  var savePopup = document.createElement('div');
  savePopup.id = 'oc-save-popup';
  savePopup.setAttribute('role','dialog');
  savePopup.setAttribute('aria-modal','true');

  var stepsIOS = [
    '<div class="sv-step"><div class="sv-num">1</div><div class="sv-txt">Tap the <strong>Share</strong> button at the bottom of Safari (□↑)</div></div>',
    '<div class="sv-step"><div class="sv-num">2</div><div class="sv-txt">Scroll down and tap <strong>Add to Home Screen</strong></div></div>',
    '<div class="sv-step"><div class="sv-num">3</div><div class="sv-txt">Tap <strong>Add</strong> — the page saves to your home screen!</div></div>'
  ].join('');

  var stepsAndroid = [
    '<div class="sv-step"><div class="sv-num">1</div><div class="sv-txt">Tap the <strong>⋮ menu</strong> in Chrome (top right)</div></div>',
    '<div class="sv-step"><div class="sv-num">2</div><div class="sv-txt">Tap <strong>Add to Home screen</strong></div></div>',
    '<div class="sv-step"><div class="sv-num">3</div><div class="sv-txt">Tap <strong>Add</strong> — done! Opens like an app.</div></div>'
  ].join('');

  var stepsDesktop = [
    '<div class="sv-step"><div class="sv-num">1</div><div class="sv-txt">Press <strong>Ctrl+D</strong> (Windows) or <strong>⌘+D</strong> (Mac) to bookmark</div></div>',
    '<div class="sv-step"><div class="sv-num">2</div><div class="sv-txt">Or click the <strong>★ star icon</strong> in your browser address bar</div></div>',
    '<div class="sv-step"><div class="sv-num">3</div><div class="sv-txt">Choose your bookmarks folder and click <strong>Save</strong></div></div>'
  ].join('');

  savePopup.innerHTML = [
    '<div id="oc-save-box">',
      '<h4>💾 Save This Page</h4>',
      '<p class="sv-sub">Choose your device to see how to save:</p>',
      '<div class="sv-os">',
        '<button class="sv-os-btn active" id="sv-ios">🍎 iPhone</button>',
        '<button class="sv-os-btn" id="sv-android">🤖 Android</button>',
        '<button class="sv-os-btn" id="sv-desktop">💻 Desktop</button>',
      '</div>',
      '<div id="oc-save-steps">'+stepsIOS+'</div>',
      '<button id="oc-save-close" aria-label="Close">Got it ✓</button>',
    '</div>'
  ].join('');
  document.body.appendChild(savePopup);

  /* Save popup events */
  document.getElementById('oc-save-close').addEventListener('click',function(){
    savePopup.classList.remove('show');
  });
  savePopup.addEventListener('click',function(e){
    if(e.target === savePopup) savePopup.classList.remove('show');
  });
  document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
      qrPopup.classList.remove('show');
      savePopup.classList.remove('show');
    }
  });

  /* OS tabs */
  var stepsEl = document.getElementById('oc-save-steps');
  var osBtns = document.querySelectorAll('.sv-os-btn');

  function setOS(steps, activeBtn){
    stepsEl.innerHTML = steps;
    osBtns.forEach(function(b){ b.classList.remove('active'); });
    activeBtn.classList.add('active');
  }

  document.getElementById('sv-ios').addEventListener('click',function(){
    setOS(stepsIOS, this);
  });
  document.getElementById('sv-android').addEventListener('click',function(){
    setOS(stepsAndroid, this);
  });
  document.getElementById('sv-desktop').addEventListener('click',function(){
    setOS(stepsDesktop, this);
  });

  /* Auto-detect device */
  (function(){
    var ua = navigator.userAgent || '';
    var btn;
    if(/android/i.test(ua)){
      btn = document.getElementById('sv-android');
      setOS(stepsAndroid, btn);
    } else if(/iphone|ipad|ipod/i.test(ua)){
      btn = document.getElementById('sv-ios');
      setOS(stepsIOS, btn);
    } else {
      btn = document.getElementById('sv-desktop');
      setOS(stepsDesktop, btn);
    }
  })();

  /* ── Build Sidebar ── */
  var sidebar = document.createElement('div');
  sidebar.id = 'oc-sidebar';
  sidebar.setAttribute('role','toolbar');
  sidebar.setAttribute('aria-label','Page tools');

  function mkBtn(id, emoji, tip){
    var btn = document.createElement('button');
    btn.className = 'sb-btn';
    btn.id = id;
    btn.setAttribute('data-tip', tip);
    btn.setAttribute('aria-label', tip);
    btn.textContent = emoji;
    return btn;
  }

  function mkDiv(){
    var d = document.createElement('div');
    d.className = 'sb-div';
    d.setAttribute('aria-hidden','true');
    return d;
  }

  /* Progress Ring */
  var progressWrap = document.createElement('div');
  progressWrap.className = 'sb-progress';
  progressWrap.setAttribute('aria-label','Reading progress');
  progressWrap.setAttribute('role','progressbar');
  progressWrap.setAttribute('aria-valuemin','0');
  progressWrap.setAttribute('aria-valuemax','100');
  progressWrap.setAttribute('aria-valuenow','0');
  var CIRC = 2 * Math.PI * 18;
  progressWrap.innerHTML = [
    '<svg viewBox="0 0 46 46" aria-hidden="true">',
      '<circle class="sb-progress-circle" cx="23" cy="23" r="18"/>',
      '<circle class="sb-progress-fill" id="sb-prog-fill"',
        ' cx="23" cy="23" r="18"',
        ' stroke-dasharray="'+CIRC.toFixed(1)+'"',
        ' stroke-dashoffset="'+CIRC.toFixed(1)+'"/>',
    '</svg>',
    '<span class="sb-progress-text" id="sb-prog-text">0%</span>'
  ].join('');

  var btnShare  = mkBtn('sb-share',  '📤', 'Share Page');
  var btnCopy   = mkBtn('sb-copy',   '🔗', 'Copy Link');
  var btnQR     = mkBtn('sb-qr',     '📱', 'QR Code');
  var btnSave   = mkBtn('sb-save',   '💾', 'Save Page');

  /* Assemble */
  sidebar.appendChild(progressWrap);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnShare);
  sidebar.appendChild(btnCopy);
  sidebar.appendChild(btnQR);
  sidebar.appendChild(mkDiv());
  sidebar.appendChild(btnSave);

  document.body.appendChild(sidebar);

  /* ── Reading Progress ── */
  var progFill = document.getElementById('sb-prog-fill');
  var progText = document.getElementById('sb-prog-text');
  var lastScroll = 0;
  var ticking = false;

  function updateProgress(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    pct = Math.min(100, Math.max(0, pct));
    progFill.style.strokeDashoffset = (CIRC - (CIRC * pct / 100)).toFixed(1);
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
    document.getElementById('oc-sb-qr-img').src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      encodeURIComponent(url);
    qrPopup.classList.add('show');
  });

  /* ── Save ── */
  btnSave.addEventListener('click', function(){
    savePopup.classList.add('show');
  });

})();
