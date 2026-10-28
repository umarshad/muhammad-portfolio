#!/bin/sh
# Builds resume/Muhammad_Umar_Resume.pdf from resume.html with headless Chrome (A4, text-based, ATS friendly).
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --allow-file-access-from-files \
  --print-to-pdf=Muhammad_Umar_Resume.pdf "file://$(pwd)/resume.html" 2>/dev/null
echo "built resume/Muhammad_Umar_Resume.pdf"
