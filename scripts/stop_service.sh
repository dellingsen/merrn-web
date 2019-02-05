#!/usr/bin/env bash
isExistApp=`pgrep node`
if [[ -n  $isExistApp ]]; then
    sudo kill ${isExistApp}
fi

exit