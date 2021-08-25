import { cart } from './cart-data.js';
import { renderTableRow } from './render-table-row.js';
import { calcOrderTotal } from './render-table-row.js';
import { swords } from '../products/product-data.js';

const tBody = document.querySelector('tbody');


for (let item of cart){
    const tr = renderTableRow(item);
    tBody.append(tr);
}
const grandTotal = Number(calcOrderTotal(swords, cart)).toLocaleString();
const totalTd = document.querySelector('#grandTotal');

totalTd.textContent = `${grandTotal} gold`;


const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    alert(`You are bound to your decisions for eternity. No refunds.`);
});
