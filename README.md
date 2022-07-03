# alfred-vscode2


> [Alfred](https://www.alfredapp.com) workflow that allows you to browse and open rencent [Visual Studio Code](https://code.visualstudio.com/) projects or simply open specified folders/files.

![](./docs/screenshot.png)

## Prerequisites

You need

- [Node.js 8+](https://nodejs.org)
- [Alfred](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade
- [Visual Studio Code Command Line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

## Installation

```bash
npm install --global alfred-vscode2
```


## Usage


Simply type `c` followed by space to list all projects. Optionally type a query to search for a
specific project or group. The overall list shows 100 projects at max.

Select a project and press <kbd>Enter</kbd> to open it in VS Code or Code Insiders.

Hold <kbd>Alt</kbd> when pressing <kbd>Enter</kbd> to open the project path in Terminal - You can set
the terminal app in the Workflow variables view.

Hold <kbd>Shift</kbd> when pressing <kbd>Enter</kbd> to open the project path in Finder.


## Disclaimer

This project is based on [kbshl](https://github.com/kbshl)'s [alfred-vscode](https://github.com/kbshl/alfred-vscode), MIT LICENSED.