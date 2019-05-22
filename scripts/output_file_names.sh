#!/bin/bash

#tgt=/ifs/mcp/syamashi/houri/BLA
tgt=/Volumes/mcp/syamashi/houri/BLA
domain=http://image5.mcp.loni.usc.edu/mcp/docs/BLA/
ant_folders=("/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175" "/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175" "/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175")
ret_folders=("/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00" "/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00" "/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00")


for fol in "${ret_folders[@]}"
do
  path=$tgt$fol
  for filename in $path/*_visual.jpg 
  do
    fname=`basename $filename`
    echo $domain$fol/$fname
  done
done

