import { findItemById } from '../utils.js';
import { cart } from './cart-data.js';

const test = document.querySelector('#testy');

test.textContent = findItemById(cart, 5);