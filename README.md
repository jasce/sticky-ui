
# sticky-ui
[![Build Status](https://travis-ci.org/jasce/sticky-ui.svg?branch=dev)](https://travis-ci.org/jasce/sticky-ui)

An integratable chat client.

### Instructions

The setup uses precommit hook in order to check and run some scripts before any code is commited locally.

- At First, a lint scripts runs for javascript files(js, jsx) and sass files.
- Then, code gets formatted as per community's recommendation.
- Then, a commit script runs to check the format of the commit message. Recommended commit message is described below.


### Installation/Usage

- Clone the repo.
- cd repo
- Run ```yarn ``` to install dependencies.
- Run ``` npm start ``` to start the dev server.
- Run ``` npm run deploy ``` to deploy to the github pages.

### Commit Message Format

- A valid commit assumes the following structure:
 
 ```type: test commit-message```, where type can take any of the following values:

```
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
]
```
 - Commit message length must not exceed 72 words.

 - Commit message must be in all lowercase.

 - Commit message must contain a type(any value in the above provided).


### Contributions

Contributions for this project are always welcome, just drop a mail at ```jascee.gtbit@gmail.com```, so that I can assign the push access. Or you can always contribute by raising issues and opening pull requests :)

Cheers !!
