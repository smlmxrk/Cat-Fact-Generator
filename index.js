tsParticles.use(tsParticles.PluginEmitters);

let particlesContainer = null;

document.addEventListener("DOMContentLoaded", async () => {
  particlesContainer = await tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 0 },
    },
    emitters: [],
  });
});


const factDisplay = document.getElementById("fact");
const fetchButton = document.getElementById("fetch-fact");
const meowSound = document.getElementById("meow-sound");

let clickCount = 0;

fetchButton.addEventListener("click", async() => {
  fetchButton.textContent = "Please wait...";
  fetchButton.disabled = true; // disable button
  fetchButton.classList.add("disabled-button");

  await fetchCatFact();
  meowSound.play();

  clickCount++;
  if (clickCount % 2 === 0) {
    launchCatRain();
  }

  setTimeout(() => {
    fetchButton.textContent = "Get another fact!";
    fetchButton.disabled = false; // enable the button again
    fetchButton.classList.remove("disabled-button");
  }, 3000);
});

async function fetchCatFact() {
  const response = await fetch("https://catfact.ninja/fact?max_length=140"); // api endpoint goes here
  const data = await response.json();

  // pull fact from JSON data
  const randomFact = data.fact;

  //display the fact
  factDisplay.textContent = randomFact;
}

function launchCatRain() {
  if (!particlesContainer) {

    return;
  }


  const emitterOptions = {
    life: {
      duration: 0.5,
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
      value: {min: 16, max: 32}
    },
    move: {
      direction: "bottom",
      speed: {min: 200, max: 400},
      outModes: {default: "out"}
    },
    opacity: {
      value: {min: 0.5, max: 1},
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1
      }
    },
    rotate: {
      value: {min: 0, max: 360},
      animation: {
        enable: true,
        speed: 60
      }
    }
  };

  particlesContainer.addEmitter({
    ...emitterOptions,
    particles: catParticleSettings
  });

}
