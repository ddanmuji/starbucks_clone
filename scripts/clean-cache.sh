#!/bin/sh

find . -name ".cache" -print -type d -depth -exec rm -rf {} \;
echo -e "\033[32m" ----- clean dist end ----- "\033[m"