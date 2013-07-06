#!/bin/bash

if [[ "$PWD" =~ TzAiOv2$ ]]; then
  rsyncWeb () {
    SSHHOME=$(/tmp/.password_manager "binero-ssh-path")
    SSHUSER=$(/tmp/.password_manager "binero-ssh-user")
    SSHURL=$(/tmp/.password_manager "binero-ssh-url")
    rsync --verbose --progress --stats --times --recursive --copy-links \
      --exclude ".*" --exclude "build.sh" --exclude "*sublime*" \
      --exclude "/jshint" --exclude "/jslint" \
      -e ssh "$PWD/" \
    "$SSHUSER""@""$SSHURL"":""$SSHHOME""/elundmark.se/public_html/_files/js/tz-aio/"
  }
  sassCompile () {
    WORKDIR="$PWD"
    echo "\$ compass compile ""$WORKDIR/source"
    cd "$WORKDIR/source" && compass compile "$PWD"
    cd "$WORKDIR"
  }
  gitCommit () {
    echo -n "Enter a description for the commit: "
    read gitcommitmsg
    read -p "Is '""$gitcommitmsg""' correct? (y/n): " CONT
    if [ "$CONT" == "y" ]; then
      echo "\$ git add . ; git commit -am ""$gitcommitmsg""; git push origin master"
      git add .
      git commit -am "$gitcommitmsg"
      git push origin master
    else
      echo "Exiting..."
      exit 1
    fi
  }
  if [[ "$1" ]] && [[ ! "$1" =~ ^all$ ]]; then
    for a in $* ; do
      if [[ "$a" = "sass" ]]; then
        sassCompile
      fi
      if [[ "$a" = "git" ]]; then
        gitCommit
      fi
      if [[ "$a" = "sftp" ]]; then
        rsyncWeb
      fi
    done
    sleep 3
    exit 0
  elif [[ "$1" ]] && [[ "$1" =~ ^all$ ]]; then
    sassCompile
    gitCommit
    rsyncWeb
    sleep 3
    exit 0
  else
    echo "Missing commandline argument[s]"
    exit 1
  fi
else
  exit 1
fi
