document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    let isUserMessage = true; 

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage(messageText, isUserMessage);
            messageInput.value = '';
            isUserMessage = !isUserMessage; 
        }
    });

    function appendMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-card');

        if (isUser) {
            messageDiv.classList.add('user-message-card');
            messageDiv.classList.add('right'); 
        } else {
            messageDiv.classList.add('left'); 
        }

        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
