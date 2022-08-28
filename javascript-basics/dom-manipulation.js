const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// My stuff
const p = document.createElement("p");
p.setAttribute("style", "color: red;");
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

const pinkContainer = document.createElement("div");
pinkContainer.classList.add("pink-container");
pinkContainer.setAttribute(
  "style",
  "border: 1px solid black; background: pink;"
);

const h1PinkCont = document.createElement("h1");
h1PinkCont.classList.add("h1-pink-container");
h1PinkCont.textContent = "I'm in a div";

const paraPinkCont = document.createElement("p");
paraPinkCont.classList.add("para-pink-container");
paraPinkCont.textContent = "ME TOO!";

pinkContainer.appendChild(h1PinkCont);
pinkContainer.appendChild(paraPinkCont);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(pinkContainer);
