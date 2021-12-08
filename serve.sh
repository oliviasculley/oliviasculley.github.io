#!/usr/bin/env bash
set -eoux pipefail

hugo serve \
  --port=4000 \
  --liveReloadPort 443 \
  --bind=0.0.0.0 \
  --baseURL=https://dev.sculley.dev \
  --appendPort=false
