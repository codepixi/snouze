// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const app = require('electron').remote.require('./app') 

function afficherChansons()
{
  var vueListeChansons = document.getElementById('liste-chansons');  
  vueListeChansons.innerHTML = '<li>Test une chanson</li>';  
  var titreDesChansons = document.querySelector('#boite-liste-chansons > h3');
  titreDesChansons.innerHTML - 'Liste des chansons';
}

