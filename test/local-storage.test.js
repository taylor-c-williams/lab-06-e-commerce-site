import { setProducts, addProduct, getProducts } from '../local-storage-utils.js';

const test = QUnit.test;

//setProducts

test('setProducts should set an array in local storage', (expect) => {
    
    const products = [
        { id:4, quantity:34 },
        { id:6, quantity:56 }
    ];    

    setProducts(products);  
    const stringyProduct = localStorage.getItem('SWORDS');
    const unstrungProduct = JSON.parse(stringyProduct);
 
    const expected = products;
    const actual = unstrungProduct;

    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


// getProducts
test('getProducts should return a products array that is stored in local', (expect) => {
    
    const product = [{
        id: 1,
        name: 'Katana',
        image: '../assets/katana.jpg',
        genre: 'Two-handed tanto',
        description: 'A katana (刀 or かたな) is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        price: 10000
    }];    

    const stringyProduct = JSON.stringify(product);
    localStorage.setItem('PRODUCTS', stringyProduct);

    const actual = getProducts();

    expect.deepEqual(actual, product);
});

//addProduct
test('addProduct should add an object into an array in local storage', (expect) => {
    
    const newProduct = {
        id: ('id'),
        name: ('name'),
        image: ('image'),
        description: ('description'),
        genre: ('genre'),
        price: ('price'),
    };

    addProduct(newProduct);

    const strung = localStorage.getItem('PRODUCTS');
    const unstrung = JSON.parse(strung);
    const actual = unstrung;
    const expected = newProduct;
    expect.deepEqual(actual, expected);
});


