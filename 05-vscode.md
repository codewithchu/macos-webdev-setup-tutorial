# Setup VsCode

https://code.visualstudio.com/

## Extentions

Search and download extentions<br />
https://marketplace.visualstudio.com/VSCode

- Prettier
- Live Server
- Monokai++
- Material Icon
- JavaScript (es6) Code Snippets
- Project Manager
- Bracket Pair Colorizer

## Basic Shortcut

Shortcuts I find useful

| Shortcut              | Desc                                  |
| --------------------- | ------------------------------------- |
| `⌘` + `⇧` + `P`       | Show All Commands                     |
| `⌘` + `,`             | Preferences                           |
| `⌃` + `               | Terminal                              |
| `⌥` + `z`             | Toggle Wordwrap                       |
| `⌘` + `⌥` + `↑` / `↓` | Create multiple cursors /w arrow keys |
| `⌥` + `click`         | Create multiple cursors /w mouse      |
| `⌘` + `⇧` + `l`       | Adds curor for every instance         |
| `⌥` + `⇧` + `↑` / `↓` | Duplicate Code                        |

### Keyboard Legend

| command | option | shift | control | delete |
| ------- | ------ | ----- | ------- | ------ |
| ⌘       | ⌥      | ⇧     | ⌃       | ⌫      |

## Settings

Settings I find Useful

| Settings            | Value                  |
| ------------------- | ---------------------- |
| editor fontSize     | 16                     |
| save on format      | ✓                      |
| Default formatter   | esbenp.prettier-vscode |
| Tab Size            | 2                      |
| Word Wrap           | One                    |
| Print Width         | 100                    |
| Single Quote        | ✓                      |
| UseTabs             | ✓                      |
| Terminal fontFamily | MesloLGS NF            |
| Terminal fontSize   | 16                     |

JSON setting file

```js
{
    "workbench.colorTheme": "Monokai++",
    "workbench.iconTheme": "material-icon-theme",
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.accessibilitySupport": "on",
    "prettier.printWidth": 100,
    "prettier.singleQuote": true,
    "prettier.useTabs": true,
    "editor.fontSize": 16,
    "terminal.integrated.fontFamily": "MesloLGS NF"
    "terminal.integrated.fontSize": 16
}
```

## setup sample html file

- Emmet html
- Save on format
- Show Live Server

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
