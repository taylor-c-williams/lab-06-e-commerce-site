
// findItemById
const products = [
    {
        id: 1,
        name: 'Katana',
        image: '../assets/katana.jpg',
        genre: 'Two-handed tanto',
        description: 'A katana (刀 or かたな) is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        price: '10k gold', 
    },    
    {
        id: 6,
        name: 'Ancient Bog Sword',
        image: '../assets/unknown.jpg',
        description: 'A greatsword of unknown origin, reclaimed from a bog. Possibly lost by an ancient warlord, likely cursed.',
        genre: 'Two-handed greatsword',
        price: '250k gold',
    },    
    {
        id: 5,
        name: 'Scimitar',
        image: '../assets/scimitar.jpg',
        description: 'A scimitar (/ˈsɪmɪtər/ or /ˈsɪmɪtɑːr/) is a backsword with a convex curved blade',
        genre: 'Single-handed dueling sword',
        price: '9k gold',
    },   
];

import { findItemById } from '../utils.js';
const test = QUnit.test;

test('findItemById should retrieve data relative to a specified ID', (expect) => {
//Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 5,
        name: 'Scimitar',
        image: '../assets/scimitar.jpg',
        description: 'A scimitar (/ˈsɪmɪtər/ or /ˈsɪmɪtɑːr/) is a backsword with a convex curved blade',
        genre: 'Single-handed dueling sword',
        price: '9k gold',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findItemById(products, 5);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});