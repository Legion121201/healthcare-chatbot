const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;
  var j=0;

  // Clear input field
 
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);
  //Spilt input and save in words
  var words = input.split(" ");
  

  const dengue = ["rashes", "redspots", "apetiteloss", "backeyepain","highfever"];
  const TB = ["bloodcough", "mucuscough", "weightloss", "nightsweats","chills"];

  // Generate chatbot response
  for (var k = 0; k < words.length; k++){
  for (var i = 0; i < dengue.length; i++) {
    if (words[k] == dengue[i]) {
      j=j+1;
    }
}
  }
if (j>=3){
  const response = "you may have dengue";



  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
  j=0;
}

for (var k = 0; k < words.length; k++){
  for (var i = 0; i < TB.length; i++) {
    if (words[k] == TB[i]) {
      j=j+1;
    }
}
  }
if (j>=3){
  j=0;
  const response = "you may have tubercolosis";
  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
  
  const response2="Would you like us to refer best dotor for treatment?"
  let message2 = document.createElement('div');
  message2.classList.add('chatbot-message','chatbot');
  message2.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response2}</p>`;
  conversation.appendChild(message2);
  message.scrollIntoView({behavior: "smooth"});
  
  const input3=inputField.value;
  if (input3=="yes"){
  const response="Here is the best doctor";
  let message2 = document.createElement('div');
  message2.classList.add('chatbot-message','chatbot');
  message2.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message2);
  message.scrollIntoView({behavior: "smooth"});

  }
}}
);
