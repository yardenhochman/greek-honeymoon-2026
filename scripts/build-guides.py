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
  body+=section('prepare','Prepare & pack',grid(cards)+'<p class="source-note">Preparation lists are suggestions for the chosen route. Beach-towel availability is not yet confirmed; bring a compact towel until the hotel confirms.</p>')
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
