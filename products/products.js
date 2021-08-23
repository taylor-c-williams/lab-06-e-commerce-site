import { renderSword } from './utils.js';
import { swords } from './data.js';

const ul = document.getElementById('swords');

for (let sword of swords){
    const li = renderSword(sword);
    ul.append(li);
}