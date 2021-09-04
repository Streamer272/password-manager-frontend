const { app, BrowserWindow } = require('electron')

function createWindow () {
    const mainWindow = new BrowserWindow({
        minWidth: 400,
        minHeight: 300,
        width: 800,
        height: 600,
        maxWidth: 1200,
        maxHeight: 900,

        maximizable: false,

        webPreferences: {
            nodeIntegration: true,
            // devTools: false
        }
    });

    // mainWindow.setMenu(null);

    // load the index.html from a url
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
