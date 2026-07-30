const chatBox = document.getElementById("chatBox");
const aiInput = document.getElementById("aiInput");
const sendAI = document.getElementById("realSendAI");

async function sendMessage() {
    const message = aiInput.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = "👤 " + message;
    chatBox.appendChild(userMessage);

    aiInput.value = "";
    sendAI.disabled = true;
    sendAI.textContent = "Thinking...";

    const aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";
    aiMessage.textContent = "🤖 LFE AI Buddy is thinking...";
    chatBox.appendChild(aiMessage);

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        aiMessage.textContent = "🤖 " + (data.answer || data.error);

    } catch (error) {
        aiMessage.textContent = "🤖 Sorry, I could not connect to the AI server.";
    }

    sendAI.disabled = false;
    sendAI.textContent = "Send";
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendAI.addEventListener("click", sendMessage);

aiInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});