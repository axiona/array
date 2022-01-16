import ReturnInfer from '../../../../dist/function/return/list/infer';
import Reset from '../../../../dist/reset';
import Boolean from '@alirya/boolean/boolean';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {


    describe('guard', function() {

        let equal : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true, false];

        // @ts-expecerror
        let more : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true, false, true];

        // @ts-expecerror
        let less : ReturnInfer<[typeof Boolean, typeof Boolean]> = [true];

    });


    describe('return', function() {

        let equal : ReturnInfer<[typeof Reset, typeof Reset]> = [[], []];

        // @ts-expecerror
        let more : ReturnInfer<[typeof Reset, typeof Reset]> = [[], [], []];

        // @ts-expecerror
        let less : ReturnInfer<[typeof Reset, typeof Reset]> = [[]];

    });


});
