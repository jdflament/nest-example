#!/bin/sh

# Check if node_modules exists and if not, run npm ci
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

if [ $# -eq 0 ]; then
  echo "No command provided, sleeping for debugging..."
  sleep 9999d
else
  echo "Running as user: foo"
  exec su-exec foo "$@"
fi
