# Setup ssh

We will setup our ssh key to connect to Github.

## Manage your ssh

Typically you would have one key pair for your machine but sometimes you need multiple<br />
ie: _personal, work internal and client._

### Setup ssh config file

This files lets us setup diffent host to use our ssh key.

```
nano ~/.ssh/config
```

```sh
#~/.ssh/config

Host *
  AddKeysToAgent yes
  UseKeychain yes

# git clone git@github.com:[account]/[project].git
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
```

## Add Identity to SSH

```sh
ssh-add ~/.ssh/id_rsa
```

### Verify that the Identity was added

```
#List fingerprints of all identities.
ssh-add -l

#List public key parameters of all identities.
ssh-add -L

```

### copy public key

Add the Public key to the server you want to connect to. ie: github.com

```sh
#Copy Public key to clipboard.
pbcopy < ~/.ssh/id_rsa.pub
```

## test connection

```
ssh -T github.com
```

## Other Stuff

### Delete all identities

For when you need to remove your identities.

```sh
#Delete all identities.
ssh-add -D
```

### Examples Host

Example Host for different situations.

```sh
#EXAMPLES
# ssh cwc-server
Host cwc-server
  HostName ssh.example.com
  Port 1111
  User cwc
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes

# ssh cwc-client
Host cwc-client
  HostName client.example.com
  User cwc
  IdentityFile ~/.ssh/id_rsa_client
  IdentitiesOnly yes

# git clone git@gh-work:[account]/[project].git
Host gh-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_work
  IdentitiesOnly yes

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
