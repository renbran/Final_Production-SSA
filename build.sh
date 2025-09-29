#!/bin/bash

# Install dependencies
npm ci

# Build the project
npm run build

# Ensure dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found after build"
  exit 1
fi

echo "Build completed successfully"