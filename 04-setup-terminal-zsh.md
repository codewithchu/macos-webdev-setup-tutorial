# Setup terminal and zsh

Catalina comes with zsh as the default shell.

## Check Version

```sh
zsh --version
which zsh
```

## Install Oh My Zsh.

```sh
cd ~/
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Re Add NVM to .zshrc

```sh
#.zshrc
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# This loads nvm
```

Update Changes

```sh
source ~/.zshrc
```

## Nerd Font

Download MesloLGS NF Font

- https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k

### Install Theme

\$ZSH_CUSTOM is the director for Oh My Zsh custom ~/.oh-my-zsh/custom

```sh
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

### Install Plugins

- https://github.com/zsh-users
- https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

nano ~/.zshrc
```

### Update .zshrc

```sh
#.zshrc
#change theme
ZSH_THEME="powerlevel10k/powerlevel10k"

#auto correction
ENABLE_CORRECTION="true"

#add plugins
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

update changes

```sh
source ~/.zshrc
```

### Permissions Issue

You might get a Permission issue when updating the changes.

#### First Method Fix

```sh
# .zshrc
# Path to your oh-my-zsh installation.
ZSH_DISABLE_COMPFIX=true
export ZSH="/Users/cwc/.oh-my-zsh"
```

#### Second Method Fix

If the first method doesn't work

```sh
chmod 755 /usr/local/share/zsh
chmod 755 /usr/local/share/zsh/site-functions
```

update changes

```sh
source ~/.zshrc
```

## p10k

Configure p10k theme.

```sh
#run configuration
p10k configure
```

### p10k configuration file .p10k.zsh

Shorten up your directory path

```sh
nano ~/.p10k.zsh
```

```sh
#.p10k.zsh
typeset -g POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_last

typeset -g POWERLEVEL9K_SHORTEN_DIR_LENGTH=1
```

## Terminal Themes

https://github.com/lysyi3m/macos-terminal-themes

- Molokai (I use)

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
