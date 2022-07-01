import NotEmptyArgument from '../boolean/not-empty';
import {List} from 'ts-toolbelt';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import Message from '@alirya/message/message';
import ValueInterface from '@alirya/value/value';

export type NotEmptyType<
    Values extends unknown[],
    MessageType,
> =
    Readonly<Instance<Values, MessageType>> &
    Iterable<List.UnionOf<Values>>;

export class NotEmptyParameters<
    Values extends unknown[],
    MessageType,
> implements
    NotEmptyType<Values, MessageType>
{
    readonly valid : boolean;
    #message : ValidatableParameters<Values, MessageType>;

    constructor(
        readonly value : Values,
        message : ValidatableParameters<Values, MessageType>,
    ) {

        this.#message = message;
        this.valid = NotEmptyArgument(value);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}


export type NotEmptyArgument<
    Values extends unknown[],
    MessageType,
> =
    ValueInterface<Values> &
    Message<ValidatableParameter<Values, MessageType>>
;


export class NotEmptyParameter<Values extends unknown[], MessageType> extends NotEmptyParameters<Values, MessageType> {

    constructor({value, message} : NotEmptyArgument<Values, MessageType>) {
        super(value, (value, valid) => message({value, valid}));
    }
}




namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Type<
        Values extends unknown[],
        MessageType,
    > = NotEmptyType<
        Values,
        MessageType
    >;
    export type Argument<
        Values extends unknown[],
        MessageType,
    > = NotEmptyArgument<
        Values,
        MessageType
    >;
}
export default NotEmpty;