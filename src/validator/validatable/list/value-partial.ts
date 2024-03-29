import Validator from '@axiona/validator/validator.js';
import {List} from 'ts-toolbelt';
import ListStrict from './infer.js';
import Unions from '../../../unions.js';
import Value from '@axiona/value/value.js';
import ValidatorsContainer from '../../validators/validators.js';

export function ValuePartialParameters<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
    stop  = false
) : ValuePartialReturn<ValueType, Validators> {

    const result : Unions<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}


export type ValuePartialArgument<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
> =
    Value<ValueType> &
    ValidatorsContainer<Validators> &
    {stop?:boolean};

export function ValuePartialParameter<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    {
        value,
        validators,
        stop
    } : ValuePartialArgument<ValueType, Validators>
) : ValuePartialReturn<ValueType, Validators> {

    return ValuePartialParameters(value, validators, stop);
}

export type ValuePartialReturn<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
    > =  Unions<ListStrict<Validators>>;

namespace ValuePartial {
    export const Parameters = ValuePartialParameters;
    export const Parameter = ValuePartialParameter;
    export type Return<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValuePartialReturn<
        ValueType,
        Validators
    >;
    export type Argument<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValuePartialArgument<
        ValueType,
        Validators
    >;
}
export default ValuePartial;
