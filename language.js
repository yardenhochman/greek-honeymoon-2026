(() => {
  const dictionary = window.TRIP_HE || {};
  let language = 'he';
  try { language = localStorage.getItem('trip-language') === 'en' ? 'en' : 'he'; } catch {}
  const originals = new WeakMap();
  const attributes = new WeakMap();
  const normalize = s => s.trim().replace(/\s+/g, ' ');
  const translate = s => {
    const translated = dictionary[normalize(s)];
    return translated === undefined ? s : (s.match(/^\s*/)[0] + translated + s.match(/\s*$/)[0]);
  };
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (!scheduled) { scheduled = true; queueMicrotask(render); }
  });
  function render() {
    scheduled = false;
    observer.disconnect();
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest('script,style,noscript,[data-language-toggle]')) continue;
      const current = node.nodeValue;
      let record = originals.get(node);
      if (!record || (current !== record.original && current !== record.translated)) {
        record = { original: current, translated: translate(current) };
        originals.set(node, record);
      }
      node.nodeValue = language === 'he' ? record.translated : record.original;
    }
    for (const el of document.querySelectorAll('[aria-label],[alt],[title]')) {
      if (el.matches('[data-language-toggle]')) continue;
      let record = attributes.get(el) || {};
      for (const key of ['aria-label','alt','title']) {
        if (!el.hasAttribute(key)) continue;
        const current = el.getAttribute(key), old = record[key];
        if (!old || (current !== old.original && current !== old.translated)) record[key] = { original: current, translated: translate(current) };
        el.setAttribute(key, language === 'he' ? record[key].translated : record[key].original);
      }
      attributes.set(el, record);
    }
    const button = document.querySelector('[data-language-toggle]');
    if (button) { button.textContent = language === 'he' ? 'English' : 'עברית'; button.setAttribute('aria-label', language === 'he' ? 'Switch to English' : 'מעבר לעברית'); }
    observer.observe(document.documentElement, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['aria-label','alt','title']});
  }
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-language-toggle]')) return;
    language = language === 'he' ? 'en' : 'he';
    try { localStorage.setItem('trip-language', language); } catch {}
    render();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    if (header && !header.querySelector('[data-language-toggle]')) {
      const button = document.createElement('button'); button.type = 'button'; button.dataset.languageToggle = ''; button.className = 'language-toggle'; header.append(button);
    }
    render();
  });
  render();
})();
