import { findItemById } from '../utils.js';
import { swords } from '../products/product-data.js';

export function renderTableRow(cartItem){
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');
    
}