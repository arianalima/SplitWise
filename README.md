# SplitWise
Repository for the backend of the inhouse made SplitWise.

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* Firebase CLI

### Backend Setup (Node.js)
1. Navigate to the project folder and install dependencies:

```bash
npm install
```

2. Add the Firebase credentials to the `config.js` file.

    * Run the command below for git to ignore the credentials and avoid pushing it to the public repository:
        ```bash
        git update-index --assume-unchanged .\src\config.js
        ```
        Use `--no-assume-unchanged` if you want to track back the changes on the config file.

3. Run the server:
```bash
npm start
```
