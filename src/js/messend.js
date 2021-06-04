const pubnub = new PubNub({
  publishKey: 'pub-c-3d958f59-5546-4639-8ecb-4c104428ccc9',
  subscribeKey: 'sub-c-004e1c30-c490-11eb-a9de-a6433017f026',

});

function sendMessage(txt) {
  pubnub.publish({
    channel: 'msg',
    message: {
      text: txt,
    },
  });
}

pubnub.addListener({
  message(msg) {
    const chatMessage = document.getElementById('chat_message');
    const message = document.createElement('div');
    message.classList.add('chat_message_msg');
    message.innerHTML = msg.message.text;
    console.log(message);
    chatMessage.appendChild(message);
  },
});

pubnub.subscribe({
  channels: ['msg'],
});

function sendinput(event) {
  console.log(1);
  if (event.which === 13) {
    sendMessage(document.getElementById('chat_input').value);
    document.getElementById('chat_input').value = '';
  }
}

function sendbutton() {
  sendMessage(document.getElementById('chat_input').value);
  document.getElementById('chat_input').value = '';
}

window.sendbutton = sendbutton;
window.sendinput = sendinput;
