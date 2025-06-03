const factDisplay = document.getElementById("fact");
const fetchButton = document.getElementById("fetch-fact");
const meowSound = document.getElementById("meow-sound");

fetchButton.addEventListener("click", async() => {
  fetchButton.textContent = "Please wait...";
  fetchButton.disabled = true; // disable button
  fetchButton.classList.add("disabled-button");

  await fetchCatFact();
  meowSound.play();
  setTimeout(() => {
    fetchButton.textContent = "Get another fact!";
    fetchButton.disabled = false; // enable the button again
    fetchButton.classList.remove("disabled-button");
  }, 3000);
});

async function fetchCatFact() {
  const response = await fetch // api endpoint goes here
  const data = await response.json();

  // pull fact from JSON data
  const randomFact = data.data[0].attributes.body;

  //display the fact
  fetchDisplay.textContent = randomFact;
}
