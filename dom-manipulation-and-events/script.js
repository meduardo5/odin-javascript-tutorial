const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.setAttribute("style", "color: red");
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.setAttribute("style", "color: blue");
header3.textContent = "I'm a blue h3!"
container.appendChild(header3);
