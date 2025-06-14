document.addEventListener("DOMContentLoaded", async () => {

  const factDisplay  = document.getElementById("fact");
  const fetchButton  = document.getElementById("fetch-fact");
  const meowSound    = document.getElementById("meow-sound");

  fetchButton.addEventListener("click", async () => {
    fetchButton.textContent   = "Please wait...";
    fetchButton.disabled      = true;
    fetchButton.classList.add("disabled-button");

    await fetchCatFact();
    meowSound.play();


    setTimeout(() => {
      fetchButton.textContent = "Get another fact!";
      fetchButton.disabled    = false;
      fetchButton.classList.remove("disabled-button");
    }, 3000);
  });


  async function fetchCatFact() {
    const response = await fetch("https://catfact.ninja/fact?max_length=140");
    const data     = await response.json();
    factDisplay.textContent = data.fact;
  }

});
