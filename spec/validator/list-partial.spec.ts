import ValidatorType from "@dikac/t-type/validator/type-parameters";
import List from "../../dist/validator/list-partial-parameters";
import And from "../../dist/validatable/and-parameters";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/list/map";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables/validatables";
import SimpleValidator from "@dikac/t-validator/simple";
import Or from "../../dist/validatable/or-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("implicit partial", function() {

        let validator = ValidatorType('string');

        let value = [
            'name',
            'address',
        ];

        let property = List(validator, (v)=>And(v), MessageMap);

        let validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        let validatables : ValidatablesInterface = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables = validatable;

        let unknown : unknown = validatable.value;

        let string : string[] = validatable.value;

        describe("recursive", function() {

            let validator = ValidatorType('string');
            let list1 = List(validator, And, MessageMap);
            let list2 = List(list1, And, MessageMap);
            let list3 = List(list2, And, MessageMap);
        });

    });

    describe("explicit complete", function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        let validator : TypeValidator = ValidatorType('string');

        type Type = [
            string,
            string,
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let property = List/*<unknown[], Type>*/(validator, And, MessageMap);

            let validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;
        });

        describe("direct", function() {

            let property = List(validator, And, MessageMap);

            let validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type|unknown[] = validatable.value;
        });
    });
});





describe("all valid", function() {

    let validator = ValidatorType('string');

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = List(validator, And, MessageMap);
        let validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits')
        }
    });

    it(`check handler and`, () => {

        let property = List(validator, And, MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = List(validator, Or, MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("mixed", function() {

    let validator = ValidatorType('string');

    let value = [
        'user',
        1,
        'address',
    ];

    it(`check validate return`, () => {

        let property = List(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }

    });

    it(`check handler and`, () => {

        let property = List(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = List(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("all invalid", function() {

    let validator = ValidatorType('number');

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = List(validator, And, MessageMap);
        let validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[1]) {
            fail('index 2 should not exits')
        }

        if(validatable.validatables[2]) {
            fail('index 3 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = List(validator, And, MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = List(validator, Or, MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

});

