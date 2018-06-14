# sticky-ui
An integratable chat client.

## Instructions

The setup uses precommit hook in order to check and run some scripts before any code is commited locally.

- At First, a lint scripts runs for javascript files(js, jsx) and sass files.
- Then, code gets formatted as per community's recommendation.
- Then, a commit script runs to check the format of the commit message. Recommended commit message is described below.


## Installation/Usage

- Clone the repo.
- cd repo
- Run ```yarn ``` to install dependencies.
- Run ``` npm install ``` to start the dev server.

## Commit Message Format

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
