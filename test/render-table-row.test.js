// IMPORT MODULES under test here:
import { renderTableRow, getGrandTotal } from '../cart/render-table-row.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('renderTableRow should take in a cart item  and render the correct HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Katana</td><td>10000</td><td>2</td><td>20000</td></tr>`;
    
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


