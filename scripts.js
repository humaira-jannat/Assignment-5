let hearts =0;
let coins =100;
let copies = 0;

const heartDisplay =document.querySelector(".heart-count");
const coinDisplay = document.getElementById("coins");
const copyDisplay = document.getElementById("copy");
const cardsContainer = document.getElementById("cards-container");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

const services =[
  { name: "National Emergency Number", english: "National Emergency", contact: "999", category: "All", icon: "images/emergency - Copy.png" },
  { name: "Police Helpline Number", english: "Police", contact: "999", category: "Police", icon: "images/police - Copy.png" },
  { name: "Fire Service Number", english: "Fire Service", contact: "999", category: "Fire Service", icon: "images/fire-service - Copy.png" },
  { name: "Ambulance Service", english: "Ambulance", contact: "1994-999999", category: "Health", icon: "images/ambulance - Copy.png" },
  { name: "Women & Child Helpline", english: "Women & Child Helpline", contact: "109", category: "Help", icon: "images/emergency - Copy.png" },
  { name: "Anti-Corruption Helpline", english: "Anti-Corruption", contact: "106", category: "Govt", icon: "images/emergency - Copy.png" },
  { name: "Electricity Helpline", english: "Electricity Outage", contact: "16216", category: "Electricity", icon: "images/emergency - Copy.png" },
  { name: "Brac Helpline", english: "Brac", contact: "16445", category: "NGO", icon: "images/brac - Copy.png" },
  { name: "Bangladesh Railway Helpline", english: "Bangladesh Railway", contact: "163", category: "Travel", icon: "images/Bangladesh-Railway - Copy.png" },
];

services.forEach(service => {
  const card = document.createElement("div");
  card.className ="card";

  card.innerHTML = `
  <div class="card-header">
  <img src="${service.icon}" alt="${service.name}" class="service-icon-left">
  <span class="heart-btn"><i class="fa-regular fa-heart"></i></span>
  </div>
  <div class="card-body-left">
   <div class="card-text">
        <h4>${service.name}</h4>
        <p>${service.english}</p>
        <p class="contact">${service.contact}</p>
        <span class="badge">${service.category}</span>
      </div>
  </div>
  <div class="card-buttons">
  <button class="copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
    <button class="call-btn"><i class="fa-solid fa-phone"></i> Call</button>
    </div>
    `;
      card.querySelector(".heart-btn").addEventListener("click", () => {
    hearts++;
    heartDisplay.textContent = hearts;
  });
    card.querySelector(".copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(service.contact).then(() => {
        copies++;
        copyDisplay.textContent =copies;
        alert(`Copied ${service.name} number!`);
      });
    });
    card.querySelector(".call-btn").addEventListener("click", () => {
      if (coins < 20) {
        alert("Not enough coins to make the call!");
        return;
      }
      coins -= 20;
      coinDisplay.textContent = coins;
      alert(`Calling ${service.name} at ${service.contact}`);
      
      const now = new Date();
      const options = {
        year: 'numeric' , month:'2-digit', day:'2-digit',
        hour: '2-digit', minute:'2-digit', second:'2-digit',
        hour12: true
      };
      const timeString = now.toLocaleTimeString('en-US', options);

      const li =document.createElement ("li");
      li.textContent =  `${service.name} - ${service.contact}  (${timeString})`;
      historyList.appendChild(li);
    });
    cardsContainer.appendChild(card);
  });
  clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML ="";
  });