function toggleChat(){

const chat =
document.getElementById("chatBox");

chat.style.display =
chat.style.display === "flex"
? "none"
: "flex";

}

function sendMsg(){

const input =
document.getElementById("msg");

const text =
input.value.trim();

if(!text) return;

const messages =
document.getElementById("messages");

messages.innerHTML += `
<div class="user">
${text}
</div>
`;

input.value="";

messages.scrollTop =
messages.scrollHeight;

setTimeout(()=>{

messages.innerHTML += `
<div class="bot">
Спасибо. Сообщение передано поддержке 👍
</div>
`;

messages.scrollTop =
messages.scrollHeight;

},700);

}