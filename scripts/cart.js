const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
console.log(addToShoppingCartButtons);

/* Recorremos cada botón y le aplicamos el evento */
addToShoppingCartButtons.forEach((addToCartBotton) => {
    addToCartBotton.addEventListener("click", addToCartClicked);
})

function addToCartClicked(event){
    const button = event.target;
    console.log(button);

    const item = button.closest(".item"); /* Trae los elementos cercanos a esta clase */
    console.log(item);

    const itemTitle = item.querySelector('.items__title').textContent;
    console.log(itemTitle);
    const itemPrice = item.querySelector('.items__price').textContent;
    const itemImage = item.querySelector('.img').src;
}