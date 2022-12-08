const container=document.querySelector(".container");

let pixelsPerSide=100;
for (i=0; i<(pixelsPerSide**2); i++) {
    const pixel=document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);


pixel.addEventListener("mouseenter", changeColor);

function changeColor() {
    pixel.style.background="black";
    console.log("hello");
}}