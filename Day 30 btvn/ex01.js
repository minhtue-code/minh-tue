const menu = [
  { id: 1, name: "Home", parentId: 0 },
  { id: 2, name: "About", parentId: 0 },
  { id: 3, name: "News", parentId: 0 },
  { id: 4, name: "Products", parentId: 0 },
  { id: 5, name: "Contact", parentId: 0 },
  { id: 6, name: "T-Shirt", parentId: 4 },
  { id: 7, name: "Jean", parentId: 4 },
  { id: 8, name: "Skirt", parentId: 4 },
];

const mainMenu = document.createElement("ul");
mainMenu.id = "main-menu";

for (let i = 0; i < menu.length; i++) {
  if (menu[i].parentId === 0) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = menu[i].name;
    a.style.fontSize = "32px";
    li.appendChild(a);

    const subMenu = document.createElement("ul");
    for (let j = 0; j < menu.length; j++) {
      if (menu[j].parentId === menu[i].id) {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = "#";
        subA.textContent = menu[j].name;
        subA.style.fontSize = "28px";
        subLi.appendChild(subA);
        subMenu.appendChild(subLi);
      }
    }

    if (subMenu.children.length > 0) {
      li.appendChild(subMenu);
    }

    mainMenu.appendChild(li);
  }
}

document.body.appendChild(mainMenu);
