#!/bin/bash

if [[ "$PWD" =~ TzAiOv2$ ]] && [[ -f /tmp/.password_manager ]]; then
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
		echo -n "Version release number?: "
		read gitversionnumber
		echo -n "Enter a description for the commit: "
		read gitcommitmsg
		if [[ "$gitversionnumber" =~ [0-9] ]] ; then
			gitcommitmsg="v$gitversionnumber $gitcommitmsg"
		fi
		read -p "Is '""$gitcommitmsg""' correct? (y/n): " CONT
		if [[ $? -eq 0 ]] && [[ "$CONT" == "y" || ! $CONT || "$CONT" = "" ]] ; then
			echo "\$ git add . ; git commit -am ""$gitcommitmsg""; git push origin master"
			git add .
			git commit -am "$gitcommitmsg"
			git push origin master
			if [[ "$gitversionnumber" =~ [0-9] ]] ; then
				git tag "$gitversionnumber"
				git push --tags origin master
			fi
		else
			echo "Exiting..."
			exit 1
		fi
	}
	reminder=$'\n'"Did you remember to update all version info?"$'\n'
	if [[ "$1" ]] && [[ ! "$1" =~ ^all$ ]] ; then
		for a in $* ; do
			if [[ "$a" = "sass" ]] ; then
				sassCompile
			fi
			if [[ "$a" = "git" ]] ; then
				gitCommit
			fi
			if [[ "$a" = "sftp" ]] ; then
				rsyncWeb
			fi
		done
		echo "$reminder"
		sleep 2
		exit 0
	elif [[ "$1" ]] && [[ "$1" =~ ^all$ ]] ; then
		sassCompile
		gitCommit
		rsyncWeb
		echo "$reminder"
		sleep 2
		exit 0
	else
		echo "Missing commandline argument[s]"
		exit 1
	fi
else
	exit 1
fi
