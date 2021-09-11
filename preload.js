const { ipcRenderer, contextBridge, remote } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            console.log(message);
            ipcRenderer.send('notify', message);
        }
    },
    batteryApi: {

    },
    filesApi: {

    },
    windowApi: {
        minimizeWindow() {
            let window = remote.getCurrentWindow();
            window.minimize();
        },
        maximizeWindow() {
            let window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        },
        closeWindow() {
            let window = remote.getCurrentWindow();
            window.close();
        }
    }
})