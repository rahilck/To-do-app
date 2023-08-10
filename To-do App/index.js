let kitchenInput= document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let kitchenItemsList = document.getElementById("kitchen-items-list")

// STEP 1
function addKitchenItems() {
 let kitchenInputData = kitchenInput.value;
 // applying DOM
 let li = document.createElement("li");
 li.innerText = kitchenInputData;
 li.style.cssText = 'animation-name: slideIn;';
 kitchenItemsList.appendChild(li)
 kitchenInput.value = ""
 kitchenInput.focus();
 console.log(li);
}
// STEP 2
addBtn.addEventListener("click", addKitchenItems);
