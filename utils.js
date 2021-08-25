
export function renderSword(sword) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const productDiv = document.createElement('div');
    const genreP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const priceP = document.createElement('p');
    const addButton = document.createElement('button');

    li.classList.add('sword');
    h3.classList.add('name');
    img.classList.add('image');
    productDiv.classList.add('product-div');
    genreP.classList.add('genre');
    descriptionP.classList.add('description');
    priceP.classList.add('price');
    addButton.classList.add('button');

    h3.textContent = sword.name;
    img.src = sword.image;
    genreP.textContent = `Type: ${sword.genre}`;
    descriptionP.textContent = `Description: ${sword.description}`;
    priceP.textContent = `Cost: ${Number(sword.price).toLocaleString()} gold`;
    addButton.textContent = `Add ${sword.name} to Cart`;

    addButton.addEventListener('click', () => {
        alert(`You are bound to your ${sword.name} for eternity, and it has been added to your cart.`);
    });

    productDiv.append(genreP, descriptionP, priceP);

    li.append(
        h3,
        img,
        productDiv,
        addButton,
    );
    return li;
}

export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === id) {
            return item;
        }
    }
}
