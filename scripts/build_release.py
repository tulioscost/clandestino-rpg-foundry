import json, os, pathlib, zipfile
base=pathlib.Path(__file__).resolve().parents[1]
dist=base/'dist'; dist.mkdir(exist_ok=True)
repo=os.environ['GITHUB_REPOSITORY']; tag=os.environ['RELEASE_TAG']
m=json.loads((base/'system.json').read_text(encoding='utf-8'))
m['version']=tag.lstrip('v')
m['url']=f'https://github.com/{repo}'
m['manifest']=f'https://github.com/{repo}/releases/latest/download/system.json'
m['download']=f'https://github.com/{repo}/releases/download/{tag}/clandestino-rpg.zip'
(dist/'system.json').write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')
with zipfile.ZipFile(dist/'clandestino-rpg.zip','w',zipfile.ZIP_DEFLATED) as z:
    for p in sorted(base.rglob('*')):
        if not p.is_file() or '.git' in p.parts or 'dist' in p.parts or 'scripts' in p.parts: continue
        if p.name=='system.json': z.write(dist/'system.json','system.json')
        else: z.write(p,p.relative_to(base).as_posix())
print('Gerados:',dist/'system.json',dist/'clandestino-rpg.zip')
