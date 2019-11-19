//const {app, BrowserWindow} = require('electron')
const electron = require('electron')
const app = electron.app
const path = require('path')
const fs = require('fs')
const console = require('console');
app.console = new console.Console(process.stdout, process.stderr);

let fenetre;

function creerFenetre () 
{
    fenetre = new electron.BrowserWindow({ width: 800,height: 600, frame:false  })
    fenetre.loadFile('index.html')
    fenetre.webContents.openDevTools()
    fenetre.on('closed', function () { fenetre = null })
}

app.on('ready', creerFenetre) // Some APIs can only be used after this event occurs.

