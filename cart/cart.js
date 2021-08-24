import { cart } from './cart-data.js';
import { renderTableRow } from './render-table-row.js';
import { getGrandTotal } from './render-table-row.js';
import { swords } from '../products/product-data.js';

const tBody = document.querySelector('tbody');

for (let item of cart){
    const tr = renderTableRow(item);
    tBody.append(tr);
}
const grandTotal = getGrandTotal(swords, cart);
const totalTd = document.querySelector('#grandTotal');

totalTd.textContent = grandTotal;