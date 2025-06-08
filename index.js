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
      return;
    }

    const emitterOptions = {
      life: {
        duration: 0.5,
        count: 1
      },
      rate: {
        delay: 0.05,
        quantity: 1
      },
      size: {
        width: 100,
        height: 0
      },
      position: {
        x: 50,
      }
    };

    const catParticleSettings = {
      shape: {
        type: "image",
        image: {
          src: "img/logo.png",
          width: 32,
          height: 32
        }
      },
      size: {
        value: { min: 16, max: 32 }
      },
      move: {
        direction: "bottom",
        speed: { min: 200, max: 400 },
        outModes: { default: "out" }
      },
      opacity: {
        value: { min: 0.5, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1
        }
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 60
        }
      }
    };

    window.particlesContainer.addEmitter({
      ...emitterOptions,
      particles: catParticleSettings
    });
  }
});
