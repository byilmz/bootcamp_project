import { add } from "../src/utils/utils";




describe('maths utility', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    it.todo('should add 2 positive numbers numbers together and return the result');
    it.todo('should subtract 2 numbers');
    it.todo('should throw an error when we do not provide 2 numbers');
});