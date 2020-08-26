#!/bin/bash
git pull
git add *
git add -A
git commit -m "$0"
git pull
git push
