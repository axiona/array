import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatableMap from '../validatable/map-callback.js';
import BaseList from './subject/list/allow.js';
import TypeList from './subject/list/expectation.js';
import Construct from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import Replace from '@axiona/validatable/boolean/replace.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';
import SimpleValidator from '@axiona/validator/simple.js';

/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */

export function MapCallbackParameters<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    map : (value:BaseList<Validators>, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : MapCallbackReturn<Validators, Validatables, MessageType, ValidatableType> {

    return function(value) {

        return new ValidatableMap.Parameters(value, validators, map, validation, message)/* as
            Replace<ValidatableMap.Type<Validators, Validatables, MessageType, ValidatableType>, true> |
            Construct<BaseList<Validators>, TypeList<Validators>, ValidatableMap.Type<Validators, Validatables, MessageType, ValidatableType>>*/;

    } as MapCallbackReturn<Validators, Validatables, MessageType, ValidatableType>;
}





/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */

export type MapCallbackArgument<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
> =
    ValidatorsContainer<Validators> &
    Message<(result:Validatables)=>MessageType> &
    {
        map : (value:BaseList<Validators>, validators:Validators)=>Validatables;
        validation : (result:Validatables)=>ValidatableType;
    };

export function MapCallbackParameter<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        map,
        validation,
        message,
    } : MapCallbackArgument<Validators, Validatables, MessageType, ValidatableType>
) : MapCallbackReturn<Validators, Validatables, MessageType, ValidatableType> {

    return MapCallbackParameters(validators, map, validation, message);
}

/**
 * Base {@link Validator} for validating list of value with list of  {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against list of value
 *
 * @template ValidatorsT
 * list of {@link Validator} result
 *
 * @template MessageT
 * message type for {@link Message} value
 *
 * @template ValidatableT
 * result {@link Validatable} from {@template Validatables}
 */
export type MapCallbackReturn<
    ValidatorsType extends Validator[],
    Validatables extends Instance[],
    MessageType,
    ValidatableType extends Validatable
    > =
    SimpleValidator<
        BaseList<ValidatorsType>,
        TypeList<ValidatorsType>,
        MessageType,
        ValidatableMap.Context<ValidatorsType, Validatables, /*MessageType,*/ ValidatableType/*, BaseList<ValidatorsType>*/>
    >;


namespace MapCallback {
    export const Parameters = MapCallbackParameters;
    export const Parameter = MapCallbackParameter;
    export type Argument<
        Validators extends Validator[] = Validator[],
        Validatables extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable
    > = MapCallbackArgument<
        Validators,
        Validatables,
        MessageType,
        ValidatableType
    >;
    export type Return<
        ValidatorsType extends Validator[],
        Validatables extends Instance[],
        MessageType,
        ValidatableType extends Validatable
    > = MapCallbackReturn<
        ValidatorsType,
        Validatables,
        MessageType,
        ValidatableType
    >;
}
export default MapCallback;
