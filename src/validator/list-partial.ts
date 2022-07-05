import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import InferReturn from '@alirya/validator/validatable/infer-static.js';
import ListCallback from './list-callback.js';
import ValidateMapPartial from './validatable/list/list-partial.js';
import Unions from '../unions.js';
import InferMessage from '../message/message/list/infer.js';
import Map from '../message/message/list/map.js';
import Message from '@alirya/message/message.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {Required} from 'utility-types';
import {ListCallbackReturn as ListPartialReturn} from './list-callback.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export function ListPartialParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,

) : ListPartialReturn<Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export function ListPartialParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    validator : ValidatorType,
    validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
    message : (result:Unions<InferReturn<ValidatorType>[]>)=>MessageType,
    stop ?: boolean,

) : ListPartialReturn<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export function ListPartialParameters<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
     validator : ValidatorType,
     validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
     message : ((result:Unions<InferReturn<ValidatorType>[]>)=>MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>) = Map,
     stop : boolean = false,

) : ListPartialReturn<MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType> {

    return ListCallback.Parameters(
        validator,
        (value, validators)=>ValidateMapPartial.Parameters(value, validators, stop),
        validation,
        message
    ) as ListPartialReturn<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;
}





/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */

export type ListPartialArgument<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
> =
    ValidatorContainer<ValidatorType> &
    Partial<Message<(result:Unions<InferReturn<ValidatorType>[]>)=>MessageType>> &
    {
        validation : (result:Unions<InferReturn<ValidatorType>[]>)=>ValidatableType,
        stop ?: boolean
    };

export function ListPartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        stop,
    } : StrictOmit<ListPartialArgument<unknown, ValidatorType, ValidatableType>, 'message'>

) : ListPartialReturn<Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export function ListPartialParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message,
        stop,
    } : Required<ListPartialArgument<MessageType, ValidatorType, ValidatableType>, 'message'>

) : ListPartialReturn<MessageType, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType>;

export function ListPartialParameter<
    MessageType = unknown,
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable  = Validatable
>(
    {
        validator,
        validation,
        message,
        stop,
    } : ListPartialArgument<MessageType, ValidatorType, ValidatableType>,

) : ListPartialReturn<MessageType|Unions<InferMessage<InferReturn<ValidatorType>[]>>, ValidatorType, Unions<InferReturn<ValidatorType>[]>, ValidatableType> {

    return ListPartialParameters(validator, validation, message as (result:Unions<InferReturn<ValidatorType>[]>)=>MessageType, stop);
}

export {ListPartialReturn};

namespace ListPartial {
    export const Parameters = ListPartialParameters;
    export const Parameter = ListPartialParameter;
    export type Return<
        MessageType,
        ValidatorType extends Validator,
        Validatables extends ValidatorValidatable[],
        ValidatableType extends Validatable
    > = ListPartialReturn<
        MessageType,
        ValidatorType,
        Validatables,
        ValidatableType
    >;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable  = Validatable
    > = ListPartialArgument<
        MessageType,
        ValidatorType,
        ValidatableType
    >;
}
export default ListPartial;
