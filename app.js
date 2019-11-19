//const {app, BrowserWindow} = require('electron')
const electron = require('electron')
const app = electron.app
const path = require('path')
const fs = require('fs')
const console = require('console');
app.console = new console.Console(process.stdout, process.stderr);

let fenetre;
let affichage;

function creerFenetre () 
{
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required")
    fenetre = new electron.BrowserWindow({ width: 800,height: 600, frame:true, webSecurity: false, webPreferences: {nodeIntegration: true}  }) // https://stackoverflow.com/questions/44391448/electron-require-is-not-defined // https://electronjs.org/docs/api/remote
    fenetre.loadFile('index.html')
    fenetre.webContents.openDevTools()
    fenetre.on('closed', function () { fenetre = null })
    affichage = fenetre.webContents    // https://electronjs.org/docs/api/web-contents#contentsexecutejavascriptcode-usergesture
    affichage.on('did-finish-load', () => { initialiser();})
}

app.on('ready', creerFenetre) // Some APIs can only be used after this event occurs.


// https://freesound.org/people/BenjaminNelan/sounds/435508/ - Rooster Sounds » Rooster Crow 1
// https://freesound.org/people/ecfike/sounds/135127/ - Fiddlin' Around » Arkansas Traveler.wav
// https://freesound.org/people/Tomlija/sounds/110334/ - music_recording_excerpts » Traditional Eastern instrument Sargija - improvisation played by Boris Todorovic.aif
// https://freesound.org/people/RafaelCaro/sounds/336565/ - Tocs de gralla » Toc de matinades (2)

function initialiser()
{
    listerChansons();
}

function listerChansons()
{
    const listeChansons = fs.readdirSync('musique');
    console.log(listeChansons);
    affichage.send('afficher-chansons', listeChansons); // https://stackoverflow.com/questions/36773711/passing-data-to-windows-in-electron
    //affichage.executeJavaScript('afficherChansons()', true);
    //return listeChansons;
}


