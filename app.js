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


// https://freesound.org/people/BenjaminNelan/sounds/435508/ - Rooster Sounds » Rooster Crow 1
// https://freesound.org/people/ecfike/sounds/135127/ - Fiddlin' Around » Arkansas Traveler.wav
// https://freesound.org/people/Tomlija/sounds/110334/ - music_recording_excerpts » Traditional Eastern instrument Sargija - improvisation played by Boris Todorovic.aif
// https://freesound.org/people/RafaelCaro/sounds/336565/ - Tocs de gralla » Toc de matinades (2)
function listerChansons()
{
    const listeChansons = fs.readdirSync('musique');
    console.log(listeChansons);
    return listeChansons;
}

app.on('ready', listerChansons) 


