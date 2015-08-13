#!/bin/bash

pwd=$(pwd)
datadir=$pwd/data
echo $datadir

mongi=/mnt/home/Apps/mongo/bin/mongoimport
$mongi  \
--db bl1 \
--collection blend \
--file json/post1.json

