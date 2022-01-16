import DifferenceBothParameters from '../../dist/difference-both-parameters';
import DifferenceBothParameter from '../../dist/difference-both-parameter';
import Equal from '@alirya/boolean/equal';


it('enable console.log', () => { spyOn(console, 'log').and.callThrough();});


describe('check equality result', function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];
    let equal = Equal;

    it('default', () => {

        expect(DifferenceBothParameters(target, compare)).toEqual(DifferenceBothParameter({
            array:[target, compare]
        }));
    });

    it('with equal', () => {

        expect(DifferenceBothParameters(target, compare, equal)).toEqual(DifferenceBothParameter({
            array:[target, compare],
            validation:equal
        }));
    });

});

