
export function renderSword(sword) {
    // i like to do all my creaion up front
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const genreP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const priceP = document.createElement('p');


    li.classList.add('sword');
    h3.classList.add('name');
    img.classList.add('image');
    genreP.classList.add('genre');
    descriptionP.classList.add('description');
    priceP.classList.add('price');


    h3.textContent = sword.name;
    img.src = sword.image;
    genreP.textContent = `Type: ${sword.genre}`;
    descriptionP.textContent = `Description: ${sword.description}`;
    priceP.textContent = `${sword.price}`;            
    // i like to append last
    // flexDiv.append(priceP, cardsP);re

    li.append(
        h3, 
        img, 
        genreP, 
        descriptionP,
        priceP, 
    );
    return li;
}