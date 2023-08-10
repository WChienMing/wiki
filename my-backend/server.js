// server.js
const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

const electronMainPath = path.resolve(__dirname, '../src/electron-main.js');

app.get('/open-electron', (req, res) => {
  exec(`electron ${electronMainPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error}`);
      return res.status(500).send(error);
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Electron window opened!');
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
