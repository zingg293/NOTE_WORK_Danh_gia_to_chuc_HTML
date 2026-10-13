from pathlib import Path
from html.parser import HTMLParser
import re
from urllib.parse import urlsplit
root=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.refs=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if tag in ('a','link','script'):
   r=a.get('href') or a.get('src')
   if r:self.refs.append(r)
for p in root.glob('*.html'):
 parser=Parser();parser.feed(p.read_text())
 assert len(parser.ids)==len(set(parser.ids)),(p,'duplicate ID')
 for ref in parser.refs:
  if not re.match(r'^(https?:|#|mailto:)',ref):assert (p.parent/urlsplit(ref).path).exists(),(p,ref)
 assert '<html lang="vi">' in p.read_text()
 print('PASS HTML / links:',p.name)
for p in root.rglob('*'):
 if p.is_file() and p.suffix in ('.html','.css','.js','.md','.svg'):
  txt=p.read_text()
  assert 'chatgpt' not in txt.lower(),p
for p in (root/'assets').glob('*.js'):
 assert 'fetch(' not in p.read_text() and 'XMLHttpRequest' not in p.read_text()
print('PASS no external service/domain dependencies')
