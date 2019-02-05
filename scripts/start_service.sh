#!/bin/bash
cd /opt/merrn/web
serve -p 3000 build > /dev/null 2>&1 &

exit
