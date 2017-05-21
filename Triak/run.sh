#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build
ng build --prod

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Serve
cd dist
http-server
