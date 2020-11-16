# Setup Git

Is a Open Source Version Control System.<br />
https://git-scm.com/

```sh
git --version
git config --global user.name "Your Name"
git config --global user.email "youremail@email.com"

nano ~/.gitconfig
```

```sh
#.gitconfig
[user]
  name   = Your Name
  email  = youremail@email.com
[github]
  user   = username
[alias]
  a      = add
  s      = status
  r      = reset
  cm     = commit -m
  cam    = commit -am
  uns    = rm --cached
  cob    = checkout -b
  co     = checkout
```

### List git global config

```sh
git config --global -l
```

press `q` to exit

### Setup a Git Project

```sh
mkdir macdevgit
cd macdevgit

touch readme.md
git init
git add .
git commit -m "Initial Commit"
git remote add origin git@github.com:[user]/[project].git
git push origin master
```

### List Branches

```
git branch --all
```

### Remove remote Git

```
git remote rm origin
```

> note: **origin** is the name of the remote

### Clone Project

```
git clone git@github.com:[user]/[project].git
```

## Table of Content

- [Install Applications](02-install-and-setup.md)
- [Rectangles](03-rectangles.md)
- [Terminal & zsh](04-setup-terminal-zsh.md)
- [VS Code](05-vscode.md)
- [Node & NPM](06-node-npm.md)
- [SSH](07-ssh.md)
- [Git & GitHub](08-git-setup.md)
- [Browsers](09-browsers.md)
- [Figma](10-figma.md)
