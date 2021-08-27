import { addProduct, getProducts } from '../local-storage-utils.js';

const test = QUnit.test;

//setProducts

// test('setProducts should set an array in local storage', (expect) => {
    
//     const products = [
//         { id:4, quantity:34 },
//         { id:6, quantity:56 }
//     ];    

//     const actual = setProducts(products);   

//     const stringyProduct = localStorage.getItem('PRODUCTS');
//     const unstrungProduct = JSON.parse(stringyProduct);
 
//     //Expect
//     const expected = unstrungProduct;
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });


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

    //Arrange
    // Set up your arguments and expectations
    const stringyProduct = JSON.stringify(product);
    localStorage.setItem('PRODUCTS', stringyProduct);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getProducts();
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, product);
});

//addProduct

test('addProduct should add an object into an array in local storage', (expect) => {
    const productsBefore = [
        {
            id: 2,
            quantity: 3,
        },
        {
            id: 5,
            quantity: 1,
        }
    ];

    const productsAfter = [
        {
            id: 2,
            quantity: 3,
        },
        {
            id: 5,
            quantity: 2,
        }
    ];
    const stringyProduct = JSON.stringify(productsBefore);
    localStorage.setItem('PRODUCTS', stringyProduct);

    addProduct(5, 1);

    const stringyProductsAfter = localStorage.getItem('PRODUCTS');
    const actual = JSON.parse(stringyProductsAfter);

    expect.deepEqual(actual, productsAfter);
});


