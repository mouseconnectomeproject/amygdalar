#!/usr/bin/env bash

set -eu

repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
main_branch="gh-deployment"
target_branch="gh-pages"
build_dir="_dist"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git add "$build_dir"

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi
git push -f origin "$main_branch":"$main_branch"

git subtree split --prefix _site -b "$target_branch"
git remote set-url "$remote_name" "$repo_uri"
git push -f origin "$target_branch":"$target_branch"
git branch -D "$target_branch"