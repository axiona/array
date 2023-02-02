import Validator from '@alirya/validator/validator';
import Unions from '../../../unions';
import Map from '../../../map';
import {List as ListHelper} from 'ts-toolbelt';
import InferReturn from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';

export function ListPartialParameters<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : [...ValueType],
    validator : ValidatorType,
    stop : boolean = false
) : ListPartialReturn<ValueType, ValidatorType> {

    const result : Unions<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator(value);

        result[property] = <InferReturn<ValidatorType>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}




export type ListPartialArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> =
    Value<[...ValueType]> &
    ValidatorContainer<ValidatorType> &
    {stop?:boolean};

export function ListPartialParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    {
        value,
        validator,
        stop
    } : ListPartialArgument<ValueType, ValidatorType>
) : ListPartialReturn<ValueType, ValidatorType> {

    return ListPartialParameters(value, validator, stop);
}

export type ListPartialReturn<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<[...ValueType]>>
> = Unions<Map<[...ValueType], InferReturn<ValidatorType>>>;

namespace ListPartial {
    export const Parameters = ListPartialParameters;
    export const Parameter = ListPartialParameter;
    export type Argument<
        ValueType extends unknown[],
        ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
    > = ListPartialArgument<
        ValueType,
        ValidatorType
    >;
    export type Return<
        ValueType extends unknown[],
        ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
    > = ListPartialReturn<
        ValueType,
        ValidatorType
    >;
}
export default ListPartial;
