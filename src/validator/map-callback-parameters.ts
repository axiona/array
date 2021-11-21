import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableMap from "../validatable/map-callback-parameters";
import ValidatableMapInterface from "../validatable/map";
import BaseList from "./base/list/infer";
import TypeList from "./type/list/infer";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Map from "./map";
import Replace from "@dikac/t-validatable/boolean/replace";

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

export default function MapCallbackParameters<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    map : (value:BaseList<Validators>, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : Map<Validators, Validatables, MessageType, ValidatableType> {

    return function<Type extends TypeList<Validators>, Argument extends BaseList<Validators>> (value : Type|Argument) {

        return new ValidatableMap(value, validators, map, validation, message) as
            Replace<ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>, true> |
            Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMapInterface<Validators, Validatables, MessageType, ValidatableType, Argument>>;

    } as Map<Validators, Validatables, MessageType, ValidatableType>
}

