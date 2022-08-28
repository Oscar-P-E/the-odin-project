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

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// METHOD 1
// (inline the html there is a call to the named function alertFunction below)

// METHOD 2
// btn3.onclick = alertFunction;

// METHOD 3
// btn3.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttonsGrp1 = document.querySelectorAll("#container2 > button");

// we use the .forEach method to iterate through each button
buttonsGrp1.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

pinkContainer.appendChild(h1PinkCont);
pinkContainer.appendChild(paraPinkCont);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(pinkContainer);
