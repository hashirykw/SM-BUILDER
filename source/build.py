#!/usr/bin/env python3
"""Assemble self-contained pages: each output .html has all CSS + JS inlined.
Run from anywhere:  python3 source/build.py"""
import pathlib, re

SRC = pathlib.Path(__file__).parent
OUT = SRC.parent
CSS = (SRC / 'shared.css').read_text()
JS = (SRC / 'data.js').read_text() + '\n' + (SRC / 'engine.js').read_text()

NAV = [('index', 'index.html', 'Home'), ('projects', 'projects.html', 'Projects'), ('plans', 'floor-plans.html', 'Floor plans'),
       ('about', 'about.html', 'About'), ('news', 'news.html', 'News'), ('contact', 'contact.html', 'Contact')]

def sv(p, fill=False):
    a = 'fill="currentColor"' if fill else 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
    return f'<svg viewBox="0 0 24 24" {a} aria-hidden="true">{p}</svg>'

IC = {
 'sun': '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 'moon': '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
 'arrow': sv('<path d="M5 12h14M13 6l6 6-6 6"/>'),
 'chat': '<svg class="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
 'x': '<svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
 'send': sv('<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>'),
 'ig': sv('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>'),
 'fb': sv('<path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v7h4v-7H17l.6-4h-4.1V8.8c0-.5.3-.8.5-.8z"/>', True),
 'yt': sv('<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.6 12l-5.8 3.1z"/>', True),
 'li': sv('<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>', True),
 'xx': sv('<path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.9 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>', True),
}

def chrome_top():
    links = ''.join(f'<a href="{h}" data-p="{k}">{t}</a>' for k, h, t in NAV)
    dl = ''.join(f'<a class="dl" href="{h}" data-p="{k}">{t}{IC["arrow"]}</a>' for k, h, t in NAV)
    return f'''<a class="skip" href="#main">Skip to content</a>
<div class="amb" aria-hidden="true"><i></i><i></i><i></i></div><canvas id="bg3d" aria-hidden="true"></canvas><div class="veil" aria-hidden="true"></div><div class="grain" aria-hidden="true"></div>
<div class="loader" aria-hidden="true"><div class="mk"></div><div class="bar"><i></i></div></div>
<div id="progress" aria-hidden="true"></div>
<header class="nav">
  <a class="brand" href="index.html" aria-label="S. M. Builders &amp; Developers, home"><span class="mk" aria-hidden="true"></span><span class="wm"><b>S. M. BUILDERS</b><small>&amp; DEVELOPERS · SINCE 1967</small></span></a>
  <nav class="menu" aria-label="Main"><span class="ind" aria-hidden="true"></span>{links}</nav>
  <div class="nav-r">
    <button class="ib theme" id="themeBtn" aria-label="Switch between light and dark theme">{IC["moon"]}{IC["sun"]}</button>
    <a class="btn btn-primary btn-sm cta-full" href="contact.html#enquire" data-i="arrow">Book a visit</a>
    <button class="ib" id="menuBtn" aria-label="Menu" aria-expanded="false" aria-controls="drop"><i></i><i></i></button>
  </div>
</header>
<div class="drop" id="drop">
  <nav aria-label="Mobile">{dl}</nav>
  <div class="dc"><a href="tel:+923111756111"><b>Call UAN</b><span>03-111-756-111</span></a><a href="https://wa.me/923153002144" target="_blank" rel="noopener"><b>WhatsApp</b><span>Sales team</span></a></div>
</div>
'''

def chrome_bottom():
    nav = ''.join(f'<a href="{h}">{t}</a>' for k, h, t in NAV)
    return f'''<footer class="foot">
  <div class="wrap"><div class="foot-card glass">
    <div class="foot-top">
      <div><div class="foot-logo" role="img" aria-label="S. M. Builders &amp; Developers logo"></div><p class="foot-say">Renowned for its <span>integrity</span> since 1967.</p></div>
      <div class="foot-lines">
        <a class="big" href="tel:+923111756111">03-111-756-111</a>
        <a class="big" href="mailto:info@smbuilders.com.pk">info@smbuilders.com.pk</a>
        <p>Head office: Burj Al Jinnah, NIPA CHS, Main Jinnah Avenue, Karachi. Sales on 0315-3002150, 0315-3002144, 0315-3002146 and 0315-3002147.</p>
        <a class="btn btn-glass btn-sm" href="https://www.google.com/maps/search/?api=1&amp;query=Burj+Al+Jinnah+Main+Jinnah+Avenue+Karachi" target="_blank" rel="noopener" data-i="map">Get directions</a>
      </div>
    </div>
    <div class="foot-offices">
      <div><small>S. M. House site office</small><p>B-15 / B-36, Block L, North Nazimabad, KDA Scheme No. 2, Karachi</p></div>
      <div><small>S. M. Axis site office</small><p>D-5, Block N, North Nazimabad, Main Sher Shah Suri Road, Karachi</p></div>
      <div><small>Feedback &amp; suggestions</small><p><a href="tel:+923153002142">0315-3002142</a></p></div>
    </div>
    <div class="foot-row">
      <nav class="foot-nav" aria-label="Footer">{nav}<a href="contact.html#faq">FAQ</a></nav>
      <div class="foot-soc">
        <a class="ib soc" href="https://www.facebook.com/SMBuildersDeveloper" target="_blank" rel="noopener" aria-label="Facebook">{IC["fb"]}</a>
        <a class="ib soc" href="https://www.instagram.com/s.m.buildersdeveloper" target="_blank" rel="noopener" aria-label="Instagram">{IC["ig"]}</a>
        <a class="ib soc" href="https://www.youtube.com/@SMBuildersDeveloper" target="_blank" rel="noopener" aria-label="YouTube">{IC["yt"]}</a>
        <a class="ib soc" href="https://www.linkedin.com/company/sm-builders-developers/" target="_blank" rel="noopener" aria-label="LinkedIn">{IC["li"]}</a>
        <a class="ib soc" href="https://x.com/S_MBuilders" target="_blank" rel="noopener" aria-label="X">{IC["xx"]}</a>
      </div>
    </div>
    <div class="legal"><span>© <span class="yr">2026</span> S. M. Builders &amp; Developers · S. M. Group</span><span>Affiliated with ABAD, KCCI, PEC and the Pakistan Council of Architects &amp; Town Planners</span></div>
  </div></div>
</footer>
<button class="chat-btn" aria-label="Open the S. M. assistant" aria-expanded="false" aria-controls="chat">{IC["chat"]}{IC["x"]}<span class="pip" aria-hidden="true"></span></button>
<section class="chat" id="chat" role="dialog" aria-label="S. M. Builders assistant" aria-hidden="true">
  <div class="ch"><span class="mk" aria-hidden="true"></span><span><b>S. M. assistant</b><small>Answers instantly · hands over to sales</small></span></div>
  <div class="msgs" aria-live="polite"></div><div class="sugg"></div>
  <form class="cf"><label class="sr" for="chatIn">Your question</label><input id="chatIn" placeholder="Ask about a project, plan or price" autocomplete="off"><button aria-label="Send">{IC["send"]}</button></form>
</section>'''

def build(path):
    raw = path.read_text()
    meta = dict(re.findall(r'^@(\w+):\s*(.+)$', raw, re.M))
    def part(name):
        m = re.search(rf'==={name}===\n(.*?)(?=\n===\w+===|\Z)', raw, re.S)
        return m.group(1) if m else ''
    page, out = meta['page'], meta.get('out', meta['page'])
    html = f'''<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{meta['title']}</title>
<meta name="description" content="{meta['desc']}">
<meta name="theme-color" content="#0a1510">
<meta property="og:title" content="{meta['title']}">
<meta property="og:description" content="{meta['desc']}">
<meta property="og:type" content="website">
<meta property="og:image" content="{meta.get('og', 'images/ui/burj-dusk.jpg')}">
<link rel="icon" type="image/png" href="images/ui/favicon.png">
<link rel="apple-touch-icon" href="images/ui/apple-touch-icon.png">
<script>(function(){{try{{var t=localStorage.getItem('sm-theme');if(t)document.documentElement.dataset.theme=t;}}catch(e){{}}}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
{meta.get('head','')}
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","name":"S. M. Builders & Developers","slogan":"Renowned for its integrity","foundingDate":"1967","url":"https://smbuilders.com.pk/","email":"info@smbuilders.com.pk","telephone":["+923111756111","+923153002150","+923153002144"],"address":{{"@type":"PostalAddress","streetAddress":"Burj Al Jinnah, NIPA CHS, Main Jinnah Avenue, Sector 45-A, Scheme 33","addressLocality":"Karachi","addressRegion":"Sindh","addressCountry":"PK"}},"sameAs":["https://www.facebook.com/SMBuildersDeveloper","https://www.instagram.com/s.m.buildersdeveloper","https://www.youtube.com/@SMBuildersDeveloper","https://www.linkedin.com/company/sm-builders-developers/","https://x.com/S_MBuilders"]}}</script>
<style>
{CSS}
/* ---------------- page: {page} ---------------- */
{part('CSS')}
</style>
</head>
<body data-page="{page}">
{chrome_top()}
<main id="main">
{part('HTML')}
</main>
{chrome_bottom()}
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js" defer></script>
<script>window.SM_LOGO_SRC="images/ui/sm-icon-gold.png";</script>
<script>
{JS}
</script>
<script>
addEventListener('DOMContentLoaded',function(){{
{part('JS')}
}});
</script>
</body>
</html>
'''
    (OUT / f'{out}.html').write_text(html)
    print(f'{out}.html', len(html) // 1024, 'KB')

for p in sorted((SRC / 'pages').glob('*.page')):
    build(p)
