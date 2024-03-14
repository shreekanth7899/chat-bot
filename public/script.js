const socket = io();

// Function to send a message to the server
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  
  if (message !== '') {
    // Send the message to the server
    socket.emit('message', message);

    // Add user's message to the message box
    appendMessage('You', message);

    // Clear the message input
    messageInput.value = '';
  }
}

// Function to append a message to the message box
function appendMessage(sender, message) {
  const messageBox = document.getElementById('message-box');
  const newMessage = document.createElement('div');
  newMessage.textContent = `${sender}: ${message}`;
  newMessage.classList.add('message');
  if (sender === 'user') {
    newMessage.classList.add('user-message');
  } else {
    newMessage.classList.add('chatbot-message');
  }
  messageBox.appendChild(newMessage);
  messageBox.scrollTop = messageBox.scrollHeight;
}

// Handle incoming messages from the server
socket.on('message', (message) => {
  let response;
  if (message.toLowerCase().includes('hello')) {
    response = 'Hi there!';
  } else if (message.toLowerCase().includes('how are you')) {
    response = "I'm just a bot, but I'm here to help!";
  } else {
    response = "I'm sorry, I'm not sure how to respond to that.";
  }
  appendMessage('Chatbot', response);
});

// Add event listener for the "Send" button
document.getElementById('send-button').addEventListener('click', sendMessage);
