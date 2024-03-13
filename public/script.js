const socket = io();

// function sendMessage() {
//   const messageInput = document.getElementById('message-input');
//   const message = messageInput.value.trim();
  
//   if (message !== '') {
//     socket.emit('message', message);
//     messageInput.value = '';
//   }
// }

function sendMessage() {
    const messageBox = document.getElementById('message-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = 'hello';
    messageBox.appendChild(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;
  }

socket.on('message', (message) => {
  const messageBox = document.getElementById('message-box');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  messageBox.appendChild(newMessage);
  messageBox.scrollTop = messageBox.scrollHeight;
});
