#!/bin/bash

pwda=$(pwd)
echo $pwda
prog=${pwda: -4}
echo $prog
ps1=/mnt/home/cmd/ps1.sh

psa=$($ps1 $prog|grep node)
psb=$(echo $psa|gawk '{print $2}')
echo "ps: "$psb

if [ -z "$psb" ];then
sleep 1;
npm start &
else
echo $psb
fi
