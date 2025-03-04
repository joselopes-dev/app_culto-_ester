if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
 }

  navigator.serviceWorker.register('/path/to/service-worker.js') 

  .then(function(registration) { 
    console.log('Service worker registrado com sucesso:', registration); 
  }) 
  .catch(function(error) { 
    console.log('Falha no registro do service worker:', error); 
  });