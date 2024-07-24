document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectButton');
    const chatPopup = document.getElementById('chatPopup');
    const closePopup = document.getElementById('closePopup');
    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const emailInput = document.getElementById('emailInput');
    const sendMessageButton = document.getElementById('sendMessage');

    // Function to append messages to the chat window
    function appendMessage(email, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${email}: ${message}`;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }

    // Handle sending messages
    sendMessageButton.addEventListener('click', function() {
        const email = emailInput.value;
        const message = messageInput.value;
        if (message && email) {
            appendMessage(email, message);
            messageInput.value = ''; // Clear input field
        }
    });

    // Optional: Allow Enter key to send message
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessageButton.click();
        }
    });

    // Show chatroom popup
    connectButton.addEventListener('click', function() {
        chatPopup.style.display = 'flex';
    });

    // Close chatroom popup
    closePopup.addEventListener('click', function() {
        chatPopup.style.display = 'none';
    });

    // Close chatroom popup if clicking outside of it
    chatPopup.addEventListener('click', function(e) {
        if (e.target === chatPopup) {
            chatPopup.style.display = 'none';
        }
    });
});
