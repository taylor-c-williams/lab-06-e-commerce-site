import { renderSword } from '../render-product-utils.js';
import { swords } from './product-data.js';

const ul = document.getElementById('swords');

for (let sword of swords){
    const li = renderSword(sword);
    ul.append(li);
}
