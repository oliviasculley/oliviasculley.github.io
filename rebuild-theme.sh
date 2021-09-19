#!/usr/bin/env bash
set -eoux pipefail

(cd themes/tranquilpeak && npm run build) && \
  hugo server \
    --port=4000 \
    --bind=0.0.0.0 \
    --baseURL=https://dev.sculley.dev \
    --appendPort=false
