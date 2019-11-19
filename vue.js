// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const app = require('electron').remote.require('./app') 

var afficheur = require('electron').ipcRenderer;

function afficherChansons()
{
  var titreDesChansons = document.querySelector('#boite-liste-chansons > h3');
  titreDesChansons.innerHTML - 'Liste des chansons';
  console.log('afficherChansons()');
}

afficheur.on('afficher-chansons', (evenement, chansons) => 
{
  var vueListeChansons = document.getElementById('liste-chansons');  
    console.log('afficher-chansons');
    console.log(chansons);
    for(chanson of chansons)
    {
        vueListeChansons.innerHTML += '<li>'+chanson+'</li>'
    }
} );

