# Install and Setup

General Setup and App Install on MacOS Catalina (10.15.7)

## Terminal.app

Open up /Applications/Utilities/Terminal.app

## Command Line Tools

Mac OS Command Line toolkit has a bunch of utilities, and compilers. All of these commands come out of the box for Linux.

## Check Version

This check isn't that reliable.

```sh
xcode-select -p
```

Try one of the commands below on a fresh install of MacOS Catalina this should prompt the install of command line tools. if its not installed

```sh
git
make
GCC
```

## Manual Install

```sh
#this might not work anymore
xcode-select --install
```

> **NOTE**
>
> You might get this error
>
> Can’t install the software because it is not currently available from the Software Update server.
>
> **Download from Apple Developers Site**
>
> Sign in with your Apple ID and download from [Apple's Developers site](https://developer.apple.com/download/more/?=command%20line%20tools 'Mac OS Command Line Tool').

## Homebrew

https://brew.sh

Installing Homebrew and CLI tool for installing applications.

> It also prompts to install Command Line Tools if you don't have it installed.

### Check version

```sh
brew --version
```

Install Command

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Useful Commands to know

```sh
brew update
brew upgrade
brew cleanup

#list brew
brew list
brew list --cask
```

### Install Brew

https://brew.sh/analytics

Most Popular installs

```sh
brew install \git \wget
```

```sh
#browsers
brew cask install \google-chrome \firefox \opera

#apps
brew cask install \visual-studio-code \rectangle \figma


#OPTIONAL
#Other Text Editors
brew cask install \atom \sublime-text

#Other App if you want
brew cask install \slack \spotify \zoom \vlc \iterm2 \postman \postgres

```

# Shell

Catalina comes with zsh as the default shell.

check version

```sh
zsh --version
which zsh
```

```sh
brew install zsh
chsh -s /bin/zsh
```

If prompted enter `0`

# Node.js, npm with NVM

Better to install node with nvm instead of homebrew. Allows us the flexibility to easily update node, have multiple version as well.

## Install nvm

Allow you to manage your node version

- https://github.com/nvm-sh/nvm

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

restart terminal

### check version

```sh
nvm --version
```

### Debug

if you're comand nvm isn't recognized try adding the code to your shell profile

we're using zsh so you would add it to.

```
nano ~/.zshrc
```

```sh
#.zshrc
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# This loads nvm
```

### other shell profiles

- ~/.bash_profile
- ~/.profile
- ~/.bashrc

## Install Node

```sh
nvm install node
```

```sh
nvm use node
```

## Check Node and NPM Version

```sh
node -v && npm -v
```

## Update nvm

Later down the road if you want to update NVM

```sh
nvm install node --reinstall-packages-from=node
```

## Change version

https://nodejs.org/en/download/releases/
Find node vesion

```sh
nvm install xx.xx
nvm use xx.xx

#list node version
nvm ls
```

And to set the default:

```sh
nvm alias default xx.xx

#list nvm
nvm alias default xx.xx

#check version
node -v && npm -v
```

# Git

Version Control

Add Default User Info

```sh
git --version
git config --global user.name "Your Name"
git config --global user.email "youremail@email.com"
```

# ssh

Create a SSH Key

```sh
ssh-keygen
```

save as /home/username/.ssh/id_rsa

Type in passphrase this will be extra password for security make sure you remember this or store it somewhere safe.

- [Install Applications](02-install-and-setup.md)
- [Rectangles](03-rectangles.md)
- [Terminal & zsh](04-setup-terminal-zsh.md)
- [VS Code](05-vscode.md)
- [Node & NPM](06-node-npm.md)
- [SSH](07-ssh.md)
- [Git & GitHub](08-git-setup.md)
- [Browsers](09-browsers.md)
- [Figma](10-figma.md)
