#!/bin/sh

# Script to create a new Git branch

branch_name="$1"

# Create a new branch
git checkout -b "$branch_name"
echo "Created and switched to branch: $branch_name"
