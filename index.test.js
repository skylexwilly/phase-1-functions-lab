// index.test.js
const { distanceFromHqInBlocks } = require('./index'); // Import the function from index.js

describe('index.js', () => {
    describe('distanceFromHqInBlocks()', () => {
        it('returns a distance in blocks', () => {
            expect(distanceFromHqInBlocks(43)).toEqual(1);
        });
    });
});
