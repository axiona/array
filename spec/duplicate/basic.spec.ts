import {DuplicateParameters} from '../../dist/duplicate';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('duplicate', function() {

    describe('default compare', function() {

        it(`found`, () => {

            let result = DuplicateParameters([0,1,2,3,4,5,1]);

            expect(result.length).withContext('length').toEqual(2);
            expect(result).withContext('data').toEqual([1,1]);
        });

        it(`found all same`, () => {

            let result = DuplicateParameters([1,1,1,1,1]);

            expect(result.length).withContext('length').toEqual(5);
            expect(result).withContext('data').toEqual([1,1,1,1,1]);
        });

        it(`not found`, () => {

            let result = DuplicateParameters([0,1,2,3,4,5]);

            expect(result.length).withContext('length').toEqual(0);
            expect(result).withContext('data').toEqual([]);
        });
    });


    describe('custom compare', function() {

        it(`found`, () => {

            let found = [{number:2},{number:3},{number:1},{number:1}];
            let result = DuplicateParameters(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(2, );
            expect(result).toEqual([found[2],found[3]]);
        });

        it(`found multi`, () => {

            let found = [{number:1},{number:1},{number:2},{number:2}];
            let result = DuplicateParameters(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(4);
            expect(result).toEqual(found);
        });

        it(`not found`, () => {

            let notFound = [{number:2},{number:3},{number:1}];
            let result = DuplicateParameters(notFound, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(0);
            expect(result).withContext('data').toEqual([]);
        });
    });

});




