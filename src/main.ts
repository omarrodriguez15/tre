import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.webContents.openDevTools();
  win.loadURL(`file://${app.getAppPath()}/index.html`)
}

app.on('ready', createWindow);