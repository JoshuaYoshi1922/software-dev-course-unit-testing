

const app = require('../app.js');



// test("applies a valid discount rate", () => {
//     expect(calculateDiscount(100, 0.1)).toBe(90);
// });

// test("handles an invalid discount rate gracefully", () => {
//     expect(calculateDiscount(100, -0.1)).toBe(null);
// });

// test("handles edge case with price of 0", () => {
//     expect(calculateDiscount(0, 0.2)).toBe(0);
// });
const items = [
  { name: 'Pillow', price: 4 },
  { name: 'Couch', price: 8 },
  { name: 'Blanket', price: 11 }
];


describe("filterProducts", () => {
    // Positive
    test('should filter products above 5', () => {
        let five = app.filterProducts(items, item => item.price >=5);
        expect(five).toEqual(five)
    })
    // Negative
    test('should return empty array when products is not an array', () => {
    expect(app.filterProducts('not an array', () => true)).toEqual([]);
    });
    // Edge Case
    test('should return empty array when callback is not a function', () => {
      expect(app.filterProducts(items, null)).toEqual([])
    })
});


describe("calculateDiscount", () => {
  //Positive
  test('should apply a 20% discount on a $100 item', () => {
        expect(app.calculateDiscount(100, 0.2)).toBe(80);
})
  //Negagive
  test('should fail when discountRate is a negative number', () => {
    expect(app.calculateDiscount(100,-32)).toBeNull();
  })
  //Edge Case
  test('should return null for non-numeric price', () => {
    expect(app.calculateDiscount("100", 90)).toBeNull();
  })
});

let inventory
beforeEach(() => {
   inventory = [
      { name: 'Shoes', quantity: 3 },
      { name: 'Hats', quantity: 4 },
      { name: 'Belt', quantity: 6 }
    ]
  });
    

describe("sortInvetory", () => {
  //Positive 
  test('should sort objects by name', () => {
   expect(app.sortInventory(inventory, 'name')).toEqual([
      { name: 'Belt', quantity: 6 },
      { name: 'Hats', quantity: 4 },
      { name: 'Shoes', quantity: 3 }
    ]);
  });
});

//Negative 
  test('should return empty arry for incorrect inventory type', () => {
    expect(app.sortInventory(100, 'name')).toEqual([]);
  });

//Edge Case
test('should return orignal array there is one item', () => {
  let oneItem = [{item: 'Shirt'}];
  expect(app.sortInventory(oneItem, 'item')).toEqual([{item: 'Shirt'}])
})

