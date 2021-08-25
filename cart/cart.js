import { renderTableRow } from './render-table-row.js';
import { calcOrderTotal } from './render-table-row.js';
import { swords } from '../products/product-data.js';
import { getCart } from '../local-storage-utils.js';
import { clearCart } from '../local-storage-utils.js';

const tBody = document.querySelector('tbody');
const cart = getCart();

for (let item of cart){
    const tr = renderTableRow(item);
    tBody.append(tr);
}

const grandTotal = Number(calcOrderTotal(swords, cart)).toLocaleString();
const totalTd = document.querySelector('#grandTotal');

totalTd.textContent = `${grandTotal} gold`;

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    clearCart();
    alert(`You are bound to your choices for eternity. No refunds.`);
});

