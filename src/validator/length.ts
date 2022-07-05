import Validator from '@alirya/validator/validator.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import Validatable from '@alirya/validatable/validatable/validatable.js';
import InstanceInfer from '@alirya/validator/validatable/infer-static.js';

/**
 *  validate array length
 */

export default function Length<
    MessageType,
    ValidatorType extends Validator<number, number, boolean, boolean, Instance<number, MessageType>>
> (
    validator : ValidatorType
) : Validator<
    any[],
    any[],
    boolean,
    boolean,
    Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
> {
    return function (value) {

        const validatable = validator(value.length);

        return {
            get validatable() {
                return <InstanceInfer<ValidatorType>> validatable;
            },
            get value() {
                return value;
            },
            get message() {
                return validatable.message;
            },
            get valid() {
                return validatable.valid;
            }
        };
    } as Validator<
        any[],
        any[],
        boolean,
        boolean,
        Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
        >;
}
