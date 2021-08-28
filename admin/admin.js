import { addProduct } from '../local-storage-utils.js';

const form = document.getElementById('add-new-product');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const data = new FormData(form);
    const newProduct = [{
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('image'),
        description: data.get('description'),
        genre: data.get('genre'),
        price: data.get('price') }
    ];
    addProduct(newProduct);
    form.reset(); 
    alert(`Your items have been added to the inventory for eternity`);
}); 