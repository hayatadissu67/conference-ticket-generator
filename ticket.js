const fullNameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const githubInput = document.getElementById("github");
const avatarInput = document.getElementById("avatar");
const generateTicketButton = document.getElementById("generateTicket");
const ticketSection = document.getElementById("ticketsection");
const formSection = document.getElementById("formsection");
const nameDisplay = document.getElementById("nameDisplay");
const nameDisplay2 = document.getElementById("nameDisplay2");
const emailDisplay = document.getElementById("emailDisplay");
const githubDisplay = document.getElementById("githubDisplay");
const avatarDisplay = document.getElementById("avatarDisplay");
const ticketNumberDisplay = document.getElementById("ticketNumber");


generateTicketButton.addEventListener("click", function () {
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const githubUsername = githubInput.value.trim();
  const avatarUrl = avatarInput.files[0] ? URL.createObjectURL(avatarInput.files[0]) : "";

  if (!fullName || !email || !githubUsername || !avatarUrl) {
    alert("Please fill in all fields and select an avatar image.");
    return;
  }

    if (fullName && email && githubUsername && avatarUrl) { 
      nameDisplay.textContent = fullName;
      nameDisplay2.textContent = fullName;
      emailDisplay.textContent = email;
      githubDisplay.textContent = githubUsername;
      avatarDisplay.src = URL.createObjectURL(avatarInput.files[0]);

      const ticketNumber = Math.floor(Math.random() * 1000000);
      ticketNumberDisplay.textContent = `#${ticketNumber}`;

      formSection.style.display = "none";
      ticketSection.style.display = "block";
    }



});