#!/usr/bin/env bash

# Create project root folder
mkdir -p ~/IdeaProjects/petstore && cd ~/IdeaProjects/petstore

# Add high level documentation files
touch README.md

# Add script to document base commands
echo '#!/usr/bin/env bash' > run.sh

# Ignore IntelliJ project config file in Git commits
echo ".idea" > .gitignore

###
# Generate a Progressive Web App (PWA) and phone app for viewing Petstore data
###
ionic start petstore-pwa tabs --type angular --capacitor --no-interactive --no-git

# Brings up project in Android Studio
ionic build && ionic capacitor run android -l --external

