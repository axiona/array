import Validator from '@alirya/validator/validator.js';
import NotEmptyValidatable, {NotEmptyType} from '../validatable/not-empty.js';
import NotEmptyMessage from '../validatable/string/not-empty.js';
import NotEmptyMessageParameter from '../validatable/string/not-empty.js';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable.js';

export function NotEmptyParameters () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;

export function NotEmptyParameters<MessageType> (
    message : ValidatableParameters<ReadonlyArray<any>, MessageType>
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;

export function NotEmptyParameters<MessageType> (
    message : ValidatableParameters<ReadonlyArray<any>, MessageType|string> = NotEmptyMessage.Parameters
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>> {

    return function (value) {

        return new NotEmptyValidatable.Parameters(value, message);

    } as Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;
}


export function NotEmptyParameter () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;

export function NotEmptyParameter<MessageType> (
    message : ValidatableParameter<ReadonlyArray<any>, MessageType>
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;

export function NotEmptyParameter<MessageType> (
    message : ValidatableParameter<ReadonlyArray<any>, MessageType|string> = NotEmptyMessageParameter.Parameter
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType|string>> {

    return NotEmptyParameters(
        (value, valid) => message({value, valid})
    );
}



namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
