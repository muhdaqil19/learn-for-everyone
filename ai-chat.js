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



    let answer = "I'm still learning! Try asking about Science, Maths, or school topics.";

    let question = message.toLowerCase();



    if (question.includes("hi") || question.includes("hello")) {

        answer = "Hello! 👋 I am LFE AI Buddy. I can help you understand school topics.";

    }

    else if (question.includes("photosynthesis")) {

        answer = "Photosynthesis is the process where plants make food using sunlight, water, and carbon dioxide. Chlorophyll helps plants absorb sunlight.";

    }

    else if (question.includes("gravity")) {

        answer = "Gravity is a force that pulls objects towards Earth. It keeps us on the ground and makes objects fall.";

    }

    else if (question.includes("newton")) {

        answer = "Newton's First Law explains that an object stays at rest or keeps moving unless an external force acts on it.";

    }

    else if (question.includes("water cycle")) {

        answer = "The water cycle includes evaporation, condensation, precipitation, and collection.";

    }

    else if (question.includes("math")) {

        answer = "I can help with Maths concepts like formulas, equations, and problem solving.";

    }


    aiMessage.textContent = "🤖 " + answer;


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