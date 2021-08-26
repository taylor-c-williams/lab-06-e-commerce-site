// IMPORT MODULES under test here:
import { renderTableRow, calcOrderTotal, calcItemTotal } from '../cart/render-table-row.js';
// import { example } from '../example.js';

const test = QUnit.test;

// renderTableRow
test('renderTableRow should take in a cart item  and render the correct HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Katana</td><td>10,000</td><td>2</td><td>20,000</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow({
        id:1,
        quantity: 2
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//calcItemTotal
test('calcItemTotal should take in item quantities and calculate a total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(5, 5);



    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// calcOrderTotal
test('calcOrderTotal should take in item quantity totals and calculate a grand total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal([
        { id: 1, price: 7 },
        { id: 2, price: 2 },
        { id: 3, price: 5 }
    ],
    [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 4 }
    ]);
    


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


