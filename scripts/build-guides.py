#!/usr/bin/env python3
"""Build static day guides from shared content: python scripts/build-guides.py."""
from pathlib import Path
import json,re,html
ROOT=Path(__file__).resolve().parent.parent
D=json.loads((ROOT/'guide-content.json').read_text())
def link(href,label):return f'<a class="tool-link" href="{href}">{html.escape(label)}</a>'
def grid(items):return '<div class="practical-grid">'+''.join(items)+'</div>'
def section(id,title,body):return f'<section class="section-shell guide-section" id="{id}"><h2>{html.escape(title)}</h2>{body}</section>'
def render(filename,title,intro,body,day=None):
 head=re.sub(r'<title>.*?</title>',f'<title>{html.escape(title)} — Yarden + Adi</title>',D['head'])
 header=D['header'].replace('← Day-by-day plan','Trip').replace('Travel toolkit','Documents').replace('Taste & explore','General')
 nav=''
 if day:
  i=day['id'];nav='<nav class="guide-nav" aria-label="Day navigation">'+link(f'./index.html#day-{i}','Itinerary')
  if i>1:nav+=link(f'./day-{i-1:02}.html','Previous')
  if i<11:nav+=link(f'./day-{i+1:02}.html','Next')
  nav+='</nav>'
 eyebrow=f'Day {day["id"]} · {day["id"]+16} September 2026' if day else 'Our shared field notes'
 content=f'<section class="section-shell guide-intro"><p class="eyebrow dark">{eyebrow}</p><h1>{html.escape(title)}</h1><p>{html.escape(intro)}</p></section>'
 (ROOT/filename).write_text(head+header+nav+content+body+'</main>'+D['footer'])
def directory():
 return grid([f'<article class="practical-card"><span>{d["id"]+16} SEP · DAY {d["id"]}</span><h3>{html.escape(d["title"])}</h3>'+link(f'./day-{d["id"]:02}.html','Recommendations & practical details →')+'</article>' for d in D['days']])
for day in D['days']:
 i=day['id'];body='<nav class="guide-nav" aria-label="On this day">'+link('#recommendations','Food & places')+link('#prepare','Prepare & pack')+link('#useful','Essentials')+link('#hotels','Hotel')+'</nav>'
 if day['photo']:body+=f'<div class="section-shell">{D["photos"][day["photo"]]}</div>'
 body+=section('recommendations','Food & experiences',grid([D['shared'][k] for k in day['recommendations']]))
 prep=day.get('preparation')
 if prep:
  cards=[]
  for key,title in [('before','Before you go'),('pack','Bring along')]:
   cards.append('<article class="practical-card"><h3>'+title+'</h3><ul class="packing-list">'+''.join('<li>'+html.escape(item)+'</li>' for item in prep[key])+'</ul></article>')
  body+=section('prepare','Prepare & pack',grid(cards)+'<p>'+link('./packing.html','Packing checklist →')+'</p><p class="source-note">Beach towels are confirmed at Polixeny’s, Sofia and Astoria. Bring a compact towel for other stays where they are not confirmed.</p>')
 useful=[D['car'] if k=='car' else D['shared'][k] for k in day['transport']]+[D['documents'][n] for n in day['documents']]
 if useful:body+=section('useful','Useful today',grid(useful)+'<p>Private Drive links require your Google account. Save documents offline separately in Drive.</p>')
 else:body+=section('useful','Useful today','<p>'+link(f'./index.html#day-{i}','Today’s route, times & options →')+link('./practical.html#documents','All travel documents →')+'</p>')
 body+=section('hotels','Hotel & laundry',grid([D['stays'][n] for n in day['stays']]))
 body+=section('general','For any day','<p>'+link('./experiences.html#dishes','Dishes worth trying →')+link('./experiences.html#music','Music for the road →')+link('./practical.html#documents','Shared documents →')+'</p>')
 render(f'day-{i:02}.html',day['title'],day['intro'],body,day)
render('experiences.html','Ideas for any day.','Dishes to recognise, music for the road and a doorway to each day’s local recommendations.','<nav class="guide-nav" aria-label="General recommendations">'+link('#dishes','What to order')+link('#music','Music for the road')+link('#days','Find your day')+'</nav>'+D['dishes']+D['music']+section('days','Choose your day',directory()))
stay_links=[]
for n,stay in enumerate(D['stays']):
 name=re.search(r'<h3>(.*?)</h3>',stay,re.S).group(1);day=next(d for d in D['days'] if n in d['stays'])
 stay_links.append(f'<article class="practical-card" id="stay-{n}"><h3>{name}</h3>'+link(f'./day-{day["id"]:02}.html#hotels','Hotel services in the day guide →')+'</article>')
docs=D['documentsIntro']+grid(D['documents'])+'</section>'
render('practical.html','Documents & essentials.','Our shared documents stay here. Contacts, laundry and transport are collected in the relevant day guide.',docs+section('days','Practical details by day',directory())+section('services','Hotel shortcuts',grid(stay_links)))
print('Built 11 day guides and 2 general hubs.')

# Packing keeps stable item IDs so a content update preserves checked items.
P=json.loads((ROOT/'packing-content.json').read_text())
def packing_card(title,items,view):
 rows=[]
 for item in items:
  ident=f'pack-{view}-{item["id"]}'
  rows.append(f'<li><label for="{ident}"><input type="checkbox" id="{ident}" data-pack-item="{item["id"]}"><span><span class="pack-label">{html.escape(item["label"])}</span><small>{html.escape(P["bags"][item["bag"]]["label"] if view=="person" else P["groups"][item["owner"]])}</small></span></label></li>')
 return '<article class="practical-card"><h3>'+html.escape(title)+'</h3><ul class="pack-checklist">'+''.join(rows)+'</ul></article>'
packing='<nav class="guide-nav" aria-label="Packing">'+link('#checklist','Checklist')+link('#bags','Bags')+link('#packing-notes','Packing notes')+'</nav><section class="section-shell guide-section" id="bags"><h2>Bags & weight limits</h2>'+''.join('<p>'+html.escape(n)+'</p>' for n in P['notes'][:2])+grid([f'<article class="practical-card"><h3>{html.escape(b["label"])}</h3><p>{html.escape(b["description"])}</p></article>' for b in P['bags'].values()])+'</section>'
packing+='<section class="section-shell guide-section" id="checklist"><h2>Packing</h2><div class="pack-controls" role="group" aria-label="Packing view"><button type="button" data-pack-view="person" aria-pressed="true">By person</button><button type="button" data-pack-view="bag" aria-pressed="false">By bag</button><p role="status"><span>Packed</span> <b data-pack-count>0</b> <span>of</span> <b>'+str(len(P['items']))+'</b></p></div><p data-pack-storage>Checkmarks stay on this device and browser; they are not shared between phones.</p>'
for view,groups in [('person',P['groups']),('bag',{k:v['label'] for k,v in P['bags'].items()})]:
 packing+=f'<div data-pack-panel="{view}"'+(' hidden' if view=='bag' else '')+'>'+grid([packing_card(label,[i for i in P['items'] if i['owner' if view=='person' else 'bag']==key],view) for key,label in groups.items()])+'</div>'
packing+='</section>'+section('packing-notes','Before closing the bags','<ul class="packing-list">'+''.join('<li>'+html.escape(n)+'</li>' for n in P['notes'][2:])+'</ul>')
packing+=section('packing-sources','Sources checked 16 Sep 2026','<div class="tool-links">'+link('https://www.bluebirdair.com/TRAVEL-INFORMATION/Checked-baggage','Airline baggage rules ↗')+link('https://booking.bluebirdair.com/Travel-information/Lithium-Battery-Allowance-and-Dangerous-Goods','Airline battery rules ↗')+link('https://transport.ec.europa.eu/transport-modes/air/aviation-security/aviation-security-policy/liquids-aerosols-and-gels_en','EU liquids rules ↗')+link('https://drive.google.com/file/d/18w86zU1xVx-NhHdnHLqbRzQyinC8OjVc/view','Original flight ticket · private Drive ↗')+'</div>')
render('packing.html',P['title'],P['intro'],packing+'<script src="./packing.js"></script>')
