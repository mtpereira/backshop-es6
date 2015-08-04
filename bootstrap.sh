#!/usr/bin/env bash

set -eu

function brew_installed { brew list -1 | grep -q -E "^$1$" ; }

function _stat {
  if [ $(which stat) == "/usr/bin/stat" ]; then
    stat -f "%Su" $@
  else
    stat -c "%U" $@
  fi
}

function _run {
  local cmd="${1}"
  local cmd_owner=$(_stat $(command -v "${cmd}"))
  shift

  if [ "$cmd_owner" = "$USER" ]; then
    "${cmd}" $@
  else
    echo "Requesting password for sudo ${cmd} $@..."
    sudo "${cmd}" $@
  fi
}

_run brew update
brew_installed python || _run brew install python

echo "sudo for upgrading pip..."
_run pip install --upgrade pip

echo "sudo for install virtualenv via pip..."
_run pip install virtualenv

virtualenv .virtualenv

set +u
source ./.virtualenv/bin/activate
set -u

pip install -r vagrant/requirements.txt

ansible-galaxy install -r vagrant/requirements.yml -p vagrant/roles/ --force --ignore-errors

vagrant up

echo "##############################################"
echo ""
echo "Run \"source $(pwd)/.virtualenv/bin/activate\""
echo "to get started!"
echo "When you're done, run \"vagrant destroy\" and \"deactivate\"."

