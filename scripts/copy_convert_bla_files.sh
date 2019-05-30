#!/bin/bash

#src=/ifs/mcp/ibowman/houri/BLA
src=/Volumes/mcp/syamashi/houri/BLA
#tgt=/ifs/mcp/syamashi/houri/BLA
tgt=/Volumes/mcp/syamashi/houri/BLA

im_convert=/usr/local/bin/convert
#im_convert=/usr/bin/convert
#im_convert=/usr/local/ImageMagick-6.7.8-2_64bit/bin/convert
prod=/ifs/web/mcp/www/docs/files/

folders=("/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175" "/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175" "/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175" "/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00" "/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00" "/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00")
#ant_folders=("/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175" "/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175" "/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175")
#ret_folders=("/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00" "/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00" "/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00")


# copy the files
for fol in "${folders[@]}"
do
  path=$src$fol
  for filename in $path/*_visual.tif 
  do
    dest=$tgt$fol
    if [ ! -d "$dest" ]; then
      echo "mkdir -p $dest"
      `mkdir -p $dest`
    fi

#    echo "cp $filename $dest"
#    `cp $filename $dest`
  done
done


# convert to jpg
for fol in "${folders[@]}"
do
  path=$tgt$fol
  for tif in $path/*_visual.tif 
  do
    jpg=`basename $tif`  
    j="${tif%.*}"
    #echo "$im_convert $tif $j.jpg"
    #`$im_convert $tif $j.jpg`
  done
done


# scale to 30% 
for fol in "${folders[@]}"
do
  path=$tgt$fol
  for jpg in $path/*_visual.jpg 
  do
    jpg=`basename $jpg`  
    j="${jpg%.*}"
    scale="-scale 30%"
    ext="_30pct.jpg"
    #echo "$im_convert $path/$jpg $scale $path/$j$ext"
    #`$im_convert $path/$jpg $scale $path/$j$ext`
  done
done

# convert to transparent background png
for fol in "${folders[@]}"
do
  path=$tgt$fol
  for f in $path/*_visual_15pct.jpg 
  do
    jpg=`basename $f`
    j="${jpg%.*}"
    ext="_tsp.png"    
    opt="-transparent white"
    echo "$im_convert $path/$jpg $opt $path/$j$ext"
    `$im_convert $path/$jpg $opt $path/$j$ext`
  done
done

# TODO: This does not seem to work from running a script...
# copy over to production
#echo "rsync --rsync-path=/usr/bin/rsync -avP /home/syamashi/.profile --exclude='*.tif' $tgt $prod" 
#`rsync --rsync-path=/usr/bin/rsync /usr/bin/rsync -avP /home/syamashi/.profile --exclude='*.tif' --exclude='*_visual.jpg' $tgt $prod` 

# rsync --rsync-path=/usr/bin/rsync /usr/bin/rsync -avP /home/syamashi/.profile --exclude='*.tif' --exclude='*.jpg' --exclude=".DS_Store" /ifs/mcp/syamashi/houri/BLA /ifs/web/mcp/www/docs/files/