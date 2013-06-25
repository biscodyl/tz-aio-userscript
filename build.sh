#!/bin/bash

if [[ "$PWD" =~ TzAiOv2$ ]]; then
  WORKDIR="$PWD"
  echo -n "Enter a description for the commit: "
  read gitcommitmsg
  read -p "Is '""$gitcommitmsg""' correct? (y/n): " CONT
  if [ "$CONT" == "y" ]; then
    echo "\$ compass compile ""$WORKDIR/source"
    cd "$WORKDIR/source" && compass compile "$PWD"
    cd "$WORKDIR"
    echo "\$ git add . ; git commit -am ""$gitcommitmsg""; git push origin master"
    git add .
    git commit -am "$gitcommitmsg"
    git push origin master
    SSHHOME=$($HOME/bin/keyring_password.sh "binero unixpath")
    SSHUSER=$($HOME/bin/keyring_password.sh "binero sshuser")
    SSHURL=$($HOME/bin/keyring_password.sh "binero sshurl")
    rsync --verbose --progress --stats --delete --times --recursive --copy-links \
      --exclude ".*" --exclude "build.sh" --exclude "*sublime*" --exclude "jshint" \
      -e ssh "$PWD/" \
    "$SSHUSER""@""$SSHURL"":""$SSHHOME""/elundmark.se/public_html/_files/js/tz-aio/"
    sleep 3
  else
    echo "Exiting..."
    exit 1
  fi
else
  exit 1
fi
