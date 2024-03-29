import ValueInterface from '@axiona/value/value.js';
import RandomBoolean from '@axiona/boolean/random.js';

/**
 * pick a random values
 *
 * @param value
 * @param random
 */
export function RandomParameters<Value>(
    value : ReadonlyArray<Value>,
    random : ()=> boolean = RandomBoolean
) : Value[] {

    const gets : Value[]= [];

    for (const data of value) {

        if (random()) {

            gets.push(data);

        }
    }

    return gets;
}


/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export function RandomParameter<Value>(
    {
        value,
        random
    } : ValueInterface<ReadonlyArray<Value>> & {random ?: ()=> boolean}
) : Value[] {

    return RandomParameters(value, random);
}


namespace Random {
    export const Parameters = RandomParameters;
    export const Parameter = RandomParameter;
}
export default Random;

export {Random as RandomValues};
export {Random as RandomPicks};
export {RandomParameters as RandomPicksParameters};
export {RandomParameter as RandomPicksParameter};
export {RandomParameters as RandomValuesParameters};
export {RandomParameter as RandomValuesParameter};
