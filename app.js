const OctadeskIframe = require('@octadesk/iframe');

const APP_ID = 'c454fade-8245-11e9-bc42-526af7764f64';

// create a instance of service with your app id
window.addEventListener('load', function() {
  const octadeskIframe = new OctadeskIframe(APP_ID);

  // listen the octadesk events
  window.addEventListener('octadesk_onSendUserLogged', function(e) {
    const user = e.detail;
    console.log('octadesk_onSendUserLogged: ', user);
    renderEvent(`userLogged recebido`);
  });

  window.addEventListener('octadesk_onSendUserToken', function(e) {
    const userToken = e.detail;
    console.log('octadesk_onSendUserToken: ', userToken);
    renderEvent(`userToken recebido`);
  });

  window.addEventListener('octadesk_onOpenTicket', function(e) {
    const ticket = e.detail;
    console.log('octadesk_onOpenTicket: ', ticket.number);
    renderEvent(`ticket aberto: ${ticket.number}`);
  });

  window.addEventListener('octadesk_onOpenPerson', function(e) {
    const person = e.detail;
    console.log('octadesk_onOpenPerson: ', person);
    renderEvent(`pessoa aberta: ${person.name}`);
  });

  window.addEventListener('octadesk_onAfterSaveTicket', function(e) {
    const ticket = e.detail;
    console.log('octadesk_onAfterSaveTicket: ', ticket);
    renderEvent(`ticket salvo: ${ticket.number}`);
  });

  window.addEventListener('octadesk_onAfterSavePerson', function(e) {
    const person = e.detail;
    console.log('octadesk_onAfterSavePerson: ', person);
    renderEvent(`pessoa salva: ${person.name}`);
  });

  const renderEvent = renderText => {
    const li = document.createElement('li');
    li.innerHTML = renderText;
    document.getElementById('events').appendChild(li);
  };

  // tell octadesk to connect
  octadeskIframe.connect();
  console.log('App connected');
});
