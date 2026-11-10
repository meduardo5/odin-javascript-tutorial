const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph1 = document.createElement("p");
paragraph1.setAttribute("style", "color: red;");
paragraph1.textContent = "Hey I'm red!";
container.appendChild(paragraph1);

const header3 = document.createElement("h3");
header3.setAttribute("style", "color: blue;");
header3.textContent = "I'm a blue h3!"
container.appendChild(header3);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: solid black; background-color: pink;");


const header1 = document.createElement("h1");
header1.textContent = "I'm in a div"
newDiv.appendChild(header1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
newDiv.appendChild(paragraph2);

container.appendChild(newDiv);