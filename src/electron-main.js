const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 540,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile('dist/index.html');
  win.setAlwaysOnTop(true); // 设置窗口总是在最上层
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
