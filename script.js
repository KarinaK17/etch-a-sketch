const container = document.querySelector(".container");
let pixelsPerSide = 16;

function game(pixelsPerSide) {
  for (i = 0; i < pixelsPerSide ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);

    pixel.addEventListener("mouseenter", changeColor);

    function changeColor() {
      pixel.style.background = "black";
    }
  }
}

game(pixelsPerSide);

const btn = document.querySelector(".btn");
btn.addEventListener("click", startAgain);

function startAgain() {
  container.textContent = "";
  pixelsPerSide = prompt(
    "Please enter number of pixels per side for the new game!",
    64
  );
  pixelsPerSide = Number(pixelsPerSide);
  container.style.cssText = `grid-template-columns: repeat(${pixelsPerSide}, 1fr)`;
  game(pixelsPerSide);

  if (
    pixelsPerSide < 0 ||
    pixelsPerSide == null ||
    pixelsPerSide > 100 ||
    !Number.isFinite(pixelsPerSide)
  ) {
    console.log(typeof pixelsPerSide);
    alert("Please enter a number from 1 to 100");
    container.textContent = "";
  }
}

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", startAgain2);

function startAgain2() {
  container.textContent = "";
  pixelsPerSide = prompt(
    "Please enter number of pixels per side for the new game!",
    64
  );
  pixelsPerSide = Number(pixelsPerSide);
  container.style.cssText = `grid-template-columns: repeat(${pixelsPerSide}, 1fr)`;
  function game(pixelsPerSide) {
    for (i = 0; i < pixelsPerSide ** 2; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      container.appendChild(pixel);

      pixel.addEventListener("mouseenter", changeColor);

      function changeColor(e) {
        /* beautiful purple and blue pencil 
            pixel.style.background="rgb("+(e.clientX/3)+","+(e.clientY/3)+", "+(e.clientX/2)+")";
            */
        // random color pencil
        pixel.style.background =
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ", " +
          Math.floor(Math.random() * 256) +
          ")";
      }
    }
  }
  game(pixelsPerSide);

  if (
    pixelsPerSide < 0 ||
    pixelsPerSide == null ||
    pixelsPerSide > 100 ||
    !Number.isFinite(pixelsPerSide)
  ) {
    console.log(typeof pixelsPerSide);
    alert("Please enter a number from 1 to 100");
    container.textContent = "";
  }
}
