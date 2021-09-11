const sum = require('./sum');

test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeTruthy();
});

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('1', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('2', () => console.log('2 - test'));
});

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([1, 2, 3, 4], mockCallback);
mockCallback.mockReturnValueOnce(10).mockReturnValueOnce(true);
console.log("mockCallback: ", mockCallback);
console.log("mockCallback: ", mockCallback(), mockCallback(), mockCallback());

test('Mock Functions', () => {
    expect(mockCallback.mock.results[0].value).toBe(43);
});