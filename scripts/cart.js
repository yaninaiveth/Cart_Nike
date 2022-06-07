const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
const itemContainer = document.querySelector(".cart");

// Recorremos cada botón y le aplicamos el evento

addToShoppingCartButtons.forEach((addToCartBotton) => {
    addToCartBotton.addEventListener("click", addToCartClicked);
})

function addToCartClicked(event){
    const button = event.target;
    console.log(button);

    const item = button.closest(".item"); // Trae los elementos cercanos a esta clase 
    console.log(item);

    const itemTitle = item.querySelector('.items__title').textContent;
    console.log(itemTitle);
    const itemPrice = item.querySelector('.price').textContent;
    console.log(itemPrice);
    const itemImage = item.querySelector('.img').src;
    console.log(itemImage);

    addItemToCart(itemTitle, itemPrice, itemImage)
}

// Función que añade al carrito

function addItemToCart(itemTitle, itemPrice, itemImage){
    console.log(itemTitle, itemPrice, itemImage);
    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = 

        `<div class="items__three item">
            <div>
                <img width="40%" src=${itemImage} alt="${itemTitle}">
            </div>
            <h4 class="items__title">${itemTitle}</h4>
            <div class="items__price">
                <span><strong class="price">${itemPrice}</strong></span>
            </div>
        </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    itemContainer.appendChild(shoppingCartRow);

    // Ocultando p de section cart
    const cartEmpty = document.querySelector(".empty")
    cartEmpty.hidden = true;
}