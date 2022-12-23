#!/usr/bin/env bash

# exit on error
set -o errexit

npm install
bundle install
rails db:migrate
rails db:seed #if needed
bundle exec rails assets:precompile