import { getProducts } from '../local-storage-utils.js';

const test = QUnit.test;

// renderTableRow
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
