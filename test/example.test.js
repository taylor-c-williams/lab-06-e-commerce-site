// IMPORT MODULES under test here:
import { renderSword, findItemById } from '../products/utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('renderSword should take in a sword and render the correct HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="sword"><h3 class="name">Katana</h3><img class="image" src="../assets/katana.jpg"><div class="product-div"><p class="genre">Type: Two handed tanto</p><p class="description">Description: A katana (刀 or かたな) is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.</p><p class="price">Cost: 10k gold</p></div><button class="button">Add katana to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSword({
        id: 'katana',
        name: 'Katana',
        image: '../assets/katana.jpg',
        genre: 'Two handed tanto',
        description: 'A katana (刀 or かたな) is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        price: '10k gold'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// test('findItemById should retrieve data relative to a specified ID', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = ;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = findItemById(swords,Talwar);
//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });