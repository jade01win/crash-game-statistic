const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('main/index.html');


  mainWindow.on('closed', () => {
    app.quit();
  });
}

app.on('ready', createWindow);
