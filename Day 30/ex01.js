/**
 * DOM tree có 3 node chính:
 * 1. Element node
 * 2. Attribute node
 * 3. text node
 * */

console.log(document);
// CRUD = create Read Update Delete

/**
 * phương thức truy xuất phần tử của DOM
 */

const h2ElementC1 = document.getElementById("title-1");
const h2ElementC2 = document.getElementsByTagName("h2");
const h2ElementC3 = document.getElementsByClassName("title");
const h2ElementC4 = document.querySelector("section > h2#title-1.title");
const h2ElementC5 = document.querySelectorAll("section > h2#title-1.title");

console.log(h2ElementC1);
console.log(h2ElementC2[0]);
console.log(h2ElementC3[0]);
console.log(h2ElementC4);
console.log(h2ElementC5);

for (let i = 0; i < h2ElementC2.length; i++) {
  console.log(h2ElementC2[i]);
}

// for (value of h2ElementC2) {
//   console.log(item);
// }

const exampleC1 = document.getElementById("example");
const exampleC2 = document.getElementsByTagName("p");
const exampleC3 = document.getElementsByClassName("example-class");
const exampleC4 = document.querySelector("div");

console.log(exampleC1);
console.log(exampleC2);
console.log(exampleC3);
console.log(exampleC4);

const olElement = document.getElementsByTagName("ol")[0];
console.log(olElement.children); //HTMLCollection
console.log(olElement.childNodes); // NOdeList
console.log(olElement.attributes); //NamedNodeMap
console.log(olElement.classList); //DOMtokenList
console.log(olElement.className); //string

/**
 * createElement
 * appendChild
 * removeChild
 * replaceChild
 */

const liElement5 = document.createElement("li");

liElement5.innerText = "item 5";

// olElement.appendChild(liElement5);
olElement.replaceChild(liElement5, olElement.children[0]);

liElement5.innerHTML = `<strong>Alo</strong>
`;

document.body.innerHTML = content;

document.getElementsByClassName("total")[0].style.backgroundColor = "red";
//boder collapse

document.getElementsByTagName("table")[0].style.border = "2px solid blue";

let tdElements = document.querySelectorAll("td");

tdElements.forEach((item) => {
  item.style.border = "2px solid blue";
});

//borderCollapse
