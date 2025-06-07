#!/bin/bash
cd /home/kavia/workspace/code-generation/auravibe-35535-44ed5a5a/aura_vibe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

