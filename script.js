function openChat() {
  document.getElementById("chatbox").style.display = "block";
}

function sendMessage() {
  let input = document.getElementById("userInput").value;
  addMessage("You: " + input);

  let response = getAIResponse(input);
  addMessage("AI: " + response);

  document.getElementById("userInput").value = "";
}

function addMessage(msg) {
  let div = document.getElementById("messages");
  div.innerHTML += "<p>" + msg + "</p>";
}

function getAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("price")) {
    return "Our properties start from $50,000. Can I know your budget?";
  }

  if (input.includes("buy")) {
    return "Great! I can help you find the perfect home. Can I get your name and contact number?";
  }

  if (input.includes("hello")) {
    return "Hello! Looking to buy or rent a property?";
  }

  return "Can you tell me more about what you're looking for?";
}