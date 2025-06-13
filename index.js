/** @global tsParticles */
/* global tsParticles, loadEmittersPlugin */



document.addEventListener("DOMContentLoaded", async () => {

  await loadEmittersPlugin(tsParticles);

  window.particlesContainer = await tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 0 }
    },
    emitters: []
  });


  const factDisplay  = document.getElementById("fact");
  const fetchButton  = document.getElementById("fetch-fact");
  const meowSound    = document.getElementById("meow-sound");

  let clickCount = 0;

  fetchButton.addEventListener("click", async () => {
    fetchButton.textContent   = "Please wait...";
    fetchButton.disabled      = true;
    fetchButton.classList.add("disabled-button");

    await fetchCatFact();
    meowSound.play();

    clickCount++;
    if (clickCount % 2 === 0) {
      launchCatRain();
    }

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


  function launchCatRain() {
    if (!window.particlesContainer) {
      console.warn("Particles container not ready");
      return;
    }

    console.log("Launching permanent green emitter...");

    window.particlesContainer.addEmitter({
      direction: "bottom",
      position: { x: 50, y: 0 }, // Top-center
      rate: {
        delay: 0.2,
        quantity: 5
      },
      size: {
        width: 100,
        height: 0
      },
      particles: {
        color: { value: "#00ff00" }, // Bright green
        shape: { type: "circle" },
        size: { value: 20 },
        move: {
          speed: 2,
          direction: "bottom",
          outModes: { default: "out" }
        },
        opacity: {
          value: 1
        }
      }
    });
  }



});
