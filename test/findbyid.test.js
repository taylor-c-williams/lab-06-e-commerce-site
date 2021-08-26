

import { swords } from '../products/product-data.js';
import { findById } from '../render-product-utils.js';
const test = QUnit.test;

test('findById should retrieve data relative to a specified ID', (expect) => {
//Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 5,
        name: 'Scimitar',
        image: '../assets/scimitar.jpg',
        description: 'A scimitar (/ˈsɪmɪtər/ or /ˈsɪmɪtɑːr/) is a backsword with a convex curved blade',
        genre: 'Single-handed dueling sword',
        price: 9000,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(swords, 5);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});