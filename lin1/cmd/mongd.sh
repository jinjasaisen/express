#!/bin/bash

pwd=$(pwd)
datadir=/mnt/data/db
echo $datadir

mongd=/mnt/home/Apps/mongo/bin/mongod
$mongd --dbpath $datadir  &
