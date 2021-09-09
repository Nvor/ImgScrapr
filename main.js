const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#303030",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

function toolingSetup() {
    installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
        console.log(`Added Extension: ${name}`);
    }).catch((err) => {
        console.log('Error ocurred', err);
    });
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })    
}

ipcMain.on('notify', (_, message) => {
    new Notification(
    {
        title: 'ImgScrapr', 
        body: message
    }).show();
})

app.whenReady().then(() => {
    toolingSetup();
    createWindow();
});