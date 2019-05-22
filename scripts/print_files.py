import os
import json
import collections

# baseDir = "/ifs/mcp/syamashi/houri/BLA"
baseDir = "/Volumes/mcp/syamashi/houri/BLA"
# imagesUrl = "http://image5.mcp.loni.usc.edu/mcp/docs/BLA"
imagesUrl = "http://localhost/mcp/docs/BLA"


dirkeys = {}
images = {}

count = 1
idx = 1
for d in os.listdir(baseDir):
    dirkey = 'image{}'.format(count)
    dirkeys[d] = dirkey
    images[dirkey] = []
    # print "{} is {}".format(d,dirkey)
    count+=1

    # Debug path...
    # for dd in os.listdir(os.path.join(baseDir,d)):
    #     print '<input type=radio value="image{}">{}</input>'.format(idx,os.path.join(d,dd))
    #     idx+=1


# r=root, d=directories, f = files
for r, d, f in os.walk(baseDir):
    for fpath in f:
        if '_30pct.jpg' in fpath:
            fpath = os.path.join(r, fpath)
            key = fpath.replace(baseDir,"").split('/')[1]
            dirkey = dirkeys[key]

            kv = {}
            kv['description'] = fpath.rsplit('/', 1)[1]
            kv['title'] = fpath.rsplit('/', 1)[1].split('.', 1)[0]
            kv['href'] = fpath.replace(baseDir, imagesUrl)
            images[dirkey].append(kv)

galleries = {}
for key in images:
    sortedlist = []
    sortedlist = sorted(images[key], key=lambda k: k['title'], reverse=False)
    galleries[key] = sortedlist


# convert into json
# print json.dumps(collections.OrderedDict(galleries))


# write in a fpath
with open('data.json', 'w') as outfile:
    json.dump(galleries, outfile, indent=4)
