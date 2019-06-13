'use strict';

//console.log('\'Mockingjay \'Mockingjay! Content script');

function detectspecialkeys(e) {
  var evtobj = window.event ? event : e;
  if (evtobj.ctrlKey && String.fromCharCode(evtobj.which) === '1') localStorage.setItem('posMock', 'SIGCAP');
}

document.onkeypress = detectspecialkeys;