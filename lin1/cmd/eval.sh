#!/bin/bash

foo=10
x=foo

y='$'$x
echo $y
# $foo

y="$"$x
echo $y
# $foo


eval y='$'$x
echo $y
# 10
