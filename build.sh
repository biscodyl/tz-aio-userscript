#!/bin/bash

if [[ "$PWD" =~ TzAiOv2$ ]]; then
  rsyncWeb () {
    SSHHOME=$(/tmp/.password_manager "binero-ssh-path")
    SSHUSER=$(/tmp/.password_manager "binero-ssh-user")
    SSHURL=$(/tmp/.password_manager "binero-ssh-url")
    rsync --verbose --progress --stats --delete --times --recursive --copy-links \
      --exclude ".*" --exclude "build.sh" --exclude "*sublime*" --exclude "jshint" \
      -e ssh "$PWD/" \
    "$SSHUSER""@""$SSHURL"":""$SSHHOME""/elundmark.se/public_html/_files/js/tz-aio/"
  }
  if [[ "$1" ]] && [[ "$1" = "sftp" ]]; then
    rsyncWeb
  else
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
      rsyncWeb
      sleep 3
    else
      echo "Exiting..."
      exit 1
    fi
  fi
else
  exit 1
fi
