
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--color-background-primary);font-family:var(--font-sans)}
.demo-page{padding:20px;color:var(--color-text-primary)}
.demo-page h2{font-size:18px;font-weight:500;margin-bottom:8px}
.demo-page p{font-size:14px;color:var(--color-text-secondary);line-height:1.6}

#oc-trigger{
  position:fixed;right:0;top:50%;transform:translateY(-50%);
  width:36px;height:80px;
  background:#0d47a1;color:#fff;border:none;
  border-radius:10px 0 0 10px;
  cursor:pointer;display:flex;align-items:center;justify-content:center;
  font-size:16px;z-index:9998;
  box-shadow:-3px 0 16px rgba(13,71,161,0.3);
  transition:width .2s,background .2s;
  writing-mode:vertical-rl;font-size:11px;font-weight:700;
  letter-spacing:1px;gap:4px;
  flex-direction:column;
}
#oc-trigger:hover{background:#1565c0;width:40px}
#oc-trigger svg{width:16px;height:16px;fill:currentColor;writing-mode:horizontal-tb}

#oc-drawer{
  position:fixed;right:-280px;top:0;bottom:0;
  width:280px;
  background:#0d47a1;
  z-index:9999;
  display:flex;flex-direction:column;
  transition:right .3s cubic-bezier(.4,0,.2,1);
  box-shadow:-8px 0 32px rgba(0,0,0,.25);
  border-radius:16px 0 0 16px;
  overflow:hidden;
}
#oc-drawer.open{right:0}

#oc-drawer-header{
  padding:20px 16px 14px;
  border-bottom:1px solid rgba(255,255,255,.15);
  display:flex;align-items:center;justify-content:space-between;
}
#oc-drawer-header span{color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px}
#oc-close{
  width:32px;height:32px;background:rgba(255,255,255,.15);
  border:none;border-radius:8px;color:#fff;font-size:18px;
  cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:background .2s;
}
#oc-close:hover{background:rgba(255,255,255,.28)}

#oc-drawer-body{flex:1;overflow-y:auto;padding:10px 8px;display:flex;flex-direction:column;gap:4px}

.drawer-btn{
  width:100%;padding:12px 14px;
  background:transparent;border:none;
  color:#fff;
  display:flex;align-items:center;gap:12px;
  border-radius:10px;cursor:pointer;
  transition:background .18s;font-size:13px;font-weight:500;
  text-align:left;
}
.drawer-btn:hover{background:rgba(255,255,255,.18)}
.drawer-btn:active{background:rgba(255,255,255,.28)}
.drawer-btn .ico{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.drawer-btn .lbl{display:flex;flex-direction:column;gap:1px}
.drawer-btn .lbl-main{font-size:13px;font-weight:700;color:#fff}
.drawer-btn .lbl-sub{font-size:11px;color:rgba(255,255,255,.65);font-weight:400}

.drawer-divider{height:1px;background:rgba(255,255,255,.12);margin:4px 8px}

#oc-progress-section{padding:10px 14px 14px}
.prog-label{font-size:11px;color:rgba(255,255,255,.65);font-weight:700;letter-spacing:.5px;margin-bottom:8px}
.prog-track{height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden}
.prog-fill{height:100%;width:0%;background:linear-gradient(90deg,#fff,#90caf9);border-radius:3px;transition:width .2s}
.prog-pct{font-size:20px;font-weight:700;color:#fff;margin-top:6px}

#oc-overlay{
  position:fixed;inset:0;background:rgba(0,0,0,.4);
  z-index:9997;opacity:0;pointer-events:none;transition:opacity .3s;
}
#oc-overlay.show{opacity:1;pointer-events:all}

#oc-toast{
  position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(10px);
  background:#0d47a1;color:#fff;padding:9px 20px;
  border-radius:24px;font-size:12px;font-weight:700;font-family:var(--font-sans);
  opacity:0;pointer-events:none;transition:opacity .3s,transform .3s;z-index:99999;
  white-space:nowrap;
}
#oc-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}

#oc-qr-modal{
  position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99999;
  display:none;align-items:center;justify-content:center;
}
#oc-qr-modal.show{display:flex}
#oc-qr-box{
  background:#fff;border-radius:20px;padding:28px;text-align:center;max-width:240px;width:90%;
  font-family:var(--font-sans);
}
#oc-qr-box h4{font-size:16px;font-weight:700;color:#0d47a1;margin-bottom:4px}
#oc-qr-box p{font-size:12px;color:#556677;margin-bottom:14px}
#oc-qr-box img{width:150px;height:150px;border-radius:10px;border:1px solid #dde3ee}
#oc-qr-cls{margin-top:14px;padding:8px 22px;background:#0d47a1;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer}

#oc-save-modal{
  position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99999;
  display:none;align-items:center;justify-content:center;
}
#oc-save-modal.show{display:flex}
#oc-save-box{background:#fff;border-radius:20px;padding:26px 22px;max-width:310px;width:92%;font-family:var(--font-sans)}
#oc-save-box h4{font-size:16px;font-weight:800;color:#0d47a1;margin-bottom:4px}
.sv-sub{font-size:12px;color:#556677;margin-bottom:14px}
.sv-tabs{display:flex;gap:6px;margin-bottom:14px}
.sv-tab{flex:1;padding:7px 4px;border-radius:8px;border:1.5px solid #dde3ee;background:#f4f7fc;font-size:11px;font-weight:700;color:#0d47a1;cursor:pointer;transition:all .2s;text-align:center}
.sv-tab.active{background:#0d47a1;color:#fff;border-color:#0d47a1}
.sv-step{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid #eef0f4}
.sv-step:last-of-type{border-bottom:none}
.sv-num{width:24px;height:24px;background:#0d47a1;color:#fff;border-radius:50%;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sv-txt{font-size:12px;color:#1a1a2e;line-height:1.5}
.sv-txt strong{color:#0d47a1}
#oc-save-cls{width:100%;margin-top:14px;padding:11px;background:#0d47a1;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer}

@media(max-width:600px){
  #oc-trigger{top:auto;bottom:70px;transform:none}
  #oc-drawer{width:100%;right:-100%;border-radius:16px 16px 0 0;bottom:0;top:auto;height:85vh}
  #oc-drawer.open{right:0}
}
</style>

<div id="oc-overlay"></div>

<button id="oc-trigger" aria-label="Open page tools">
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
  TOOLS
</button>

<div id="oc-drawer" role="dialog" aria-label="Page tools">
  <div id="oc-drawer-header">
    <span>⚙ PAGE TOOLS</span>
    <button id="oc-close" aria-label="Close">✕</button>
  </div>
  <div id="oc-drawer-body">

    <div id="oc-progress-section">
      <div class="prog-label">READING PROGRESS</div>
      <div class="prog-track"><div class="prog-fill" id="pg-fill"></div></div>
      <div class="prog-pct" id="pg-pct">0%</div>
    </div>

    <div class="drawer-divider"></div>

    <button class="drawer-btn" id="btn-share">
      <span class="ico">📤</span>
      <span class="lbl"><span class="lbl-main">Share Page</span><span class="lbl-sub">Share via browser</span></span>
    </button>

    <button class="drawer-btn" id="btn-copy">
      <span class="ico">🔗</span>
      <span class="lbl"><span class="lbl-main">Copy Link</span><span class="lbl-sub">Copy URL to clipboard</span></span>
    </button>

    <button class="drawer-btn" id="btn-qr">
      <span class="ico">📱</span>
      <span class="lbl"><span class="lbl-main">QR Code</span><span class="lbl-sub">Open on your phone</span></span>
    </button>

    <div class="drawer-divider"></div>

    <button class="drawer-btn" id="btn-print">
      <span class="ico">🖨️</span>
      <span class="lbl"><span class="lbl-main">Print Table</span><span class="lbl-sub">Print the main table only</span></span>
    </button>

    <button class="drawer-btn" id="btn-save">
      <span class="ico">💾</span>
      <span class="lbl"><span class="lbl-main">Save Page</span><span class="lbl-sub">Add to home screen</span></span>
    </button>

    <button class="drawer-btn" id="btn-fb">
      <span class="ico">📘</span>
      <span class="lbl"><span class="lbl-main">Share on Facebook</span><span class="lbl-sub">Share with friends</span></span>
    </button>

    <div class="drawer-divider"></div>

    <button class="drawer-btn" id="btn-dark">
      <span class="ico" id="dark-ico">🌙</span>
      <span class="lbl"><span class="lbl-main">Dark Mode</span><span class="lbl-sub" id="dark-sub">Switch to dark theme</span></span>
    </button>

    <button class="drawer-btn" id="btn-font-up">
      <span class="ico">A+</span>
      <span class="lbl"><span class="lbl-main">Larger Text</span><span class="lbl-sub">Increase font size</span></span>
    </button>

    <button class="drawer-btn" id="btn-font-dn">
      <span class="ico">A-</span>
      <span class="lbl"><span class="lbl-main">Smaller Text</span><span class="lbl-sub">Decrease font size</span></span>
    </button>

  </div>
</div>

<div id="oc-qr-modal" role="dialog" aria-modal="true">
  <div id="oc-qr-box">
    <h4>📱 Scan to Share</h4>
    <p>Open this page on your phone</p>
    <img id="qr-img" src="" alt="QR Code" width="150" height="150" loading="lazy">
    <br>
    <button id="oc-qr-cls">Close</button>
  </div>
</div>

<div id="oc-save-modal" role="dialog" aria-modal="true">
  <div id="oc-save-box">
    <h4>💾 Save This Page</h4>
    <p class="sv-sub">Choose your device:</p>
    <div class="sv-tabs">
      <button class="sv-tab active" data-os="ios">🍎 iPhone</button>
      <button class="sv-tab" data-os="android">🤖 Android</button>
      <button class="sv-tab" data-os="desktop">💻 Desktop</button>
    </div>
    <div id="sv-steps"></div>
    <button id="oc-save-cls">Got it ✓</button>
  </div>
</div>

<div id="oc-toast"></div>

<div class="demo-page">
  <h2>OilChoices.com — Sidebar Demo</h2>
  <p>Click the <strong>TOOLS</strong> tab on the right to open the floating drawer. All tools are fully functional.</p>
</div>

<script>
var stepsData={
  ios:[
    {n:1,t:'Tap the <strong>Share</strong> button at the bottom of Safari (□↑)'},
    {n:2,t:'Scroll down and tap <strong>Add to Home Screen</strong>'},
    {n:3,t:'Tap <strong>Add</strong> — saved to your home screen!'}
  ],
  android:[
    {n:1,t:'Tap the <strong>⋮ menu</strong> in Chrome (top right)'},
    {n:2,t:'Tap <strong>Add to Home screen</strong>'},
    {n:3,t:'Tap <strong>Add</strong> — opens like an app!'}
  ],
  desktop:[
    {n:1,t:'Press <strong>Ctrl+D</strong> (Windows) or <strong>⌘+D</strong> (Mac)'},
    {n:2,t:'Or click the <strong>★ star icon</strong> in the address bar'},
    {n:3,t:'Choose folder and click <strong>Save</strong>'}
  ]
};

function renderSteps(os){
  var el=document.getElementById('sv-steps');
  el.innerHTML=stepsData[os].map(function(s){
    return '<div class="sv-step"><div class="sv-num">'+s.n+'</div><div class="sv-txt">'+s.t+'</div></div>';
  }).join('');
}

var currentOS='ios';
(function(){
  var ua=navigator.userAgent||'';
  if(/android/i.test(ua)) currentOS='android';
  else if(/iphone|ipad|ipod/i.test(ua)) currentOS='ios';
  else currentOS='desktop';
  document.querySelectorAll('.sv-tab').forEach(function(b){b.classList.remove('active');if(b.dataset.os===currentOS)b.classList.add('active');});
  renderSteps(currentOS);
})();

document.querySelectorAll('.sv-tab').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.sv-tab').forEach(function(b){b.classList.remove('active');});
    btn.classList.add('active');
    renderSteps(btn.dataset.os);
  });
});

function openDrawer(){document.getElementById('oc-drawer').classList.add('open');document.getElementById('oc-overlay').classList.add('show');}
function closeDrawer(){document.getElementById('oc-drawer').classList.remove('open');document.getElementById('oc-overlay').classList.remove('show');}

document.getElementById('oc-trigger').addEventListener('click',openDrawer);
document.getElementById('oc-close').addEventListener('click',closeDrawer);
document.getElementById('oc-overlay').addEventListener('click',closeDrawer);
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeDrawer();document.getElementById('oc-qr-modal').classList.remove('show');document.getElementById('oc-save-modal').classList.remove('show');}});

var toast=document.getElementById('oc-toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(function(){toast.classList.remove('show');},2500);}

function getURL(){try{return window.top.location.href;}catch(e){return window.location.href;}}

document.getElementById('btn-share').addEventListener('click',function(){
  var url=getURL();
  if(navigator.share){navigator.share({title:document.title,url:url}).catch(function(){});}
  else{navigator.clipboard&&navigator.clipboard.writeText(url).then(function(){showToast('✅ Link copied!');});}
});

document.getElementById('btn-copy').addEventListener('click',function(){
  navigator.clipboard&&navigator.clipboard.writeText(getURL()).then(function(){showToast('✅ Link copied!');}).catch(function(){showToast('❌ Could not copy');});
});

document.getElementById('btn-qr').addEventListener('click',function(){
  document.getElementById('qr-img').src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+encodeURIComponent(getURL());
  document.getElementById('oc-qr-modal').classList.add('show');
});
document.getElementById('oc-qr-cls').addEventListener('click',function(){document.getElementById('oc-qr-modal').classList.remove('show');});
document.getElementById('oc-qr-modal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('show');});

document.getElementById('btn-print').addEventListener('click',function(){window.print();});

document.getElementById('btn-save').addEventListener('click',function(){
  document.getElementById('oc-save-modal').classList.add('show');
});
document.getElementById('oc-save-cls').addEventListener('click',function(){document.getElementById('oc-save-modal').classList.remove('show');});
document.getElementById('oc-save-modal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('show');});

document.getElementById('btn-fb').addEventListener('click',function(){
  window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(getURL()),'_blank','noopener,noreferrer,width=600,height=400');
});

var darkOn=false;
document.getElementById('btn-dark').addEventListener('click',function(){
  darkOn=!darkOn;
  document.getElementById('dark-ico').textContent=darkOn?'☀️':'🌙';
  document.getElementById('dark-sub').textContent=darkOn?'Switch to light theme':'Switch to dark theme';
  showToast(darkOn?'🌙 Dark mode on':'☀️ Light mode on');
});

var fontSize=16;
document.getElementById('btn-font-up').addEventListener('click',function(){
  if(fontSize<20){fontSize+=1;document.body.style.fontSize=fontSize+'px';showToast('Text size: '+fontSize+'px');}
});
document.getElementById('btn-font-dn').addEventListener('click',function(){
  if(fontSize>13){fontSize-=1;document.body.style.fontSize=fontSize+'px';showToast('Text size: '+fontSize+'px');}
});

var lastT=0,ticking=false,CIRC=113;
function updateProg(){
  var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
  var docH=document.documentElement.scrollHeight-window.innerHeight;
  var pct=docH>0?Math.round(scrollTop/docH*100):0;
  pct=Math.min(100,Math.max(0,pct));
  document.getElementById('pg-fill').style.width=pct+'%';
  document.getElementById('pg-pct').textContent=pct+'%';
}
window.addEventListener('scroll',function(){
  var now=Date.now();
  if(now-lastT<16)return;lastT=now;
  if(ticking)return;ticking=true;
  requestAnimationFrame(function(){ticking=false;updateProg();});
},{passive:true});
updateProg();
</script>
