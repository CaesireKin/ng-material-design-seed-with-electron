const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#FFFFFF',
        icon: 'file://' + __dirname + '/dist/favicon.ico'
    });

    // Dev Tools
    win.webContents.openDevTools()

    win.loadURL('file://' + __dirname + '/dist/index.html');

    win.on('closed', function() {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate',() => {
    if (win === null) {
        createWindow();
    }
});