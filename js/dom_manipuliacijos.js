let contact = document.querySelector('#contact');
let contact2 = document.getElementById('contact');

console.log(contact);
console.log(contact2);

let listElements = document.querySelectorAll('.content > aside > ul > li');
console.log(listElements);
listElements.forEach((item) => {
    console.log(item.textContent);
});







// Sukurti elementą
let element = document.createElement("div");

element.innerText = "Naujas elementas";

// Pridėti sukurtą elementą į .container
document.querySelector("#home").appendChild(element);

element.addEventListener("click", () => {
    element.style.backgroundColor = "green";
    element.style.color = "pink";
    element.innerText = "Paspaudei mane!";
});