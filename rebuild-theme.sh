#!/usr/bin/env sh
set -eoux pipefail

(cd themes/tranquilpeak && npm run build) && hugo server
