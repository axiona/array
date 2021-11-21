import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Value from "./value";
/**
 * Base {@link Validator} for validating value with list of {@link Validator}
 *
 * @template BaseType
 * see {@link Validator}
 *
 * @template ValueType
 * see {@link Validator}
 *
 * @template MessageType
 * see {@link Validator}
 *
 * @template ValidatorsType
 * list of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Result}
 */
export default function ValueCallbackParameters<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[], Validatables extends Instance[] = Instance[], ValidatableType extends Validatable = Validatable>(validators: Validators, map: (value: BaseType, validators: Validators) => Validatables, validation: (result: Validatables) => ValidatableType, message: (result: Validatables) => MessageType): Value<BaseType, ValueType, MessageType, Validators, Validatables, ValidatableType>;