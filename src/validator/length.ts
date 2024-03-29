import Validator from '@axiona/validator/validator.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import Validatable from '@axiona/validatable/validatable/validatable.js';
import InstanceInfer from '@axiona/validator/validatable/infer-static.js';

/**
 *  validate array length
 */
// TODO MOVE TO NUMER FOLDER
export default function Length<
    MessageType,
    ValidatorType extends Validator<number, number, boolean, boolean, MessageType>
> (
    validator : ValidatorType
) : Validator<
    any[],
    any[],
    boolean,
    boolean,
    MessageType
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
        MessageType
        >;
}
