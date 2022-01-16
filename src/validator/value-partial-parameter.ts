import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ListReturn from './validatable/list/infer';
import Unions from '../unions';
import Value from './value';
import InferMessage from '../message/message/list/infer';
import ValidatorsContainer from '../validator/validators/validators';
import Message from '@alirya/message/message';
import {Required} from 'utility-types';
import StrictOmit from '@alirya/object/strict-omit';
import ValuePartialParameters from './value-partial-parameters';

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter that match {@param stop} result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */


export type ValuePartialArgument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
> = ValidatorsContainer<Validators> &
    Partial<Message<(result:Unions<ListReturn<Validators>>)=>MessageType>> &
    {
        validation : (result:Unions<ListReturn<Validators>>)=>ReturnType,
        stop ?: boolean
    };

/**
 * object destructure implementation
 *
 * @param validators
 * @param validation
 * @param stop
 */
export default function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        stop,
    } : StrictOmit<ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>, 'message'>
) : Value<BaseType, ValueType, Unions<InferMessage<ListReturn<Validators>>>, Validators, Unions<ListReturn<Validators>>, ReturnType> ;

/**
 * object destructure implementation
 *
 * @param validators
 * @param validation
 * @param message
 * @param stop
 */
export default function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : Required<ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>, 'message'>
) : Value<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType> ;

export default function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[],
    ReturnType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validators,
        validation,
        message,
        stop,
    } : ValuePartialArgument<BaseType, ValueType, Validators, ReturnType, MessageType>
) : Value<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType> {

    return ValuePartialParameters(validators, validation, message as (result:Unions<ListReturn<Validators>>)=>MessageType, stop);
}
