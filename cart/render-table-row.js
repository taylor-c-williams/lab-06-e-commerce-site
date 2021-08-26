import { findById } from '../render-product-utils.js';
import { swords } from '../products/product-data.js';

export function renderTableRow(cartItem){
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    const product = findById(swords, cartItem.id);
    const total = calcItemTotal(product.price, cartItem.quantity);

    nameTd.textContent = product.name;
    priceTd.textContent = product.price;
    quantityTd.textContent = cartItem.quantity;
    totalTd.textContent = total;
   
    tr.append(nameTd, priceTd, quantityTd, totalTd);

    return tr;
}

export function calcItemTotal(price, quantity){
    const total = price * quantity;
    return total;
}

export function calcOrderTotal(allProducts, wholeCart) {
    let accumulator = 0;
    for (let item of wholeCart){
        const product = findById(allProducts, item.id);
        const total = product.price * item.quantity;
        accumulator = accumulator + total;
    }
    return accumulator;
}