import os
import json
import collections

# baseDir = "/ifs/mcp/syamashi/houri/BLA"
baseDir = "/Volumes/mcp/syamashi/houri/BLA"
# imagesUrl = "http://image5.mcp.loni.usc.edu/mcp/docs/BLA"
imagesUrl = "/mcp/docs/BLA"
jsonPath = "../bla-carousel3d/src/assets/data.json"
blaGroups = {'publish_LA_BLAv_BMAp_ant':'image3', 
          'publish_BLAalvsBLAp_ant_2':'image2', 
          'publish_BLAa_ant_2':'image1',
          'publish_LA_BLAv_BMAp_ret':'image6', 
          'publish_BLAalvsBLAp_ret':'image5', 
          'publish_BLAa_ret':'image4'}

def listdir_nohidden(path):
    for f in os.listdir(path):
        if not f.startswith('.'):
            yield f

dirkeys = {}
images = {}

idx = 1
for d in listdir_nohidden(baseDir):
    dirkey = blaGroups[d]
    dirkeys[d] = dirkey
    images[dirkey] = []
    print "{} is {}".format(d,dirkey)

    # Debug path...
    # for dd in os.listdir(os.path.join(baseDir,d)):
    #     print '<input type=radio value="image{}">{}</input>'.format(idx,os.path.join(d,dd))
    #     idx+=1


# r=root, d=directories, f = files
for r, d, f in os.walk(baseDir):
    for fpath in f:
        if '_15pct_tsp.png' in fpath:
            fpath = os.path.join(r, fpath)
            key = fpath.replace(baseDir,"").split('/')[1]
            dirkey = dirkeys[key]

            kv = {}
            # kv['description'] = fpath.rsplit('/', 1)[1]
            # kv['title'] = fpath.rsplit('/', 1)[1].split('.', 1)[0]
            kv['href'] = fpath.replace(baseDir, imagesUrl)

            level = int(fpath.rsplit('/',1)[1].split('_',1)[0])
            kv['atlasLevel'] = "ARA {}".format(level)
            # kv['atlasLevel'] = int(fpath.rsplit('/',1)[1].split('_',1)[0])

            images[dirkey].append(kv)

galleries = {}
for key in images:
    sortedlist = []
    sortedlist = sorted(images[key], key=lambda k: k['atlasLevel'], reverse=False)
    galleries[key] = sortedlist


# convert into json
# print json.dumps(collections.OrderedDict(galleries))


# write in a fpath
with open(jsonPath, 'w') as outfile:
    json.dump(galleries, outfile, indent=4)
