(function () {
  var FORM_ID = 'xX9JPJ';

  var tallyScript = document.createElement('script');
  tallyScript.src = 'https://tally.so/widgets/embed.js';
  tallyScript.async = true;
  document.head.appendChild(tallyScript);

  var style = document.createElement('style');
  style.textContent = [
    '.feedback-pill{',
    '  position:fixed;right:20px;bottom:20px;z-index:9999;',
    '  background:var(--accent,#f59e0b);color:#0A2A43;',
    '  padding:12px 18px;border-radius:999px;border:0;cursor:pointer;',
    '  font:600 14px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;',
    '  box-shadow:0 6px 20px rgba(0,0,0,.25);',
    '  transition:transform .15s ease,box-shadow .15s ease;',
    '}',
    '.feedback-pill:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.3);}',
    '.feedback-pill:focus-visible{outline:2px solid #fff;outline-offset:2px;}',
    '@media (max-width:480px){.feedback-pill{right:12px;bottom:12px;padding:10px 14px;font-size:13px;}}',
    'footer .feedback-link{color:var(--accent,#f59e0b);text-decoration:none;margin-left:10px;}',
    'footer .feedback-link:hover{text-decoration:underline;}'
  ].join('');
  document.head.appendChild(style);

  function attach() {
    if (!document.querySelector('.feedback-pill')) {
      var btn = document.createElement('button');
      btn.className = 'feedback-pill';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Send feedback');
      btn.setAttribute('data-tally-open', FORM_ID);
      btn.setAttribute('data-tally-layout', 'modal');
      btn.setAttribute('data-tally-width', '700');
      btn.setAttribute('data-tally-emoji-text', '👋');
      btn.setAttribute('data-tally-emoji-animation', 'wave');
      btn.textContent = '💬 Feedback';
      btn.addEventListener('click', function (e) {
        if (window.Tally && typeof window.Tally.openPopup === 'function') return;
        e.preventDefault();
        window.open('https://tally.so/r/' + FORM_ID, '_blank', 'noopener');
      });
      document.body.appendChild(btn);
    }

    var footer = document.querySelector('footer');
    if (footer && !footer.querySelector('.feedback-link')) {
      var link = document.createElement('a');
      link.href = 'https://tally.so/r/' + FORM_ID;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'feedback-link';
      link.textContent = '· Share feedback →';
      footer.appendChild(link);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
