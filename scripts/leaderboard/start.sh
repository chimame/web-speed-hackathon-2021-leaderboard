#!/bin/sh

yarn run dev &

while [ ! -f ./build/index.js ]
do
  sleep 2
done

yarn run miniflare --watch
