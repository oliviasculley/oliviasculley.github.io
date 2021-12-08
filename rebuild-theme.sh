#!/usr/bin/env bash
set -eoux pipefail

(cd themes/tranquilpeak && npm run build) && ./serve.sh
