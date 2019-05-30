const OctadeskIframe = require("@octadesk/iframe");

// create a instance of service with your app id
const octadeskIframe = new OctadeskIframe(
  "86f854c4-4582-e911-bc42-526af7764f64"
);

// listen the octadesk events
window.addEventListener("octadesk_onSendUserLogged", function(e) {
  const user = e.detail;
  console.log("octadesk_onSendUserLogged: ", user);
});

window.addEventListener("octadesk_onSendUserToken", function(e) {
  const userToken = e.detail;
  console.log("octadesk_onSendUserToken: ", userToken);
});

window.addEventListener("octadesk_onOpenTicket", function(e) {
  const ticket = e.detail;
  console.log("octadesk_onOpenTicket: ", ticket);
});

window.addEventListener("octadesk_onOpenPerson", function(e) {
  const person = e.detail;
  console.log("octadesk_onOpenPerson: ", person);
});

window.addEventListener("octadesk_onAfterSaveTicket", function(e) {
  const ticket = e.detail;
  console.log("octadesk_onAfterSaveTicket: ", ticket);
});

window.addEventListener("octadesk_onAfterSavePerson", function(e) {
  const person = e.detail;
  console.log("octadesk_onAfterSavePerson: ", person);
});

// tell octadesk to connect
octadeskIframe.connect();
