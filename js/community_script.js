let nickname = "unknown_user";

function saveNick() {
    const input = document.getElementById('nicknameInput');
    if (input.value.trim() !== "") {
        nickname = input.value.trim();
        input.value = "";
        alert("Нікнейм встановлено: " + nickname);
    }
}

function addMessage(containerId, user, text) {
    const container = document.getElementById(containerId);
    const msg = document.createElement('div');
    msg.classList.add('message');
    msg.innerHTML = `<span>${user}:</span> ${text}`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function sendComment() {
    const input = document.getElementById('commentInput');
    if (input.value.trim() !== "") {
        addMessage('comments', nickname, input.value.trim());
        input.value = "";
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (input.value.trim() !== "") {
        addMessage('chat', nickname, input.value.trim());
        input.value = "";
    }
}

// Живий час
function updateTime() {
    document.getElementById('liveTime').innerText = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();