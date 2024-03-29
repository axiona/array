import RemovesValue from '../../../dist/void/remove.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('exists', function() {

    const array : any[] = [1,'a','b',2,'c'];
    RemovesValue.Parameters(array, v => typeof v === 'string');

    it('original', () => expect([1,2]).toEqual(array));
});


describe('start', function() {

    const array : any[] = [1,'a','b',2,'c',3,'d'];
    RemovesValue.Parameters(array, v => typeof v === 'string', 2);

    it('original', () => expect([1, 'a', 2, 3]).toEqual(array));
});

describe('end', function() {

    const array : any[] = [1,'a','b',2,'c',3,'d'];
    RemovesValue.Parameters(array, v => typeof v === 'string', undefined, 4);

    it('original', () => expect([1, 2, 3, 'd']).toEqual(array));
});

describe('limit', function() {

    const array : any[] = [1,'a','b',2,'c',3,'d'];
    RemovesValue.Parameters(array, v => typeof v === 'string', undefined, undefined, 1);

    it('original', () => expect([1,'b',2,'c',3,'d']).toEqual(array));
});
