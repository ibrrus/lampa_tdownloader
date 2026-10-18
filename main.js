/*
 * Lampa TDownloader diagnostic loader (kvart714/lampa)
 * Preserves the upstream plugin and adds local, sanitized request diagnostics.
 * Upstream main.js is loaded from GitHub; no diagnostics are uploaded anywhere.
 */
(function () {
  'use strict';
  if (window.Kvart714Diagnostics) return;

  var UPSTREAM = 'https://raw.githubusercontent.com/kvart714/lampa/main/docs/tdownloader/main.js';
  var MAX = 500;
  var entries = [];
  var serial = 0;
  var panel = null;
  var originalFetch = window.fetch;
  var starting = Date.now();

  function now() { return new Date().toISOString(); }
  function safeError(err) {
    var name = err && err.name ? String(err.name) : 'Error';
    // Do not include error.message: some runtimes include entire URLs or credentials.
    return { name: name, category: name === 'TypeError' ? 'Network/CORS/mixed-content (check browser console)' : 'Request failure' };
  }
  function log(level, event, detail) {
    var entry = { time: now(), level: level, event: event, detail: detail || {} };
    entries.push(entry);
    if (entries.length > MAX) entries.shift();
    try { (level === 'error' ? console.error : level === 'warn' ? console.warn : console.log).call(console, '[TDownloader Debug]', entry); } catch (_) {}
    if (panel) render();
    return entry;
  }
  function targetOf(input, init) {
    try {
      var url = input && input.url ? String(input.url) : String(input);
      var resolved = new URL(url, window.location.href);
      var path = resolved.pathname;
      if (/\/api\/v2\//.test(path)) return { client: 'qBittorrent', endpoint: path, method: String(init && init.method || input && input.method || 'GET').toUpperCase(), protocol: resolved.protocol };
      if (/\/transmission\/rpc\/?$/.test(path)) return { client: 'Transmission', endpoint: path, method: String(init && init.method || input && input.method || 'POST').toUpperCase(), protocol: resolved.protocol };
    } catch (_) {}
    return null;
  }
  function describe(t) {
    if (/\/auth\/login$/.test(t.endpoint)) return 'authentication';
    if (/\/torrents\/add$/.test(t.endpoint)) return 'add torrent';
    if (/\/torrents\/(start|resume)$/.test(t.endpoint)) return 'start torrent';
    if (/\/torrents\/(stop|pause)$/.test(t.endpoint)) return 'stop torrent';
    if (/\/torrents\/delete$/.test(t.endpoint)) return 'remove torrent';
    if (/\/torrents\/files$/.test(t.endpoint)) return 'list files';
    if (/\/sync\/maindata$/.test(t.endpoint)) return 'poll torrent status';
    return 'API request';
  }
  if (typeof originalFetch === 'function') {
    window.fetch = function (input, init) {
      var t = targetOf(input, init);
      if (!t) return originalFetch.apply(this, arguments);
      var id = ++serial;
      var begin = Date.now();
      log('info', 'request', { id: id, client: t.client, action: describe(t), method: t.method, endpoint: t.endpoint, protocol: t.protocol });
      var result;
      try { result = originalFetch.apply(this, arguments); }
      catch (err) { log('error', 'request_exception', { id: id, elapsed_ms: Date.now() - begin, error: safeError(err) }); throw err; }
      return Promise.resolve(result).then(function (response) {
        log(response.ok ? 'info' : 'error', 'response', {
          id: id, client: t.client, action: describe(t), endpoint: t.endpoint,
          status: response.status, ok: response.ok, elapsed_ms: Date.now() - begin
        });
        // Reading/cloning the response is deliberately avoided: passwords and file names can appear in bodies.
        return response;
      }, function (err) {
        log('error', 'network_error', { id: id, client: t.client, endpoint: t.endpoint, elapsed_ms: Date.now() - begin, error: safeError(err) });
        throw err;
      });
    };
  } else log('warn', 'fetch_unavailable', {});

  function getText() { return entries.map(function (x) { return JSON.stringify(x); }).join('\n'); }
  function exportLog() {
    var data = getText();
    try {
      var blob = new Blob([data], { type: 'application/x-ndjson;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'tdownloader-log-' + Date.now() + '.jsonl';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      return true;
    } catch (err) { log('warn', 'export_failed', safeError(err)); return false; }
  }
  function render() {
    if (!panel) return;
    var pre = panel.querySelector('pre');
    if (pre) { pre.textContent = getText() || 'Журнал пуст'; pre.scrollTop = pre.scrollHeight; }
  }
  function hide() { if (panel) { panel.remove(); panel = null; } }
  function show() {
    if (panel) return render();
    panel = document.createElement('div');
    panel.style.cssText = 'position:fixed;inset:4%;z-index:2147483647;background:#10151b;color:#edf2f7;padding:18px;box-sizing:border-box;border:2px solid #6386a5;border-radius:12px;font:15px monospace;display:flex;flex-direction:column;gap:10px';
    var header = document.createElement('div'); header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:12px';
    var title = document.createElement('strong'); title.textContent = 'TDownloader — локальный журнал (без паролей и magnet)';
    var close = document.createElement('button'); close.textContent = 'Закрыть'; close.style.cssText = 'padding:10px;color:black'; close.onclick = hide;
    header.appendChild(title); header.appendChild(close);
    var pre = document.createElement('pre'); pre.style.cssText = 'overflow:auto;flex:1;white-space:pre-wrap;word-break:break-word;margin:0';
    var actions = document.createElement('div'); actions.style.cssText = 'display:flex;gap:12px';
    var exportButton = document.createElement('button'); exportButton.textContent = 'Скачать журнал'; exportButton.style.cssText = 'padding:10px;color:black'; exportButton.onclick = exportLog;
    var clearButton = document.createElement('button'); clearButton.textContent = 'Очистить'; clearButton.style.cssText = 'padding:10px;color:black'; clearButton.onclick = function () { entries.length = 0; render(); };
    actions.appendChild(exportButton); actions.appendChild(clearButton);
    panel.appendChild(header); panel.appendChild(pre); panel.appendChild(actions);
    document.body.appendChild(panel); render(); close.focus();
  }
  window.Kvart714Diagnostics = {
    show: show, hide: hide,
    get: function () { return entries.slice(); },
    export: exportLog,
    text: getText,
    clear: function () { entries.length = 0; render(); }
  };
  document.addEventListener('keydown', function (e) {
    if (panel && (e.key === 'Escape' || e.key === 'Backspace')) { e.preventDefault(); hide(); }
  }, true);
  function registerSettings() {
    try {
      if (!window.Lampa || !Lampa.SettingsApi) return false;
      Lampa.SettingsApi.addComponent({ component: 'kvart714_diagnostics', name: 'TDownloader — диагностика' });
      Lampa.SettingsApi.addParam({
        component: 'kvart714_diagnostics',
        param: { name: 'kvart714_diagnostics_open', type: 'trigger', default: false },
        field: { name: 'Показать журнал', description: 'Локальные запросы к qBittorrent / Transmission без секретов' },
        onChange: function () { show(); try { Lampa.Storage.set('kvart714_diagnostics_open', false); } catch (_) {} }
      });
      return true;
    } catch (err) { log('warn', 'settings_registration_failed', safeError(err)); return false; }
  }
  function installSettings() {
    if (registerSettings()) return;
    if (window.Lampa && Lampa.Listener) {
      try { Lampa.Listener.follow('app', function (ev) { if (ev.type === 'ready') registerSettings(); }); } catch (_) {}
    }
  }
  log('info', 'diagnostics_started', { version: '1.0', upstream: 'kvart714/lampa', source: 'GitHub raw main branch' });
  installSettings();
  var script = document.createElement('script');
  script.src = UPSTREAM;
  script.async = false;
  script.onload = function () { log('info', 'upstream_loaded', { elapsed_ms: Date.now() - starting }); };
  script.onerror = function () { log('error', 'upstream_load_failed', { source: 'GitHub raw main branch' }); try { window.Lampa && Lampa.Noty && Lampa.Noty.show('TDownloader: ошибка загрузки плагина'); } catch (_) {} };
  (document.head || document.documentElement).appendChild(script);
})();
