import os
import json
from operator import itemgetter

baseDir="/ifs/mcp/syamashi/houri/BLA"

files = []
# r=root, d=directories, f = files
for r, d, f in os.walk(baseDir):
    for file in f:
        if '_30pct.jpg' in file:
            files.append(os.path.join(r, file))

galleries = []
urls = []
for f in files:
    kv = {} 
    kv['title'] = f.rsplit('/', 1)[1] 
    kv['description'] = f.rsplit('/',1)[1].split('.',1)[0] 
    kv['href'] = f.replace(baseDir,"http://image5.mcp.loni.usc.edu/mcp/docs/BLA")
    galleries.append(kv)

sortedlist = []
sortedlist = sorted(galleries, key=lambda k: k['title'], reverse=False)  
# convert into json
print json.dumps(galleries)

# write in a file
with open('data.json', 'w') as outfile:
    json.dump(sortedlist, outfile, indent=4)
